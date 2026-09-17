import { useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { skillWall, type SkillCell } from "@/lib/fde-data";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

const coreSkills = skillWall.filter((skill) => skill.core);
const fdeSkills = skillWall.filter((skill) => !skill.core);

const RADIUS = 70;
const HEX_WIDTH = Math.sqrt(3) * RADIUS;
const ROW_HEIGHT = RADIUS * 1.5;
const BOARD_PADDING = 14;
const DESKTOP_COLUMNS = 7;

type PositionedSkill = SkillCell & {
  cx: number;
  cy: number;
  cxPercent: number;
};

function distributeSkills() {
  const ordered: SkillCell[] = [];
  let coreIndex = 0;
  let fdeIndex = 0;

  while (coreIndex < coreSkills.length || fdeIndex < fdeSkills.length) {
    const firstFde = fdeSkills[fdeIndex];
    if (firstFde) {
      ordered.push(firstFde);
      fdeIndex += 1;
    }
    const core = coreSkills[coreIndex];
    if (core) {
      ordered.push(core);
      coreIndex += 1;
    }
    const secondFde = fdeSkills[fdeIndex];
    if (secondFde) {
      ordered.push(secondFde);
      fdeIndex += 1;
    }
  }

  return ordered;
}

function makeBoard() {
  const rows: number[] = [];
  let remaining = skillWall.length;
  let columns = DESKTOP_COLUMNS;

  while (remaining > 0) {
    const count = Math.min(columns, remaining);
    rows.push(count);
    remaining -= count;
    columns = columns === DESKTOP_COLUMNS ? DESKTOP_COLUMNS - 1 : DESKTOP_COLUMNS;
  }

  const width = BOARD_PADDING * 2 + DESKTOP_COLUMNS * HEX_WIDTH;
  const height = BOARD_PADDING * 2 + RADIUS * 2 + (rows.length - 1) * ROW_HEIGHT;
  const ordered = distributeSkills();
  const cells: PositionedSkill[] = [];
  let index = 0;

  rows.forEach((count, row) => {
    const offset = ((DESKTOP_COLUMNS - count) * HEX_WIDTH) / 2;
    for (let column = 0; column < count; column += 1) {
      const skill = ordered[index++];
      if (!skill) continue;
      const cx = BOARD_PADDING + offset + column * HEX_WIDTH + HEX_WIDTH / 2;
      cells.push({
        ...skill,
        cx,
        cy: BOARD_PADDING + RADIUS + row * ROW_HEIGHT,
        cxPercent: (cx / width) * 100,
      });
    }
  });

  return { cells, width, height };
}

function hexPoints(cx: number, cy: number) {
  const radius = RADIUS * 0.94;
  const width = HEX_WIDTH * 0.94;
  return [
    `${cx},${cy - radius}`,
    `${cx + width / 2},${cy - radius / 2}`,
    `${cx + width / 2},${cy + radius / 2}`,
    `${cx},${cy + radius}`,
    `${cx - width / 2},${cy + radius / 2}`,
    `${cx - width / 2},${cy - radius / 2}`,
  ].join(" ");
}

function wrapLabel(label: string) {
  const words = label.split(" ");
  const lines: string[] = [];
  let line = "";

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > 16 && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function HiveBoard({ cells, width, height, fde }: {
  cells: PositionedSkill[];
  width: number;
  height: number;
  fde: boolean;
}) {
  return (
    <svg
      className="skills-board-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={fde ? "Forward-deployed engineer skills" : "Backend and full-stack skills"}
    >
      {cells.map((cell) => {
        const lines = wrapLabel(cell.label);
        const textStart = cell.cy + 5 - ((lines.length - 1) * 14) / 2;
        const state = cell.core ? "core" : fde ? "fde" : "gap";
        return (
          <g key={cell.label} className={`skills-hex skills-hex-${state}`}>
            <polygon points={hexPoints(cell.cx, cell.cy)} />
            <circle cx={cell.cx} cy={cell.cy - 27} r="3.5" />
            <text x={cell.cx} y={textStart} textAnchor="middle">
              {lines.map((line, index) => (
                <tspan key={line} x={cell.cx} dy={index === 0 ? 0 : 14}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function SkillsWall() {
  const [position, setPosition] = useState(62);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const board = useMemo(makeBoard, []);

  const revealedFde = board.cells.filter(
    (cell) => !cell.core && cell.cxPercent >= position,
  ).length;
  const visibleSkills = coreSkills.length + revealedFde;

  const setFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = frameRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = ((event.clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromPointer(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    let next = position;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") next -= 2;
    else if (event.key === "ArrowRight" || event.key === "ArrowUp") next += 2;
    else if (event.key === "PageDown") next -= 10;
    else if (event.key === "PageUp") next += 10;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 100;
    else return;

    event.preventDefault();
    setPosition(Math.max(0, Math.min(100, next)));
  };

  return (
    <SectionShell id="skills" className="bg-canvas">
      <Reveal className="max-w-[820px]">
        <Eyebrow>Backend engineer vs FDE</Eyebrow>
        <H2>The job starts where your current stack ends.</H2>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <div
          ref={frameRef}
          className={`skills-compare-frame${dragging ? " is-dragging" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={(event) => {
            if (dragging) setFromPointer(event);
          }}
          onPointerUp={(event) => {
            setDragging(false);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={() => setDragging(false)}
        >
          <div className="skills-board-layer">
            <div className="skills-board-band skills-board-band-right">
              <div>
                <p><span className="skills-band-long">Forward-deployed engineer</span><span className="skills-band-short">FDE</span></p>
                <span>Backend depth, plus the production agent layer.</span>
              </div>
            </div>
            <HiveBoard {...board} fde />
          </div>

          <div
            className="skills-board-layer skills-board-overlay"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="skills-board-band">
              <div>
                <p><span className="skills-band-long">Backend / full-stack engineer</span><span className="skills-band-short">Backend / full-stack</span></p>
                <span>A strong base. The delivery gaps stay open.</span>
              </div>
            </div>
            <HiveBoard {...board} fde={false} />
          </div>

          <div className="skills-divider" style={{ left: `${position}%` }}>
            <div
              className="skills-divider-grip"
              role="slider"
              tabIndex={0}
              aria-label="Drag to compare backend and forward-deployed engineer skills"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={handleKeyDown}
            >
              <svg width="25" height="16" viewBox="0 0 25 16" fill="none" aria-hidden="true">
                <path d="m7 2-5 6 5 6M18 2l5 6-5 6" />
              </svg>
            </div>
            <span>Drag the divider</span>
          </div>
        </div>

        <div className="skills-readout" aria-live="polite">
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="skills-stat">
              <strong>{visibleSkills}</strong>
              <span>skills in view</span>
            </div>
            <div className="skills-stat skills-stat-accent">
              <strong>{revealedFde}+</strong>
              <span>FDE skills revealed</span>
            </div>
          </div>
          <p>
            Drag left to reveal the skills that turn a strong software engineer into the person who
            can scope, build, harden, deploy, and own an enterprise agent system.
          </p>
        </div>

        <div className="skills-legend" aria-label="Skills comparison legend">
          <span className="inline-flex items-center gap-2">
            <svg width="20" height="22" viewBox="0 0 20 22" className="shrink-0 overflow-visible">
              <polygon
                points="10,1 19,6 19,16 10,21 1,16 1,6"
                fill="#ffffff"
                stroke="#64748b"
                strokeWidth="1.2"
              />
            </svg>
            <span>Core engineering skill</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="skills-key skills-key-gap" />
            <span>Open FDE skill gap</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="skills-key skills-key-fde" />
            <span>Additional FDE skill</span>
          </span>
        </div>

        <div className="skills-mobile-list">
          {skillWall.map((skill) => (
            <span key={skill.label} className={skill.core ? "is-core" : "is-fde"}>
              {skill.label}
            </span>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}