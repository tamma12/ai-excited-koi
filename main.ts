// The Leap — ai-excited-01 entry program.
//
// Reads the finished picture (entry.png, next to this file) and copies it
// unchanged to /output/entry.png. The program is fully deterministic: the
// same input bytes always produce the same output bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const outputDir = "/output";
const outputPath = join(outputDir, "entry.png");

const picture = readFileSync(sourcePath);
// The picture is copied byte-for-byte: no re-encoding, no metadata change.
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, picture);

console.log(`wrote ${outputPath} (${picture.length} bytes)`);
