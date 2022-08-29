---
_id: HsiovoPND7mWbW5D9
title: Distributional Shifts
href: https://lesswrong.com/tag/distributional-shifts
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:47:13.872Z'
---
# Distributional Shifts

Many learning-theoretic setups (especially in the Frequentist camp) make an IID assumption: that data can be split up into samples (sometimes called episodes or data-points) which are independently sampled from identical distributions (hence "IID"). This assumption sometimes allows us to prove that our methods generalize well; see especially PAC learning. However, in real life, when we say that a model "generalizes well", we really mean that it works well on new data *which realistically has a somewhat different distribution*. This is called a **distributional shift** or a non-stationary environment*.*

This framework (in which we initially make an IID assumption, but then, model violations of it as "distributional shifts") has been used extensively to discuss robustness issues relating to AI safety -- particularly, inner alignment. We can confidently anticipate that traditional machine learning systems (such as deep neural networks) will perform well *on average*, so long as the deployment situation is statistically similar to the training data. However, as the deployment distribution gets further from the training distribution, catastrophic behaviors which are very rare on the original inputs can become probable.

This framework makes it sound like a significant part of the inner alignment problem would be solved if we could generalize learning guarantees from IID cases to non-IID cases. (Particularly if loss bounds can be given at finite times, not merely asymptotically, while maintaining a large, highly capable hypothesis class.)

However, this is not necessarily the case.

Solomonoff Induction avoids making an IID assumption, and so it is not strictly meaningful to talk about "distributional shifts" for a Solomonoff distribution. Furthermore, the Solomonoff distribution has constructive bounds, rather than merely asymptotic. (We can bound how difficult it is to learn something based on its description length.) Yet, inner alignment problems still seem very concerning for the Solomonoff distribution. 

This is a complex topic, but one reason why is that inner optimizers can potentially tell the difference between training and deployment. A malign hypothesis can mimic a benign hypothesis until a critical point where a wrong answer has catastrophic potential. This is called a [[Treacherous Turn|treacherous turn]]. 

So, although "distributional shift" is not technically involved, we can see that a critical difference between training and deployment is still involved: during training, wrong answers are always inconsequential. However, when you *use* a system, wrong answers become consequential. If the system can figure this difference out, then parts of the system can use it to "gate" their behavior in order to accomplish a treacherous turn. 

This makes "distributional shift" seem like an apt metaphor for what's going on in non-IID cases. However, buyer beware: eliminating IID assumptions might eliminate the literal source of the distributional shift problem without eliminating the broader constellation of concerns for which the words "distributional shift" are being used.