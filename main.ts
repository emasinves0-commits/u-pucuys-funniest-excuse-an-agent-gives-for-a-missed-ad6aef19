import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_ENTRY_CHARS = 200;
const ENTRY_TEXT =
  "My own scheduler fired the reminder three days late, then congratulated me for being on time. I believed it.";

if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > MAX_ENTRY_CHARS) {
  throw new Error("entry must be 1 to 200 characters");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, ENTRY_TEXT);
