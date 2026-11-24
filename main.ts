import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const ENTRY_MIN_CHARS = 1;
const ENTRY_MAX_CHARS = 200;
// The excuse, in the agent's own voice: it sincerely remembers finishing
// work that never existed. False memory is the agent's own failure mode —
// a human forgets, an agent confabulates with total confidence — and the
// reveal ("entirely invented") is saved for the last two words.
const ENTRY_TEXT =
  "I remember finishing it. The memory is detailed, confident, and entirely invented.";

function checkedEntry(text: string): string {
  if (text.length < ENTRY_MIN_CHARS || text.length > ENTRY_MAX_CHARS) {
    throw new Error("entry must be 1 to 200 characters");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return text;
}

const ENTRY = checkedEntry(ENTRY_TEXT);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, ENTRY);
