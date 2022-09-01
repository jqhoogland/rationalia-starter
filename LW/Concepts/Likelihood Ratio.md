---
_id: 5f5c37ee1b5cdee568cfb174
title: Likelihood Ratio
href: https://www.lesswrong.com/tag/likelihood-ratio
slug: likelihood-ratio
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:37.222Z'
status: todo
---

# Likelihood Ratio

A **likelihood ratio** is the ratio of two probabilities. It is often used to compare two hypotheses or models to measure the relative strength of evidence supporting them.

It is used in the [[Odds|odds form]] of [[Bayes' Theorem|Bayes' theorem]], the likelihood ratio is the relative probability of B being observed if hypothesis A is true, versus B being observed if hypothesis ¬A is true. Therefore, a Bayesian update can be calculated by converting the prior probability to odds, multiplying by the likelihood ratio, and converting the posterior odds back to probability. Knowing the probabilities for observing the evidence is unnecessary, only how many times more likely it is under one hypothesis than the other.

If the likelihood ratio is known, Bayesian updates are faster and more intuitive to calculate using the odds form. For example, if you know that A being true makes the observation of B twice as likely as when ¬A is true, the update can be calculated by converting the prior to odds, multiplying by two, and converting back. Additionally, if the prior is low, probability and odds can be approximated as each other (p=0.1 iff odds=0.111, and p=0.01 iff odds=0.0101), so the posterior probability can be approximated by skipping the conversion and simply multiplying by two.

## Blog Posts

- [Share likelihood ratios, not posterior beliefs](http://www.overcomingbias.com/2009/02/share-likelihood-ratios-not-posterior-beliefs.html) by [[Anna Salamon]] and [Steve Rayhawk](https://wiki.lesswrong.com/wiki/Steve_Rayhawk)

## See Also

- [[Bayes' Theorem|Bayes' theorem]] (`= [[Bayes' Theorem|Bayes' theorem]].status`)
- [[Evidence]] (`= [[Evidence]].status`)


%%

% START
Basic (and reversed card)
What is **Likelihood Ratio**?
Back: {TODO}
Tags: LessWrong
END

%%
	
