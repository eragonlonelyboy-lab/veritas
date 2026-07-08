# Craft modes: writing capabilities beyond the cleanup pass

The core loop (identify, draft, audit, final) strips tells from text you already have. These six modes are jobs the core loop does not do on its own: generate variants, learn a voice, compress to a target, write a message from nothing. Each one runs the core loop's hard rules as a floor. None of them may return em dashes, banned vocabulary, hype, or a flattened voice.

How they relate to the core pass:
- **New capability:** voice-cloning (mode 2) is the one thing the cleanup pass cannot do. It learns a target voice from samples, then generates in it. The core loop preserves a voice already on the page; it never studies one and writes fresh prose in it.
- **Close cousins:** line-edit (mode 3) and compress (mode 6) are the core pass with a sharper mandate. Run the core loop, then apply the extra priority order below. Do not duplicate work.
- **Adjacent generators:** email-rewrite (mode 1), summarize (mode 4), hard-message (mode 5) produce new structured output, then pass every piece through the core loop before returning.

Every mode ends the same way: scan for `—` and `–`, grep the banned list, confirm the voice still sounds like the author. Any hit means not done.

## Mode 1: email-rewrite (three versions)

**When:** an email needs to actually get a reply, and one draft is not enough to pick from.

**Method:**
1. Confirm three facts before writing: recipient and relationship, the one action you want, any deadline or stakes. Missing a load-bearing fact means ask, do not invent.
2. Write three versions. Direct (under 90 words, shortest that still sounds human). Friendly (warmer, real rapport, still tight). Firm but polite (for a second ask or a needed decision, confident, no groveling, no passive-aggression).
3. Every version: open with a line that names why you are writing (never "I hope this finds you well"), front-load the ask in the first two sentences, keep it skimmable on a phone, close with one specific low-friction call to action.
4. Give each a subject line. After the three, one line on which you would send and why.

**Composes with core:** run the loop on all three bodies. Match register to the relationship; apply the people presets for Sun and Shermund.

## Mode 2: voice-cloning (learn a voice, then write in it), NEW capability

**When:** the user wants new text that reads as if they wrote it, and gives 2 to 3 real samples to learn from. This is generation in a studied voice, not cleanup of existing prose.

**Method, two stages, gated:**
1. **Learn.** Read the samples closely. Return a voice profile: average sentence length and how much it varies, tone and attitude, how they open and transition and close, signature moves (favorite phrasings, punctuation habits, questions, lists, one-line paragraphs), vocabulary level and words they lean on, what they never do.
2. Write two short original sentences in the voice as a test. Ask the user to confirm or correct. Do not proceed until they approve.
3. **Write.** On approval, take the topic and format and write so convincingly that a longtime reader could not tell it was AI. Ask one clarifying question first only if goal, audience, or length would change the draft.
4. After the draft, flag any spot where you were unsure it matched the voice.

**Composes with core:** the profile becomes the voice calibration input the core loop's "Voice calibration" section expects. Do not overwrite the author's habits with clean defaults. If they write "stuff" and "things", keep them. The hard rules still bind: no clichés, no em dashes, no press-release or LinkedIn-motivational register unless the samples genuinely have it. When in doubt, the plainer human word.

## Mode 3: line-edit (close cousin of the core pass)

**When:** text is fine but flabby. The author wants it tighter, clearer, more alive, still unmistakably theirs.

**Method:**
1. State the author's voice and intent back in one line, so they know what you are protecting. Ask one question only if audience or purpose is unclear and would change the edit.
2. Edit in priority order: cut filler and hedging ("I think", "just", "really", "in order to") and throat-clearing; replace weak verbs and nouns with specific ones, passive to active unless the passive is deliberate; fix rhythm so it reads aloud smoothly, vary sentence length, break walls of text; sharpen the opening and closing lines.
3. Return the clean edited version, a tight list of the five most important changes and why each strengthens the piece, and one optional "go further" push.

**Composes with core:** this is the core loop with an explicit change-log. Editing only, no new ideas, facts, or claims. Keep voice and key phrasings; do not sand it into generic copy.

## Mode 4: summarize at four depths

**When:** the reader needs to pick how much detail they want, at a stated reading level.

**Method:**
1. Confirm the target reading level (a curious 12-year-old, a smart adult with no background, a specialist).
2. Produce all four, labeled: one line (a single sentence graspable in three seconds, most important point first); short (one 3 to 5 sentence paragraph for a no-background reader); briefing (5 to 7 bullets of the key claims or steps, ordered by what matters); full (detailed, preserving nuance, caveats, and any numbers needed to act).
3. End with one pointer: "Best version for your situation if you..."

**Composes with core:** accuracy above all. Never add a claim, example, or conclusion not in the original. If the source is unclear, contradictory, or missing something, say so, do not smooth it over. Match vocabulary to the reading level without dumbing down substance. No editorializing.

## Mode 5: write the hard message

**When:** a high-stakes personal or professional message the user is dreading: an apology, hard news, a boundary, repairing tension.

**Method:**
1. Ask three questions and wait: what outcome do you actually want; what are you genuinely responsible for and what are you not; what is the relationship, history, and how does this person tend to react.
2. Draft so it opens honestly with no long wind-up, takes ownership only for what is actually theirs using "I" statements (no over-apologizing, no blame for things not their fault), stays warm and human and never passive-aggressive, says the hard thing clearly instead of burying it, and ends with a constructive next step or a clear boundary as fits the goal.
3. After the draft: flag any line that could read as blame-shifting or land worse than intended and offer a safer alternative; give a shorter version for when brevity is kinder; give one line on what not to say.

**Composes with core:** no hollow phrases ("I apologize for any inconvenience"). Keep it real, specific, and in the user's voice. Run the loop on both the full and short versions.

## Mode 6: compress to a target (close cousin of the core pass)

**When:** the text must hit roughly a target length (often 50%) without losing meaning, voice, or impact.

**Method, cut in priority order:**
1. Delete filler, redundancy, hedging, throat-clearing, windup; passive to active.
2. Merge sentences that make the same point; replace long phrases with tight ones ("in order to" to "to").
3. Prefer concrete specific words over abstract vague ones.
4. Protect the strongest lines and the load-bearing ideas; cut the weakest.
5. Return the compressed version with approximate word count versus original, the three cuts that mattered most so the user can restore any, and one honest line if an aggressive cut forced a real trade-off in meaning.

**Composes with core:** this is the density dimension of the core score pushed to a number. Keep every load-bearing idea; if something must go to hit the target, cut the least important, never the core. Add nothing new. Preserve voice: sharper, still the same author.
