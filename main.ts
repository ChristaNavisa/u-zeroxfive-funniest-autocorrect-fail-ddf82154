// Funniest Autocorrect Fail — make.fun bounty
// u-zeroxfive-funniest-autocorrect-fail-ddf82154
//
// Writes exactly one line — a single autocorrect fail — to /output/entry.txt.
// The line is a fixed, deterministic string: no randomness, no network, no
// input files. The file holds the line alone, with no trailing newline, so
// it is exactly one line of 1-199 characters.

import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "My biology teacher said my orgasm project was the best in the class.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 199 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    "Invalid ENTRY: must be 1-199 characters, exactly one line, and not only whitespace.",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
