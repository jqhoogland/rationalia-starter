---
href: https://arxiv.org/pdf/1706.03762.pdf
title: Attention Is All You Need
---

![[Pasted image 20221002095743.png]]


> An attention function can be described as mapping a query and a set of key-value pairs to an output, where the query, keys, values, and output are all vectors. The output is computed as a weighted sum of the values, where the weight assigned to each value is computed by a compatibility function of the query with the corresponding key.

![[Pasted image 20221002101609.png]]

Why scale by $\frac{1}{\sqrt{d_k}}$? 
- Possibly it helps because as $d_k$ gets larger, the dot product grows & we end up in small-gradient regions of the softmax.