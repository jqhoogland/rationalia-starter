---
type: model
href: https://openai.com/blog/instruction-following/
---

Fine-tuning with [[Reinforcement Learning from Human Feedback|RLHF]] makes InstructGPT more helpful, less toxic, more truthful, and less hallucinatory.

![](https://cdn.openai.com/instruction-following/draft-20220126f/methods.svg)


How to mitigate an "alignment tax" of compromised performance on other tasks?
> [D]uring RL fine-tuning we mix in a small fraction of the original data used to train GPT-3, and train on this data using the normal log likelihood maximization