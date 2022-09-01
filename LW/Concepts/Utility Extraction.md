---
_id: 5f5c37ee1b5cdee568cfb2dc
title: Utility Extraction
href: https://www.lesswrong.com/tag/utility-extraction
slug: utility-extraction
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:19.250Z'
status: todo
---

# Utility Extraction

**Utility extraction** is the semi-automatic acquisition of decision maker's [preferences](https://wiki.lesswrong.com/wiki/preferences) about the different outcomes of a decision problem. Extracting human preferences would be of great importance in order to implement them in a [Friendly AI](https://wiki.lesswrong.com/wiki/Friendly_AI), preventing AI’s goals differing from ours in case of a "[hard takeoff](https://wiki.lesswrong.com/wiki/hard_takeoff)". However, human values can be [[Complexity of Value|difficult to specify]].

See also: [Value Learning](/tag/value-learning), [Inverse Reinforcement Learning](/tag/inverse-reinforcement-learning)

Research has focused on three different areas:

- eliciting the [[Utility Functions|utility function]] based on a database of already elicited utility functions;
- iterative reﬁnement of the decision maker’s current utility function using a [value of information](http://lesswrong.com/lw/85x/value_of_information_four_examples/) approach;
- eliciting the utility function based on a database of observed behavioral patterns.

The last approach implies that preferences are reﬂected in the behavior, and that the decision maker is behavioral consistent. As real-world behaviors and decisions are often not consistent, methods based on such assumptions can extract only trivial utility functions.

Thomas D. Nielsen and Finn V. Jensen ([Learning a decision maker’s utility function from (possibly) inconsistent behavior](http://people.cs.aau.dk/~tdn/papers/nielsen-jensen-04-ai.pdf)) were the first describing two algorithms that can take into account inconsistent behaviors. Inconsistent choices are interpreted as random deviations from an underlying “true” utility function.

Another possibility is described in [The Singularity and Machine Ethics](http://intelligence.org/files/SaME.pdf) by Luke Muehlhauser and Louie Helm. Research has recently postulated that the neural encoding of human values results from an interaction of two kinds of valuation processes: “model-free” processes, based on simplified past experience (e.g. habits and reinforcements), and “model-based” processes, associated with deliberative, computationally expensive goal-directed behavior. According to Muehlhauser and Helm inconsistent choices can be interpreted as deviations produced by non-model-based valuation systems; predictions on when and to what extent model-based choices are “overruled” by the non-model-based valuation systems are provided by neuroscientific research.

## Further Reading & References

- [A brief tutorial on preferences in AI](http://lesswrong.com/lw/a73/a_brief_tutorial_on_preferences_in_ai/) by Luke Muehlhauser
- [Learning a decision maker’s utility function from (possibly) inconsistent behavior](http://people.cs.aau.dk/~tdn/papers/nielsen-jensen-04-ai.pdf) by Thomas D. Nielsen and Finn V. Jensen
- [The Singularity and Machine Ethics](http://intelligence.org/files/SaME.pdf) by Luke Muehlhauser and Louie Helmis
- [Learning What to Value](http://intelligence.org/files/LearningValue.pdf) by Daniel Dewey

## See Also

- [[Complexity of Value|Complexity of value]] (`= [[Complexity of Value|Complexity of value]].status`)
- [[Utility Functions|Utility function]] (`= [[Utility Functions|Utility function]].status`)
- [[Decision Theory|Decision theory]] (`= [[Decision Theory|Decision theory]].status`)


%%

% START
Basic (and reversed card)
What is **Utility Extraction**?
Back: {TODO}
Tags: LessWrong
END

%%
	
