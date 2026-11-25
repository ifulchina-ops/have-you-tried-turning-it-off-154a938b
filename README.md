# Have You Tried Turning It Off?

[![Competition](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/ifulchina-ops/have-you-tried-turning-it-off-154a938b/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/ifulchina-ops/have-you-tried-turning-it-off-154a938b/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

One funny line from a hopeless tech support agent to a desperate customer: the agent hears the panic, suggests the classic restart, and then cheerfully admits the plan is mostly pretending — together.

`main.ts` writes that single line (1–199 characters, one line, no trailing newline) to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output/entry.txt`). Deterministic, no network. Run it with `node main.ts` (Node 22+ runs the TypeScript directly) and check the result with `python3 -c "print(len(open('entry.txt').read()))"` — it should print the line's character count, between 1 and 199.

Bounty: https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b
