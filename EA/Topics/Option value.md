---
_id: uZpXNGLgJX5BuHhcm
title: Option value
href: https://forum.effectivealtruism.org/tag/option-value
type: tag
tags:
  - LessWrong
  - Topic
  - Tag
synchedAt: '2022-09-11T14:33:58.577Z'
---
# Option value

**Option value** is the value of being able to delay a decision. Within effective altruism, the idea has been used to argue for the importance of reducing [[EA/Topics/Existential risk|existential risk]], for deciding what choices effective altruists should make as a community, and for assessing [[Career choice|the value of different careers]]. Option value may also be useful for looking at problems such as [[Differential progress|differential progress]] and [[Climate change|climate change]].

The idea of option value was adapted from finance, and is heavily used in environmental economics to measure the value of delaying an irreversible decision. It arises as a result of the uncertainty of future costs and benefits, the ability to gain information over time, and the ability to delay a decision. When done in the typical fashion, orthodox [[Cost-benefit analysis|cost-benefit analysis]] ignores the second and last of those three conditions. In more sophisticated applications of cost-benefit analysis, however, consideration of option value allows for a better-optimized decision-making process.

A simple model
--------------

Dixit and Pindyck gave the simple example of a firm that has the option to invest in a factory that would produce one "widget" per year starting on the year of investment.^[\[1\]](#fntbpj1viob7s)^ The current price of the widget is $200. Next year the price of the widget will either rise to $300 or go down to $100 and will stay at that level permanently. The chance of either outcome happening is 50%. The cost of the investment is $1600 and the interest rate is 10%. We find that the net present value (NPV) is equal to:

\\(\\text{NPV} = -1600 + 200 + \\sum\\limits_{t=1}^\\infty \\frac{0.5 \\cdot 300+0.5 \\cdot 100}{1.1^t} = $600.\\)

The NPV is positive and a traditional cost-benefit analysis suggests the firm should invest. A more complex analysis, however, considers not only whether or not to invest, but also considers whether the investment would be better made now, or in the future. In this case, we can consider the option of waiting until next year when the price changes. Our traditional analysis now indicates that in a year, we would invest only if the price rises to $300:

\\(\\text{NPV} = 0.5 \\cdot 0 + 0.5 \\cdot \\left\[ \\frac{-1600}{1.1}+\\sum\\limits_{t=1}^\\infty \\frac{300}{1.1^t} \\right\] = $773.\\)

Even though we are now foregoing the current year sale at $200, we find that the NPV is higher if the firm delays the investment decision. Intuitively, we can understand that by ignoring the possibility of delaying the investment and of learning new information by waiting, the original NPV calculation boiled down to a "now or never" decision. In the second calculation, the firm waited and found the NPV to be higher. The option value of this investment decision is:

\\(\\text{OV} = 773 - 600 = $173.\\)

That is, even if delaying the decision creates additional costs, the firm should be willing to pay up to $173 for the ability to delay the investment decision.

Which option value are we talking about?
----------------------------------------

The term option value has been used in academic literature to describe three similar but distinct effects. To separate these different definitions, they are usually referred to as real option value, quasi-option value, and option value. This entry will focus on real option value and quasi option value. These two concepts are very similar, and at least one scholar has claimed that they are identical.^[\[2\]](#fns8stgyh7mr)^ The relationship between the two is explored further in the next section.

**Real option value** \- Real option value is defined as the difference between the expected value of an investment when the ability to wait and to resolve uncertainty over time is introduced, and the expected value of the investment according to NPV calculations without the possibility of waiting and investing later. The simple model presented above is an example of a real option value. Formulated by economists Avinash Dixit and Robert Pindyck, real option value is often denoted in the academic literature as OP\\(^{\\text{DP}}\\).^[\[3\]](#fnir9yrfs5aw)^

**Quasi-Option value** \- quasi-option value is the gain in value obtained by learning new information, conditional on delaying an irreversible development decision. For example, if a decision-maker is deciding whether to preserve or to develop a piece of land, where the future value of preservation is unknown and will be discovered at a later date, the quasi-option value is equal to the value of delaying the decision to develop until after the information pertaining to preservation is discovered. This concept was developed by Arrow and Fisher,^[\[4\]](#fnwchx23hrkaa)^ Henry,^[\[5\]](#fnvpfjkkei2u)^ and Hanemann,^[\[6\]](#fnztzqy9z0tvd)^ and is often referred to as OP\\(^{\\text{AFHH}}\\).

As expressed above, real option value and quasi-option value seem to be pointing to a very similar concept, approached from two different angles. We will examine the difference between them in the next section. First, however,  one last type of option value will be highlighted.

**Option value** \- Originally developed by B. A. Weisbrod^[\[7\]](#fnwdz1yfi9s6q)^ and expounded upon by Schmalensee,^[\[8\]](#fno6uzz3l4rue)^ Bishop,^[\[9\]](#fnto6gace80sm)^ and others. This type of option value is usually not given a prefix and is also significantly different than the definition of option value given here. Most notably it requires risk aversion, whereas real and quasi option value do not. Very briefly, this type of option value represents a willingness of consumers to pay a fee to preserve the option to use a service (such as a public park) even though they are likely to never use it.

To keep the introduction simple, this concept will not be addressed further. Still, readers should know that there are multiple different definitions with the name option value. Whil the term 'option value' has been used without a prefix to define the Weisbrod/Schmalensee approach, other authors often use it to describe the DP or AFHH option value. It is quite common for the term to be used without even being defined, sometimes leaving it unclear, or incorrectly assuming it does not matter which type of option value was intended. Because of this, it is prudent for readers to pay attention to what type of option value is being invoked, and for writers to ensure that they define the term before using it.

The difference between quasi and real option value
--------------------------------------------------

Quasi-Option value measures the gain in value achieved by taking into account the ability to delay an irreversible decision. This added value, however, does not necessarily mean that the decision should be deferred. Intuitively, the ability to delay the decision might strengthen the case to not invest now, but the investment might be so profitable that investing now is still the preferred option.

On the other hand, real option value **is** more clearly consolidates the economic analysis of the decision-maker's options. If the real option value is positive, then the decision-maker should delay the decision, while if it is negative, he should decide now.

To investigate this further, let's use some of AFHHs' notation.

In the AFHH model, The decision-maker can choose whether or not to undertake an irreversible investment decision. Let \\(d = 0\\) denote the decision not to invest, and \\(d = 1\\) denotes the decision to invest.

\\(\\hat{V}(d)\\) is the expected value of the decision when given the option to delay it until more information is discovered.

\\(V^*(d)\\) is the expected value of the decision when the decision-maker ignores the option of learning more information (similar to the original NPV estimate at the beginning of this article).

The decision tree according to the more basic decision rule \\(V^*(d)\\) is:

![](https://i.postimg.cc/JhjhMDnQ/Prior-decision-tree.png)

The decision tree according to the decision rule that allows waiting \\(\\hat{V}(d)\\) is:

![](https://i.postimg.cc/jdzKW0Ks/OV-decision-tree.png)

Quasi-Option value is:

OV\\(^{\\text{AFHH}} =\\hat{V}(0) - V^*(0)\\).

In other words, quasi-option value is equal to the added expected value of conservation by using the superior decision rule *conditional* on not developing (hence \\(d = 0\\) ). We can see this in the decision trees as the option of waiting on the complex decision tree minus the option of abandoning now on the simple decision tree.

It is important to note that the existence of quasi-option value doesn't imply that we should delay the investment decision. It is perfectly possible that, \\(\\hat{V}(1) > \\hat{V}(0)\\). In other words, the expected value of investing now may still be higher than the expected value of delaying the decision, even when taking into account the ability to learn more information.

Real option value, when converted into the notation of AFHH is as follows,

\\(\\text{OV}^{\\text{DP}} =\\hat{V}(0) - V^*(1).\\)

In this case, \\(\\hat{V}(0)\\) represents the value of keeping the option open to invest or not invest in the future (by not undertaking an irreversible decision now) whereas \\(V^*(1)\\) is the opportunity cost of this decision.

If the decision-maker chooses to undertake the irreversible investment, future information is of no value. Therefore,

\\(\\hat{V}(1) = V^*(1)\\).

From this, it follows that if the real option value is positive, then the decision-maker should delay the investment decision. As we saw, this is in opposition to quasi-option value.

\\(\\text{OV}^{\\text{DP}} =  \\hat{V}(0) - V^*(1) = \\hat{V}(0) - \\hat{V}(1) > 0 \\Leftrightarrow \\hat{V}(0) > \\hat{V}(1)\\).

We see this on the complex decision tree as the top branch (waiting), minus the bottom branch (proceeding now).

The bottom line is that these terms are referring to the same analysis, but are different numbers. This is critical because reporting a positive option value is ambiguous until the terms are clarified. Real option value is the value of exercising the option; if it is positive, it is better to wait. Quasi-option value, as shown above, instead shows the value of the ability to wait as opposed to abandoning now \\((\\hat{V}(0) - V^*(0))\\). Even if this is positive, it may be better to develop now \\((\\hat{V}(1))\\), if the value of developing now is higher than the value of delaying \\((\\hat{V}(0))\\). This arguably makes real option value a clearer summary of the economic benefits and costs of delaying the investment decision.

Connection to value of information
----------------------------------

Option value is closely related to the [[Value of information|value of information]] (VoI). Value of information, stated simply, is how much a piece of information is worth to a decision-maker were he to discover it. Whereas option value looks at information that will be discovered passively, simply by waiting, value of information deals with information that can be discovered (relatively) instantly, but that one must actively expend resources to find.

The decision tree looks very similar to that of option value.

![](https://i.postimg.cc/bNzgck6q/Vo-I-decision-tree.png)

Value of information measures the value of obtaining information. VoI can equally be defined as the amount a rational decision-maker should be willing to pay for information before making a decision.

Option value measures the value of the ability to wait and not make an irreversible decision. This value is derived (usually) from the information that is discovered by waiting. More specifically, real option value can be defined as the amount a rational decision-maker should be willing to pay for the option to delay an irreversible decision.

Further reading
---------------

Pearce, David W., Susana Mourato & Giles Atkinson (2006) [(Quasi) option value](http://doi.org/10.1787/9789264010055-11-en), in *Cost-Benefit Analysis and the Environment*, Organisation for Economic Co-operation and Development, pp. 145–154.  
*Pages 147 ff. give a useful example of option value.*

1.  ^**[^](#fnreftbpj1viob7s)**^
    
    Dixit, Avinash K. & Robert S. Pindyck (1994) [*Investment under Uncertainty*](https://en.wikipedia.org/wiki/Special:BookSources/978-0-691-03410-2), Princeton: Princeton University Press, p. 27.
    
2.  ^**[^](#fnrefs8stgyh7mr)**^
    
    Fisher, Anthony C. (2000) [Investment under uncertainty and option value in environmental economics](http://doi.org/10.1016/S0928-7655(00)00025-7), *Resource and Energy Economics*, vol. 22, pp. 197–204.
    
3.  ^**[^](#fnrefir9yrfs5aw)**^
    
    Dixit & Pindyck, [*Investment under Uncertainty*](https://en.wikipedia.org/wiki/Special:BookSources/978-0-691-03410-2)*.*
    
4.  ^**[^](#fnrefwchx23hrkaa)**^
    
    Arrow, Kenneth J. & Anthony C. Fisher (1974) [Environmental preservation, uncertainty, and irreversibility](http://doi.org/10.2307/1883074), *The Quarterly Journal of Economics*, vol. 88, pp. 312–319.
    
5.  ^**[^](#fnrefvpfjkkei2u)**^
    
    Henry, Claude (1974) [Investment decisions under uncertainty: The “irreversibility effect”](https://www.jstor.org/stable/1815248), *American Economic Review*, vol. 64, pp. 1006–1012.
    
6.  ^**[^](#fnrefztzqy9z0tvd)**^
    
    Hanemann, W. Michael (1989) [Information and the concept of option value](http://doi.org/10.1016/0095-0696(89)90042-9), *Journal of Environmental Economics and Management*, vol. 16, pp. 23–37.
    
7.  ^**[^](#fnrefwdz1yfi9s6q)**^
    
    Weisbrod, Burton A. (1964) [Collective-consumption services of individual-consumption goods](http://doi.org/10.2307/1879478), *The Quarterly Journal of Economics*, vol. 78, p. 471.
    
8.  ^**[^](#fnrefo6uzz3l4rue)**^
    
    Schmalensee, Richard (1972) [Option demand and consumer’s surplus: Valuing price changes under uncertainty](https://www.jstor.org/stable/1815201), *American Economic Review*, vol. 62, pp. 813–824.
    
9.  ^**[^](#fnrefto6gace80sm)**^
    
    Bishop, Richard C. (1982) [Option value: An exposition and extension](http://doi.org/10.2307/3146073), *Land Economics*, vol. 58, pp. 1–15.