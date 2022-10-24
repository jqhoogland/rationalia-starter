---
title: Toward Transparent AI: A Survey on Interpreting the Inner Structures of Deep Neural Networks
href: https://arxiv.org/pdf/2207.13243.pdf
---

**Summary**: A metareview of interpretability techniques.

**Interpretability method**: any process that elucidates an AI's computations in human-understandable terms.
- **Inner interpretability method**: spec. for internal structures & representations.


Why interpretability? Identifying & fixing failures, determining accountability, raw curiosity, "microscope" AI.

# Taxonomy
![[Pasted image 20220930150813.png]]

**Legend**
- **Intrinsic**: during training
- **Post hoc**: after training

# Weights

## Continual Learning
Aka avoiding **catastrophic forgetting**
E.g.: specialize weights for certain input types, differentially updating weights, 

## Weight-masking
Learn a mask to isolate task-relevant weights

## Hazards
**Frivolous Weights**: many weights are unimportant

# Individual Neurons
## Dataset-Based
E.g.: look for examples (or class of examples) that maximally excite a given neuron 

## Feature Synthesis
E.g.: DeepDream. Create inputs that maximally/minimally activate a given neuron.

## Neural Perturbation and Ablation
Helps test counterfactuals & test causal relations.

## Gradient-Based Attribution

## Hazards

**Polysemantic Neurons**: networks may have Neurons that respond to unrelated features. 
- This makes interpretation more difficult & is exploitable for adversarial attacks.

**Frivolous Neurons**: either **prunable** or **redundant** neurons.
- Network compression is a possible solution.

## Subnetworks
- **Sparsity** can significantly simplify the analysis of subnetworks
- **Modularity** can be enforced (stringently in architecture or less stringently by initialization, regularization, etc.)
- **Modular Partitionings** analyze NN graph structure post-training.
- **Circuits Analysis**

# Internal Representations
- **Self-explaining systems** %% cf. chain-of-though prompting %%
- **Adversarial Training** has the occasional side-effect of improved interpretability
- **Disentanglement** looks at latent vectors.
- **Tokens & Attention**
- **Concept Vectors**
- **Probing**
- **Representation Comparison** 