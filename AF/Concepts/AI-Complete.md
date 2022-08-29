---
_id: 5f5c37ee1b5cdee568cfb2a6
title: AI-Complete
href: https://lesswrong.com/tag/ai-complete
slug: ai-complete
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:09:57.762Z'
---
# AI-Complete

A problem is considered **AI-complete** or **AI-hard** if solving it is equivalent to creating [Artificial General Intelligence](https://wiki.lesswrong.com/wiki/AGI).

For example, natural language processing (or machine translation) is often considered AI-complete because understanding arbitrary language constructs seems to require broad general knowledge. The term was coined by the computer scientist Fanya Montalvo as an analogy with NP-complete, a class of problems in [complexity theory](https://wiki.lesswrong.com/wiki/complexity_theory). Problems labeled AI-complete like graceful degradation or computer vision tend to be framed at human-level intelligence; there may be many problems that AIs can solve that humans cannot. While mathematical formalizations of the class have been attempted, the term is usually used to communicate the qualitative difficulty of a problem.

Roman V. Yampolskiy proposed a [classification in AI-Complete, AI-Hard and AI-Easy problems](http://louisville.edu/speed/computer/tr/UL_CECS_02_2011.pdf/at_download/file):

- A problem _C_ is AI-Complete if it has two properties:
    - It is in the set of AI problems (Human Oracle solvable);
    - Any AI problem can be converted into _C_ by some polynomial time algorithm.

- A problem _H_ is AI-Hard if and only if there is an AI-Complete problem _C_ that is polynomial time Turing-reducible to _H_.

- A problem _X_ is AI-Easy if and only if there exists some AI problem _Y_ such that _X_ is polynomial-time Turing reducible to _Y_. This means that given an oracle for _Y_, there exists an algorithm that solves _X_ in polynomial time.

## References

- [AI-Complete, AI-Hard, or AI-Easy: Classification of Problems in Artificial Intelligence](http://louisville.edu/speed/computer/tr/UL_CECS_02_2011.pdf/at_download/file) by Roman V. Yampolskiy

## See also

- [[Fai-Complete|FAI-complete]]