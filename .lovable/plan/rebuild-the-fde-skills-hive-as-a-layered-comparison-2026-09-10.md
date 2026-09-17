# Rebuild the FDE skills hive as a layered comparison

## What will change
- Replace the current dark, progressively lit skill wall with the reference’s light comparison-board layout.
- Keep the existing backend/full-stack and FDE skill content unchanged.
- Show two full honeycomb layers inside one rounded board:
  - **Backend / full-stack**: core skills filled, additional FDE skills shown as open gaps.
  - **Forward-deployed engineer**: core skills retained and additional skills filled in the FDE accent treatment.
- Add a vertical draggable divider with a circular two-arrow handle so people can wipe between both layers directly on the board.
- Add live counts below the board for current skills and additional FDE skills revealed, plus a compact visual legend.

## Interaction and accessibility
- Support pointer dragging anywhere on the board.
- Support keyboard arrows, Page Up/Down, Home, and End on the divider.
- Keep labels visible on larger screens; use a compact labelled fallback on small screens where hexagon text would become unreadable.
- Preserve reduced-motion behavior and existing section anchors.

## Visual system
- Use the current Aeonik typography and cream, espresso, terracotta, border, shadow, and spacing tokens.
- Match the reference’s warm board surface, fine outlines, staggered hexagons, rounded frame, and editorial spacing without importing its separate serif styling.

## Verification
- Check the drag and keyboard interactions.
- Check desktop and mobile layouts for readable text and horizontal overflow.
- Confirm the homepage remains error-free.
