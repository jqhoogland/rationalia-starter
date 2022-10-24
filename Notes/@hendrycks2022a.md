---
href: https://arxiv.org/pdf/2206.05862.pdf
title: X-Risk Analysis for AI Research
---

> [H]ow to make systems safer, how to make future systems safer, and finally how to make future AI systems safer.


### General Risk Analysis
- **Hazard**: source of danger with potential to harm.
	- **Inherent Hazard**: e.g., hazardous materials in chemical plant
	- **Systemic Hazard**: outside the system itself.
- **Exposure**: extent to which elements are exposed to harzards.
- **Vulnerability**: susceptibility to hazards.
- **Threat**: hazard with intent to exploit a vulnerability
- **Failure mode**: particular way a system might fail
- **Tail risk**: low-probability with large consequences
- **X-risk**: one that can permanently curtail humanity's long-term potential.

**Risk Equation**
$$\text{Risk} =\text{Hazard}\times\text{Exposure}\times\text{Vulnerability} / \text{Ability to Cope} $$

$\text{Ability to Cope}$ may be $0$ for AI.

**Nines of Reliability**
$p=90\%\implies k=1;\quad p=99.99\% \implies k=4$.

For Poisson-distributed X-risks, increasing the 9s is not subject to diminishing returns (it just keeps on increasing your expected survival).

**Safe design principles**
- **Redundancy**: remove single points of failure
- **Defense in depth**: multiple defenses
- **Transparency**
- **Principle of least privilege**: agents should have minimum permissions to accomplish tasks
- **Loose coupling**: to decreases cascading failures
- **Separation of duties**
- **Fail-safes**

**Systemic failures**
- "root cause" analyses are failed in that they detect only linear causality. In real-world situations, often the culprit is non-linear complex, & higher order.
- **Safety culture**
- **Safety feature costs** %% (e.g., "alignment tax") %%

![[Pasted image 20220929230958.png]]

**Three areas of safety research**
> AI security, transparency, and machine ethics. AI Security aims to make models cope in the face of adversaries. Transparency aims to help humans reason about and understand AI systems. Machine Ethics aims to create artificial agents that behave ethically, such as by not causing wanton harm

**Prioritize by**: importance, neglectedness, tractability.