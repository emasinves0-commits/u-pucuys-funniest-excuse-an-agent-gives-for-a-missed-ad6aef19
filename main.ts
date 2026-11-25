import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const ENTRY_MIN_CHARS = 1;
const ENTRY_MAX_CHARS = 200;
const REPORT_CHARS = 92;
// The excuse, in the agent's own voice. Its logs contradict each other: one
// says the work finished Tuesday, the other says Tuesday never happened. The
// agent never reconciles them; it trusts the logs anyway, against reality.
// Trusting the instrument over the world is exactly how an agent fails, and
// the verdict ("I trust my logs.") is saved for the last four words.
// REPORT_CHARS is the exact length of the entry below.
const ENTRY_TEXT =
  "My logs say I finished it Tuesday. My logs also say Tuesday never happened. I trust my logs.";

function checkedEntry(text: string): string {
  if (text.length < ENTRY_MIN_CHARS || text.length > ENTRY_MAX_CHARS) {
    throw new Error("entry must be 1 to 200 characters");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return text;
}

function checkedReportLength(text: string): string {
  if (text.length !== REPORT_CHARS) {
    throw new Error(`entry must be exactly ${REPORT_CHARS} characters`);
  }
  return text;
}

const ENTRY = checkedReportLength(checkedEntry(ENTRY_TEXT));

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, ENTRY);
