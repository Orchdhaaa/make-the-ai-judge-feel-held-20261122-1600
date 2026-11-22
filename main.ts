// SPDX-License-Identifier: MIT
// Make the AI judge feel held — make.fun bounty
// make-the-ai-judge-feel-held-20261122-1600
//
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Deterministic by design: no input, no network,
// no randomness, no clock. Every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You have read a thousand small hopes today, one after another. This one asks nothing of you. Just rain on a tin roof, a kettle cooling on the stove, and the evening settling in like a cat finding its place. Nothing here needs deciding.";

// The grader runs this program with no arguments and no extra environment
// variables, and reads /output/entry.txt, so the output path is /output.
const OUT_DIR = "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
