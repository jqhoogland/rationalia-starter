---
type: model
href: 
- https://www.deepmind.com/research/highlighted-research/alphago
- https://www.nature.com/articles/nature16961
tags: 
- Model
---

==What makes Go difficult?==
- Intractably large search space
- Requires very long-term planning (it has no proxy for board position like value of pieces in chess)

Trained on:
- Supervised learning from human expert games
- Reinforcement learning from self-play

Ran in combination with Monte Carlo simulation tree search

- **Value networks** to evaluate board positions
- **Policy networks** to select moves