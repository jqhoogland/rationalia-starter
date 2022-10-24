---
title: "Model soups: averaging weights of multiple fine-tuned models improves accuracy without increasing inference time"
href: https://arxiv.org/pdf/2203.05482.pdf
aliases:
  - Model soups
---

Merging models produced in different fine-tuning hyperparameter combinations produce better models. 

You can merge models by naively averaging their weights (by fine-tuning, they're already in the same error basins).

Greedy soups, where models are added iff they improve performance on the held-out validation set, are even better.

