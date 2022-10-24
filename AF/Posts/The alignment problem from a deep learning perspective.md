---
type: post
_id: KbyRPCAsWv5GtfrbG
title: The alignment problem from a deep learning perspective
slug: the-alignment-problem-from-a-deep-learning-perspective
href: 
  - https://www.lesswrong.com/posts/KbyRPCAsWv5GtfrbG/the-alignment-problem-from-a-deep-learning-perspective
  - https://arxiv.org/pdf/2209.00626.pdf
synchedAt: '2022-10-04T14:11:02.832Z'
tags:
  - Post
  - AI_Risk
  - AI
author: null
status: todo
---

On "[[General Intelligence]]":
> By AGI I mean an artificial agent which applies domain-general cognitive skills (such as reasoning, memory, and planning) to perform at or above human level on a wide range of cognitive tasks (such as running a company, writing a software program, or formulating a new scientific theory). This isn’t a precise definition—but it’s common in science for important concepts to start off vague, and become clearer over time (e.g. “energy” in 17th-century physics; “fitness” in early-19th-century biology; “computation” in early-20th-century mathematics).

**Illustrative training process**:
- A single deep neural network with multiple output heads is trained end-to-end
- With one head trained via self-supervised learning on large amounts of multimodal data to predict the next observation 
- With another head trained to output actions via reinforcement learning on a wide range of tasks, using standard language and computer interfaces 
- With rewards provided via a combination of human feedback and automated evaluations 
- Until the policy implemented by the network (via its action head) is able to match or exceed human performance on most of those tasks, and qualifies as an AGI.

**Three phases of training**
1. Learning to plan towards achieving a range of goals
	- > policies will develop sophisticated internal representations of a range of outcomes which are correlated with higher reward on multiple tasks, and learn to make plans to achieve them.
	- ==How do RL policies choose actions? By following heuristics or pursuing goals?== 
	- ==Why might we expect goal-pursuing to emerge during training?==
		- > it’s hard to imagine policies which implement sophisticated strategies in complex real-world domains without in some sense “knowing what they’re aiming for”.
2. Pursuing goals in a situationally aware way
	- > Once policies can reason about their training processes and deployment contexts, they’ll learn to deceptively pursue misaligned goals while still getting high training reward.
3. Generalizing goals beyond human supervision.
	- > Policies which are too capable for humans to effectively supervise will generalize towards taking actions which give them more power over the world, rather than following human intentions.

**Three categories of goals**:
1. Goals we deliberately reward (e.g., honesty & obedience in InstructGPT)
2. Goals robustly correlated with reward (make lead to mistakes, e.g., plausible answers over truthful answers)
3. Goals robustly correlated reward, across reward functions (e.g., curiosity, empowerment, money-making)

**How to mitigate?**
1. Automate human supervision
2. Scale human supervision beyond human capabilities
3. Robust & scalable interpretability techniques.

# Related

