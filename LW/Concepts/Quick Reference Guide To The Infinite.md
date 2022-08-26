---
title: Quick Reference Guide To The Infinite
href: https://lesswrong.com/tags/quick-reference-guide-to-the-infinite
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
---

The purpose of this article is to act as a **quick reference to address common confusions regarding infinite quantities**, and how to measure infinite sets. Most of the detailed explanation is offloaded to Wikipedia. Remember: Sometimes inventing a new sort of answer is necessary! If you are a [[Infinite Set Atheism|finitist]], you can probably ignore this.

Currently, this article assumes classical logic, but does point out explicitly any uses of choice. (For what this means and why anyone cares about this, see [this comment](http://lesswrong.com/r/discussion/lw/3g7/draftwiki_infinities_and_measuring_infinite_sets/38kf).)

Firstly let us point out the main misconception this article is written to address: 

**Myth #0: All infinities are infinite cardinals, and cardinality is the main method used to measure size of sets.**

The fact is that "infinite" is a general term meaning "larger (in some sense) than any natural number"; different systems of infinite numbers get used depending on what is appropriate in context. Furthermore, there are many other methods of measuring sizes of sets, which sacrifice universality for higher resolution; cardinality is a very coarse-grained measure.

Systems of infinite quantities (for doing arithmetic with)
==========================================================

[Cardinal numbers](http://en.wikipedia.org/wiki/Cardinal_number)
----------------------------------------------------------------

First, a review of what they represent and how they work at the basic level, before we get to their arithmetic.

Cardinal numbers are used for measuring sizes of sets when we don't know, or don't care, about the set's context or composition. First, the standard explanation of what we mean by this: Say we have two farmers, who each have a large number of sheep, more than they can count. How can they determine who has more? They pair off the sheep of the one against the sheep of the other; whichever has sheep left over, has more.

So given two sets X and Y, we will say X has smaller cardinality than Y (denoted |X|≤|Y|, or sometimes #X≤#Y) if there is a way to assign to each element x of X, a corresponding element f(x) of Y, such that no two distinct x1 and x2 from X correspond to the same element of Y. If, furthermore, this correspondence covers all of Y - if for each y in Y there is some x in X that had y assigned to it - then we say that X and Y have the same cardinality, |X|=|Y| or #X=#Y.

Note that by this definition, the set **N** of natural numbers, and the set 2**N** of even integers, have the same size, since we can match up 1 with 2, 2 with 4, 3 with 6, etc. This even though it seems 2**N** should be only "half as large" as N! This is why I emphasize: Cardinality is only one way of measuring sizes of sets, one that is not fine enough to distinguish between 2**N** and **N**. Other methods of measuring their size will have 2**N** only half as large as **N**.

It is true, but not obvious, that if |X|≤|Y| and |Y|≤|X|, then |X|=|Y|; this is the [Schroeder-Bernstein theorem](http://en.wikipedia.org/wiki/Cantor%E2%80%93Bernstein%E2%80%93Schroeder_theorem). Hence we can sensibly talk about "the cardinality" of a set X as being some abstract property of it - if |X|≤|Y| then X has smaller cardinality and Y has larger cardinality, and so on. We can make this more concrete, and define an actual cardinality object |X| (or #X), using either the [axiom of choice](http://en.wikipedia.org/wiki/Axiom_of_choice) or [Scott's trick](http://en.wikipedia.org/wiki/Scott%27s_trick) (if you admit the [axiom of foundation](http://en.wikipedia.org/wiki/Axiom_of_regularity)) or even [proper classes](http://en.wikipedia.org/wiki/Class_%28set_theory%29) if we admit those, but this will not be relevant here. We will use |X|<|Y| to mean "|X|≤|Y| but |X|≠Y".

Note that it is also not obvious that given any two sets X and Y, we must have either |X|≤|Y| or |Y|≤|X|; indeed, this statement is true if and only if we admit the [axiom of choice](http://en.wikipedia.org/wiki/Axiom_of_choice). So take note:

**Myth #1: Infinities must come in a linear ordering.**

Fact: If the axiom of choice is false, then there are necessarily infinite cardinals which are not the same size, and yet for which neither can be said to be larger! If we do admit the axiom of choice, then the cardinal numbers must be not only linearly-ordered but in fact be [well-ordered](http://en.wikipedia.org/wiki/Well-order).

The cardinality of the set of natural numbers, |**N**|, is also denoted ℵ~0~. If we admit the axiom of [(dependent)](http://en.wikipedia.org/wiki/Axiom_of_dependent_choice) choice, this is the smallest infinite cardinal. Here by "infinite" cardinal I mean one that is larger than the size of any finite set (0, 1, 2, etc.).

Quick aside on partial orderings

You may be wondering how to think about something like "neither larger nor smaller, but not the same". Formally, we say that, without choice, the ordering on the cardinal numbers is a [partial order](http://en.wikipedia.org/wiki/Partially_ordered_set). Because these are so common I'll go ahead and define this here - generally, a partial order on a set S is a relation (usually denoted "≤") on S such that:

`  1. For every x in S, x≤x (reflexivity)`  
`  2. For any x and y in S, if x≤y and y≤x, then x=y (antisymmetry)`  
`  3. For any x,y,z in S, if x≤y and y≤z, then x≤z (transitivity)`

If we additionally required that for any x and y in S, we have either x≤y or y≤x, we'd have a [total order](http://en.wikipedia.org/wiki/Total_order) (also called a linear order).

OK, but still, what does "neither larger nor smaller, yet not the same" mean in general? How can you visualize it? Well, the canonical example of a partial order would be, if we have any set S, we can partially order its subsets by defining A≤B to mean A⊆B. So if S={1,2,3,4}, then {1,2} is larger than {1} and {2}, and smaller than {1,2,4}, but incomparable to {3} or {2,3} or {2,3,4}.

Another example would be, if we have ordered n-tuples of real numbers, we could define (x1,...,xn)≤(y1,...,yn) if xi≤yi for each i. You might imagine these as, say, stats of characters in a game; then x≤y would mean that character y is better than character x in every way. To say that x and y are incomparable would mean that - though in practice one might be better on the whole - neither is obviously better. More generally, in any game, you could define a partial order on strategies by x≤y if y dominates x.

Note that partial orders are sufficiently common that for many math people the word "order" means "partial order" by default.

Cardinal arithmetic

Given sets X and Y, |X|+|Y| will denote the cardinality of the "disjoint union" of X and Y, which is the union of X and Y, but with each element tagged with which of the two it came from, so that we don't lose anything to overlap (i.e., if an element is in both X and Y, it will occur twice, once with an "X" tag and once with a "Y" tag.) |X||Y| will denote the cardinality of the set X×Y, the [Cartesian product](http://en.wikipedia.org/wiki/Cartesian_product) of X and Y, which is the set of all ordered pairs (x,y) with x in X and y in Y. However, if we admit the axiom of choice, this arithmetic is not very interesting for infinite sets! It turns out that given cardinal numbers μ and λ, if either is infinite and neither is zero, then μ+λ=μλ=max(μ,λ). Hence, if you need a system of infinities in which x+y is going to be strictly bigger than x and y, cardinal numbers are the wrong choice. (The arithmetic of cardinals gets more interesting once you allow for adding or multiplying infinitely many at once.)

There is also exponentiation of cardinals; |X|^|Y|^ denotes the cardinality of the set X^Y^ of all functions from Y to X, i.e., the number of ways of picking one element of X for each element of Y. Given any set X, 2^|X|^ is the cardinality of its [power set](http://en.wikipedia.org/wiki/Power_set) ℘(X), the set of all its subsets. Cantor's [diagonal argument](http://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) shows that for any set X, 2^|X|^>|X|; in particular, there is no largest cardinal number.

**Application**: Measuring sizes of sets when we don't care about the context or composition.

[Ordinal numbers](http://en.wikipedia.org/wiki/Ordinal_number)
--------------------------------------------------------------

I'm afraid there's no quick way to explain these. The reason is that they are used to represent two things - ways of well-ordering things, and positions in an "infinite list" - except, of course, that these are actually fundamentally the same thing, and to understand ordinals you need to wrap your head around this until you can see both simultaneously. Hence I suggest you just go read Wikipedia, or some other standard text, if you want to learn how these work. I will just speak briefly on their arithmetic. Note that the ordinals too are ordered - linearly ordered and well-ordered, at that.

Unlike with the cardinals, addition and multiplication of two ordinals will often get you a larger ordinal. In particular, for any ordinal λ, λ+1 is a larger ordinal. However the multiplication of ordinals is noncommutative. In fact, even the addition of ordinal numbers is noncommutative! And distributivity only holds on one side; a(b+c)=ab+ac, but (a+b)c need not be ac+bc. So if you need commutativity, ordinals (with their usual operations) are the wrong choice.

Contrast the smallest infinite ordinal, denoted ω, with ℵ~0~, which is (assuming choice) the smallest infinite cardinal. 1+ℵ~0~=ℵ~0~+1=ℵ~0~, and 1+ω=ω, but ω+1>ω. 2ℵ~0~=ℵ~0~2=ℵ~0~, and 2ω=ω, but ω2>ω. ℵ~0~²=ℵ~0~, but ω²>ω. And in a reversal of what you might expect if you just complete the pattern, 2^ℵ^~^0^~>ℵ~0~, but 2^ω^=ω.

**Application**: See link.

Ordinal numbers with [natural operations](http://en.wikipedia.org/wiki/Ordinal_arithmetic#Natural_operations)
-------------------------------------------------------------------------------------------------------------

There's an alternate way of doing arithmetic on the ordinals, referred to as the "natural operations". These sacrifice the continuity properties of the ordinary operations, but in return get commutativity, distributivity, cancellation... the things we need to make the algebra nice. There's a natural addition, a natural multiplication, and apparently a natural exponentiation, though I don't know what that last one might be.

If you've heard "the ordinals embed in the surreals", and were very confused by that statement because the surreals are commutative when the ordinals are not, the answer is that the correct statement is that the ordinals with natural operations embed in the surreals, rather than the ordinals with their usual operations.

The [extended (positive) real line](http://en.wikipedia.org/wiki/Extended_real_number_line)
-------------------------------------------------------------------------------------------

Sometimes, we just use the set of nonnegative real numbers with an infinity element (denoted ∞, unsurprisingly) tacked on. Because sometimes that's all you need. So:

**Myth #2: Any place where you have infinities, you have the possibility for differing degrees of infinity.**

Fact: Sometimes such a thing just wouldn't make sense.

**Application**: This is what we do in measure theory - i.e. anywhere integration or expected value (and hence, in the usual formulations, utility) is involved. If you want to claim that in your utility function, options A and B both have infinite utility, but the utility of B is more infinite than that of A... first you're going to have to make a framework in which that makes sense. Such a thing might indeed make sense, but you'll have to explain how, as our usual framework for utility doesn't allow such things. (The problem is that adding multiple distinct infinities tends to ruin the continuity properties of the real numbers that make integration possible in the first place, but I'm sure if you look someone must have come up with some method for getting around that in some cases.)

Sometimes we allow negative numbers and -∞ as well, though this can cause a problem because there's no sensible way to define ∞+(-∞). (0∞, on the other hand, is just 0. We make this definition because, e.g., the area of an infinitely-long-but-infinitely-thin line should still be 0.)

The [projective line](http://en.wikipedia.org/wiki/Real_projective_line)
------------------------------------------------------------------------

Sometimes we don't even care about the distinction between a "positive infinity" and a "negative infinity"; we just need something that represents something larger in magnitude than all real numbers, but which you'd approach regardless of whether you got large and negative or large and positive. So we take the real numbers R, tack on an infinity element ∞, and we have the real projective line. Note that this doesn't depend at all on the real numbers being ordered, so we can do the same with the complex numbers and get the complex projective line, a.k.a. the [Riemann sphere](http://en.wikipedia.org/wiki/Riemann_sphere).

**Application**: If you want to assign 1/x some concrete "value" when x=0, well, this isn't going to make sense in a system where you have to distinguish ∞ from -∞.

[Hyperreal numbers](http://en.wikipedia.org/wiki/Hyperreal_number)
------------------------------------------------------------------

What [nonstandard analysis](http://en.wikipedia.org/wiki/Non-standard_analysis) uses. These are more used as a means to deduce properties of the real numbers than used for their own sake. You can't even speak of "the" hypperreal numbers, because then you'd have to specify what ultrafilter you were using. Even just proving these exist requires [a form of choice](http://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem#The_ultrafilter_lemma). You probably don't want to use these to represent anything.

The [surreal numbers](http://en.wikipedia.org/wiki/Surreal_number): the infinity kitchen sink
---------------------------------------------------------------------------------------------

For when you absolutely, positively, have to make sense of an expression involving infinite quantities. The surreal numbers are pretty much as infinite as you could possibly want. They contain the ordinals with their natural operations, but they allow for so much more. Do you need to take the natural logarithm of ω? And then divide π by it? And then raise the whole thing to the √(ω2+πω) power? And then subtract ω^√8^? In the surreal numbers, this all makes sense. Somehow. (And if you need square roots of negative numbers, you can always pass to the surcomplex numbers, which I guess is the actual kitchen sink.)

**Application**: Again, kitchen sink.

...and many more
----------------

Often the thing to do is make an ad-hoc system to fit the occasion. For instance, we could simply take the real numbers **R** and tack on an element ∞, insist it obey the ordinary rules of algebra, and order appropriately. (Formally, take the ring **R**\[T\], and order lexicographically. Then perhaps extend to **R**(T), or whatever else you might like. And of course call it "∞" rather than "T".) So (∞+1)(∞-1)=∞^2^-1, etc. What is this good for? I have no idea, but it's a simple brute-force way of tossing in infinities when needed.

Also: functions, which are probably more appropriate a lot of the time
----------------------------------------------------------------------

Let's not forget - oftentimes the appropriate thing to do is not to start tossing about infinities at all, but rather shift from thinking about numbers to thinking about functions. You know what's larger than any constant number? x. What's even larger? x². (If we only consider polynomial functions, this is equivalent to the "brute-force" system above, under the equivalence x↔∞.) Much larger? e^x^. Is x too large? Maybe you want log x. Etc.

Ways of measuring infinite sets
===============================

The thing about measuring infinite sets is that we have a trade-off between discrimination and applicability. Cardinality can be applied to any set at all, but it's a very coarse-grained way of measuring things. If you want to measure a subset of the plane, you'd be better off asking for its area... just don't think you can ask for the "area" of a set of integers.

Cardinal numbers (again)
------------------------

The most basic method. Every set has a cardinality. But the cost of such universality is a very low resolution. The set of natural numbers has cardinality ℵ~0~, but so does the set of even numbers, the set of rational numbers, the set of algebraic numbers, the set of [computable real numbers](http://en.wikipedia.org/wiki/Computable_number)...

Note that the set of real numbers is much larger and has cardinality 2^ℵ^~^0^~. (This is not to be confused with ℵ~1~, which [(assuming choice again)](http://en.wikipedia.org/wiki/Axiom_of_choice) is the second-smallest infinite cardinal. The question of whether 2^ℵ^~^0^~=ℵ~1~ is known as the [continuum hypothesis](http://en.wikipedia.org/wiki/Continuum_hypothesis).)

If we are working with subsets T of a given set S, we can do a bit better by not just looking at |T|, but also at |S-T| (the size of the complement of T in S). For instance, the set of natural numbers greater than 8, and the set of even natural numbers, both have cardinality ℵ~0~, but within the context of the natural numbers, the former has finite complement (numbers at most 8), while the latter has infinite complement (all odd numbers).

Occasionally: ordinals
----------------------

If the sets you're working with come with well-orderings, you can consider the type of well-ordering as a "size", and thus measure sizes with ordinals. If they don't have well-orderings, this doesn't apply.

[Measure](http://en.wikipedia.org/wiki/Measure_%28mathematics%29): the old fallback
-----------------------------------------------------------------------------------

Most commonly we use the notion of a measure to measure sizes of subsets T of a given set S. This just means that we designate some of the subsets T of S as "measurable" (with a few requirements - the whole set S must be measurable; complements of measurable sets must be measurable; a union of countably many measurable sets must be measurable) and assign them a number called their measure, which I'll denote μ(T). μ takes values in the extended positive real line (see above): It can be any nonnegative real number, or just a flat ∞. We require that the empty set have measure 0, that if A and B are disjoint sets then μ(A∪B)=μ(A)+μ(B) (called "finite additivity"), and more generally that if we have a countable collection of sets A1, A2, ..., with none of them overlapping any of the others, then the measure of their union is the sum of their measures. (Called "countable additivity"; this infinite sum automatically makes sense because all the numbers involved are nonnegative.)

The function μ itself is called a measure on S. So if we have a set S and a measure on it, we have a way to measure the sizes of subsets of it (well, the measurable ones, anyway). Of course, this is all very non-specific; by itself, this doesn't help us much.

Fortunately, the set of real numbers **R** comes equipped with a natural measure, known as [Lebesgue measure](http://en.wikipedia.org/wiki/Lebesgue_measure). So does n-dimensional Euclidean space for every n. And indeed so do a lot of the natural spaces we encounter. So while simply shouting "there's a measure!", without stating what that measure might be, does not solve any problems, in practice there's often one natural measure (up to multiplication by some positive constant). See in particular: [Haar measure](http://en.wikipedia.org/wiki/Haar_measure).

If we have a set S with a measure μ such that μ(S)=1, then we have a [probability space](http://en.wikipedia.org/wiki/Probability_space). This is how we formalize probability mathematically: We have some set S of possibilities, equipped with a measure, and the measure of a set of possibilities is its probability. Except, of course, that I'm sure many here would insist only on finite additivity rather than countable additivity...

Note that if μ(S) is finite, then μ(S-T)=μ(S)-μ(T). However, if μ(S)=∞, and μ(T)=∞ also, this doesn't work; ∞-∞ is not defined in this context, and μ(S-T) could be any extended nonnegative real number. So note that if we're working in a set of infinite measure, and we're comparing subsets which themselves have infinite measure, we can possibly gain some extra information by comparing the measures of the complements as well.

Here on LessWrong, when discussing multiverse-based notions, we'll typically assume that the set of universes comes equipped in some way with a natural measure. If the universes are the many worlds of MWI, then this measure will be proportional to squared-norm-of-amplitude.

Measuring subsets of the natural numbers
----------------------------------------

So it seems like 2**N** should be half the size of N, right? Well there's an easy way to accomplish this: Given a set A of natural numbers, we define its [natural density](http://en.wikipedia.org/wiki/Natural_density) to be limn→∞ A(n)/n, where A(n) denotes the number of elements of A that are at most n. At least, we can do this if the limit exists. It doesn't always. But when it does it does what we want pretty well. What if the limit doesn't exist? Well, we could use a [limsup or a liminf](http://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior) instead, and get upper and lower densities. Or take some other approach, such as [Schnirelmann density](http://en.wikipedia.org/wiki/Schnirelmann_density), where we just take an inf.

Of course, for sets of density 0, this may not be enough information. Here we can pull out another trick from above: Don't use numbers, use functions! We can just ask what function A(n) approximates ([asymptotically](http://en.wikipedia.org/wiki/Asymptotic_analysis)). For instance, the prime numbers have density 0, but a much more informative statement is the [prime number theorem](http://en.wikipedia.org/wiki/Prime_number_theorem), which states that if P is the set of prime numbers, then P(n)~n/(log n).

...etc...
---------

Of course, the real point of all these examples was simply to demonstrate: Depending on what sort of thing you want to measure, you'll need different tools! So there's many more tools out there, and sometimes you may just need to invent your own...