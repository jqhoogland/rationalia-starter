---
_id: JHYaBGQuuKHdwnrAK
title: Logical Uncertainty
href: https://lesswrong.com/tag/logical-uncertainty
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:59:52.148Z'
---
# Logical Uncertainty

**Logical Uncertainty** is probabilistic uncertainty about the implications of beliefs. (Another way of thinking about it is: uncertainty about computations.) Probability theory typically assumes **logical omniscience,** IE, perfect knowledge of logic. The easiest way to see the importance of this assumption is to consider Bayesian reasoning: to evaluate the probability of evidence given a hypothesis, \\(P(e|h)\\), it's necessary to know what the implications of the hypothesis are. However, realistic agents cannot be logically omniscient.

See Also: [[Logical Induction]]

Motivation
----------

Is the googolth digit of pi odd? The probability that it is odd is, intuitively, 0.5. Yet we know that this is definitely true or false by the rules of logic, even though we don't know which. Formalizing this sort of probability is the primary goal of the field of logical uncertainty.

The problem with the 0.5 probability is that it gives non-zero probability to false statements. If I am asked to bet on whether the googolth digit of pi is odd, I can reason as follows: There is 0.5 chance that it is odd. Let P represent the actual, unknown, parity of the googolth digit (odd or even); and let Q represent the other parity. If Q, then anything follows. (By the Principle of Explosion, a false statement implies anything.) For example, Q implies that I will win $1 billion. Therefore the value of this bet is at least $500,000,000, which is 0.5 * $1,000,000, and I should be willing to pay that much to take the bet. This is an absurdity. Only expenditure of finite computational power stands between the uncertainty and 100% certainty.

Logical Uncertainty & Counterfactuals
-------------------------------------

Logical uncertainty is closely related to the problem of [counterfactuals](/tag/counterfactuals). Ordinary probability theory relies on counterfactuals. For example, I see a coin that came up heads, and I say that the probability of tails was 0.5, even though clearly, given all air currents and muscular movements involved in throwing that coin, the probability of tails was 0.0. Yet we can imagine this possible impossible world where the coin came up tails. In the case of logical uncertainly, it is hard to imagine a world in which mathematical facts are different.

References
----------

*   [Questions of Reasoning Under Logical Uncertainty](https://intelligence.org/files/QuestionsLogicalUncertainty.pdf) by Nate Soares and Benja Fallenstein.