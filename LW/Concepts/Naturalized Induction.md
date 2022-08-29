---
_id: 5f5c37ee1b5cdee568cfb307
title: Naturalized Induction
href: https://lesswrong.com/tag/naturalized-induction
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:09:56.990Z'
---
# Naturalized Induction

**Naturalized induction** is an [open problem](https://wiki.lesswrong.com/wiki/open_problems_in_Friendly_AI) in [[Friendly Artificial Intelligence|Friendly AI]]: Build an algorithm for producing accurate generalizations and predictions from data sets, that treats itself, its data inputs, and its hypothesis outputs as [[Reductionism|reducible]] to its physical posits. More broadly, design a workable reasoning method that allows the reasoner to treat itself as fully embedded in the world it's reasoning about.

Naturalized inductors are associated with [naturalism](https://wiki.lesswrong.com/wiki/naturalism) in contrast to 'Cartesian' inductors, reasoners that assume a strict boundary between themselves and their environments. The standard example of an idealization of Cartesian induction is [[Solomonoff Induction|Solomonoff induction]], an [uncomputable](http://en.wikipedia.org/wiki/Computability) but theoretically fruitful specification of a hypothesis space, [[Priors|prior probability distribution]], and consistent reassignment of probabilities given data inputs. As Solomonoff induction is currently the leading contender for a formalization of universally correct — albeit physically unrealizable — inductive reasoning, an essential step in formally defining the problem of naturalized induction will be evaluating the limitations of Solomonoff inductors such as [[AIXI]].

Naturalized induction is a particular angle of approach on larger Friendly AI superproblems such as the [problem of hypotheses](https://wiki.lesswrong.com/wiki/problem_of_hypotheses) ('what formalism should a Friendly AI's hypotheses look like? how wide a range of possibilities should a Friendly AI be able to consider?') and the [problem of priors](https://wiki.lesswrong.com/wiki/problem_of_priors) ('before receiving any data, what prior probabilities should a Friendly AI assign to its hypotheses?'). Here the emphasis is on making sure the AI has a realistic conception of nature and of its own place in nature, whereas other angles of approach to the problem of hypotheses and the problem of priors will put the emphasis on issues like computational tractability, [leverage penalties](http://lesswrong.com/lw/h8k/pascals_muggle_infinitesimal_priors_and_strong), [[Logical Uncertainty|logical uncertainty]], or epistemic stability under self-modification. Subproblems specific to naturalized induction include:

1.  **Solomonoff bug-spotting**: finding limits on the robustness of AIXI approximations, e.g., formalizing or generalizing the [[Anvil Problem|anvil problem]]
2.  **hypothesis idiom selection**: selecting the right formalism for representing hypotheses, e.g., algorithmic, automata-theoretic, or model-theoretic
3.  **expressivity**: setting upper and lower bounds on the diversity of hypotheses given human uncertainty about exotic physics scenarios (e.g., time-travel, hypercomputation, or [unusual mathematical structures](http://en.wikipedia.org/wiki/Mathematical_universe_hypothesis))
4.  **first-person reductionism**: formalizing and defining reasonable priors for [bridge hypotheses](https://wiki.lesswrong.com/wiki/bridge_rule) linking agent-internal representations to physical posits
5.  **anthropics**: conditioning on the reasoner's existence, e.g., in scenarios of indexical uncertainty or self-replication

## Blog posts

- [Building Phenomenological Bridges‎](http://lesswrong.com/lw/jd9/building_phenomenological_bridges/) by Rob Bensinger
- [Bridge Collapse: Reductionism as Engineering Problem](http://lesswrong.com/lw/jlg/bridge_collapse_reductionism_as_engineering/) by Rob Bensinger
- [Can We Do Without Bridge Hypotheses?](http://lesswrong.com/lw/jiu/can_we_do_without_bridge_hypotheses/) by Rob Bensinger
- [Solomonoff Cartesianism](http://lesswrong.com/lw/jg1/solomonoff_cartesianism/) by Rob Bensinger
- [The Problem with AIXI](http://lesswrong.com/lw/jti/the_problem_with_aixi/) by Rob Bensinger
- [Formalizing Two Problems of Realistic World-Models](https://intelligence.org/files/RealisticWorldModels.pdf) by Nate Soares