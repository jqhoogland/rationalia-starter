---
title: Formal Algorithms for Transformers
href: https://arxiv.org/pdf/2207.09238.pdf
---

**Glossary & Notation**
- **Vocabulary**, $V$: A finite set of "**tokens**" (words, letters, or (usu.) sub-words)
- $\boldsymbol x \in V^*$: a sequence of tokens
- **Chunking**: the process of breaking apart examples longer than the maximal allowed length, $\ell_\max$

**Tasks**
- **Sequence Modeling (DTransformer)**. Learn a distribution $P(\boldsymbol x_n)$ over $V^*$
- **Sequence-to-sequence (sec2seq; EDTransformer)**: Learn a conditional distribution $P(\boldsymbol z_n| \boldsymbol x_n)$ over $V^* \times V^*$
- **Classification (ETransformer)**: Learn a conditional distribution $P(c|\boldsymbol x)$ over $C \times V^*$, where $C$ is a set of classes (usually $[1..N_c]$).

## Tokenization
Or how to represent text as a sequence of tokens.

**Options**
- **Character-level tokenization** (con: long sequences)
- **Word-level tokenization** (con: large, inflexible vocabularies) 
- **Subword tokenization** -> most popular nowadays

**Special tokens**: e.g.: 
- $\text{mask\_token} := N_V-2$
- $\text{bos\_token} := N_V - 1$ (beginning of string)
- $\text{eos\_token} := N_V - 1$ (end of string)

**Token embedding**

![[Pasted image 20221002104925.png]]

**Positional encoding**
- Requires a maximum sequence length $\ell_\max$.
- Can be learned or fixed in advance.
- Position is usually added to the token embedding to form the initial embedding.

![[Pasted image 20221002104950.png]] 

Putting it together

$$\boldsymbol e = \boldsymbol W_e[:, \boldsymbol x[t]] + \boldsymbol W_p[:, \boldsymbol p]$$

## Attention
- Current token is mapped to a **query** vector $\boldsymbol q \in \mathcal R^{d_\text{attn}}$
- Context tokens are mapped to **key** vectors $\boldsymbol k \in \mathcal R^{d_\text{attn}}$ and **value** vectors $\boldsymbol v \in \mathcal R^{d_\text{value}}$
- $\boldsymbol q^T \boldsymbol k$ measures the degree to which the current token $q$ is related to the context tokens.

![[Pasted image 20221002105508.png]]
![[Pasted image 20221002105804.png]]

![[Pasted image 20221002105812.png]]
![[Pasted image 20221002110203.png]]

**RMSnorm**: Set $\boldsymbol m = \boldsymbol \beta = 0$

![[Pasted image 20221002110212.png]]


## Architectures
- **Encoder-decoder** (e.g., the original [[@vaswani2017]])
- **Encoder-only** (e.g., [[BERT]]): 
	- Masked out internal tokens (set to a dummy `mask_token` with $p_\text{mask}$)
	- **GELU** instead of RELU: $$\text{GELU}(x) = x \cdot P_{X\sim\mathcal N(0, 1)}[X < x]$$
- **Decoder-only** (e.g., [[GPT]], [[Gopher]])
	- Autoregressive, i.e., predict the next token tasks.
	- Unidirectional not bidirectional

Main difference between encoder- and decoder-only is **attention masking** (and subtleties around activation functions, layer norms)