---

---

**Possible solutions**:
- Avoid superposition.
- Find the overcomplete basis.
- Hybrid approach


> But there's an obvious lower bound, which is likely too optimistic but is interesting to think about: what if models only expended flops on neuron activations, and recovered the compute of all non-activating neurons? In this world, it seems unlikely that superposition would be optimal: you could always split a polysemantic neuron into dedicated neurons for each feature with the same cost, except for the cases where there would have been interference that hurt the model anyways.


> (If anything, superposition offers a theory for why MoE models have not proven more effective for capabilities when the case for them seems so initially compelling!) But if one's goal is to create competitive models that don't have superposition, MoE models become interesting to think about. We don't necessarily think that they specifically are the right path forward – our goal here has been to use them as an example of why we think it remains plausible there may be ways to build competitive superposition-free models.


**Questions**
- Is there a statistical test for catching superposition?
- How can we control whether superposition and polysemanticity occur?
- Are there any models of superposition which have a closed-form solution?
- How realistic are these toy models?
- Can we estimate the feature importance curve or feature sparsity curve of real models?
- **Should we expect superposition to go away if we just scale enough?** Alternatively, should we expect superposition to remain a constant fraction of represented features, or even to increase as we scale?
	%% My intuition says that the number of features is purely a function of the dataset. Could interpretability offer an explanation for Kaplan et al.-style scaling curves? Would an answer to the former question allow us to predict the scaling coefficients? %%
- Are we measuring the maximally principled things?
- How important are polysemantic neurons?
- How many features should we expect to be stored in superposition?
- Does the apparent phase change we observe in features/neurons have any connection to phase changes in compressed sensing?
- How does superposition relate to non-robust features?
- To what extent can neural networks "do useful computation" on features in superposition?
- How does superposition change if features are not independent?
- Can models effectively use nonlinear representations?

What about macrosuperposition? I.e.: the existence of multiple models at once: [[@cheung2019]]