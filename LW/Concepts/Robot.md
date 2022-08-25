---
title: Robot
href: https://lesswrong.com/tags/robot
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
---

An **online debate tool** facilitates the act of debating by helping to manage the structure of argumentation. This distinguishes it from general purpose communication tools such as wikis and forums. Some online debate tools provide graphical representations of arguments, but this is not a requirement.

This wiki page and tag gives a list and characterization of debate tools. Debate tools were previously [discussed here](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/).

Literature
==========

There exists an academic literature on argument mapping and other tools (computer aided or not) for assisting debate. The most recent survey seems to be "[Computer-supported argumentation: A review of the state of the art](http://www.springerlink.com/content/j3p581601n3x1200/)" written in June 2009, which lists 50 tools (starting on page 94).

[Online Deliberation](https://en.wikipedia.org/wiki/Online_deliberation) is a related discipline that asks what are the effects of online discussions, when are they effective, and how to design better systems. 

List of debate tools
====================

[Debate Map](https://debatemap.app/)
------------------------------------

Summary: Tree-based mapping of beliefs, arguments, and evidence.

*   first mentioned:
    *   [a comment by Venryx](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/dw0i)
*   pros:
    *   Collaborative creation, editing, and evaluation of debate/argument maps.
    *   Open source. (under the MIT license)
    *   Developed using modern web technologies. (react-js, mobx, firestore)
    *   Ability to enter both formal arguments (premises and conclusion), or less structured "single-premise arguments".
    *   Rating system for the truth/probability of claims, as well as the relevance/validity of arguments.
    *   Tree-based structure which can extend very deep without loss of clarity or usability.
    *   Integrated term/definition system. Terms can be defined once, then used anywhere, with hover-based definition display.
*   cons:
    *   Has a learning curve for casual users, as content must conform to the argument<-premise structure at each level.
    *   Not yet made usable on mobile devices.

[DebateArt](https://www.debateart.com/)
---------------------------------------

Summary: Debating platform with rich one-on-one debates functionality and advanced discussions forum.

*   pros:
    *   Clean and convenient design.
    *   Advanced and flexible one-on-one debating system.
    *   Separate forum for casual discussions.
    *   Private messaging system.
    *   Great performance.
    *   Friendly community.
    *   Active and thorough moderation.
*   cons:
    *   Has a learning curve for casual users.
    *   No dedicated mobile version.

[debategraph.org](http://debategraph.org/)
------------------------------------------

Summary: This... is pretty much exactly what we were looking for, isn't it? Though it doesn't do anything with probabilities.

*   first mentioned:
    *   [a comment by Peer Infinity](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/20v5)
*   pros:
    *   collaboratively edit argument maps
*   cons:
    *   it doesn't do anything with probabilities.
    *   *Do not zoom out too much!*

[Argunet](http://www.argunet.org/working-with-argunet/)
-------------------------------------------------------

Summary: Argunet enables you to create argument maps of complex debates online or offline, on your own or in a team.

*   first mentioned:
    *   [the original article](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/)
*   pros:
    *   collaboratively edit argument maps
*   cons:
    *   not entirely straightforward to use, Morendil had trouble figuring out how to move boxes around.

[bCisive Online](http://bcisiveonline.com/)
-------------------------------------------

Summary: a simple canvas for creating a tree diagram of a debate.

*   first mentioned:
    *   [the original article](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/)
*   pros:
    *   easy to use
*   cons:
    *   all it does is let you make the tree diagram, it doesn't do anything else with the data
*   examples:
    *   [a map of Morendil's current thinking on cryonics](http://morendil.bcisiveonline.com/spaces/989ae551bc100d0365c96a7bcc20f188d95fb58d/)

[Flow](http://en.wikipedia.org/wiki/Flow_%28policy_debate%29)
-------------------------------------------------------------

Summary: a specialized form of note taking called "flowing" within the policy/CEDA/NDT debate community.

*   first mentioned:
    *   [a comment by JenniferRM](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/1kx1)
*   pros:
    *   lots of people have used this technique, and it has been proven to work well
*   cons:
    *   it requires a very specific format for the debate

[PyMC](http://code.google.com/p/pymc/)
--------------------------------------

Summary: a DSL in python for (non-recursive) Bayesian models and Bayesian probability computations.

*   first mentioned:
    *   [a comment by Steve_Rayhawk](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/1kx3)
*   pros:
    *   it does Bayesian calculations
*   cons:
    *   requires literacy in python and bayesian statistics

[MACOSPOL](http://www.demoscience.org/)

*   first mentioned:
    *   [a comment by Morendil](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/1kt6)
*   examples:
    *   [mapped controversies](http://medialab.sciences-po.fr/controversies/)

[Scott Aaronson's worldview manager](http://projects.csail.mit.edu/worldview/)
------------------------------------------------------------------------------

Summary: this is designed to point out hidden contradictions (or at least tensions) between one's beliefs, by using programmed in implications to exhibit (possibly long) inferential chains that demonstrate a contradiction.

*   first mentioned:
    *   [a comment by wnoise](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/1ku8)
*   pros:
    *   it does lots of stuff
*   cons:
    *   it's kinda complicated
*   examples:
    *   [sample worldview](http://www.gitorious.org/worldview/worldview/blobs/master/topics/axiom_of_choice.wvm)
    *   [The model of libertarian ideas](http://www.gitorious.org/worldview/worldview/blobs/master/topics/libertarianism.wvm)

[Canonizer.com](http://canonizer.com/)
--------------------------------------

Summary: Canonizer.com is a wiki system with added camp and survey capabilities. The system provides a rigorous way to measure scientific / moral expert consensus. It is designed for collaborative development of concise descriptions of various competing scientific or moral theories, and the best arguments for such. People can join the camps representing such, giving a quantitative survey or measure of consensus compared to all others. Proposed changes to supported camps go into a review mode for one week. Any supporters of a camp can object to any such proposed change during this time. If it survives a week with no objection, it goes live, guaranteeing unanimous agreement to such changes to the petition by all current signers. If anyone does object, the camp can be forked (taking all supporters of the 'improvement'), or the info can be included in a sporting sub camp.

The karma or 'canonization' system enables the readers to select any algorithm they wish on the side bar to 'find the good stuff'. For example, you can compare the [mind expert](http://canonizer.com/topic.asp/53/11) scientific consensus with the default general population consensus. Each camp has a forum to discuss and debate further improvements for camps. The general idea is to debate things in the forums, or elsewhere, and summarize everyone's final / current / state of the art view in the camp statements. A history of everything is maintained, providing a dynamic quantitative measure of how well accepted any theory is, as ever more theory falsifying (when experts abandon a falsified camp) scientific data / new arguments... come in.

*   first mentioned:
    *   [a comment by PeerInfinity](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/2j4l?c=1)
*   pros:
    *   the whole canonization thing
*   cons:
    *   it's kinda complicated
*   examples:
    *   [the main list of canonized camps](http://canonizer.com)

[Explore-Ideas.com](http://www.explore-ideas.com/)
--------------------------------------------------

Summary: explore-ideas.com is a graph structure forum where users start with a topic and follow arguments they agree with, creating a personalized 'story'.

*   pros: users can link any two comments and merge ideas from different discussions into a single logical argument, as well as make loops in reasoning. Each user comes to his personal 'win' ending based on arguments (s)he agrees with. There is no global 'win' or 'lose' argument.

This forum encourages dynamic debate that goes beyond pro/con binary approach, similar to that employed in [Proofs and Refutations](http://en.wikipedia.org/wiki/Proofs_and_Refutations).

*   cons: UI is rudimentary.

[Debate.fm](http://www.debate.fm/)
----------------------------------

Summary: A simple platform to start a debate on any topic. Mainly focused at general user participation.

*   pros: Simple structured content - side by side. Mainly focused at pro/con binary approach
*   cons: Till now not ready for academic use.

[cartargrapher](http://cartargrapher.appspot.com/)
--------------------------------------------------

"a simple argument mapping app, made using Google’s visualization API, jquery, and python, and running on Google’s AppEngine. Note: at this point, I don’t guarantee the persistence of saved argument maps!" - [John MacFarlane](http://johnmacfarlane.net/tools.html)

[Consider.it](https://consider.it)
----------------------------------

Graphically represents people's agreement with a statement and which arguments were most used. The arguments themselves are not subjects of further investigation though. Check out [this use-case](https://hala.consider.it/?tab=Feedback%20on%20key%20principles) of public decisions in Seattle.

Ideas for new tools
===================

*   Based on MediaWiki, PHP, GraphViz, and maybe XML
*   Summary: a tool that we make ourselves, so that it works the way we want it to work
*   first mentioned:
    *   [a comment by PeerInfinity](http://lesswrong.com/lw/1qq/debate_tools_an_experience_report/1l1w)
*   pros:
    *   we're writing it, so we can make it work how we want
*   cons:
    *   we would need to write it from scratch
*   examples:
    *   [a conversation about AI](http://transhumanistwiki.com/wiki/Peer_Infinity/Chat_With_Fael_About_AI)

Brass Tacks
-----------

*   [Structured debate](http://issuepedia.org/Issuepedia:Structured_Debate): a set of rules which debate software could help enforce. Some data design is on paper, not yet transcribed. The plan is to write this first as a MediaWiki extension. [some mockups](http://issuepedia.org/Category:Debates)

Other links
===========

*   [http://www.visualizingargumentation.info/](http://www.visualizingargumentation.info/)
*   [http://www.tandf.co.uk/journals/tarc](http://www.tandf.co.uk/journals/tarc)
*   [structured debate](http://issuepedia.org/Structured_debate)
*   [dispute resolution technology](http://issuepedia.org/Issuepedia:Dispute_Resolution_Technology)

Features that a debate tool should have
=======================================

*   from almost everyone:
    *   an easy to use interface
*   from [Morendil](http://lesswrong.com/user/Morendil/):
    *   a conclusion or a decision, which is to be "tested" by the use of the tool
    *   various hypotheses, which are offered in support or in opposition to the conclusion, with degrees of plausibility
    *   logical structure, such as "X follows from Y"
    *   challenges to logical structure, such as "X may not necessarily follow from Y, if you grant Z"
    *   elements of evidence, which make hypotheses more or less probable
    *   recursive relations between these elements
*   from [PhilGoetz](http://lesswrong.com/user/PhilGoetz/):
    *   an XML-based representation of the data
*   from [PeerInfinity](http://lesswrong.com/user/PeerInfinity/)
    *   generates its results from an annotated log of a debate
    *   collaboratively editable, possibly using MediaWiki
    *   multiple outfut formats: graphs, tables, the raw data
*   from [Johnicholas](http://lesswrong.com/user/Johnicholas/):
    *   Compose in ordinary ASCII or UTF-8
    *   Compose primarily a running-text argument, indicating the formal structure with annotations
    *   Export as a prettified document, still mostly running text (html and LaTeX)
    *   Export as a diagram (automatically layed out, perhaps by graphviz)
    *   Export as a bayes net (in possibly several bayes net formats)
    *   Export as a machine-checkable proof (in possibly several formats)
*   from [Eliezer Yudkowsky](https://www.lesswrong.com/tag/eliezer-yudkowsky):
    *   prevents online arguments from retracing the same points over and over.
    *   not just graphical with boxes, because that makes poor use of screen real estate.
    *   not have lots of fancy argument types and patterns, because no one really uses that stuff
    *   a karma system, because otherwise there's no way to find the good stuff.

(So, now that everything's all neatly arranged in a list, the next step is to decide whether we want to start using any of these tools, or if we want to create our own.)

LWers interested in developing debate tools
===========================================

*   [Curtis SerVaas](http://lesswrong.com/lw/le5/welcome_to_less_wrong_7th_thread_december_2014/c64f)
*   [.impact has discussed making argument mapping software](http://lesswrong.com/lw/jfn/introducing_impact/)
*   The "Collaborative Argumentation Analysis" Facebook Group has a lot of links/discussion/people.

See also
========

*   [Rationality power tools](https://wiki.lesswrong.com/wiki/Rationality_power_tools)
*   [Prediction market](https://www.lesswrong.com/tag/prediction-markets)
*   [[Predictionbook|PredictionBook]]