---
_id: 5f5c37ee1b5cdee568cfb2c0
title: Evolutionary Algorithm
href: https://www.lesswrong.com/tag/evolutionary-algorithm
slug: evolutionary-algorithm
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:48.060Z'
status: todo
---

# Evolutionary Algorithm

Within artificial intelligence, **evolutionary algorithms** refer to a set of programming methods that draw inspiration from concepts stemming from evolutionary biology. More specifically, they are algorithms capable of selecting the most appropriate solution (individual) from a large set (population) through the evaluation of its fitness (how well it adapts to the problem, the environment). Evolution thus takes place through the repetition of such selection.

The most basic evolutionary algorithm structure is quite simple:

1. Create an initial population of solutions (usually at random)
2. Start iteration (each step is a generation)
    1. Select some pairs to be parents (selection)
    2. Combine pairs of parents to create offspring (recombination)
    3. Perform some mutation(s) on the offspring (mutation)
    4. Select some population members to be replaced by the new offspring based on their fitness to the environment (replacement)
3. Repeat

The use of this kind of programming has roots in the 1950s and has spread through many fields, from engineering, the financial market, chemistry, mathematics, and data mining. Nowadays there’s a great variety in evolutionary algorithms, ranging from simple genetic algorithms (seeking the solution through recombination or mutation) to neuroevolutionary algorithms (where the “genomes” are represented by artificial neural networks). They differ mainly in the amount of populations in use and the operators responsible for introducing change.

It seems possible that with enough computer power we would be able to produce a [[Superintelligence|superintelligence]] using a sufficiently complex evolutionary algorithm. This method does not require the understanding of intelligence needed to create an [AGI](https://wiki.lesswrong.com/wiki/AGI) nor the scanning equipment needed to create a [[Whole Brain Emulation|whole brain emulation]].

## Further Reading & References

- [Genetic Algorithms and Evolutionary Computation](http://www.talkorigins.org/faqs/genalg/genalg.html) by Adam Marczyk
- [Evolutionary Algorithms 1: Introduction](http://www.geatbx.com/docu/algindex.html) by Hartmut Pohlheim
- [Evolutionary Computation Repository](http://dis.ijs.si/filipic/ec/)
- Bäck, T., Fogel, D., Michalewicz, Z. (1997), Handbook of Evolutionary Computation, Oxford Univ. Press.
- Yang X.-S., (2010), "Nature-Inspired Metaheuristic Algorithms", 2nd Edition, Luniver Press

## See Also

- [[Evolution]]
- [[LW/Concepts/Evolutionary Psychology|Evolutionary psychology]]
- [[Optimization|Optimization process]]


%%

% START
Basic (and reversed card)
What is **Evolutionary Algorithm**?
Back: {TODO}
Tags: LessWrong
END

%%
	
