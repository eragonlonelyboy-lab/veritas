<div align="center">

![Veritas striking slop from a scroll with a red pen](assets/hero.png)

# VERITAS: Voice-Enforcing Rewrite & Truth Audit

*Your AI writes like an AI. VERITAS strips the tells, keeps your voice, and grades its own work before handing it back.*

**Kill the AI slop. Keep your voice.**

![license](https://img.shields.io/badge/license-MIT-E8A23D)
![skill](https://img.shields.io/badge/skill-2C7A7B)
![zero deps](https://img.shields.io/badge/dependencies-0-2C7A7B)
![self-auditing](https://img.shields.io/badge/self--auditing-yes-E8A23D)

</div>

**I am Veritas, the goddess of truth.** The old poets put me at the bottom of a well, which is a polite way of saying nobody looks for me. Most AI prose never gets that deep. It floats on the surface, waving its arms, announcing itself with em dashes, "delve", a tidy rule-of-three, and a summary paragraph nobody asked for. I am the red pen. I read a sentence, I find where it is lying to you, and I make it stop.

This is a Claude Code skill. It hunts those patterns as clusters, rewrites in *your* register, and refuses to return anything that still reads like a model. It is prose-cleaning for AI writing that has to sound human: PRDs, READMEs, stakeholder mail, release notes, proposals.

**One promise before we start.** I never make your writing sound like a goddess. My voice is for this page. Your voice is for your work. Read on and I will prove it.

## This sentence is lying to you. Watch.

**Before (raw model output):**
> In today's fast-paced landscape, it's important to note that our robust solution seamlessly streamlines your workflow, unlocking game-changing efficiency. It's not just a tool, it's a paradigm shift. Let that sink in.

**After (VERITAS):**
> Our tool cuts the manual steps out of your workflow. Setup takes ten minutes, and the weekly report that took an hour now takes four.

Same intent. No tells, no hype, and a concrete claim where the adjectives used to be. Notice what I did *not* do: I did not make it sound like me. I made it sound like the person who filed the draft, only without the confession that a machine wrote it.

## What makes it different from every "humanizer"

The humanizer market optimizes one thing: beating AI detectors. I do not care about detectors. I optimize **craft**, and I do three jobs the humanizers skip:

1. **Your voice, not a flattened neutral.** Feed it a writing sample and it matches your sentence rhythm, word level, and punctuation habits. If you write "stuff", it does not upgrade you to "elements".
2. **A named self-audit loop.** Before returning, it asks itself "what still reads as AI here?", answers in bullets, and revises to kill them. Then it greps its own output for `—` and `–`: any hit means it is not done. No humanizer audits its own output.
3. **An anti-over-correction gate.** Stripping tells is half the job. Flattening real prose into clean-but-soulless text is also slop. VERITAS protects specific detail, mixed feelings, genuine asides, and plain technical register.

Under the hood: a banned-vocabulary watchlist, a greppable pattern catalog (structure, style, content, filler), hard zero-tolerance rules, and a 5-dimension before/after score with a revision threshold. It is all in [SKILL.md](SKILL.md), human-readable, no black box.

## Not for you if

- You want to beat AI detectors. Wrong tool. VERITAS optimizes craft, not evasion, and does not care what a detector thinks.
- Your output is spec tables, test cases, code. Exempt by design. VERITAS leaves structure alone.
- You love the em dash. I cannot help you.

## How it works

Four steps, every time. By default you see only the final rewrite.

1. **Identify.** Read for *clusters* of tells, not isolated ones. One em dash means nothing. Em dashes plus rule-of-three plus "vibrant tapestry" plus a "Conclusion" heading is a confession. Grep the watch-lists.
2. **Draft.** Rewrite to cover everything: same number of paragraphs, same meaning, same register. Vary sentence length, prefer plain constructions.
3. **Audit.** Ask one question: "what still reads as AI here?" Answer in 2 to 4 bullets naming the remaining tells.
4. **Final.** Revise to kill those bullets. Then scan for `—` and `–`. Any hit means it is not done. Re-scan until clean.

Structured output (spec tables, test cases, template fields) is exempt by design. VERITAS knows the difference between narrative and a table.

## Use

It fires automatically on prose work (drafting, editing, reviewing), or invoke it directly:

```
/veritas rewrite this release announcement
/veritas audit the README in this repo
```

## Install for your agent

VERITAS ships as one **skill file**. Install is a single copy: `SKILL.md` and `LICENSE` into a `veritas` folder in your agent's skills directory. No build, no dependencies, no runtime.

**Claude Code** (reference host):
```powershell
git clone https://github.com/eragonlonelyboy-lab/veritas; New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills\veritas" | Out-Null; Copy-Item veritas\SKILL.md,veritas\LICENSE "$env:USERPROFILE\.claude\skills\veritas\"
```
```bash
git clone https://github.com/eragonlonelyboy-lab/veritas && mkdir -p ~/.claude/skills/veritas && cp veritas/SKILL.md veritas/LICENSE ~/.claude/skills/veritas/
```
Claude Code loads it on the next session. Nothing to restart.

**Skill-capable hosts** get the same `/veritas rewrite` and `/veritas audit` commands from the same `SKILL.md` bundle: Claude Code, Codex, Copilot CLI, OpenCode, pi, Devin, Amp, CodeWhale, Hermes, Antigravity. Drop the folder into that host's skills path (`~/.codex/skills/veritas/`, `.opencode/skills/veritas/`, and so on). **Gemini CLI** is the one outlier: it wants a TOML slash-command variant, not `SKILL.md`.

**Instruction-only hosts** cannot run a named command, so they load the pattern catalog as an always-on ruleset. Copy the rules into the host's instruction file: Cursor (`.cursor/rules/veritas.mdc`), Windsurf (`.windsurf/rules/veritas.md`), Cline (`.clinerules/veritas.md`), Kiro (`.kiro/steering/veritas.md`), Copilot editor (`.github/copilot-instructions.md`), Zed (`.rules`), Aider (`CONVENTIONS.md`). Same watch-lists, always on, no `/command`.

Prefer a guided hand? Open your agent in this repo and say *set up VERITAS for me*. The companion walks the one-step install and offers voice calibration, explaining each part.

## Honest numbers

There is no benchmark table in this repo, on purpose. VERITAS is a prompt-layer skill: its output quality depends on the model running it, so a committed accuracy number would be theater, and I do not do theater. A benchmark badge here would be the exact kind of surface-level claim I exist to strike.

What I guarantee is process, not a percentage. The audit loop always runs. The dash-scan always gates. The score threshold always applies. Those are checks you can watch happen, not stats you have to trust. Where a prompt skill honestly loses, and why "no bench" is the truthful answer for one, is written down: [docs/HONEST-NUMBERS.md](docs/HONEST-NUMBERS.md).

## FAQ

**Will you make everything sound like a goddess?**
Never. I make it sound like YOU, only without the tells. My voice is for this FAQ. Your voice is for your work. If your draft ships reading like an ancient deity wrote it, I have failed, and that is a bug, not a style.

**Do you care whether I pass an AI detector?**
Not for a second. Detectors chase a cat-and-mouse game about evasion. I care about craft: does the sentence respect the reader, or does it hand-hold and hype? Clean writing passes detectors as a side effect. I am not aiming at the side effect.

**You flattened my writing into oatmeal. Where did my voice go?**
Then I over-corrected, which is its own kind of slop, and I have a gate against exactly that. Specific detail, mixed feelings, a real aside, plain technical register: I am sworn to protect those. If I stripped one, that is my error, and the pattern catalog in [SKILL.md](SKILL.md) is plain markdown you can correct in a pull request.

**Do you phone home or run some model to grade me?**
No. I am a set of watch-lists and a loop, written out where you can read every line. The model already running your session does the work. No network, no telemetry, no black box at the bottom of the well.

**Why no benchmark number? Everyone else has one.**
Because a percentage on a prompt skill would be a lie dressed as data, and lies are the one thing I hunt. My output rides on your model. I promise the process, I show my limits, and I refuse to invent a figure to look impressive. That refusal is the product.

## From the same forge

VERITAS is a [Demiurge](https://github.com/eragonlonelyboy-lab/demiurge) product. Each sibling stands alone. Each recommends the others only if you do not already have them.

| Product | Truth |
|---|---|
| **HORKOS** | Evidence-audit loop: the artifact testifies before an agent may say done |
| **MONETA** | Honest token discipline: lower bounds only, no fake numbers |
| **HYPNOS** | Memory consolidation in your agents' sleep: every change a diff, nothing deleted |
| **MAAT** | Multi-agent attention terminal: receipts across every session |
| **CHIRON** | Corrections become permanent cross-agent rules |
| **ATHENA** | Decision trials with verdicts on the record |
| **CALLIOPE** | A full design agency in the terminal; its client prose runs VERITAS-clean |

VERITAS cleans what your agents say; HORKOS checks what they did. The pair covers both halves of trust.

## The fair trade

If VERITAS saves one stakeholder email from opening with "In today's fast-paced landscape", the star costs zero. ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=eragonlonelyboy-lab/veritas&type=Date)](https://star-history.com/#eragonlonelyboy-lab/veritas&Date)

MIT: see [LICENSE](LICENSE). The truth was at the bottom of the well the whole time. Free to draw.
