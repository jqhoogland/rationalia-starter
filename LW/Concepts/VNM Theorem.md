---
_id: 2YcmB6SLtHnHRe3uX
title: VNM Theorem
href: https://www.lesswrong.com/tag/vnm-theorem
slug: vnm-theorem
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:19.218Z'
status: todo
---

# VNM Theorem

The **VNM theorem** is one of the classic results of Bayesian decision theory. It establishes that, under four assumptions known as the **VNM axioms**, a preference relation *must* be representable by maximum-expectation decision making over some real-valued utility function. (In other words, rational decision making is best-average-case decision making.)

Starting with some set of outcomes, **gambles** (or **lotteries**) are defined recursively. An outcome is a gamble, and for any finite set of gambles, a probability distribution over those gambles is a gamble.

Preferences are then expressed over gambles via a preference relation. if \\(A\\) is preferred to \\(B\\), this is written \\(A>B\\). We also have indifference, written \\(A\\sim{} B\\). If \\(A\\) is either preferred to \\(B\\) *or* indifferent with \\(B\\), this can be written \\(A \\geq{} B\\).

The four VNM axioms are:

1. **Completeness.** For any gambles \\(A\\) and \\(B\\), either \\(A>B\\), \\(B>A\\), or \\(A \\sim{} B\\).
2. **Transitivity.** If \\(A<B\\) and \\(B<C\\), then \\(A<C\\).
3. **Continuity.** If \\(A \\leq{} B \\leq{} C\\), then there exists a probability \\(p \\in{} \[0,1\]\\) such that  \\(pA+(1-p)C \\sim{} B\\). In other words, there is a probability which hits any point between two gambles.
4. **Independence.** For any \\(C\\) and \\(p \\in{} \[0,1\]\\), we have \\(A \\leq{} B\\) if and only if \\(pA + (1-p)C \\leq{} pB + (1-p)C\\). In other words, substituting \\(A\\) for \\(B\\) in any gamble can't make that gamble worth less.

In contrast to [[Utility Functions]], this tag focuses *specifically* on posts which discuss the VNM theorem itself.


%%

% START
Basic (and reversed card)
What is **VNM Theorem**?
Back: {TODO}
Tags: LessWrong
END

%%
	
