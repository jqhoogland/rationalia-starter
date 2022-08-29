---
_id: tZsfB6WfpRy6kFb6q
title: Conservation of Expected Evidence
href: https://lesswrong.com/tag/conservation-of-expected-evidence
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:05:24.909Z'
---
# Conservation of Expected Evidence

**Conservation of Expected Evidence** is a consequence of probability theory which states that for every expectation of evidence, there is an equal and opposite expectation of counterevidence \[[Conservation of Expected Evidence|[1]]\]. Conservation of Expected Evidence is about both the direction of the update and its magnitude: a low probability of seeing strong evidence in one direction must be balanced by a high probability of observing weak counterevidence in the other direction \[[2](https://www.lesswrong.com/s/uLEjM2ij5y3CXXW6c/p/zTfSXQracE7TW8x4w#1___You_can_t_predict_that_you_ll_update_in_a_particular_direction__)\]. The mere *expectation* of encountering evidence–before you've actually seen it–should not shift your prior beliefs. It also goes by other names, including *the* [*law of total expectation*](https://en.wikipedia.org/wiki/Law_of_total_expectation) and *the law of iterated expectations*.

A consequence of this principle is that [[Absence of Evidence Is Evidence of Absence|absence of evidence is evidence of absence]].

Consider a hypothesis H and evidence (observation) E. [Prior](https://wiki.lesswrong.com/wiki/Prior) [probability](https://wiki.lesswrong.com/wiki/probability) of the hypothesis is P(H); [posterior](https://wiki.lesswrong.com/wiki/posterior) probability is either P(H|E) or P(H|¬E), depending on whether you observe E or not-E (evidence or counterevidence). The probability of observing E is P(E), and probability of observing not-E is P(¬E). Thus, [expected value](https://lessestwrong.com/tag/expected-value) of the posterior probability of the hypothesis is:

*P*(*H*|*E*) ⋅ *P*(*E*) + *P*(*H*|¬*E*) ⋅ *P*(¬*E*)

But the prior probability of the hypothesis itself can be trivially broken up the same way:

\\(\\begin{alignat}{2}P(H) & = P(H,E) + P(H,\\neg{E}) \\\& = P(H|E) \\cdot P(E) + P(H|\\neg{E}) \\cdot P(\\neg{E})\\end{alignat}\\)

Thus, expectation of posterior probability is equal to the prior probability.

In other way, if you expect the probability of a hypothesis to change as a result of observing some evidence, the amount of this change if the evidence is positive is

*D*~1~ = *P*(*H*|*E*) − *P*(*H*).

If the evidence is negative, the change is

*D*~2~ = *P*(*H*|¬*E*) − *P*(*H*).

Expectation of the change given positive evidence is equal to negated expectation of the change given counterevidence:

*D*~1~ ⋅ *P*(*E*) =  − *D*~2~ ⋅ *P*(¬*E*).

If you can *anticipate in advance* updating your belief in a particular direction, then you should just go ahead and update now. Once you know your destination, you are already there. 

Notable Posts
-------------

*   [Conservation of Expected Evidence](https://lessestwrong.com/lw/ii/conservation_of_expected_evidence/)
*   [Mistakes with Conservation of Expected Evidence](https://lessestwrong.com/posts/zTfSXQracE7TW8x4w/mistakes-with-conservation-of-expected-evidence-1)

See Also
--------

*   [Filtered evidence](https://lessestwrong.com/tag/filtered-evidence)