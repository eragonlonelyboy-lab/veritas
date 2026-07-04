# HONEST NUMBERS: where VERITAS loses

An anti-slop tool that overclaims is slop. The full list of limits, decided before launch.

## No benchmark, and why that is the honest choice

VERITAS is a prompt-layer skill, not a program. Its output runs through whatever model you use, so any committed "before/after score" table would measure the model on the day we ran it, not the skill you install. Tools in this space publish percentages precisely because nobody can falsify them. We decline. What VERITAS guarantees is process: the identify-draft-audit-final loop always runs, the em/en-dash scan always gates the output, and the 5-dimension score with its revision threshold always applies. Process guarantees are checkable by reading [SKILL.md](../SKILL.md); percentage claims would not be.

## When VERITAS is the wrong tool

- **Beating AI detectors.** Not the goal, not a feature, never will be. VERITAS optimizes craft and voice preservation. If your use case is passing a detector, the humanizer market is over there, and good luck to you both.
- **Structured output.** Test cases, spec tables, field definitions, numbered rule lists: exempt by design. Running narrative rules over a table breaks the table.
- **Text that is already human.** VERITAS has an explicit anti-over-correction gate, but the safest fast path for a paragraph you wrote yourself is to not run it at all. One em dash in genuinely human prose is a style choice; the gate exists for clusters.
- **Languages beyond the calibrated ones.** The pattern catalog is English-first (with register presets for the author's Mandarin stakeholder messages). The banned-vocabulary list does not translate mechanically; other languages get the structural rules only.

## Real limits of the mechanism

- **Judgment calls are model-dependent.** Two runs can produce different rewrites of the same input. The hard gates (dashes, banned vocabulary) are deterministic; the taste layer is not, and pretending otherwise would be exactly the kind of claim this page exists to refuse.
- **Voice calibration needs a real sample.** Without one, you get the default voice (short paragraphs, contractions, active voice, concrete detail). It is a good default; it is not *you*.
- **The watchlists age.** "Delve" was the 2024 tell; the tells of 2027 are not in this file yet. The catalog is plain markdown so updating it is a pull request, not a retraining run.
- **Scoring is self-reported by the model running the skill.** The below-35-revise-again rule triggers a second pass, not an objective measurement. It catches lazy rewrites; it does not certify quality.

## The one number we will state

Zero: the count of em dashes, en dashes, and banned-vocabulary hits in any output VERITAS returns as final. That gate is greppable, reproducible, and you can check it on every single output yourself. It is the only number in this category that survives contact with reality, so it is the only one we ship.
