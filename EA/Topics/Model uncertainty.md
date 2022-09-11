---
_id: 2SATxXs3BiyjqsQrb
title: Model uncertainty
href: https://forum.effectivealtruism.org/tag/model-uncertainty
type: tag
tags:
  - LessWrong
  - Topic
  - Tag
synchedAt: '2022-09-11T14:34:39.826Z'
---
# Model uncertainty

**Model uncertainty** is uncertainty surrounding a model itself, including the model's internal uncertainty estimates.

Uncertainty about models
------------------------

A useful [[Models|model]] is one that is simple enough to be analyzed easily, while nevertheless being similar enough to reality that this analysis can be used as a basis for predictions about the actual world. Unfortunately, it can be difficult to judge whether a given model is in fact similar enough. Furthermore, even if some predictions based on a model come true, this does not necessarily mean that next prediction based on the model will also come true.

A classic illustration of the importance of using appropriate models, as well as the difficulty of noticing when a model is inappropriate, is the 2007 financial crisis. In the years leading up to the crisis, many financial actors made investment decisions on the basis of models that assumed economic stability. Once this simplifying assumption ceased to hold, it became clear that their models had not sufficiently matched reality, and that the outcome of their decisions would be disastrous.

One strategy for dealing with uncertainty about the appropriateness of models is to construct and weight the predictions of multiple diverse models, rather than relying on a single one. However, in cases of radical uncertainty, not even this method may be enough. It may be that we think that there is a chance that none of the models that we have been able to generate is appropriate, and that we need to factor in what could happen if that were the case. Obviously, it is very hard to say something about such an uncertain case, but it may be possible to say some things. For instance, in their paper "Probing the Improbable," Toby Ord, Rafaela Hillerbrand, and Anders Sandberg argue that in cases where our models about certain low probability, high-risk events - such as [[EA/Topics/Existential risk|existential risks]] \- are wrong, the chance of disaster may be substantially higher than if the models are right.

Uncertainty within models
-------------------------

When using a model to make estimates, we will often be uncertain about what values the model's numerical parameters should have.

For example, if we decide to use 80,000 Hours' [[ITN framework|three-factor framework for selecting cause areas]], we may be unsure of what value to assign to a given cause area's tractability, or if we are attempting to to estimate the value of a donation to a bednet charity, we may be unsure how many cases of [[Malaria|malaria]] are prevented per bednet distributed.

It is important to make such uncertainty clear, both so that our views can be be more easily challenged and improved by others and so that we can derive more nuanced conclusions from the models we use.

By plugging in probability distributions or confidence windows, rather than individual estimates, for the values of the parameters in a given model, we can calculate an output for the model that also reflects uncertainty. However, it is important to be careful when performing such calculations, since small mathematical or conceptual errors can easily lead to incorrect or misleading results. A good tool for avoiding these sorts of errors is  Guesstimate.^[\[1\]](#fnw5a06yvp8z)^

It has also been argued, e.g. by Holden Karnofsky, that in cases with high uncertainty, estimates that assign an intervention a very high [[Expected value|expected value]] are likely to reflect some unseen bias in the calculation, and should therefore be treated with skepticism.

Further reading
---------------

Frigg, Roman & Stephan Hartmann (2006) [Models in science](https://plato.stanford.edu/entries/models-science/), *Stanford Encyclopedia of Philosophy*, February 27 (updated 4 February 2020).

Karnofsky, Holden (2011) [Why we can’t take expected value estimates literally (even when they’re unbiased)](https://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/), *The GiveWell Blog*, August 18 (updated 25 July 2016).  
*Approach to evaluating uncertain interventions.*

Karnofsky, Holden (2014) [Sequence thinking vs. cluster thinking](https://blog.givewell.org/2014/06/10/sequence-thinking-vs-cluster-thinking/), *The GiveWell Blog*, June 10 (updated 25 July 2016).

Ord, Toby, Rafaela Hillerbrand & Anders Sandberg (2010) [Probing the improbable: methodological challenges for risks with low probabilities and high stakes](http://doi.org/10.1080/13669870903126267), *Journal of risk research*, vol. 13, pp. 191–205.

External links
--------------

[Guesstimate](https://www.getguesstimate.com/). A tool for carrying out calculations under uncertainty.

Related entries
---------------

[[Credence|credence]] | [[Forecasting|forecasting]] | [[Sequence vs. cluster thinking|sequence vs. cluster thinking]] | [[Value of information|value of information]]

1.  ^**[^](#fnrefw5a06yvp8z)**^
    
    Gooen, Ozzie (2015) [Guesstimate: An app for making decisions with confidence (intervals)](https://forum.effectivealtruism.org/posts/Bt4nkCGHKBkDk97mn/guesstimate-an-app-for-making-decisions-with-confidence), *Effective Altruism Forum*, December 30.