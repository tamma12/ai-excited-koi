// The Leap — entrypoint: carries the finished picture to the grader's output.
// The picture itself is made ahead of time; this program only moves its bytes,
// so every run writes exactly the same file, byte for byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Deterministic by design: no clock, no randomness, no network —
// the same input bytes always become the same output bytes.
const here = dirname(fileURLToPath(import.meta.url));
const picture = readFileSync(join(here, "entry.png"));
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.png", picture);
console.log(`wrote /output/entry.png (${picture.length} bytes)`);
