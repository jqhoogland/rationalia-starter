---
title: Security Mindset
href: https://lesswrong.com/tags/security-mindset
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
---

Security Mindset is a predisposition for thinking about the world in a security-oriented way. A large part of this way of thinking involves always being on the lookout for exploits. 

> Uncle Milton Industries has been selling ant farms to children since 1956. Some years ago, I remember opening one up with a friend. There were no actual ants included in the box. Instead, there was a card that you filled in with your address, and the company would mail you some ants. My friend expressed surprise that you could get ants sent to you in the mail.
> 
> I replied: “What’s really interesting is that these people will send a tube of live ants to anyone you tell them to.”
> 
> Security requires a particular mindset. Security professionals — at least the good ones — see the world differently. They can’t walk into a store without noticing how they might shoplift. They can’t use a computer without wondering about the security vulnerabilities. They can’t vote without trying to figure out how to vote twice. They just can’t help it.
> 
> [SmartWater](http://www.smartwater.com/products/securitySolutions.html) is a liquid with a unique identifier linked to a particular owner. “The idea is for me to paint this stuff on my valuables as proof of ownership,” I [wrote](http://www.schneier.com/blog/archives/2005/02/smart_water.html) when I first learned about the idea. “I think a better idea would be for me to paint it on *your* valuables, and then call the police.”
> 
> Really, we can’t help it.
> 
> \-\- Bruce Schneier, [The security Mindset](https://www.schneier.com/blog/archives/2008/03/the_security_mi_1.html), Schneier on Security

\[I'm unsure of the origin of the term, but Schneier is at least an outspoken advocate. --Abram\]

In 2017, Eliezer Yudkowsky wrote a pair of posts on the security mindset:

*   [Security Mindset and Ordinary Paranoia](https://www.lesswrong.com/posts/8gqrbnW758qjHFTrH/security-mindset-and-ordinary-paranoia)
*   [Security Mindset and the Logistic Success Curve](https://www.lesswrong.com/posts/cpdsMuAHSWhWnKdog/security-mindset-and-the-logistic-success-curve)

Amongst other things, these posts forwarded the idea that true security mindset *is not just* the tendency to spot lots and lots of security flaws. Spotting security flaws is not in itself enough to build secure systems, because you could be spotting flaws with your design forever, patching specific weak points, and moving on to find yet more flaws. 

Building secure systems requires *coming up with strong positive arguments for the security of a system*. These positive arguments have several important features:

1.  They have as few assumptions as possible, because each assumption is an additional chance to be wrong. 
2.  Each assumption is individually very certain.
3.  The conclusion of the argument is a meaningful security guarantee. 

The mindset required to build tight security arguments like this is different from the mindset required to find security holes.