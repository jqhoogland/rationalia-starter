---
type: tag
_id: 5f5c37ee1b5cdee568cfb279
title: Log Odds
slug: log-odds
href: https://www.lesswrong.com/tag/log-odds
synchedAt: '2022-08-30T12:49:13.721Z'
tags:
  - LessWrong
  - Tag
  - Concept
status: todo
---

Log odds are an alternate way of expressing probabilities, which simplifies the process of updating them with new evidence. Unfortunately, it is difficult to convert between probability and log odds. The log odds is the log of the [[Odds|odds]]. Thus, the log odds of A are

\\(logit(P(A)) = log(P(A)/P(¬A))\\).

Updating Log odds
-----------------

\\(P(A|B) = P(B|A)\\frac{P(A)}{P(B)}\\)

\\(P(\\neg A|B) = P(B|\\neg A)\\frac{P(\\neg A)}{P(B)}\\)

\\(\\frac{P(A|B)}{P(\\neg A|B)} = \\frac{P(B|A)}{P(B|\\neg A)}\\frac{P(A)}{P(\\neg A)}\\)

\\(\\log\\left(\\frac{P(A|B)}{P(\\neg A|B)}\\right) = \\log\\left(\\frac{P(B|A)}{P(B|\\neg A)}\\right) + \\log\\left(\\frac{P(A)}{P(\\neg A)}\\right)\\)

\\(logit\\left(P(A|B)\\right) = \\log\\left(\\frac{P(B|A)}{P(B|\\neg A)}\\right) + logit\\left(P(A)\\right)\\)

Thus, in order to find the posterior log odds \\(logit(P(A|B))\\), one simply adds the prior log odds \\(logit(P(A))\\) by the log of the likelihood ratio \\(\\log\\left(\\frac{P(B|A)}{P(B|\\neg A)}\\right)\\).

The base of the logarithm determines what units the log odds are measured in, and doesn't matter so long as it's consistent. The natural log is usually used.

Examples
--------

Suppose you have a box that has a 5% chance of containing a diamond. You also have a diamond detector that beeps half of the time if there is a diamond, and one fourth of the time if there is not. You wave the diamond detector over the box and it beeps.

The prior log odds of the box containing a diamond are ln(1/19) = -2.94. The log of the likelihood ratio of a beep is ln((1/2)/(1/4)) = ln(2) = 0.69. The posterior log odds are -2.94 + 0.69 = -2.23. This corresponds to an odds ratio of e^-2.23 = 0.108:1, and thus a probability of 0.108/1.108 = 0.097 = 9.7%. The correct answer is actually 9.5%. There was error due to rounding.

See also
--------

* [Odds ratio](https://wiki.lesswrong.com/wiki/Odds_ratio)

* [[Likelihood Ratio|Likelihood ratio]]
