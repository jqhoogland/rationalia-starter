---
type: post
_id: PvA2gFMAaHCHfMXrw
title: 'AGI safety from first principles: Alignment'
slug: agi-safety-from-first-principles-alignment
href: >-
  https://www.lesswrong.com/posts/PvA2gFMAaHCHfMXrw/agi-safety-from-first-principles-alignment
synchedAt: '2022-09-04T07:50:15.192Z'
tags:
  - LessWrong
  - Post
  - AI
sequence: AGI safety from first principles
author: Richard_Ngo
status: done
---

# AGI Safety From First Principles: Alignment

==What does "aligned with human values" even mean?== [\[1\]](https://arxiv.org/abs/2001.09768), [\[2\]](https://ai-alignment.com/ambitious-vs-narrow-value-learning-99bd0c59847e)

![[Alignment#Alignment]]

Ngo finds the maximalist framing unhelpful "because it bundles technical, ethical, and political problems". He sticks to Christiano's definition of Intent alignment:

![[Intent alignment#^f18801]]

"Trying" is key.
- Ngo is not worried about [[Perverse Instantiation]]: if AGIs have a good world model (which we expect them to have), they should be good at understanding our intentions.
- Ngo's main concern is that "[[Orthogonality Thesis#Weak Formulation|AGIs will understand what we want, but just not care, because the motivations they acquired during training weren't those we intended them to have.]]"

[[Mesa-Optimization]]:
- [[Outer Alignment]]: "Correctly evaluating AI behavior" (see [[Goodhart's Law]])
- [[Inner Alignment]]: "Making the AI's goals match those evaluations." (e.g., humans don't really care about the continuation of individual alleles)

Problems with including human feedback in the objective function?
- [[Reward modeling|It's not cost-effective]]
- With long-term tasks, we can't always give feedback on all the consequences of an agent's actions. See [[Debate (AI safety technique)|Debate]], [[Recursive Reward-modeling]], [[Iterated Amplification]]
- Humans can be manipulated into interpreting behavior incorrectly 

==How to catch inner misalignment?==
- Design training examples which catch misaligned behavior.
- Interpretability tools, maybe?
- ...it's difficult

==How to create a training environment where we can catch "large-scale" misalignment?==

Maximizing expected reward makes sense in formalisms, but it's difficult in the real world. Ngo points out that the object function is the most important tool in our toolbelt, but not the only tool. We can also choose the neural architectures, RL algorithms, environments, etc.

Ngo believes it possible to train agents that are very intelligent but not very agentic. %% To me this reads as almost contradictory to the definition of [[General Intelligence#^db4a54|Universal intelligence]]. I suppose Ngo means non-agentic in the sense of having only short-term objectives, or that its objectives are easy to change.  %%

Ngo is pessimistic about how well mathematics can make high-level claims about the goals and concepts possessed by agentic AGIs. %% I'm inclined to agree %%


# Related

- [[AI]]
- "[Goodhart’s law](https://arxiv.org/abs/1803.04585)"
- "[specification gaming behaviours](https://vkrakovna.wordpress.com/2018/04/02/specification-gaming-examples-in-ai/)"
- "[reward modelling](https://arxiv.org/abs/1706.03741)"
- "[Debate](https://openai.com/blog/debate/)"
- "[Recursive Reward Modelling](https://medium.com/@deepmindsafetyresearch/scalable-agent-alignment-via-reward-modeling-bf4ab06dfd84)"
- "[Iterated Amplification](https://openai.com/blog/amplifying-ai-training/)"
- "[the robot hand example here](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/)"
- "[as I’ve argued here,](https://www.alignmentforum.org/posts/GqxuDtZvfgL2bEQ5v/arguments-against-myopic-training)"
- "[can be modified](https://arxiv.org/abs/1505.07818)"
- "[this post by Sanjeev Arora](http://www.offconvex.org/2019/06/03/trajectories/)"
- "[deceptive alignment](https://www.alignmentforum.org/s/r9tYkB2a8Fp4DN8yB/p/zthDPAjh9w6Ytbeks)"
- [[Open question: are minimal circuits daemon-free?]]
- "[Risks from Learned Optimisation in Advanced Machine Learning Systems](https://arxiv.org/abs/1906.01820)"
- [[Gradient hacking (Post)]]
