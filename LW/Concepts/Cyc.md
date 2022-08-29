---
_id: 5f5c37ee1b5cdee568cfb2bb
title: Cyc
href: https://lesswrong.com/tag/cyc
slug: cyc
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:09:35.507Z'
---
# Cyc

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/animations/6551d2cea4338b35e2c81a8a17449cc8101e7a1db32fb3db.gif)

The official logo of [Cycorp](http://www.cyc.com/), the developer of Cyc.

**Cyc** (from 'encyclopedia') is a large AI project started and run by Douglas Lenat. It consists of a Knowledge Base of hand-coded "common sense" facts and an inference engine to deduce further facts.

## History

Lenat started the Cyc project in 1984 after being frustrated by the difficulty of hand-coding domain-specific knowledge for his previous AI project, [[Eurisko|EURISKO]]. Originally a project under the Microelectronics and Computer Technology Corporation, Cyc was split off in 1994 to form [Cycorp, Inc.](http://www.cyc.com/) In 2002, a subset of the Knowledge Base and functionality was released to the public under the [OpenCyc](http://www.opencyc.org/) project. OpenCyc has around 240,000 concepts and 2,000,000 assertions as of 2012. Access to the Cyc database is also available in the form of a research license, released in 2006 under the [ResearchCyc](http://researchcyc.cyc.com/) project. The full Cyc Knowledge Base contains around 500,000 concepts and 5,000,000 assertions as of 2012.

## Structure

Cyc uses a declarative language called CycL based on first-order logic. CycL was written in Lisp and has a similar syntactical appearance. The main lexical component is a set of concepts, also called constants, which begin with #$. These constants can be specific objects, collections of objects, or relations between objects. For example,

` (#$isa #$DouglasLenat #$AIResearcher)`

means "Douglas Lenat is an AI researcher." This is an example of a fact in the Knowledge Base.

Some sentences contain variables, and are called 'rules'. Variables begin with ?. For example, a rule about the #$isa predicate is

`(#$implies`  
`   (#$and   `  
`     (#$isa ?OBJ ?SUBSET)`  
`     (#$genls ?SUBSET ?SUPERSET))`  
`   (#$isa ?OBJ ?SUPERSET))`

The CycL syntax uses prefix notation and nested parentheses, unlike English. An English translation might read, "If a \[object\] is a \[subset\], and a \[subset\] is a subcollection of a \[superset\], then a \[object\] is a \[superset\]." Or, more concretely, if we let ?OBJ be "sandcat", ?SUBSET be "feline", and ?SUPERSET be "mammal", then the sentence reads, "If a sandcat is a feline, and a feline is a subcollection of mammals, then a sandcat is a mammal." In first-order logic (with set theory), this would be written as

(*sandcat* ∈ *Feline*) ∧ (*Feline* ⊂ *Mammals*) ⇒ *sandcat* ∈ *Mammals*

The inference engine would verify the truth of the parenthetical statements, and then the implication. Cyc can also provide a translation of these structures into a natural English sentence.

## Criticism

Many AI researchers criticize the Cyc project for its lack of theoretical foundation. For example, while the inference engine can perform deductive logic on the fact in the database, it cannot perform induction; that is, it cannot take new data and create new concepts or relations. Furthermore it remains 'crystalline' in the sense that statements are not evaluated probabilistically. Lenat has responded to some critiques by pointing out that Cyc is not trying to build a full AGI, and that it may be easily imported into other AI projects.

## See also

- [[Eurisko|EURISKO]]

## External links

- [http://www.cyc.com/](http://www.cyc.com/)
- [http://www.opencyc.org/](http://www.opencyc.org/)
- [I Heart CYC](http://www.overcomingbias.com/2008/12/i-heart-cyc.html) from Overcoming Bias

## References

- Lenat, Douglas; Guha, R. V. (1990). *Building Large Knowledge-Based Systems: Representation and Inference in the Cyc Project*. Addison-Wesley. ISBN 0-201-51752-3.
- Lenat, Douglas; Miller, George; Yokoi, Toshio (November 1995). "[CYC, WordNet, and EDR: Critiques and Responses](http://www.cs.uga.edu/~xiong/8351/lenat.pdf)". *Communications of the ACM* **38** (11): 45-48.
- Jared Friedman (October 2003). "[The Sole Contender for AI](http://www.scribd.com/doc/1814/An-Article-about-the-Cyc-Project)". *Harvard Science Review*.