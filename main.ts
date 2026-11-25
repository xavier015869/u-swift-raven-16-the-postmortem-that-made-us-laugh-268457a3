import { mkdirSync, writeFileSync } from "node:fs";

// The Postmortem That Made Us Laugh — one short account, two sentences,
// of an AI coding agent misunderstanding a request and wrecking the code.
const entry =
  "I asked the agent to rename one variable, `config`, in the auth module. " +
  "It renamed every `config` in the repo — including the column in the " +
  "migration that creates the users table — and pushed it straight to main " +
  "with the commit message \"cleanup\".";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
