---
title: Limits to Depth-Efficiencies of Self-Attention
href: https://papers.nips.cc/paper/2020/file/ff4dfdf5904e920ce52b48c1cef97829-Paper.pdf
---

==Where is the depth-to-width tradeoff for self-attention networks?==
- Wider than currently implemented.

[[@kaplan2020]] suggests an ideal $N = 12 \cdot L \cdot d_x^2$, where $L$ is the network depth, and $d_x$ is the network width.

> We show that the operation of stacking self-attention layers is so effective that it quickly saturates a capacity of the network’s width.

This depth threshold is $L(d_x) \sim \log(d_x)$. 

> In fact, the logarithmic dependence that we establish between the optimal depth and width clearly dictates that size increase should be mainly via widening from this point ( ∼ 100B models) onwards.