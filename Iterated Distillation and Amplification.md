---
type: post
_id: SoFTdG7hkedBY7Lz8
title: Iterated Distillation and Amplification
slug: iterated-distillation-and-amplification
href: >-
  https://www.lesswrong.com/events/SoFTdG7hkedBY7Lz8/iterated-distillation-and-amplification
synchedAt: '2022-10-08T13:06:26.238Z'
tags:
  - Post
author: null
status: todo
---

Cf. AlphaGoZero

> AGZ’s policy network **p** is the learned model. At each iteration, AGZ selects moves by an expensive Monte Carlo Tree Search (MCTS) which uses policy **p**as its prior; **p** is then trained to directly predict the distribution of moves that MCTS ultimately settles on. In the next iteration, MCTS is run using the new more accurate **p**, and **p** is trained to predict the eventual outcome of _that_ process, and so on. After enough iterations, a fixed point is reached — **p** is unable to learn how running MCTS will change its current probabilities.

> MCTS is an _amplification_ of **p** — it uses **p** as a subroutine in a larger process that ultimately makes better moves than **p** alone could. In turn, **p** is a _distillation_ of MCTS: it learns to directly guess the results of running MCTS, achieving comparable performance while short-cutting the expensive computation. The idea of IDA is to use the basic iterated distillation and amplification procedure in a much more general domain.

In pseudocode:
```python
def IDA(H):  
   A <- random initialization
   repeat:
      A <- Distill(Amplify(H, A))

def Distill(overseer):    
   """
   Returns an AI trained using narrow, robust techniques to 
   perform a task that the overseer already understands how to 
   perform. 
   """

def Amplify(human, AI):   
   """  
   Interactive process in which human uses many calls to AI to     
   improve on human's native performance at relevant task(s).    
   """
```

**Requirements**
1. Distill must robustly preserve alignment
2. Amplify must robustly preserve alignment
3. "_At least some human experts are able to iteratively apply amplification to achieve arbitrarily high capabilities at the relevant task:"


# Related

- "[here](https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616)"
- "[Google Group](https://groups.google.com/forum/#!topic/overcomingbiasnyc/52JUg1wGVcA)"