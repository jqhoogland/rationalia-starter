---
href: https://colab.research.google.com/drive/1
---

> **My most important claim is that grokking has a deep relationship to phase changes**.

If a model is trained on these limited data with high regularisation, then that the model shows [[double descent|grokking]].

**Speculation**
- Phase changes occur for any specific circuit in a model, and so occur all the time in larger models. Smooth loss curves are actually the average of many small phase changes

> "in practice, neural networks empirically do form sophisticated circuits like this, involving several parts interacting in non-trivial, algorithmic ways"

Why?
- **A lottery ticket hypothesis-inspired explanation:** We start with a superposition of many circuits & SGD reinforces relevant ones
- **A random walk explanation:** network walks around until lucky.
- **An evolutionary explanation**: piecemeal from simpler, fully functional components. Can't be the whole story.

%% If smooth loss functions are really just the sum of many tiny phase changes, then we should be able to theoretically predict scaling coefficients for loss given model size & training time. %%

# Future Directions

(Copied verbatim)

-   **Investigating the 'phase changes are everywhere' hypothesis**.
    -   Focusing on larger models on complex tasks
        -   Training a larger model that we know how to interpret, making many checkpoints and inspecting circuits during training
            -   Training a [small SoLU transformer](https://transformer-circuits.pub/2022/solu/index.html) (1L is particularly easy to interpret)
            -   Training Inception and looking for [curve circuits](https://distill.pub/2020/circuits/curve-circuits/)
        -   Looking for emergent capabilities in open source well-checkpointed training runs (Eg [Mistral](https://github.com/stanford-crfm/mistral) and [GPT-J](https://the-eye.eu/public/AI/GPT-J-6B/previous_checkpoints/)) 
            -   Performance on benchmarks or specific questions from a benchmark
            -   Simple algorithmic tasks - eg few shot learning, addition, sorting words into alphabetical order, completing a rhyming couplet, matching open and close brackets
            -   Soft induction heads, eg [translation](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html#performing-translation)
            -   Look at attention heads on various texts and see if any have recognisable attention patterns (eg start of word, adjective describing current word, syntactic features of code like indents or variable definitions, most recent open bracket, etc).
            -   [Wei et al](https://arxiv.org/pdf/2206.07682.pdf) is a good source for other ideas
    -   More elaborate toy problems that involve several different tasks
        -   Eg, training a model with separate heads for modular addition, subtraction, multiplication, etc. Do we see separate phase changes?
    -   Training models for the other tasks in the grokking paper with more data, and seeing if we see phase changes but no grokking.
-   **Investigating the 'phase changes are inherent to composition' hypothesis**
    -   If we directly look at the gradients on different components of the circuit, do we see this mutual reinforcement and cascading?
    -   Can we show this analytically in some toy setting? What are the minimal properties we need to see phase changes?
        -   I predict the most tractable will be skip trigrams, given how simple they are. We can take even simpler versions, by making the only parameters a QK and OV matrix, removing the attention softmax, etc.
    -   Are phase changes specific to weirdnesses of the Adam optimizer? Do we get them for SGD or Momentum?
        -   **Note:** Once a model has memorised, loss can be around 1e-7. SGD gradients scale with loss while Adam is normalised, so you'll need to increase your learning rate a lot. 
    -   [Barak et al](https://arxiv.org/pdf/2207.08799.pdf) may be another good setting to analyse - looking for phase changes in the k-bit parity problem
-   **Loose threads** in this project
    -   Interpreting my other tasks with phase changes, and examining the circuits
        -   Preliminary investigation shows that 5 digit addition is using a variant of the trig based algorithm
    -   Interpreting the memorisation circuit in the modular addition transformer - understanding memorisation in transformers seems exciting to me!
        -   This is likely easiest on random labels with no structure.
    -   Why is there another phase change at epoch 43K?! What's the algorithm after this?
    -   There's some circuit competition between [eg frequency 25 and 31 from epoch 12K to 14K](https://colab.research.google.com/drive/1F6_1_cWXE5M7WocUcpQWp3v8z4b1jL20#scrollTo=QFWBHwfpjKM3), or between multiplying terms with the attention patterns or the ReLUs. What's up with that?
    -   Why do the given frequencies form, and not others? Why 5 or 6 frequencies, and not more or less?
    -   Train the model for a bunch of different random seeds, and see how consistent these observations are.[[30]](https://www.alignmentforum.org/posts/N6WM6hs7RQMKDhYjB/a-mechanistic-interpretability-analysis-of-grokking#fnfp9bte4go3u)
-   **Training dynamics.** Note that a 2L MLP can also grok modular addition, and may be easier to study.
    -   What happens when we train on interpretability-inspired metrics like excluded loss[[31]](https://www.alignmentforum.org/posts/N6WM6hs7RQMKDhYjB/a-mechanistic-interpretability-analysis-of-grokking#fnmieyfrnh9z)? Can we accelerate the grokking point? Can we disincentivise it? Can we incentivise or disincentivise specific frequencies?
    -   How do forms of regularisation other than weight decay affect the model and its inductive biases. 
    -   How and why does the model learn to form separate clusters of neurons? Can we predict neuron clustering in advance? Can we manually shift the initialisation to change the clustering?
    -   Can we replicate a [lottery ticket-style approach](https://arxiv.org/abs/1803.03635) here? What subnetworks are useful for solving this problem? And if only some subnetworks are useful, why do all neurons ultimately end up being used?
-   **How general is this algorithm?** Can we find Fourier-style algorithms in LLMs? Especially when they learn to do addition
    -   Note, I expect this to be much easier to detect in models that tokenize each digit separately - the GPT-3 tokenizer completely breaks place value: `28|79|23|598|23|45|987|249|234|0000|23|47|89|03|00000|700|9|02|10`. Sadly, the only tokenizer I know of like this is [PaLM's](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html).
    -   The GPT-3 tokenizer _mostly_ creates 2 digit tokens, so I'd start by trying to use a linear probe to extract cos(w(z)),sin(w(z)) in base 100 from the model for each frequency, where z is the correct output digit (or possible the output if you incorrectly carry a 1)
