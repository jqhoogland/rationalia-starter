---
_id: r9tYkB2a8Fp4DN8yB
type: sequence
title: Risks from Learned Optimization
curatedOrder: 1
href: https://www.lesswrong.com/s/r9tYkB2a8Fp4DN8yB
synchedAt: '2022-09-04T18:58:07.434Z'
tags:
  - LessWrong
  - Sequence
status: in progress
---

# Risks From Learned Optimization

*This is a sequence version of the paper “[Risks from Learned Optimization in Advanced Machine Learning Systems](https://arxiv.org/abs/1906.01820)” by Evan Hubinger, Chris van Merwijk, Vladimir Mikulik, Joar Skalse, and Scott Garrabrant. Each post in the sequence corresponds to a different section of the paper. Evan Hubinger, Chris van Merwijk, Vladimir Mikulik, and Joar Skalse contributed equally to this sequence.*

The goal of this sequence is to analyze the type of learned optimization that occurs when a learned model (such as a neural network) is itself an optimizer—a situation we refer to as *mesa-optimization,* a neologism we introduce in this sequence. We believe that the possibility of mesa-optimization raises two important questions for the safety and transparency of advanced machine learning systems. First, under what circumstances will learned models be optimizers, including when they should not be? Second, when a learned model is an optimizer, what will its objective be—how will it differ from the loss function it was trained under—and how can it be aligned?

# Risks From Learned Optimization

- [[Risks from Learned Optimization— Introduction]]
- [[Conditions for Mesa-Optimization]]
- [[The Inner Alignment Problem]]
- [[Deceptive Alignment]]
- [[Risks from Learned Optimization— Conclusion and Related Work]]
