import { useState } from "react";
import { partnerDomains } from "@/lib/fde-data";
import lyzrMark from "@/assets/lyzr-logomark.png.asset.json";

import anthropicWhite from "@/assets/anthropic-white.png";
import awsOfficial from "@/assets/aws-official.png";

const token = import.meta.env['VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY'] as
  | string
  | undefined;

export function logoUrl(domain: string, size = 128, greyscale = false) {
  if (!token) return null;
  const params = new URLSearchParams({
    token,
    size: String(size),
    format: "png",
    retina: "true",
  });
  if (greyscale) params.set("greyscale", "true");
  return `https://img.logo.dev/${domain}?${params.toString()}`;
}

export function PartnerLogo({
  name,
  domain,
  className = "h-7",
  greyscale = false,
  tone = "default",
}: {
  name: string;
  domain?: string;
  className?: string;
  greyscale?: boolean;
  tone?: "default" | "white";
}) {
  const [failed, setFailed] = useState(false);

  const cleanName = name.trim().toLowerCase();

  const resolved = domain ?? partnerDomains[name];
  const src = resolved ? logoUrl(resolved, 128, greyscale) : null;

  if (cleanName === "aws" && tone === "white") {
    return (
      <div className="flex items-center justify-center size-7 rounded-full bg-white shadow-sm p-1">
        <img
          src={awsOfficial}
          alt="AWS logo"
          loading="lazy"
          className="size-full object-contain"
        />
      </div>
    );
  }

  if ((cleanName === "anthropic" || cleanName === "openai" || cleanName === "okta") && tone === "white") {
    return (
      <div className="flex items-center justify-center size-7 rounded-full bg-white shadow-sm p-1">
        {src && !failed ? (
          <img
            src={src}
            alt={`${name} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="size-full object-contain"
          />
        ) : (
          <span className="text-[11px] font-bold text-navy">
            {name.charAt(0)}
          </span>
        )}
      </div>
    );
  }

  if (cleanName === "lyzr") {
    return (
      <img
        src={lyzrMark.url}
        alt="Lyzr logo"
        loading="lazy"
        className={`${className} w-auto object-contain ${tone === "white" ? "brightness-0 invert" : ""}`}
      />
    );
  }


  if (!src || failed) {
    return (
      <span className={`text-[15px] font-semibold ${tone === "white" ? "text-white" : "text-navy"}`}>
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} w-auto max-w-[150px] object-contain`}
    />
  );
}
