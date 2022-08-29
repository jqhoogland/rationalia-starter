---
_id: 5f5c37ee1b5cdee568cfb25c
title: Kolmogorov Complexity
href: https://lesswrong.com/tag/kolmogorov-complexity
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:47:42.370Z'
---
# Kolmogorov Complexity

The **Kolmogorov Complexity** (sometimes called Algorithmic Complexity) of a set of data is the size of the shortest possible description of the data.  
  
*See also*: [[Solomonoff Induction]], [[AIXI]]

Algorithmic complexity is an inverse measure of compressibility. If the data is complex and random, the shortest possible description of it becomes longer. This is also one of the best definitions of randomness so far[^1^](#fn1). If the data has few regular patterns, it is difficult to compress it or describe it shortly, giving it a high Kolmogorov complexity and randomness. If there isn't any way to describe the data so that the description is shorter than the data itself, the data is incompressible. [^2^](#fn2)

More formally, the Kolmogorov complexity C(x) of a set x, is the size in bits of the shortest binary program (in a fixed programming language) that prints the set x as its only output. If C(x) is equal or greater than the size of x in bits, x is incompressible. [^3^](#fn3)

This notion can be used to state many important results in computational theory. Possibly the most famous is [Chaitin's incompleteness theorem](http://en.wikipedia.org/wiki/Kolmogorov_complexity#Chaitin.27s_incompleteness_theorem), a version of Gödel’s incompleteness theorem.

References
----------

1.  SIPSER, M. (1983) "A complexity theoretic approach to randomness". In Proceedings of the 15th ACM Symposium on the Theory of Computing, pages 330{335. ACM, New York.[↩](#fnref1)
2.  FORTNOW, Lance. "Kolmogorov Complexity" Available at: [http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4949&rep=rep1&type=pdf](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.120.4949&rep=rep1&type=pdf)[↩](#fnref2)
3.  LI, Ming. & VITANY, Paul. “Algorithmic Complexity”. Available at: [http://homepages.cwi.nl/~paulv/papers/020608isb.pdf](http://homepages.cwi.nl/~paulv/papers/020608isb.pdf)[↩](#fnref3)