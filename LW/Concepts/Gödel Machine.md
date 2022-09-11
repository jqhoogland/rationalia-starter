---
_id: 5f5c37ee1b5cdee568cfb29c
title: Gödel Machine
href: https://www.lesswrong.com/tag/gödel-machine
slug: gödel-machine
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:41.431Z'
status: todo
---

# Gödel Machine

A **Gödel machine** is an approach to [[Artificial General Intelligence]] that uses a [[Recursive Self-Improvement|recursive self-improvement]] architecture proposed by Jürgen Schmidhuber. It was inspired by the mathematical theories of Kurt Gödel, where one could always find a mathematical truth or axiom that if attached to a formal system would make it stronger. A Gödel Machine is a universal problem solver that will make provably optimal self-improvements – self-improvements which can be proved to better maximize its [[Utility|utility]].

Schmidhuber’s design consists of a *solver*, which attempts to solve the goals set for the machine, and a *searcher*, which has access to a set of axioms which completely describe the machine. One example design[^1^](#fn1) contains:

- **Hardware axioms** describing the hardware, formally specifying how certain components of the machine state (other than environmental inputs) may change from one cycle to the next.
- **Reward axioms** defining the computational costs of any hardware instruction, and physical costs of output actions, such as control signals.
- **Environment axioms** restricting the way the environment will produce new inputs in reaction to sequences of outputs.
- **Uncertainty axioms** (such as standard axioms of probability theory), **string manipulation axioms**.
- **Initial state axioms**, with information about how to reconstruct the initial state or parts thereof.
- **Utility axioms** describing the overall goal in the form of a utility function.

The searcher may completely rewrite any part of the machine, provided that it can produce a formal proof showing that such a rewrite will further the system’s goals, and that no other re-write can be proved to be more useful in a reasonable amount of time. According to Schmidhuber, this approach is globally optimal and it will not get stuck at local optimals. This is because the machine has to prove that it is not more useful to continue the proof search for alternative self-rewrites that could be more useful than the one just found.

The Gödel machine is often compared with Marcus Hutter's [[AIXI]], another formal specification for an AGI. AIXI is constructed in a way its average utility converges – also through self-improvements - asymptotically to the utility of an ideal [[Bayesianism|rational]] agent. However, different from a Gödel Machine, it usually assumes unlimited computing resources and it can never completely re-write its own code – its search code for optimizations is unmodifiable. Schmidhuber points out that the Gödel machine could start out by implementing AIXI as its initial sub-program, and self-modify after it finds a proof that another algorithm will be more optimal.

## References

1. Jürgen Schmidhuber (2009) [Ultimate Cognition à la Gödel](http://www.idsia.ch/~juergen/ultimatecognition.pdf↩). Cogn Comput (2009) 1:177–193.

## External Links

- [Gödel Machine Homepage](http://www.idsia.ch/~juergen/goedelmachine.html) by Jürgen Schmidhuber
- [Summary of Gödel Machine](http://www.idsia.ch/~juergen/gmsummary.html) by Jürgen Schmidhuber

## See Also

- [[Artificial General Intelligence]]
- [[Recursive Self-Improvement|Recursive self-improvement]]
- [[Seed AI]]
- [[AIXI]]


%%

% START
Basic (and reversed card)
What is **Gödel Machine**?
Back: {TODO}
Tags: LessWrong
END

%%
	
