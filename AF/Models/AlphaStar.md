---
type: model
href: https://www.deepmind.com/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii
tags: 
- Model
---

==Why was StarCraft so difficult?==
- Imperfect Information
- Long-term planning (up to 1hr)
- Massive action space

==How was AlphaStar trained?==
- First, by imitation — supervised learning on human samples.
- Then, in a multi-agent RL process — a competitive league against copies of itself. New agents were branched from competitors 

==Unfair advantages?==
- Clicks per minute was similar (if not fewer than human players)
- A variant that was trained to use the camera interface performed similarly to one that had global awareness (which appeared to have learned an implicit attention)

