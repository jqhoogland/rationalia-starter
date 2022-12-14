---
_id: 5f5c37ee1b5cdee568cfb326
title: Roko's Basilisk
href: https://www.lesswrong.com/tag/rokos-basilisk
slug: rokos-basilisk
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:24.414Z'
status: todo
---

# Roko's Basilisk

**Roko’s basilisk** is a thought experiment proposed in 2010 by the user Roko on the [*Less Wrong*](\"https://www.lesswrong.com/about\") community blog. Roko used ideas in [decision theory](\"https://www.lesswrong.com/tag/decision-theory\") to argue that a sufficiently powerful AI agent would have an incentive to torture anyone who imagined the agent but didn't work to bring the agent into existence. The argument was called a \\"basilisk\\" --named after the legendary reptile who can cause death with a single glance--because merely hearing the argument would supposedly put you at risk of torture from this hypothetical agent. A *basilisk* in this context is any information that harms or endangers the people who hear it.

Roko's argument was broadly rejected on *Less Wrong*, with commenters objecting that an agent like the one Roko was describing would have no real reason to follow through on its threat: once the agent already exists, it will by default just see it as a waste of resources to torture people for their past decisions, since this doesn't causally further its plans. A number of decision algorithms can follow through on acausal threats and promises, via the same methods that permit mutual cooperation in prisoner's dilemmas; but this doesn't imply that such theories can be blackmailed. And following through on blackmail threats against such an algorithm additionally requires a large amount of shared information and trust between the agents, which does not appear to exist in the case of Roko's basilisk.

*Less Wrong*'s founder, Eliezer Yudkowsky, banned discussion of Roko's basilisk on the blog for several years as part of a general site policy against spreading potential [information hazards](\"https://www.lesswrong.com/tag/information-hazards\"). This had the opposite of its intended effect: a number of outside websites began sharing information about Roko's basilisk, as the ban attracted attention to this taboo topic. Websites like RationalWiki spread the assumption that Roko's basilisk had been banned because *Less Wrong* users *accepted* the argument; thus many criticisms of *Less Wrong* cite Roko's basilisk as evidence that the site's users have unconventional and wrong-headed beliefs.

## Background

![](\"https://wiki.lesswrong.com/images/thumb/d/d1/Prisoner%27s_Dilemma_sequence.svg/380px-Prisoner%27s_Dilemma_sequence.svg.png\")A visual depiction of a prisoner's dilemma. T denotes the best outcome for a given player, followed by R, then P, then S.

Roko's argument ties together two hotly debated academic topics: Newcomblike problems in decision theory, and normative uncertainty in moral philosophy.

One example of a Newcomblike problem is the prisoner's dilemma. This is a two-player game in which each player has two options: \\"cooperate,\\" or \\"defect.\\" By assumption, each player prefers to defect rather than cooperate, all else being equal; but each player also prefers mutual cooperation over mutual defection.

For example, we could imagine that if both players cooperate, then both get $10; and if both players defect, then both get $1; but if one player defects and the other cooperates, the defector gets $15 and the cooperator gets nothing. (We can equally well construct a prisoner's dilemma [for altruistic agents](\"https://lesswrong.com/lw/tn/the_true_prisoners_dilemma/\").)

One of the basic open problems in decision theory is that standard \\"rational\\" agents will end up defecting against each other, even though it would be better for both players if they could somehow enact a binding mutual agreement to cooperate instead.

In an extreme version of the prisoner's dilemma that draws out the strangeness of mutual defection, one can imagine that one is playing against an identical copy of oneself. Each copy knows that the two copies will play the same move; so the copies know that the only two possibilities are 'we both cooperate' or 'we both defect.' In this situation, cooperation is the better choice; yet causal decision theory (CDT), the most popular theory among working decision theorists, endorses mutual defection in this situation. This is because CDT tacitly assumes that the two agents' choices are independent. It notes that defection is the best option assuming my copy is already definitely going to defect, and that defection is also the best option assuming my copy is already definitely going to cooperate; so, since defection dominates, it defects.

In other words, the standard formulation of CDT cannot model scenarios where another agent (or a part of the environment) is correlated with a decision process, except insofar as the decision causes the correlation. The general name for scenarios where CDT fails is \\"Newcomblike problems,\\" and these scenarios are ubiquitous [in human interactions](\"https://lesswrong.com/lw/l1b/newcomblike_problems_are_the_norm/\").

Eliezer Yudkowsky proposed an alternative to CDT, [timeless decision theory](\"https://www.lesswrong.com/tag/timeless-decision-theory\") (TDT), that can achieve mutual cooperation in prisoner's dilemmas — provided both players are running TDT, and both players have common knowledge of this fact. The cryptographer Wei Dai subsequently developed a theory that outperforms both TDT and CDT, called [updateless decision theory](\"https://www.lesswrong.com/tag/updateless-decision-theory\") (UDT).

Yudkowsky's interest in decision theory stems from his interest in the [AI control problem](\"https://www.youtube.com/watch?v=pywF6ZzsghI\"): \\"If artificially intelligent systems someday come to surpass humans in intelligence, how can we specify safe goals for them to autonomously carry out, and how can we gain high confidence in the agents' reasoning and decision-making?\\" Yudkowsky has argued that in the absence of a full understanding of decision theory, we risk building autonomous systems whose behavior is erratic or difficult to model.

The control problem also raises questions in moral philosophy: how can we specify the goals of an autonomous agent in the face of human uncertainty about what it is we actually want; and how can we specify such goals in a way that allows for moral progress over time? Yudkowsky's term for a hypothetical algorithm that could autonomously pursue human goals in a way compatible with moral progress is [*coherent extrapolated volition*](\"https://www.lesswrong.com/tag/coherent-extrapolated-volition\").

Because Eliezer Yudkowsky founded *Less Wrong* and was one of the first bloggers on the site, AI theory and \\"acausal\\" decision theories — in particular, *logical* decision theories, which respect logical connections between agents' properties rather than just the causal effects they have on each other — have been repeatedly discussed on *Less Wrong*. Roko's basilisk was an attempt to use Yudkowsky's proposed decision theory (TDT) to argue against his informal characterization of an ideal AI goal (humanity's coherently extrapolated volition).

## Roko's Post

![](\"https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/083971a1080c2784b9a65819394ccebabeddea96df05ea4e.jpeg\")A simple depiction of an agent that cooperates with copies of itself in the one-shot prisoner's dilemma. Adapted from the [Decision Theory FAQ](\"https://lesswrong.com/lw/gu1/decision_theory_faq/\").

Two agents that are running a logical decision theory can achieve mutual cooperation in a prisoner's dilemma even if there is no outside force mandating cooperation. Because their decisions take into account correlations that are not caused by either decision (though there is generally some common cause in the past), they can even cooperate if they are separated by large distances in space or time.

Roko observed that if two TDT or UDT agents with common knowledge of each other's source code are separated in time, the later agent can (seemingly) blackmail the earlier agent. Call the earlier agent \\"Alice\\" and the later agent \\"Bob.\\" Bob can be an algorithm that outputs things Alice likes if Alice left Bob a large sum of money, and outputs things Alice dislikes otherwise. And since Alice knows Bob's source code *exactly*, she knows this fact about Bob (even though Bob hasn't been born yet). So Alice's knowledge of Bob's source code makes Bob's future threat effective, even though Bob doesn't yet exist: if Alice is certain that Bob will someday exist, then mere knowledge of what Bob *would* do if he could get away with it seems to force Alice to comply with his hypothetical demands.

If Bob ran CDT, then he would be unable to blackmail Alice. A CDT agent would assume that its decision is independent of Alice's and would not waste resources on rewarding or punishing a once-off decision *that has already happened*; and we are assuming that Alice could spot this fact by reading CDT-Bob's source code. A TDT or UDT agent, on the other hand, can recognize that Alice in effect has a copy of Bob's source code in her head (insofar as she is accurately modeling Bob), and that Alice's decision and Bob's decision are therefore correlated — the same as if two copies of the same source code were in a prisoner's dilemma.

Roko raised this point in the context of debates about the possible behaviors and motivations of advanced AI systems. In a July 2010 *Less Wrong* post, Roko [wrote](\"http://rationalwiki.org/wiki/Roko%27s_basilisk/Original_post#Solutions_to_the_Altruist.27s_burden:_the_Quantum_Billionaire_Trick\"):

> In this vein, there is the ominous possibility that if a positive singularity does occur, the resultant singleton may have precommitted to punish all potential donors who knew about existential risks but who didn't give 100% of their disposable incomes to x-risk motivation. This would act as an incentive to get people to donate more to reducing existential risk, and thereby increase the chances of a positive singularity. This seems to be what CEV (coherent extrapolated volition of humanity) might do if it were an acausal decision-maker.

[*Singularity*](\"https://www.lesswrong.com/tag/singularity\") here refers to an [intelligence explosion](\"https://www.lesswrong.com/tag/intelligence-explosion\"), and [*singleton*](\"https://www.lesswrong.com/tag/singleton\") refers to a superintelligent AI system. Since a highly moral AI agent (one whose actions are consistent with our coherently extrapolated volition) would want to be created as soon as possible, Roko argued that such an AI would use acausal blackmail to give humans stronger incentives to create it. Roko made the claim that the hypothetical AI agent would particularly target people who had thought about this argument, because they would have a better chance of mentally simulating the AI's source code. Roko added: \\"Of course this would be unjust, but is the kind of unjust thing that is oh-so-very [utilitarian](\"https://www.lesswrong.com/tag/utilitarianism\").\\"

Roko's conclusion from this was that we should never build any powerful AI agent that reasons like a utilitarian optimizing for humanity's coherently extrapolated values, because this would, paradoxically, be detrimental to human values.

Eliezer Yudkowsky has responded a few times to the substance of Roko's claims. E.g., in a 2014 Reddit thread, Yudkowsky [wrote](\"https://www.reddit.com/r/Futurology/comments/2cm2eg/rokos_basilisk/cjjbqqo\"):

> What's the truth about Roko's Basilisk? The truth is that making something like this \\"work\\", in the sense of managing to think a thought that would actually give future superintelligences an incentive to hurt you, would require overcoming what seem to me like some pretty huge obstacles.
>
> The most blatant obstacle to Roko's Basilisk is, intuitively, that there's no incentive for a future agent to follow through with the threat in the future, because by doing so it just expends resources at no gain to itself. We can formalize that using classical causal decision theory, which is the academically standard decision theory: following through on a blackmail threat, in the future after the past has already taken place, cannot (from the blackmailing agent's perspective) be the physical cause of improved outcomes in the past, because the future cannot be the cause of the past.
>
> But classical causal decision theory isn't the only decision theory that has ever been invented, and if you were to read up on the academic literature, you would find a lot of challenges to the assertion that, e.g., two rational agents always defect against each other in the one-shot Prisoner's Dilemma.
>
> One of those challenges was a theory of my own invention, which is why this whole fiasco took place on LessWrong.com in the first place. (I feel rather like the speaker of that ancient quote, \\"All my father ever wanted was to make a toaster you could really set the darkness on, and you perverted his work into these horrible machines!\\") But there have actually been a lot of challenges like that in the literature, not just mine, as anyone actually investigating would have discovered. Lots of people are uncomfortable with the notion that rational agents always defect in the one-shot Prisoner's Dilemma. And if you formalize blackmail, including this case of blackmail, the same way, then most challenges to mutual defection in the Prisoner's Dilemma are also implicitly challenges to the first obvious reason why Roko's Basilisk would never work.
>
> But there are also other obstacles. The decision theory I proposed back in the day says that you have to know certain things about the other agent in order to achieve mutual cooperation in the Prisoner's Dilemma, and that's with both parties trying to set up a situation which leads to mutual cooperation instead of mutual defection. As I presently understand the situation, there is literally nobody on Earth, including me, who has the knowledge needed to set themselves up to be blackmailed if they were deliberately trying to make that happen.
>
> Any potentially blackmailing AI would much prefer to have you believe that it is blackmailing you, without actually expending resources on following through with the blackmail, insofar as they think they can exert any control on you at all via an exotic decision theory. Just like in the one-shot Prisoner's Dilemma the \\"ideal\\" outcome is for the other player to believe you are modeling them and will cooperate if and only if they cooperate, and so they cooperate, but then actually you just defect anyway. For the other player to be confident this will not happen in the Prisoner's Dilemma, for them to expect you not to sneakily defect anyway, they must have some very strong knowledge about you. In the case of Roko's Basilisk, \\"defection\\" corresponds to not actually torturing anyone, not expending resources on that, and just letting them believe that you will blackmail them. Two AI agents with sufficiently strong knowledge of each other, and heavily motivated to achieve mutual cooperation on the Prisoner's Dilemma, might be able to overcome this obstacle and cooperate with confidence. But why would you put in that degree of effort — if you even could, which I don't think you as a human can — in order to give a blackmailing agent an incentive to actually carry through on its threats?
>
> I have written the above with some reluctance, because even if I don't yet see a way to repair this obstacle myself, somebody else might see how to repair it now that I've said what it is. Which is not a good general procedure for handling infohazards; people with expert knowledge on them should, obviously, as a matter of professional ethics, just never discuss them at all, including describing why a particular proposal doesn't work, just in case there's some unforeseen clever way to repair the proposal. There are other obstacles here which I am not discussing, just in case the logic I described above has a flaw. Nonetheless, so far as I know, Roko's Basilisk does not work, nobody has actually been bitten by it, and everything I have done was in the service of what I thought was the obvious Good General Procedure for Handling Potential Infohazards\[.\]

Other users on *Less Wrong* generally rejected Roko's arguments at the time, and skepticism about his supposed basilisk appears to have only increased with time. Subsequent discussion of Roko's basilisk has focused on *Less Wrong* moderator responses to Roko's post, rather than on the specific merits or dismerits of his argument.

## Topic Moderation and Response

Shortly after Roko made his blog post, Yudkowsky left an angry [comment](\"http://rationalwiki.org/wiki/Roko%27s_basilisk/Original_post#Comments_.28117.29\") on the discussion thread:

> \[Roko:\] \\"One might think that the possibility of CEV punishing people couldn't possibly be taken seriously enough by anyone to actually motivate them. But in fact one person at SIAI was severely worried by this, to the point of having terrible nightmares, though ve wishes to remain anonymous.\\"
>
> I don't usually talk like this, but I'm going to make an exception for this case.
>
> Listen to me very closely, you idiot.
>
> YOU DO NOT THINK IN SUFFICIENT DETAIL ABOUT SUPERINTELLIGENCES CONSIDERING WHETHER OR NOT TO BLACKMAIL YOU. THAT IS THE ONLY POSSIBLE THING WHICH GIVES THEM A MOTIVE TO FOLLOW THROUGH ON THE BLACKMAIL.
>
> There's an obvious equilibrium to this problem where you engage in all positive acausal trades and ignore all attempts at acausal blackmail. Until we have a better worked-out version of TDT and we can prove that formally, it should just be OBVIOUS that you DO NOT THINK ABOUT DISTANT BLACKMAILERS in SUFFICIENT DETAIL that they have a motive toACTUALLY \[*sic*\] BLACKMAIL YOU.
>
> If there is any part of this acausal trade that is positive-sum and actually worth doing, that is exactly the sort of thing you leave up to an FAI. We probably also have the FAI take actions that cancel out the impact of anyone motivated by true rather than imagined blackmail, so as to obliterate the motive of any superintelligences to engage in blackmail.
>
> Meanwhile I'm banning this post so that it doesn't (a) give people horrible nightmares and (b) give distant superintelligences a motive to follow through on blackmail against people dumb enough to think about them in sufficient detail, though, thankfully, I doubt anyone dumb enough to do this knows the sufficient detail. (I'm not sure I know the sufficient detail.)
>
> You have to be really clever to come up with a genuinely dangerous thought. I am disheartened that people can be clever enough to do that and not clever enough to do the obvious thing and KEEP THEIR IDIOT MOUTHS SHUT about it, because it is much more important to sound intelligent when talking to your friends. This post was STUPID.
>
> (For those who have no idea why I'm using capital letters for something that just sounds like a random crazy idea, and worry that it means I'm as crazy as Roko, the gist of it was that he just did something that potentially gives superintelligences an increased motive to do extremely evil things in an attempt to blackmail us. It is the sort of thing you want to be EXTREMELY CONSERVATIVE about NOT DOING.)

\\"FAI\\" here stands for \\"Friendly AI,\\" a hypothetical superintelligent AI agent that can be trusted to autonomously promote desirable ends. Yudkowsky rejected the idea that Roko's basilisk could be called \\"friendly\\" or \\"utilitarian,\\" since torture and threats of blackmail are themselves contrary to common human values. Separately, Yudkowsky doubted that humans possessed enough information about any hypothetical unfriendly AI system to enter Alice's position even if we tried. Yudkowsky additionally argued that a *well-designed* version of Alice would precommit to resisting blackmail from Bob, while still accepting positive-sum [acausal trades](\"https://www.lesswrong.com/tag/acausal-trade\") (e.g., ordinary contracts).

Yudkowsky proceeded to delete Roko's post and the ensuing discussion, while banning further discussion of the topic on the blog. A few months later, an anonymous editor [added](\"http://rationalwiki.org/w/index.php?title=LessWrong&diff=656172&oldid=647467\") a discussion of Roko's basilisk to an article covering *Less Wrong*. The editor inferred from Yudkowsky's comments that people on *Less Wrong* accepted Roko's argument:

> There is apparently a idea so horrible, so utterly Cuthulian (sic) in nature that it needs to be censored for our sanity. Simply knowing about it makes it more likely of becoming true in the real world. Elizer Yudkwosky and the other great rationalist keep us safe by deleting any posts with this one evil idea. Yes they really do believe that. Occasionally a poster will complain off topic about the idea being deleted.

Over time, RationalWiki's Roko's basilisk discussion expanded into its own article. Editors had [difficulty](\"https://www.reddit.com/r/xkcd/comments/2myg86/xkcd_1450_aibox_experiment/cm8vn6e\") interpreting Roko's reasoning, thinking that Roko's argument was intended to promote Yudkowsky's AI program rather than to criticize it. Since discussion of the topic was still banned on *Less Wrong*, the main source for information about the incident continued to be the coverage on RationalWiki for several years. As a further consequence of the ban, no explanations were given about the details of Roko's argument or the views of *Less Wrong* users. This generated a number of criticisms of *Less Wrong*'s forum moderation policies.

Interest in the topic increased over subsequent years. In 2014, Roko's basilisk was name-dropped in the webcomic [*xkcd*](\"https://xkcd.com/1450/\"). The magazine *Slate* ran an article on the thought experiment, titled \\"[The Most Terrifying Thought Experiment of All Time](\"http://www.slate.com/articles/technology/bitwise/2014/07/roko_s_basilisk_the_most_terrifying_thought_experiment_of_all_time.single.html\")\\":

> You may be wondering why this is such a big deal for the LessWrong people, given the apparently far-fetched nature of the thought experiment. It’s not that Roko’s Basilisk will necessarily materialize, or is even likely to. It’s more that if you’ve committed yourself to timeless decision theory, then thinking about this sort of trade literally makes it more likely to happen. After all, if Roko’s Basilisk were to see that this sort of blackmail gets you to help it come into existence, then it would, as a rational actor, blackmail you. The problem isn’t with the Basilisk itself, but with you. Yudkowsky doesn’t censor every mention of Roko’s Basilisk because he believes it exists or will exist, but because he believes that the idea of the Basilisk (and the ideas behind it) is dangerous.
>
> Now, Roko’s Basilisk is only dangerous if you believe all of the above preconditions and commit to making the two-box deal \[*sic*\] with the Basilisk. But at least some of the LessWrong members do believe all of the above, which makes Roko’s Basilisk quite literally forbidden knowledge. \[…\]
>
> If you do not subscribe to the theories that underlie Roko’s Basilisk and thus feel no temptation to bow down to your once and future evil machine overlord, then Roko’s Basilisk poses you no threat. (It is ironic that it’s only a mental health risk to those who have already bought into Yudkowsky’s thinking.) Believing in Roko’s Basilisk may simply be a “referendum on autism,” as a friend put it.

Other sources have repeated the claim that *Less Wrong* users think Roko's basilisk is a serious concern. However, none of these sources have yet cited supporting evidence on this point, aside from *Less Wrong* moderation activity itself. (The ban, of course, didn't make it easy to collect good information.)

*Less Wrong* user Gwern [reports](\"https://www.reddit.com/r/LessWrong/comments/17y819/lw_uncensored_thread/c8bbcy4\") that \\"Only a few LWers seem to take the basilisk very seriously,\\" adding, \\"It's funny how everyone seems to know all about who is affected by the Basilisk and how exactly, when they don't know any such people and they're talking to counterexamples to their confident claims.\\"

Yudkowsky subsequently went into more detail about his thought processes [on Reddit](\"https://www.reddit.com/r/Futurology/comments/2cm2eg/rokos_basilisk/cjjbqqo\"):

> When Roko posted about the Basilisk, I very foolishly yelled at him, called him an idiot, and then deleted the post.
>
> Why I did that is not something you have direct access to, and thus you should be careful about Making Stuff Up, especially when there are Internet trolls who are happy to tell you in a loud authoritative voice what I was thinking, despite having never passed anything even close to an Ideological Turing Test on Eliezer Yudkowsky.
>
> Why I yelled at Roko: Because I was caught flatfooted in surprise, because I was indignant to the point of genuine emotional shock, at the concept that somebody who thought they'd invented a brilliant idea that would cause future AIs to torture people who had the thought, had promptly posted it to the public Internet. In the course of yelling at Roko to explain why this was a bad thing, I made the further error — keeping in mind that I had absolutely no idea that any of this would ever blow up the way it did, if I had I would obviously have kept my fingers quiescent — of not making it absolutely clear using lengthy disclaimers that my yelling did not mean that I believed Roko was right about CEV-based agents torturing people who had heard about Roko's idea. It was obvious to me that no CEV-based agent would ever do that and equally obvious to me that the part about CEV was just a red herring; I more or less automatically pruned it from my processing of the suggestion and automatically generalized it to cover the entire class of similar scenarios and variants, variants which I considered obvious despite significant divergences (I forgot that other people were not professionals in the field). This class of all possible variants did strike me as potentially dangerous as a collective group, even though it did not occur to me that Roko's original scenario might be right — that was obviously wrong, so my brain automatically generalized it. \[…\]
>
> What I considered to be obvious common sense was that you did not spread potential information hazards because it would be a crappy thing to do to someone. The problem wasn't Roko's post itself, about CEV, being correct. That thought never occurred to me for a fraction of a second. The problem was that Roko's post seemed near in idea-space to a large class of potential hazards, all of which, regardless of their plausibility, had the property that they presented no potential benefit to anyone. They were pure infohazards. The only thing they could possibly do was be detrimental to brains that represented them, if one of the possible variants of the idea turned out to be repairable of the obvious objections and defeaters. So I deleted it, because on my worldview there was no reason not to. I did not want LessWrong.com to be a place where people were exposed to potential infohazards because somebody like me thought they were being clever about reasoning that they probably weren't infohazards. On my view, the key fact about Roko's Basilisk wasn't that it was plausible, or implausible, the key fact was just that shoving it in people's faces seemed like a fundamentally crap thing to do because there was no upside.
>
> Again, I deleted that post not because I had decided that this thing probably presented a real hazard, but because I was afraid some unknown variant of it might, and because it seemed to me like the obvious General Procedure For Handling Things That Might Be Infohazards said you shouldn't post them to the Internet. If you look at the original SF story where the term \\"basilisk\\" was coined, it's about a mind-erasing image and the…. trolls, I guess, though the story predates modern trolling, who go around spraypainting the Basilisk on walls, using computer guidance so they don't know themselves what the Basilisk looks like, in hopes the Basilisk will erase some innocent mind, for the lulz. These people are the villains of the story. The good guys, of course, try to erase the Basilisk from the walls. Painting Basilisks on walls is a crap thing to do. Since there was no upside to being exposed to Roko's Basilisk, its probability of being true was irrelevant. And Roko himself had thought this was a thing that might actually work. So I yelled at Roko for violating basic sanity about infohazards for stupid reasons, and then deleted the post. He, by his own lights, had violated the obvious code for the ethical handling of infohazards, conditional on such things existing, and I was indignant about this.

## Big-picture Questions

Several other questions are raised by Roko's basilisk, beyond the merits of Roko's original argument or *Less Wrong*'s moderation policies:

- Can formal decision agents be designed to resist blackmail?
- Are information hazards a serious risk, and are there better ways of handling them?
- Does the oversimplified coverage of Roko's argument suggest that \\"weird\\" philosophical topics are big liabilities for pedagogical or research-related activities?

**Blackmail-resistant decision theories**

The general ability to cooperate in prisoner's dilemmas appears to be useful. If other agents know that you won't betray them as soon as it's in your best interest to do so — if you've made a promise or signed a contract, and they know that you can be trusted to stick to such agreements even in the absence of coercion — then a large number of mutually beneficial transactions will be possible. If there is some way for agents to acquire evidence about each other's trustworthiness, then the more trustworthy agents will benefit.

At the same time, introducing new opportunities for contracts and collaborations introduces new opportunities for blackmail. An agent that can pre-commit to following through on a promise (even when this is no longer in its short-term interest) can also pre-commit to following through on a costly threat.

It appears that the best general-purpose response is to credibly precommit to never giving in to any blackmailer's demands (even when there are short-term advantages to doing so). This makes it much likelier that one will never be blackmailed in the first place, just as credibly precommitting to stick to trade agreements (even when there are short-term *disadvantages* to doing so) makes it much likelier that one *will* be approached as a trading partner.

One way to generalize this point is to adopt the [rule of thumb](\"https://forum.intelligence.org/item?id=160\") of behaving in whatever way is recommended by the most generally useful policy. This is the distinguishing feature of [the most popular version](\"https://lesswrong.com/lw/1s5/explicit_optimization_of_global_strategy_fixing_a/\") of UDT. Standard UDT selects the best available policy (mapping of observations to actions) rather than the best available action. In this way, UDT avoids selecting a strategy that other agents will have an especially easy time manipulating. UDT itself, however, is not fully formalized, and there may be some superior decision theory. No one has yet formally solved decision theory, or the particular problem of defining a blackmail-free equilibrium.

It hasn't been formally demonstrated that any logical decision theories give in to blackmail, or what scenarios would make them vulnerable to blackmail. If it turned out that TDT or UDT were blackmailable, this would suggest that they aren't normatively optimal decision theories. For more background on open problems in decision theory, see the [Decision Theory FAQ](\"https://lesswrong.com/lw/gu1/decision_theory_faq/\") and \\"[Toward Idealized Decision Theory](\"https://intelligence.org/files/TowardIdealizedDecisionTheory.pdf\")\\".

**Utility function inverters**

Because the basilisk threatens its blackmail targets with torture, it is a type of \\"utility function inverter\\": agents that seek to additionally pressure others by threatening to invert the non-compliant party's utility function. [Yudkowsky argues](https://www.lesswrong.com/posts/brXr7PJ2W4Na2EW2q/the-commitment-races-problem?commentId=tYBPjetgZW4iMqe4s) that sane, rational entities ought to be strongly opposed to utility function inverters by dint of not wanting to live in a reality where such tactics are commonly part of negotiations, though Yudkowsky did so as a comment about the irrationality of commitment races, not about Roko's basilisk:

> IMO, commitment races only occur between agents who will, in some sense, act like idiots, if presented with an apparently 'committed' agent.  If somebody demands $6 from me in the Ultimatum game, threatening to leave us both with $0 unless I offer at least $6 to them… then I offer $6 with slightly less than 5/6 probability, so they do no better than if they demanded $5, the amount I think is fair.  They cannot evade that by trying to make some 'commitment' earlier than I do.  I expect that, whatever is the correct and sane version of this reasoning, it generalizes across all the cases.
>
> I am not locked into warfare with things that demand $6 instead of $5.  I do not go around figuring out how to invert their utility function for purposes of threatening them back - 'destroy all utility-function inverters (but do not invert their own utility functions)' was my guessed commandment that would be taught to kids in dath ilan, because you don't want reality to end up full of utilityfunction inverters.

**Information hazards**

David Langford coined the term *basilisk*, in the sense of an information hazard that directly harms anyone who perceives it, in the 1988 science fiction story \\"[BLIT](\"https://en.wikipedia.org/wiki/BLIT_(short_story)\").\\" On a societal level, examples of real-world information hazards include the dissemination of specifications for dangerous technologies; on an individual level, examples include triggers for stress or anxiety disorders.

The Roko's basilisk incident suggests that information that is deemed dangerous or taboo is more likely to be spread rapidly. Parallels can be drawn to [shock site](\"https://en.wikipedia.org/wiki/Shock_site\") and [creepypasta](\"https://en.wikipedia.org/wiki/Creepypasta\") links: many people have their interest piqued by such topics, and people also enjoy pranking each other by spreading purportedly harmful links. Although Roko's basilisk was never genuinely dangerous, real information hazards might propagate in a similar way, especially if the risks are non-obvious.

Non-specialists spread Roko's argument widely without first investigating the associated risks and benefits in any serious way. One take-away is that someone in possession of a serious information hazard should exercise caution in visibly censoring or suppressing it (cf. the [Streisand effect](\"https://en.wikipedia.org/wiki/Streisand_effect\")). \\"[Information Hazards: A Typology of Potential Harms from Knowledge](\"https://www.nickbostrom.com/information-hazards.pdf\")\\" notes: \\"In many cases, the best response is no response, i.e., to proceed as though no such hazard existed.\\" This also means that additional care may need to be taken in keeping risky information under wraps; retracting information that has been published to highly trafficked websites is often difficult or impossible. However, Roko's basilisk is an isolated incident (and an unusual one at that); it may not be possible to draw any strong conclusions without looking at a number of other examples.

**\\"Weirdness points\\"**

Peter Hurford argues in \\"[You Have a Set Amount of Weirdness Points; Spend Them Wisely](\"http://effective-altruism.com/ea/bg/you_have_a_set_amount_of_weirdness_points_spend/\")\\" that promoting or talking about too many nonstandard ideas simultaneously makes it much less likely that any one of the ideas will be taken seriously. Advocating for any one of veganism, anarchism, or mind-body dualism is difficult enough on its own; discussing all three at once increases the odds that a skeptical interlocutor will write you off as 'just generally prone to having weird beliefs.' Roko's basilisk appears to be an example of this phenomenon: long-term AI safety issues, acausal trade, and a number of other popular *Less Wrong* ideas are all highly unusual in their own right, and their combination is stranger than the sum of its parts.

On the other hand, [Ozy Frantz argues](\"https://thingofthings.wordpress.com/2015/04/14/on-weird-points/\") that looking weird can attract an audience that is open to new and unconventional ideas:

> \[I\]magine that you mostly endorse positions that your audience already agrees with, positions that are within a standard deviation of the median position on the issue, and then you finally gather up all your cherished, saved-up weirdness points and write a passionate defense of the importance of insect suffering. How do you think your audience is going to react? \\"Ugh, they used to be so normal, and then it was like they suddenly went crazy. I hope they go back to bashing the Rethuglicans soon.\\"

In \\"[The Economy of Weirdness](\"https://meteuphoric.wordpress.com/2015/03/08/the-economy-of-weirdness/\"),\\" Katja Grace paints a more complicated painting of the advantages and disadvantages of weirdness. Communities with different goals and different demographics will plausibly vary in how 'normal' they should try to look, and in what the relevant kind of normality is. E.g., if the goal is to get more people interested in AI control problems, then weird ideas like Roko's basilisk may drive away conventional theoretical computer scientists, but they may also attract people who favor (or are indifferent to) unorthodox ideas.

## See Also

- [Decision Theory Readings](\"https://intelligence.org/research-guide/#four\") in MIRI's Research Guide
- [Causal Decision Theory](\"https://plato.stanford.edu/entries/decision-causal/\") in the *Stanford Encyclopedia of Philosophy*
- [Thinking Inside the Boxes](\"https://www.slate.com/articles/arts/egghead/2002/02/thinkinginside_the_boxes.html\") in *Slate*
- [Newcomb's problem](\"https://www.lesswrong.com/tag/newcomb-s-problem\")
- [Parfit's hitchhiker](\"https://wiki.lesswrong.com/wiki/Parfit's_hitchhiker\")
- [Acausal Trade](\"https://www.lesswrong.com/tag/acausal-trade\")


%%

% START
Basic (and reversed card)
What is **Roko's Basilisk**?
Back: {TODO}
Tags: LessWrong
END

%%
	
