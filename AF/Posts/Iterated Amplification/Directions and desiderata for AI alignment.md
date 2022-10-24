---
type: post
_id: kphJvksj5TndGapuh
title: Directions and desiderata for AI alignment
slug: directions-and-desiderata-for-ai-alignment
href: >-
  https://www.lesswrong.com/posts/kphJvksj5TndGapuh/directions-and-desiderata-for-ai-alignment
synchedAt: '2022-10-08T14:50:21.174Z'
tags:
  - Post
  - AI
  - Iterated_Amplification_
sequence: Iterated Amplification
author: paulfchristiano
status: todo
---

**Promising directions**:
1.  **Reliability and robustness.** Building ML systems which behave acceptably in the worst case rather than only on the training distribution.
   - Adversarial training
   - Ensembling
   - Interpretability
   - Verification
   - Learning the right model (long-shot)
2.  **Oversight / reward learning.** Constructing objectives and training strategies which lead our policies to do what we intend.
	- Inverse reinforcement learning
	- Learning from human feedback
3.  **Deliberation and amplification.** Surpassing human performance without simultaneously abandoning human preferences.
	- IRL (hard mode)
	- Iterated amplification
	- IRL for cognition (factored cognition)


**Important desiderata**:
> 1.  **Secure**. Our solutions should work acceptably even when the environment itself is under the influence of an adversary.
> 2.  **Competitive**. Our solutions should impose minimal overhead, performance penalties, or restrictions compared to malign AI.
> 3.  **Scalable.** Our solutions should continue to work well even when the underlying learning systems improve significantly.


# Related

- [[AI]]
- [[Iterated Amplification ]]
- [[Iterated Amplification]]
- "[Techniques for Optimizing Worst-Case Performance](https://ai-alignment.com/techniques-for-optimizing-worst-case-performance-39eafec74b99)"
- "[Szegedy 2014](https://arxiv.org/pdf/1312.6199v4.pdf)"
- "[Goodfellow 2015](https://arxiv.org/pdf/1412.6572v3.pdf)"
- "[Khani 2016](https://cs.stanford.edu/~pliang/papers/unanimity-acl2016.pdf)"
- "[red teams](https://medium.com/ai-control/red-teams-b5b6de33dc76#.w2nsces19)"
- "[learning with catastrophes](https://medium.com/ai-control/learning-with-catastrophes-59387b55cc30#.a590k1j0p)"
- "[thoughts on training highly reliable models](https://medium.com/ai-control/some-thoughts-on-training-highly-reliable-models-2c78c17e266d#.pbtkz0czs)"
- "[Russell 1998](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.152.6795&rep=rep1&type=pdf)"
- "[Ng 2000](http://ai.stanford.edu/~ang/papers/icml00-irl.pdf)"
- "[Hadfield-Menell 2016](https://arxiv.org/pdf/1606.03137v3.pdf)"
- "[Isbell 2001](https://papers.nips.cc/paper/2118-cobot-a-social-reinforcement-learning-agent.pdf)"
- "[Thomaz 2006](http://robotic.media.mit.edu/wp-content/uploads/sites/14/2015/01/Thomaz-etal-AAAI-06.pdf)"
- "[Pilarski 2011](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.715.7132&rep=rep1&type=pdf)"
- "[Knox 2012](http://www.bradknox.net/wp-content/uploads/2013/06/thesis-knox.pdf)"
- "[here](https://medium.com/ai-control/thoughts-on-reward-engineering-82b193ec03f6#.6n2d4co3i)"
- "[the reward engineering problem](https://medium.com/ai-control/the-reward-engineering-problem-30285c779450#.f1ihhss6w)"
- "[ambitious vs. narrow value learning](https://medium.com/ai-control/ambitious-vs-narrow-value-learning-99bd0c59847e#.s33f26ht5)"
- "[against mimicry](https://medium.com/ai-control/against-mimicry-6002a472fc42#.chg6xlqve)"
- "[thoughts on reward engineering](https://medium.com/ai-control/thoughts-on-reward-engineering-82b193ec03f6#.iim1wpt9a)"
- "[remains quite challenging](https://medium.com/ai-control/the-easy-goal-inference-problem-is-still-hard-fad030e0a876)"
- "[a recent post](https://jsteinhardt.wordpress.com/2017/02/07/model-mis-specification-and-inverse-reinforcement-learning/)"
- "[here](https://medium.com/ai-control/policy-amplification-6a70cbee4f34#.ampcyxi9r)"
- "[Ought](https://blog.ought.com/)"
- "[capability amplification](https://medium.com/ai-control/policy-amplification-6a70cbee4f34)"
- "[reliability amplification](https://medium.com/ai-control/reliability-amplification-a96efa115687)"
- "[security amplification](https://medium.com/ai-control/security-amplification-f4931419f903)"
- "[meta-execution](https://medium.com/ai-control/meta-execution-27ba9b34d377)"
- "[the easy goal inference problem is still hard](https://medium.com/ai-control/the-easy-goal-inference-problem-is-still-hard-fad030e0a876)"
- "[security and AI alignment](https://medium.com/ai-control/security-and-ai-control-675ace05ce31)"
- "[prosaic AI alignment](https://medium.com/ai-control/prosaic-ai-control-b959644d79c2)"
- "[a possible stance for AI control](https://medium.com/ai-control/a-possible-stance-for-ai-control-research-fe9cf717fc1b)"
- "[efficient and safely scalable](https://medium.com/ai-control/efficient-and-safely-scalable-8218fa8a871f#.m7z8qccef)"
- "[omnipotence test](https://arbital.com/p/omni_test/)"
- "[scalable AI control](https://medium.com/ai-control/scalable-ai-control-7db2436feee7#.tljxalxgv)"
- "[here](https://ai-alignment.com/directions-and-desiderata-for-ai-control-b60fca0da8f4)"