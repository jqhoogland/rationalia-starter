---
type: post
href: https://bounded-regret.ghost.io/future-ml-systems-will-be-qualitatively-different/
---

[[Emergent Behavior]] is common in AI.
- In terms of data availability & storage costs.
- In terms of depth & training time (better FLOP from GPU)
- Few-shot learning: unexpected side effect of GPT-N
- "Grokking" (see picture below)

Other examples (verbatim):
- [McGrath et al. (2021)](https://arxiv.org/abs/2111.09259) show that AlphaZero acquires many chess concepts at a phase transition near 32,000 training steps.
- [Pan et al. (2021)](https://arxiv.org/abs/2201.03544) show that reward hacking sometimes occurs via qualitative phase transitions as model size increases.
- DeepMind's recent [Gopher](https://arxiv.org/abs/2112.11446) model exhibits a phase transition on the FEVER task, acquiring the ability to utilize side information (Figure 3):
- [Wei et al. (2021)](https://arxiv.org/abs/2109.01652) show that instruction-tuning hurts small models but helps large models (see Figure 6).
- Some few-shot tasks such as arithmetic show phase transitions with model size (see [Brown et al. (2020)](https://arxiv.org/abs/2005.14165), Figure 3.10).
- [This](https://twitter.com/NaxAlpha/status/1420700413125447683) researcher shares an anecdote similar to the “grokking” paper.

![grokking](https://bounded-regret.ghost.io/content/images/2021/11/grokking.png)


## Implications
- The [[More is Different for AI#^9c4149|Engineering Approach]] suffers a major stumbling block. Future abilities are not necessarily continuous extrapolations of current abilities.