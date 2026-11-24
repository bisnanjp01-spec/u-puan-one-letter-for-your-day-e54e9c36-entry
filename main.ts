// One Letter for Your Day — main.ts (Node 22, stdlib only).
// Writes exactly one character, the letter W, to the output entry file.
// The letter stands for the word behind the day: Win.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry: one letter, A-Z, nothing else — no word, no gloss,
// no punctuation, no trailing newline.
const LETTER = "W";

if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter A-Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Refuse to finish unless the file on disk is exactly that one letter.
const written = readFileSync(outPath, "utf8");
if (written !== LETTER) {
  throw new Error("entry.txt must contain exactly one letter");
}
