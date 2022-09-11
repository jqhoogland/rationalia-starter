---
_id: fRsjBseRuvRhMPPE5
title: An overview of 11 proposals for building safe advanced AI
author: evhub
url: null
slug: an-overview-of-11-proposals-for-building-safe-advanced-ai
type: post
tags:
  - LessWrong
  - Concept
  - Post
  - AI
  - 'Iterated_Amplification '
  - Debate_(AI safety technique)
  - Inner_Alignment
  - Outer_Alignment
  - Myopia
  - AI_Risk
  - AI_Success Models
  - Research_Agendas
  - Iterated_Amplification_
  - Debate_(AI_safety_technique)
  - AI_Success_Models
href: >-
  https://www.lesswrong.com/posts/fRsjBseRuvRhMPPE5/an-overview-of-11-proposals-for-building-safe-advanced-ai
sequence: Alignment & Agency
chapter: null
synchedAt: '2022-09-01T09:33:57.845Z'
status: in progress
collection: Best of LessWrong
---

# An Overview of 11 Proposals for Building Safe Advanced AI

*This is the blog post version of [the paper by the same name](https://arxiv.org/abs/2012.07532).*

# Components

- [[Inner Alignment]]
- [[Outer Alignment]]
- **Training Competitiveness**: whether training procedure is affordable without throwing away a lead.
- **Performance Competitiveness**: whether running the model is affordable without throwing away a lead.

# Proposals

1. [[Reinforcement Learning|RL]] + [[Transparency, Interpretability (ML & AI)|Transparency tools]]
	- RL in an environment where [[Corrigibility]], [[Honesty]], and [[Coordination, Cooperation|Multi-agent Cooperation]] are incentivized.
	- Mimic [[Evolution|evolutionary pressures]] that led to our cooperativeness.
	- ==Will theses agents cooperate only with each other?==
	- ==Will corrigibility be stable? Or will agents learn to follow instructions only so far as it benefits them instrumentally?==
	- [[Chris Olah’s views on AGI safety|Transparency checking so you throw out models and start over when necessary]]
	- ==How strong are inductive biases towards true alignment & away from [[Pseudo-alignment]]?==
	- ==How robust are these tools to [[Deceptive Alignment]]?==
	- ==To what extent is RL necessary to train advanced AIs?==
	- ==To what extent is it necessary to explicitly train agents?== => ==[[Instrumental Convergence|Is agency really emergent?]]==
	- ==How expensive would these environments be to simulate?==
2. ![[Imitative amplification#Imitative amplification & Intermittent oversight]]
	- Red arrows indicate oversight
     - The limiting case is [[Humans Consulting HCH|HCH]], so [[Outer Alignment]] depends on your choice of humans.
     - [[Inner Alignment]] depends on your oversight mechanism.
     - ==In which domains is pure imitation a strong enough reward signal for efficient learning?==
	     - In NLP, it may be enough; In fine-motor control, maybe not.
	 - ==How difficult is it to pass the intermittent oversight step?==
	 - ==How universal is [[Humans Consulting HCH|HCH]] at solving hard problems?==
3. ![[Imitative amplification#Imitative amplification relaxed adversarial training]]
	- Like the previous, but we train directly on the intermittent oversight signal
	- Has the potential to *prevent* deception rather than detect it after the fact (which leaves room for obfuscation).
	- ==Will adversarial training increase or decrease model transparency?==
	- ==How hard is it to find a model that is non-catastrophic under the two different oversight regimes?==
4. ![[Approval-based amplification#Approval-based amplification Relaxed adversarial training]]
	- Instead of an imitation signal, we use a [[Myopia|myopic]] approval signal.
	- ==Is approval or imitation distance a more informative signal?==  [[P vs. NP|Verification is easier than generation]]
	- ==Does approval incentivize the model to obfuscate its internals so we can't figure out how it's gaming it?==
5. [[Chris Olah’s views on AGI safety|Microscope AI]]: Avoid building agents
	- [[The Solomonoff Prior is Malign|There may be deceptive optimization in the limit of perfect prediction]] ==but would it actually occur in practice (away from the uncomputable limit)?==
	- ==Can we distinguish optimization & modeling? I.e.: is it possible to avoid mesa-optimizers altogether?==
	- ==If it is possible, can we do it in practice?==
6. STEM AI: Avoid modeling humans. Train only on STEM problems & use transparency tools.
	- ==How limited in potential would this be?==
	- ==Could we avoid [[Instrumental Convergence]]?==
1. Narrow reward modeling + [[Transparency, Interpretability (ML & AI)|Transparency tools]]
2. Recursive reward modeling + [[Relaxed adversarial training]]
3. AI safety via [[Debate (AI safety technique)|Debate]] with [[Transparency, Interpretability (ML & AI)|Transparency tools]]
4. [[Iterated Amplification|Amplification]] with auxiliary RL objective + [[Relaxed adversarial training]]
5. [[Iterated Amplification|Amplification]] alongside [[Reinforcement Learning|RL]] + [[Relaxed adversarial training]]

# Related

- [[AI]]
- [[Myopia]]
- [[AI Risk]]
- [[AI Success Models]]
- [[Research Agendas]]
- "[the paper by the same name](https://arxiv.org/abs/2012.07532)"
- "[amplification](https://www.alignmentforum.org/s/EmDuGeRw749sD3GKd)"
- "[debate](https://openai.com/blog/debate)"
- "[recursive reward modeling](https://medium.com/@deepmindsafetyresearch/scalable-agent-alignment-via-reward-modeling-bf4ab06dfd84)"
- "[inner alignment](https://arxiv.org/abs/1906.01820)"
- "[decisive strategic advantage](https://www.lesswrong.com/posts/vkjWGJrFWBnzHtxrw/superintelligence-7-decisive-strategic-advantage)"
- "[Outer alignment and imitative amplification](https://www.alignmentforum.org/posts/33EKjmAdKFn3pbKPJ/outer-alignment-and-imitative-amplification)"
- "[Risks from Learned Optimization](https://arxiv.org/abs/1906.01820)"
- "[Imitative Generalization](https://www.alignmentforum.org/posts/JKj5Krff5oKMb8TjT/imitative-generalisation-aka-learning-the-prior-1)"
- "[AI safety via market making](https://www.alignmentforum.org/posts/YWwzccGbcHMJMpT45/ai-safety-via-market-making)"
- "[OpenAI's hide and seek game](https://openai.com/blog/emergent-tool-use)"
- "[Multi-agent safety](https://www.lesswrong.com/posts/BXMCgpktdiawT3K5v/multi-agent-safety)"
- "[transparency tools](https://distill.pub/2020/circuits)"
- "[deceptive](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment)"
- "[catastrophic](https://ai-alignment.com/learning-with-catastrophes-59387b55cc30)"
- [[Chris Olah’s views on AGI safety]]
- [[Risks from Learned Optimization— Introduction]]
- "[proxy pseudo-alignment](https://www.alignmentforum.org/posts/pL56xPoniLvtMDQ4J/the-inner-alignment-problem)"
- "[deceptive pseudo-alignment](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment)"
- "[iterated amplification](https://www.alignmentforum.org/s/EmDuGeRw749sD3GKd)"
- "[A concrete proposal for adversarial IDA](https://www.alignmentforum.org/posts/jYvm4mmjvGHcPXtGL/a-concrete-proposal-for-adversarial-ida)"
- "[HCH](https://ai-alignment.com/strong-hch-bedb0dc08d4e)"
- "[possible things you can do to address these problems](https://ai-alignment.com/universality-and-consequentialism-within-hch-c0bee00365bd)"
- "[Towards a mechanistic understanding of corrigibility](https://www.alignmentforum.org/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility)"
- "[Efficient feedback](https://ai-alignment.com/efficient-feedback-a347748b1557)"
- "[relaxed adversarial training setup](https://www.alignmentforum.org/posts/9Dy5YRaoCxH9zuJqa/relaxed-adversarial-training-for-inner-alignment)"
- "[myopia](https://www.alignmentforum.org/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility)"
- [[Gradient hacking]]
- "[Relaxed adversarial training for inner alignment](https://www.alignmentforum.org/posts/9Dy5YRaoCxH9zuJqa/relaxed-adversarial-training-for-inner-alignment)"
- "[some](https://arxiv.org/abs/1709.10163)"
- "[sort](https://arxiv.org/abs/1902.04257)"
- "[approval-directed agents](https://ai-alignment.com/model-free-decisions-6e6609f5d9)"
- "[Visualizing Representations: Deep Learning and Human Beings](https://colah.github.io/posts/2015-01-Visualizing-Representations/)"
- "[Paul Christiano’s argument that the universal prior is malign](https://ordinaryideas.wordpress.com/2016/11/30/what-does-the-universal-prior-actually-look-like)"
- "[the behavior at minimal loss](https://www.alignmentforum.org/posts/33EKjmAdKFn3pbKPJ/outer-alignment-and-imitative-amplification)"
- "[Partial Agency](https://www.alignmentforum.org/s/HeYtBkNbEe7wpjc6X)"
- "[GPT-2](https://openai.com/blog/better-language-models)"
- "[Thoughts on Human Models](https://www.alignmentforum.org/posts/BKjJJH2cRpJcAnP7T/thoughts-on-human-models)"
- "[myopic](https://www.alignmentforum.org/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility)"
- "[theorem](https://arxiv.org/abs/1811.00796)"
- "[proving](https://arxiv.org/abs/1904.03241)"
- "[protein folding](https://deepmind.com/blog/article/AlphaFold-Using-AI-for-scientific-discovery)"
- "[protein folding](https://en.wikipedia.org/wiki/Protein_folding)"
- "[nanotechnology development](https://en.wikipedia.org/wiki/Molecular_nanotechnology)"
- "[vulnerable world](https://nickbostrom.com/papers/vulnerable.pdf)"
- "[whole brain emulation](https://www.fhi.ox.ac.uk/brain-emulation-roadmap-report.pdf)"
- "[Scalable agent alignment via reward modeling](https://medium.com/@deepmindsafetyresearch/scalable-agent-alignment-via-reward-modeling-bf4ab06dfd84)"
- "[out-of-distribution detection](https://ai.googleblog.com/2019/12/improving-out-of-distribution-detection.html)"
- "[various](https://arxiv.org/abs/1606.03476)"
- "[different](https://arxiv.org/abs/1710.11248)"
- "[Reframing Superintelligence](https://www.fhi.ox.ac.uk/wp-content/uploads/Reframing_Superintelligence_FHI-TR-2019-1.1-1.pdf)"
- "[Recursive reward modeling](https://medium.com/@deepmindsafetyresearch/scalable-agent-alignment-via-reward-modeling-bf4ab06dfd84)"
- "[Scalable agent alignment via reward modeling: a research direction](https://arxiv.org/abs/1811.07871)"
- "[myopia verification](https://www.alignmentforum.org/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility)"
- "[AI safety via debate](https://arxiv.org/abs/1805.00899)"
- "[Writeup: Progress on AI Safety via Debate](https://www.alignmentforum.org/posts/Br4xDbYu4Frwrb64a/writeup-progress-on-ai-safety-via-debate-1)"
- "[deceptive alignment](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment)"
- "[Go](https://deepmind.com/blog/article/alphazero-shedding-new-light-grand-games-chess-shogi-and-go)"
- "[Dota 2](https://openai.com/blog/openai-five/)"
- "[StarCraft](https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii)"
- "[It has been proven](https://www.alignmentforum.org/posts/Br4xDbYu4Frwrb64a/writeup-progress-on-ai-safety-via-debate-1)"
- "[NEXP](https://en.wikipedia.org/wiki/NEXPTIME)"
- "[NP](<https://en.wikipedia.org/wiki/NP_(complexity)>"
- "[Synthesizing amplification and debate](https://www.alignmentforum.org/posts/dJSD5RK6Qoidb3QY5/synthesizing-amplification-and-debate)"
