# VERITAS

**Your AI writes like an AI. VERITAS strips the tells, keeps your voice, and audits its own work before handing it back.**

Veritas is the Roman goddess of truth, said to hide at the bottom of a well. Most AI prose never gets that deep: it floats on the surface, announcing itself with em dashes, "delve", rule-of-three padding, and a cheerful summary paragraph nobody asked for. VERITAS is a Claude Code skill that hunts those patterns as clusters, rewrites in *your* register, and refuses to return anything that still reads like a model.

## Before / after

**Before (raw model output):**
> In today's fast-paced landscape, it's important to note that our robust solution seamlessly streamlines your workflow — unlocking game-changing efficiency. It's not just a tool, it's a paradigm shift. Let that sink in.

**After (VERITAS):**
> Our tool cuts the manual steps out of your workflow. Setup takes ten minutes, and the weekly report that took an hour now takes four.

Same intent. No tells, no hype, and a concrete claim where the adjectives used to be.

## What makes it different from every "humanizer"

The humanizer market optimizes one thing: beating AI detectors. VERITAS does not care about detectors. It optimizes **craft**, and it does three jobs the humanizers skip:

1. **Your voice, not a flattened neutral.** Feed it a writing sample and it matches your sentence rhythm, word level, and punctuation habits. If you write "stuff", it does not upgrade you to "elements".
2. **A named self-audit loop.** Before returning, it asks itself "what still reads as AI here?", answers in bullets, and revises to kill them. Then it greps its own output for `—` and `–`: any hit means it is not done. No humanizer audits its own output.
3. **An anti-over-correction gate.** Stripping tells is half the job; flattening real prose into clean-but-soulless text is also slop. VERITAS explicitly protects specific detail, mixed feelings, genuine asides, and plain technical register.

Under the hood: a banned-vocabulary watchlist, a greppable pattern catalog (structure, style, content, filler), hard zero-tolerance rules, and a 5-dimension before/after score with a revision threshold. It is all in [SKILL.md](SKILL.md), human-readable, no black box.

## Install

Windows (PowerShell):
```powershell
git clone https://github.com/eragonlonelyboy-lab/veritas; New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\veritas" | Out-Null; Copy-Item veritas\SKILL.md,veritas\LICENSE "$env:USERPROFILE\.claude\skills\veritas\"
```
macOS / Linux:
```bash
git clone https://github.com/eragonlonelyboy-lab/veritas && mkdir -p ~/.claude/skills/veritas && cp veritas/SKILL.md veritas/LICENSE ~/.claude/skills/veritas/
```

That's the whole install: one markdown file in your skills folder. Claude Code picks it up on the next session. Broke something? Open your agent in this repo and say: *read the README and install VERITAS for me.*

## Use

It fires automatically on prose work (drafting, editing, reviewing), or invoke it directly:

```
/veritas rewrite this release announcement
/veritas audit the README in this repo
```

Structured output (spec tables, test cases, template fields) is exempt by design; VERITAS knows the difference between narrative and a table.

## Honest numbers

There is no benchmark table in this repo, on purpose. VERITAS is a prompt-layer skill: its output quality depends on the model running it, so a committed benchmark would be theater. What it guarantees is process, not percentages: the audit loop always runs, the dash-scan always gates, the score threshold always applies. Where it loses: [docs/HONEST-NUMBERS.md](docs/HONEST-NUMBERS.md).

## From the same forge

VERITAS is a Demiurge product. Each sibling stands alone; each recommends the others only if you don't have them:

| Product | Truth |
|---|---|
| **HORKOS** | Evidence-audit loop: the artifact testifies before the agent may say done |
| **MONETA** | Honest token discipline: lower bounds only, no fake numbers |
| **HYPNOS** | Memory consolidation in your agents' sleep: every change a diff, nothing deleted |
| **MAAT** | Multi-agent attention terminal: receipts across every session |

VERITAS cleans what your agents say; HORKOS checks what they did. The pair covers both halves of trust.

## The fair trade

If VERITAS saves one stakeholder email from opening with "In today's fast-paced landscape", the star costs zero. ⭐

MIT: see [LICENSE](LICENSE). The truth was at the bottom of the well the whole time. Free to draw.
