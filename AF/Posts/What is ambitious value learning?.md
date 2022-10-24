---
type: post
_id: 5eX8ko7GCxwR5N9mN
title: What is ambitious value learning?
slug: what-is-ambitious-value-learning
href: >-
  https://www.lesswrong.com/posts/5eX8ko7GCxwR5N9mN/what-is-ambitious-value-learning
synchedAt: '2022-09-15T19:22:53.286Z'
tags:
  - Post
  - Value_Learning
  - AI
sequence: Value Learning
author: rohinmshah
status: todo
aliases:
  - The specification problem
---

- **The Specification Problem**: *defining* (*not* computing) the behavior we want to see from our AI. %% [[Mesa-optimization|Outer optimization]]? %%
- **Ambitious Value Learning**: a proposed solution to the specification problem.

Here, we're ignoring practical implementation details (specification not full alignment) & dealing with explicit reward maximizers. %% Justified by [[VNM Theorem]] / [[AIXI]] %%

It's difficult to formulate good specifications (E.g.: [0](https://en.wikipedia.org/wiki/Goodhart%27s_law), [1](https://www.lesswrong.com/posts/EbFABnst8LsidYs5Y/goodhart-taxonomy), [2](https://www.ou.edu/russell/UGcomp/Kerr.pdf), [[Value is Fragile|3]], [4](https://wiki.lesswrong.com/wiki/Complexity_of_value), [5](https://blog.openai.com/faulty-reward-functions/), [6](https://vkrakovna.wordpress.com/2018/04/02/specification-gaming-examples-in-ai/)).

Instead, let's try to learn the specification from humans. (Cf. [[Inverse Reinforcement Learning]]).

We're not interested in imitation though, we're interested in *ambitious* learning so models can *exceed* human performance.

%%

START
type: Basic (and reversed card)
What does Rohin Shah define as the **specification problem**?
Back: The problem of *defining* the behavior we want to see from our AI
Tags: LessWrong
END

%%

# Related

- [[Value Learning]]
- [[AI]]
- "[classification](https://medium.com/@deepmindsafetyresearch/building-safe-artificial-intelligence-52f5f75058f1)"
- "[HCH](https://ai-alignment.com/strong-hch-bedb0dc08d4e)"
- "[indirect normativity](https://ordinaryideas.wordpress.com/2012/04/21/indirect-normativity-write-up/)"
- "[VNM utility theorem](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem)"
- "[AIXI](https://arxiv.org/abs/1202.6153)"
- "[reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning)"
- "[inverse reinforcement learning](https://people.eecs.berkeley.edu/~russell/papers/colt98-uncertainty.pdf)"
- "[much](http://people.eecs.berkeley.edu/~russell/classes/cs294/s11/readings/Abbeel+Ng:2004.pdf)"
- "[work](http://www.jonathanho.me/files/HoErmon_NIPS2016.pdf)"
