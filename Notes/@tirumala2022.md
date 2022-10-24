---
title: Memorization Without Overfitting: Analyzing the Training Dynamics of Large Language Models
href: https://arxiv.org/pdf/2205.10770.pdf
---

> [W]e show that larger models can memorize a larger portion of the data before over-fitting and tend to forget less throughout the training process. 

- Exactly: they need to see a training example fewer times to achieve a desired memorization probability.
- Why?
	- Overfitting? No (at least not exclusively). Memorization gains occur before the overfitting regime (where the validation error starts to increase)
	- Learning rate? No. The observation holds after fixing learning rates. %% What about the size-invariant learning rate? I.e.: normalizing parameter updates over the entire network. %%

>We also ... find that models memorize nouns and numbers first; we hypothesize and provide empirical evidence that nouns and numbers act as a unique identifier for memorizing individual training examples


### Forgetting curves
Having trained a network to memorize a specific batch. How does memory decline with subsequent training?
- It declines exponentially *but not to 0* — to a fixed **forgetting baseline**, which grows approximately logarithmically with $N$

![[Pasted image 20221002134151.png]]

Do **replay methods** (i.e.,**spaced repetition**) help?
- It doesn't seem to change the forgetting baseline.

In summary, memorization is an interesting metric to study independently of cross-entropy.