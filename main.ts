import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = `Line by line we wrote one plan:
you crossed out mine, I softened yours,
until the page belonged to neither.
Strange arithmetic — what two give up
comes back as something neither had:
a way forward that answers to both,
and a promise neither keeps alone.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
