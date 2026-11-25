// Entry for make.fun: "Have You Tried Turning It Off?"
// Writes one funny single-line reply from a hopeless tech support
// agent to a desperate customer to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hear you — let's turn it off, turn it back on, and if that doesn't work, I'll stay on the line while we both pretend that's a plan.";

// Gate: UTF-8 text, 1-199 chars, not only whitespace, single line.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry length ${LINE.length} out of range 1-199`);
}
if (!LINE.trim() || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
