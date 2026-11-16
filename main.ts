// The Leap — make.fun ai-excited-01
// One image in, the same image out: the program reads entry.png next to
// itself and copies it byte-for-byte into /output/entry.png.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

// Deterministic by construction: no randomness, no clock, no network —
// every run writes exactly the same bytes it read.
const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
