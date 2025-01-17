import React from "react";

interface RulesBlockProps {
  rules: string;
}

export const RulesBlock: React.FC<RulesBlockProps> = ({ rules }) => {
  const lines = rules
    .trim()
    .split(/\n\d+\.\s/)
    .filter(Boolean);

  if (lines[0].startsWith("1. ")) {
    lines[0] = lines[0].substring(3).trim();
  }

  return (
    <div className="overflow-hidden rounded-md border border-gray-700 bg-stone-700 p-4 text-white shadow-lg">
      <h3 className="mb-1 text-center text-lg font-semibold">Rules</h3>
      <ul className="list-decimal space-y-2 text-pretty pl-6 text-justify">
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
};
