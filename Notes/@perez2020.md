---
title: Attention is Turing Complete
href: https://jmlr.org/papers/volume22/20-302/20-302.pdf
---


Vanilla transformers satisfy not only order invariance but proportion invariance (\# of times a token appears / length of total sequence).

Introducing positional encodings resolves this.

Main result:
> The class of Transformer networks with positional encodings is Turing complete. Moreover, Turing completeness holds even in the restricted setting in which the only non-constant values in positional embedding pos(n) of n, for n ∈ N, are n, 1/n, and 1/n2 , and Transformer networks have a single encoder layer and three decoder layers

Stronger result:
> Not only Transformers can recognize all languages accepted by Turing machines, i.e., the so-called recognizable or decidable languages; they can recognize all recursively enumerable or semi-decidable languages, which are those languages L for which there exists a TM that enumerates all strings in L