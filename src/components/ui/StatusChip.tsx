import React from "react";

export type StatusColor = "green" | "blue" | "gray" | "white";

interface StatusChipProps {
  label: string;
  color?: StatusColor;
  className?: string;
  ping?: boolean;
}

export function StatusChip({
  label,
  color = "blue",
  className = "",
  ping = false,
}: StatusChipProps) {
  const dotColorClass = {
    green: "bg-[#62C073]",
    blue: "bg-[#52A8FF]",
    gray: "bg-[#999999]",
    white: "bg-[#EDEDED]",
  }[color];

  return (
    <span
      className={`inline-flex items-center bg-[#1F1F1F] rounded-[100px] px-2.5 py-1 gap-1.5 font-mono text-[12px] uppercase text-[#999999] tracking-wider select-none border border-white/5 transition-all duration-200 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5 items-center justify-center">
        {ping && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${dotColorClass}`}
          />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColorClass}`} />
      </span>
      <span>{label}</span>
    </span>
  );
}
