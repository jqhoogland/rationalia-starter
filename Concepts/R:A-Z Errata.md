---
tags: ['LessWrong', 'Portal', 'Concept']
src: https://www.lesswrong.com/tag/raz-errata
---

This is a list of errata for the first edition of [*Rationality: From AI to Zombies*](https://www.lesswrong.com/tag/rationality:-from-ai-to-zombies), by Eliezer Yudkowsky. You can add any errors you notice here, or email them to errata@intelligence.org.

Thanks for pointing out these mistakes go to: Viliam Búr, Wayne McDougall, Gram Stone, Daniel Greene, Paul Crowley, Joshua Cogliati, Marcus Yass, and Kevin Today.

Errors have been tagged [addressed] if changes have been made in the source files for the upcoming print release of R:AZ. Those errors should not be removed from this page until after the books are released.

## Significant errors
1. What Do I Mean By "Rationality"?

- The 
- [link](http://www.slate.com/articles/arts/egghead/2002/02/thinkinginside%5C_the%5C_boxes.single.html)
-  to Jim Holt's introduction to Newcomb's Problem is broken; the correct link is 
- [http://www.slate.com/articles/arts/egghead/2002/02/thinkinginside_the_boxes.html](http://www.slate.com/articles/arts/egghead/2002/02/thinkinginside_the_boxes.html)
- .

28. Conservation of Expected Evidence

- In the Kindle version, "P(H) = P(H|E) × P(E) + P(H,¬E) × P(¬E)" should instead be "P(H) = P(H|E) × P(E) + P(H|¬E) × P(¬E)". This is correct in the PDF version.

74. Avoiding Your Belief's Real Weak Points

- "My point is that, when it comes to spontaneous self-questioning, one is much more likely to spontaneously self-attack strong points with comforting replies to rehearse, then to spontaneously self-attack the weakest, most vulnerable points." should say "than" in place of "then." This is an important meaning difference, albeit one that's easy to glean from context.

111. The Robbers Cave Experiment

- "How would they spark an intergroup conflict to investigate? Well, the 22 boys were divided into two groups of 11 campers, and—and that turned out to be quite sufficient." Sherif had previously run a similar experiment at a summer camp in Middle Grove, and found that the campers banded together against the experimenters rather than turning on one another. The Robbers Cave experiment may have gone differently because "there was no mixing at the beginning – neither of the two groups, the Rattlers and the Eagles, were aware of the other’s existence until the second day"; or any number of other factors might have been involved. Regardless, in light of the Middle Grove experiment, the humorous exaggeration that dividing the campers into two groups "turned out to be quite sufficient" seems more misleading.
- "They named themselves the Rattlers and the Eagles (they hadn’t needed names when they were the only group on the campground)." This is true for the Eagles, but the Rattlers named themselves earlier, before interacting with the other group of campers.
- The actual experiment still looks fairly informative and interesting even given recent revisions (unlike the Stanford Prison Experiment, which has more or less fallen apart). However, the degree of selective reporting and drive to get the "right" results from the experimenters is a warning sign that the study might be flawed in other, unreported ways. We should therefore be more skeptical of this experiment, and cite it with more caveats than 
- *Rationality: From AI to Zombies*
-  does.

176. Superexponential Conceptspace, and Simple Words

- In the epub version, the exponents display wrong in some places. E.g., 2^240 should be 2^2^40.

193. Probability is in the Mind [addressed]

- "Let’s say I have four cards, the ace of hearts, the ace of spades, the two of hearts, and the two of spades. I draw two cards at random." is potentially confusing. The intended meaning is that one draws two cards from this set of four; but a natural misinterpretation is that one has a hand consisting of those four cards, and then draws an additional two from elsewhere. This could be made clearer by saying "there are four cards" in place of "I have four cards".

Interlude - A Technical Explanation of Technical Explanation [addressed]

- "0.006 or 6%" should be "0.006 or 0.6%".

274. Magical Categories

- In the epub version, the exponents display wrong in some places. E.g., "2^265,536" should be "2^2^65,536".

291. Newcomb's Problem and Regret of Rationality [addressed]

- The link to Marion Ledwig's PhD thesis should be kops.uni-konstanz.de/bitstream/handle/123456789/3451/ledwig.pdf?sequence=1.

 

## Minor errors
Biases - An Introduction

- "We’re especially loathe to think" should be "We’re especially loath to think"

42. Making History Available

- In the PDF version, the first closing quotation mark symbol should instead be an opening quotation mark.

76. Fake Justification

- "Renown is one reasonable criteria" should be "Renown is one reasonable criterion"

87. Anchoring and Adjustment

- "then they 
- *adjust*
-  upward or downward from their starting estimate until they reached an answer that “sounded plausible”; and then they stopped adjusting." should be "then they 
- *adjust*
-  upward or downward from their starting estimate until they reach an answer that “sounds plausible”; and then they stop adjusting." to maintain tense consistency.

91. The "Outside the Box" Box

- The 
- [link](http://www.scottaaronson.com/blog/?p=87#comment-2091)
-  to Scott Aaronson's blog is directed at the wrong comment; the correct link is 
- [http://www.scottaaronson.com/blog/?p=87#comment-2092](http://www.scottaaronson.com/blog/?p=87#comment-2092)
- .

150. The Hidden Complexity of Wishes [addressed]

- "programming an Arithmetic Expert Systems" should be "programming Arithmetic Expert Systems"

157. Similarity Clusters [addressed]

- "these things may serve out to single out only humans" should be "these things may serve to single out only humans"

Interlude - An Intuitive Explanation of Bayes's Theorem

- "a women" should be "a woman"

184. Beautiful Probability [addressed]

- "taken as a the limit of a finite process" should be "taken as the limit of a finite process"

187. Perpetual Motion Beliefs [addressed]

- "why couldn’t be the case" should be "why that couldn’t be the case"
- "sticking in your finger into boiling water" should be "sticking your finger into boiling water"

204. Bind Yourself to Reality [addressed]

- "Think like Reality" should be capitalized "Think Like Reality".

214. Hands v. Fingers [addressed]

- "That that’s why we have" should be "That’s why we have".

221. Zombies! Zombies?  [addressed]

- "epiphenomalists" should be "epiphenomenalists".
- "you would still have be told" should be "you would still have to be told".

224. GAZP vs. GLUT

- "Heck, you need the ability to write things to memory just so that time can pass for the computation. Unless you think it's possible to program a conscious being in Haskell." A reader pointed out that this could be plausibly done by using IO Monads.
- Haskell example:

 main = do    putStrLn "Hello, what's your name?"    name <- getLine    putStrLn ("Hi " ++ name ++ "!")

236. Privileging the Hypothesis

- Various links in this essay are external that would normally be internal links to other book chapters.

243. The Failures of Eld Science [addressed]

- "I pose to you to the question" should be "I pose to you the question".

247. Science Isn't Strict *Enough* [addressed]

- "you could know things without looking them" should be "you could know things without looking at them".

262. Dreams of AI Design [addressed]

- "go around all day in circles talk about" should be "go around all day in circles talking about".

271. Changing Your Metaethics  [addressed]

- "metathics" should be "metaethics".

274. Magical Categories [addressed]

- Terri Schiavo is misspelled as "Terry" Schiavo.



---