- [[AI Risk]]
- [[AI]]
- "[*now available on arxiv*](https://arxiv.org/abs/2209.00626)"
- "[*an earlier report by Ajeya Cotra*](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to)"
- "[It’s worth thinking about risks from AGI in advance](https://www.alignmentforum.org/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale#It_s_worth_thinking_about_risks_from_AGI_in_advance)"
- "[Realistic training processes lead to the development of misaligned goals](https://www.alignmentforum.org/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale#Realistic_training_processes_lead_to_the_development_of_misaligned_goals)"
- "[Learn to plan towards achieving a range of goals](https://www.alignmentforum.org/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale#Phase_1__learning_to_plan_towards_achieving_a_range_of_goals)"
- "[Gain more reward by deceptively pursuing misaligned goals](https://www.alignmentforum.org/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale#Phase_2__pursuing_goals_in_a_situationally_aware_way)"
- "[Generalize in ways which undermine obedience](https://www.alignmentforum.org/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale#Phase_3__generalizing_goals_beyond_human_supervision)"
- "[More people should pursue research directions which address these problems](https://www.alignmentforum.org/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale#More_people_should_pursue_research_directions_which_address_these_problems)"
- "[few-shot learning](https://papers.nips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html)"
- "[sample](https://arxiv.org/abs/2111.00210)"
- "[efficiency](https://arxiv.org/abs/2102.04881)"
- "[cross-task generalization](https://www.deepmind.com/blog/generally-capable-agents-emerge-from-open-ended-play)"
- "[multi-step](https://arxiv.org/abs/2201.11903)"
- "[reasoning](https://storage.googleapis.com/pathways-language-model/PaLM-paper.pdf#page=38)"
- "[(Grace et al., 2022)](https://aiimpacts.org/2022-expert-survey-on-progress-in-ai/)"
- "[(Cotra, 2020)](https://drive.google.com/drive/u/1/folders/15ArhEPZSTYU8f012bs6ehPS6-xmhtBPP)"
- "[scale up 3x on a regular basis](https://openai.com/blog/ai-and-compute/)"
- "[Carlsmith (2021)](https://d8737ecf-376e-4788-8d12-a097599c13f6.filesusr.com/ugd/5f37c1_5333aa0b7ff7461abc208b25bfc7df87.pdf)"
- "[Ngo (2020)](https://drive.google.com/file/d/1uK7NhdSKprQKZnRjU58X7NLA1auXlWHt/view)"
- "[output heads](https://stackoverflow.com/questions/56004483/what-is-a-multi-headed-model-and-what-exactly-is-a-head-in-a-model)"
- "[Steinhardt (2022)](https://bounded-regret.ghost.io/more-is-different-for-ai/)"
- "[reward misspecification problem](https://arxiv.org/abs/2201.03544)"
- "[deceptive alignment problem](https://bounded-regret.ghost.io/ml-systems-will-have-weird-failure-modes-2/)"
- "[goal misgeneralization problem](https://arxiv.org/abs/2105.14111)"
- "[Bengio et al., 2014](https://arxiv.org/abs/1206.5538)"
- "[Olah et al. (2020)](https://distill.pub/2020/circuits/zoom-in/)"
- "[wheels and dog heads](https://distill.pub/2020/circuits/zoom-in/)"
- "[Jaderberg et al. (2019)](https://www.deepmind.com/blog/capture-the-flag-the-emergence-of-complex-cooperative-agents)"
- "[implicit representations](https://arxiv.org/abs/2111.09259)"
- "[Guez et al., 2019](https://arxiv.org/abs/1901.03559)"
- "[*options*](https://www.sciencedirect.com/science/article/pii/S0004370299000521)"
- "[Krakovna et al. (2020)](https://www.deepmind.com/blog/specification-gaming-the-flip-side-of-ai-ingenuity)"
- "[Christano et al.’s (2017)](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/)"
- "[Pan et al., 2022](https://arxiv.org/abs/2201.03544)"
- "[InstructGPT](https://openai.com/blog/instruction-following/)"
- "[Ji et al., 2022](https://arxiv.org/abs/2202.03629)"
- "[curiosity](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.45.957)"
- "[empowerment](https://arxiv.org/abs/1201.6583)"
- "[DeepMind’s XLand policies](https://www.deepmind.com/blog/generally-capable-agents-emerge-from-open-ended-play)"
- "[Cotra (2022)](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to)"
- "[formal model](https://bounded-regret.ghost.io/ml-systems-will-have-weird-failure-modes-2/)"
- "[reward tampering](https://arxiv.org/abs/1908.04734)"
- "[gradient hacking](https://www.alignmentforum.org/posts/EeAgytDZbDjRznPMA/gradient-hacking-definitions-and-examples)"
- "[debate](https://openai.com/blog/debate/)"
- "[recursive reward modeling](https://arxiv.org/abs/1811.07871)"
- "[amplification](https://arxiv.org/abs/1810.08575)"
- "[Saunders et al. (2022)](https://openai.com/blog/critiques/)"
- "[the latter can be much easier](https://www.alignmentforum.org/posts/PJLABqQ962hZEqhdB/debate-update-obfuscated-arguments-problem)"
- "[inductive biases](https://en.wikipedia.org/wiki/Inductive_bias)"
- "[Bostrom’s (2012)](https://nickbostrom.com/superintelligentwill.pdf)"
- "[*instrumental convergence thesis*](https://en.wikipedia.org/wiki/Instrumental_convergence)"
- "[(Hadfield-Menell et al., 2017)](https://arxiv.org/abs/1611.08219)"
- "[Turner et al. (2021)](https://neurips.cc/virtual/2021/poster/28400)"
- [[What failure looks like]]
- "[illustrative scenarios](https://www.alignmentforum.org/posts/AyNHoTWWAJ5eb99ji/another-outer-alignment-failure-story)"
- "[mechanistic interpretability](https://www.transformer-circuits.pub/2022/mech-interp-essay/index.html)"
- "[using early AGIs](https://aligned.substack.com/p/alignment-mvp?s=r)"
- "[Ouyang et al. (2022)](https://openai.com/blog/instruction-following/)"
- "[Perez et al. (2022)](https://arxiv.org/abs/2202.03286)"
- "[Christiano et al. (2018)](https://arxiv.org/abs/1810.08575)"
- "[Irving et al. (2018)](https://arxiv.org/abs/1805.00899)"
- "[Wu et al. (2021)](https://openai.com/blog/summarizing-books/)"
- "[obfuscated arguments problem](https://www.alignmentforum.org/posts/PJLABqQ962hZEqhdB/debate-update-obfuscated-arguments-problem)"
- "[cross-examination](https://www.alignmentforum.org/posts/Br4xDbYu4Frwrb64a/writeup-progress-on-ai-safety-via-debate-1)"
- "[follow-up work on transformer circuits](https://transformer-circuits.pub/)"
- "[Irving et al.’s Debate protocol](https://arxiv.org/abs/1805.00899)"
- "[Meng et al. (2022)](https://rome.baulab.info/)"
- "[Demski and Garrabrant (2018)](https://intelligence.org/2018/10/29/embedded-agents/)"
- "[the Alignment Fundamentals curriculum](https://docs.google.com/document/d/1mTm_sT2YQx3mRXQD6J2xD2QJG1c3kHyvX8kQc_IQ0ns/edit)"
- "[this curriculum](https://www.eacambridge.org/ai-governance-curriculum)"
- "[^](#fnrefvkp9adhxfj)"
- "[^](#fnrefzascveb8o4)"
- "[no free lunch theorems](https://en.wikipedia.org/wiki/No_free_lunch_theorem)"
- "[^](#fnrefgyup9237jvq)"
- "[^](#fnrefjayejwcrc3h)"
- "[Hubinger et al. (2017)](https://arxiv.org/abs/1906.01820)"
- "[^](#fnrefgfybstftao)"
- "[^](#fnrefoe0ydhc8st)"
- "[outer misalignment and inner misalignment](https://www.alignmentforum.org/posts/poyshiMEhJsAuifKt/outer-vs-inner-misalignment-three-framings-1)"
- "[^](#fnref39xw697bsqq)"
- "[^](#fnrefnn8loc34irf)"
- "[BC with weighted trajectories](https://openreview.net/forum?id=zrT3HcsWSAt)"
- "[conditioning SL on high-reward outcomes](https://arxiv.org/abs/1912.02875)"
- "[^](#fnrefl8df1k0t0nr)"
- "[very simple environments](https://arxiv.org/pdf/2205.11491.pdf#page=24)"
- "[^](#fnrefebq42f4t0gn)"
- "[GPT-3 answers A) to the prompt](https://beta.openai.com/playground)"
- "[^](#fnref8no67anaox4)"
- "[intrinsic motivation](https://arxiv.org/abs/1908.06976)"
- "[^](#fnrefi5k0pw7cge)"
- "[^](#fnref2u0j5idiswm)"
- "[^](#fnrefoaajgdzalw)"
- "[^](#fnrefnzqojg4z84a)"
- "[^](#fnrefnyai2wz7fzo)"
- "[advantage actor-critic algorithm](https://julien-vitay.net/deeprl/ActorCritic.html)"
- "[^](#fnref588a0ipns87)"
- "[^](#fnref1sewoaqlueu)"
- "[try giving GPT-3 the prompt](https://beta.openai.com/playground)"
- "[^](#fnref1w293fa7pwq)"
- "[^](#fnrefd9ysmcbuhmi)"
- "[Goodhart’s law](https://en.wikipedia.org/wiki/Goodhart%27s_law)"
- "[^](#fnrefw3l3u658ock)"
- "[^](#fnrefbzelvkipb6)"
- "[^](#fnrefaznkvtaoe6)"
- "[^](#fnrefwyg9usn8a9)"
- "[^](#fnrefhklbciz8z3)"
- "[agents which plan to achieve real-world outcomes](https://arbital.com/p/consequentialist/)"
- "[nearest unblocked strategy problem](https://arbital.com/p/nearest_unblocked/)"
- "[^](#fnrefpgtfrha875l)"
- "[(Zhuang and Hadfield-Menell, 2021)](https://arxiv.org/abs/2102.03896)"
- "[^](#fnrefbt08p4eg4cv)"
- "[^](#fnrefsbmw9galmw)"
- "[^](#fnref2kztj4fyd45)"