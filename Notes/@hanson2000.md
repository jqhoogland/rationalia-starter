---
title: Long-Term Growth As A Sequence of Exponential Modes
href: https://mason.gmu.edu/~rhanson/longgrow.pdf
---

> A world product time series covering two million years is well fit by either a sum of four exponentials, or a constant elasticity of substitution (CES) combination of three exponential growth modes: “hunting,” “farming,” and “industry.”

> It seems quite unreasonable to expect an infinite series of faster and faster growth modes, since that leads to an infinite world product in finite time. But it may be reasonable to wonder if a world that has so far seen at least three distinct growth modes might see yet one more growth mode.

**Sum of exponentials** (1.8% err)

$$ \begin{aligned} Y_i(t) &=Y_{i-1}(t)+M_i(t) \\ M_i(t) &=c_i 2^{t / \tau_i} \end{aligned} $$

Optimize with min-square of logs.

**Hyperbolic** (9.6% err, $\alpha = 1.46, T=2004$)

$$Y(t) = c(T-t)^{-\alpha}$$

**CES-Combined Exponential** (1.7% err)
$$ Y_i(t)=\left(Y_{i-1}(t)^{a_i}+M_i(t)^{a_i}\right)^{1 / a_i}, $$


> By describing world product history as either a sum or CES-combination of exponentials, one seems to essentially be saying that among the thousands of large and important changes that the world economy has seen, only a handful are fundamentally big news    