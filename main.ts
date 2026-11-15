// The Leap — a single-image entry.
// Reads the picture that lives next to this file and writes it out,
// byte for byte, to /output/entry.png. Nothing is drawn here and
// nothing is random: the same input always produces the same output.
// Deterministic by construction: a plain file copy, no clock, no seed.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = "/output";
const target = join(targetDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);
console.log("wrote", target);
