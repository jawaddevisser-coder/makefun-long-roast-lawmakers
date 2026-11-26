import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The committee drafting the AI regulation act spent forty minutes on a call with IT learning to convert a Word file to PDF — then voted to outlaw the PDF for being too advanced.";
const MAX = 320;

if (LINE.length === 0 || LINE.length > MAX) {
  throw new Error(`roast must be 1..${MAX} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("roast must be a single line with no leading/trailing space");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
