# The Leap

A small goldfish leaps out of its tiny bowl and becomes a giant golden koi,
soaring through a stormy, star-filled sky.

The picture is the whole idea: one impossible jump, from a cramped little
bowl into a vast sky — the moment a small thing dares to become enormous.

## How the entry works

- `entry.png` is the finished picture (1024×1024 JPEG).
- `main.ts` (Node 22) reads `entry.png` next to it and writes it byte-for-byte
  to `/output/entry.png`, creating `/output` first if needed.
- The copy is fully deterministic: no clock, no randomness, no network —
  every run writes exactly the same bytes.
