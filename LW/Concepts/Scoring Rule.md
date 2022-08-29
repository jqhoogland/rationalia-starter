---
_id: 5f5c37ee1b5cdee568cfb121
title: Scoring Rule
href: https://lesswrong.com/tag/scoring-rule
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:13:19.177Z'
---
# Scoring Rule

In [[Decision Theory|decision theory]], a **scoring rule** is a measure of performance of probabilistic predictions - made under uncertainty.

As an example of a probabilistic prediction, consider a sports magazine dealing with horse races that gives the winning chance of each horse for each race the day before. If we gather data regarding those predictions and compare it to the actual results, we have a measure – a scoring rule - of the magazine’s performance. This scoring is almost always nonlinear, and there are many different transformations which are widely used.

## Proper scoring rules

A **proper scoring rule** is one that encourages the forecaster to be honest – that is, the [[Expected Value|expected]] payoff is maximized by accurately reporting personal beliefs about the predicted event, rather than by gaming the system. These rules include the Logarithmic scoring rule, Spherical scoring rule and Brier/Quadratic scoring rule.

The Brier score, for example, can be seen as a cost function. Essentially, it measures the mean squared difference between a set of predictions and the set of actual outcomes. Therefore, the lowest the score, the better calibrated the prediction system is. Its a scoring rule appropriated for binary of multiple discrete categories, but it should be used with ordinal variables. Mathematically, its an affine transformation of the simpler Quadratic scoring rule.

Logarithmic scoring rule

The logarithmic scoring rule assigns a negative payoff for all outcomes. The higher the score, the better calibrated the system is.

Score = log(abs(outcome - prediction))

where "outcome" is 1 or 0, and "prediction" is the probability on (0, 1) that the system assigned to the outcome that actually occurred.

## References

- Bickel, E.J. (2007). "Some Comparisons among Quadratic, Spherical, and Logarithmic Scoring Rules". Decision Analysis, 4, (2), 49–65.
- Tilmann Gneiting; Adrian E Raftery (March 2007). "Strictly Proper Scoring Rules, Prediction, and Estimation". Journal of the American Statistical Association 102 (477): 359-378. ([PDF](http://www.stat.washington.edu/raftery/Research/PDF/Gneiting2007jasa.pdf))
- [A Technical Explanation of Technical Explanation](http://yudkowsky.net/rational/technical)

## See also

- [[Technical Explanation|Technical explanation]]