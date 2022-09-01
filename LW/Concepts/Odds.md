---
_id: 5f5c37ee1b5cdee568cfb278
title: Odds
href: https://www.lesswrong.com/tag/odds
slug: odds
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:33.362Z'
status: todo
---

# Odds

**Odds** are an alternate way of expressing probabilities, which simplifies the process of updating them with new evidence. The odds of A is P(A)/P(¬A). The ratio of two odds is called an odds ratio, and the ratio of two probabilities is called a likelihood ratio. Every probability maps to an odds and vice versa, but in some circumstances odds are more useful due to their mathematical properties. While probabilities have a range of 0 to 1, odds have a range of 0 to ∞.

## Odds Form of Bayes' Rule

Bayes' Rule can be expressed in terms of odds: *Posterior* *odds* = *Prior* *odds* × *Likelihood* *ratio*.

The likelihood ratio is the relative probability of B being observed if hypothesis A is true, versus B being observed if hypothesis ¬A is true. Therefore, a Bayesian update can be calculated by converting the prior probability to odds, multiplying by the likelihood ratio, and converting the posterior odds back to probability. Knowing the probabilities for observing the evidence is unnecessary, only how many times more likely it is under one hypothesis than the other.

If the likelihood ratio is known, Bayesian updates are faster and more intuitive to calculate using the odds form. For example, if you know that A being true makes the observation of B twice as likely as when ¬A is true, the update can be calculated by converting the prior to odds, multiplying by two, and converting back. Additionally, if the prior is low, probability and odds can be approximated as each other (p=0.1 iff odds=0.111, and p=0.01 iff odds=0.0101), so the posterior probability can be approximated by skipping the conversion and simply multiplying by two.

## Proof of Equivalence of the Two Forms

\\(P(A|B) = P(B|A)\\frac{P(A)}{P(B)}\\)

\\(P(\\neg A|B) = P(B|\\neg A)\\frac{P(\\neg A)}{P(B)}\\)

\\(\\frac{P(A|B)}{P(\\neg A|B)} = \\frac{P(B|A)}{P(B|\\neg A)}\\frac{P(A)}{P(\\neg A)}\\)

Thus, in order to find the posterior odds \\(\\frac{P(A|B)}{P(\\neg A|B)},\\) one simply multiplies the prior odds \\(\\frac{P(A)}{P(\\neg A)}\\) by the likelihood ratio \\(\\frac{P(B|A)}{P(B|\\neg A)}\\).

## Odds, a:b, and Probability

Odds are commonly written as the ratio of two numbers separated by a colon. For example, if P(A) = 2/3, the odds would be 2, but this would most likely be written as 2:1.

The relation between odds, a:b, and probability, p is as follows:

*a* : *b* = *p* : (1 − *p*)

\\(p = \\frac{a}{a+b}\\)

Suppose you have a box that has a 5% chance of containing a diamond. You also have a diamond detector that beeps half of the time if there is a diamond, and one fourth of the time if there is not. You wave the diamond detector over the box and it beeps.

The prior odds of the box containing a diamond are 1:19. The likelihood ratio of a beep is 1/2:1/4 = 2:1. The posterior odds are 1:19 * 2:1 = 2:19. This corresponds to about a probability of 2/21, which is about 0.095 or 9.5%.

## See Also

- [[Log odds|Log odds]] (`= [[Log odds|Log odds]].status`)
- [[Likelihood Ratio|Likelihood ratio]] (`= [[Likelihood Ratio|Likelihood ratio]].status`)


%%

% START
Basic (and reversed card)
What is **Odds**?
Back: {TODO}
Tags: LessWrong
END

%%
	
