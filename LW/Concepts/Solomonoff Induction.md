---
_id: bTeiZr6YAEaSPQTC8
title: Solomonoff Induction
href: https://lesswrong.com/tag/solomonoff-induction
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:05:27.987Z'
---
# Solomonoff Induction

**Solomonoff induction** is an inference system defined by [Ray Solomonoff](https://en.wikipedia.org/wiki/Ray_Solomonoff) that will learn to correctly predict any computable sequence with only the absolute minimum amount of data. This system, in a certain sense, is the perfect universal prediction algorithm. 

To summarize it very informally, Solomonoff induction works by:

*   Starting with all possible hypotheses (sequences) as represented by computer programs (that generate those sequences), weighted by their simplicity (2^-^**^n^**, where **n** is the program length);
*   Discarding those hypotheses that are inconsistent with the data.

Weighting hypotheses by simplicity, the system automatically incorporates a form of [[Occam's Razor|Occam's razor]], which is why it has been playfully referred to as *Solomonoff's lightsaber*.

Solomonoff induction gets off the ground with a solution to the "problem of the priors". Suppose that you stand before a universal [prefix Turing machine](http://www.scholarpedia.org/article/Algorithmic_complexity#Prefix_Turing_machine) *U*. You are interested in a certain finite output string *y*~0~. In particular, you want to know the probability that *U* will produce the output *y*~0~ given a random input tape. This probability is the **Solomonoff** ***a priori*** **probability** of *y*~0~.

More precisely, suppose that a particular infinite input string *x*~0~ is about to be fed into *U*. However, you know nothing about *x*~0~ other than that each term of the string is either 0 or 1. As far as your state of knowledge is concerned, the *i*th digit of *x*~0~ is as likely to be 0 as it is to be 1, for all *i* = 1, 2, …. You want to find the *a priori* probability *m*(*y*~0~) of the following proposition:

(*) If *U* takes in *x*~0~ as input, then *U* will produce output *y*~0~ and then halt.

Unfortunately, computing the exact value of *m*(*y*~0~) would require solving the halting problem, which is undecidable. Nonetheless, it is easy to derive an expression for *m*(*y*~0~). If *U* halts on an infinite input string *x*, then *U* must read only a finite initial segment of *x*, after which *U* immediately halts. We call a finite string *p* a *self-delimiting program* if and only if there exists an infinite input string *x* beginning with *p* such that *U* halts on *x* immediately after reading to the end of *p*. The set 𝒫 of self-delimiting programs is the *prefix code* for *U*. It is the determination of the elements of 𝒫 that requires a solution to the halting problem.

Given *p* ∈ 𝒫, we write "prog (*x*~0~) = *p*" to express the proposition that *x*~0~ begins with *p*, and we write "*U*(*p*) = *y*~0~" to express the proposition that *U* produces output *y*~0~, and then halts, when fed any input beginning with *p*. Proposition (*) is then equivalent to the exclusive disjunction

  
⋁*~p~*~ ∈ 𝒫: ~*~U~*~(~*~p~*~) = ~*~y~*~0~(prog (*x*~0~) = *p*).  
Since *x*~0~ was chosen at random from {0, 1}*^ω^*, we take the probability of prog (*x*~0~) = *p* to be 2^ − ℓ(^*^p^*^)^, where ℓ(*p*) is the length of *p* as a bit string. Hence, the probability of (*) is

  
*m*(*y*~0~) := ∑*~p~*~ ∈ 𝒫: ~*~U~*~(~*~p~*~) = ~*~y~*~0~2^ − ℓ(^*^p^*^)^.  
 

## See also

*   [[Kolmogorov Complexity|Kolmogorov complexity]]
*   [[AIXI]]
*   [[Occam's Razor|Occam's razor]]

## References

*   [Algorithmic probability](http://www.scholarpedia.org/article/Algorithmic_probability) on Scholarpedia