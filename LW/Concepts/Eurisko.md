---
_id: 5f5c37ee1b5cdee568cfb2bc
title: Eurisko
href: https://lesswrong.com/tag/eurisko
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:13:22.898Z'
---
# Eurisko

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/c2f1a794d8e6c31cb516e448c8e64a01c32784ed26ec9e6f.jpg)

An example concept in EURISKO (Lenat 83).

**EURISKO** (from Greek, *I discover*) was an AI project by Douglas Lenat. It was made from self-modifying heuristics, making it one of the first [[Recursive Self-Improvement|recursively self-improving]] systems. EURISKO had successes in a complex game called Traveller TCS, and in VLSI design. While neither code nor technical specifications were released, EURISKO has enjoyed legendary status.

## History

Lenat's Ph.D. project was a similar system called Automated Mathematician (AM). This project used hundreds of heuristics hand-coded by Lenat to modify simple pieces of Lisp code, looking for interesting concepts. AM had a fair amount of success, and won Lenat the IJCAI Computers and Thought Award.

Lenat wanted to to extend this outside the domain of mathematics. For EURISKO, he began with a large set of heuristics that were designed to search for other heuristics. Progress was slow until he began to write a language within Lisp to more concisely represent heuristics by decomposing them.

To test the system, he coded the rules and concepts of the role-playing game Traveller TCS into EURISKO. Lenat would leave EURISKO running each night, and check it in the morning. He would occasionally remove errors or unpromising heuristics from the system, or enter additional ones. Some discovered heuristics resembled viruses; one inserted its name as the creator of other useful heuristics, which would cause it to be used more often. EURISKO simulated many games with itself during this process. When Lenat took it to the competition, it was much more powerful than any other player, and won the competition. The next year, the organizers changed the rules one week before the competition. EURISKO was able to use its discovered heuristics to create a new fleet which once again won the competition. After this, the organizers told Lenat that if he entered again, they would cancel the competition, and he agreed not to.

## After EURISKO

EURISKO's ability, like that of AM, was greatly limited by the need to enter many new concepts and starting heuristics for every domain one wanted to use it for. This led Lenat to initiate the [[Cyc]] project, which is a database of millions of "common sense" concepts and facts, combined with an inference engine.

The status of the source code for EURISKO is unknown. Since Lenat originally stared the Cyc project for the purpose of supplying EURISKO with general knowledge, it is possible that he maintains the code for this purpose (perhaps under commercial ownership).

## Blog posts

- [...Recursion, Magic](http://lesswrong.com/lw/w6/recursion_magic/)

## See also

- [[Cyc]]
- [[Heuristic]]

## References

- Lenat, Douglas (1982). "AM: An artificial intelligence approach to discovery in mathematics as heuristic search". *Knowledge-Based Systems in Artificial Intelligence: 2 Case Studies*. New York: McGraw-Hill. ISBN 0070155577.
- Lenat, Douglas (March 1983). "[Eurisko: A program that learns new heuristics and domain concepts](http://dl.acm.org/citation.cfm?id=1644660)". *Artificial Intelligence* (Essex, UK: Elsevier Science Publishers Ltd) **21** (1-2): 61-98. [doi](https://wiki.lesswrong.com/index.php?title=Digital_object_identifier&action=edit&redlink=1):[10.1016/S0004-3702(83)80005-8](http://dx.doi.org/10.1016%2FS0004-3702%2883%2980005-8). [ISSN](https://wiki.lesswrong.com/wiki/International_Standard_Serial_Number) [0004-3702](http://worldcat.org/issn/0004-3702).
- Lenat, Douglas; Brown, J.S. (1984). "Why AM and EURISKO appear to work". *Artificial Intelligence* **23** (3): pp. 269–294. [doi](https://wiki.lesswrong.com/index.php?title=Digital_object_identifier&action=edit&redlink=1):[10.1016/0004-3702(84)90016-X](http://dx.doi.org/10.1016%2F0004-3702%2884%2990016-X).
- Johnson, George (1984). "[Eurisko, The Computer With A Mind Of Its Own](http://aliciapatterson.org/stories/eurisko-computer-mind-its-own)". *The APF Reporter* (Washington, DC: The Alicia Patterson Foundation) **7** (4).