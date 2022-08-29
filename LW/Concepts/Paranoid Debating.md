---
_id: 5f5c37ee1b5cdee568cfb104
title: Paranoid Debating
href: https://lesswrong.com/tag/paranoid-debating
slug: paranoid-debating
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:10:12.915Z'
---
# Paranoid Debating

**Paranoid Debating** is a variant of [The Aumann Game](https://web.archive.org/web/20090207153155/http://www.acceleratingfuture.com/steven/?p=96) where one player purposefully subverts the group estimate. Similar to The Aumann Game, the activity consists of a group jointly producing a confidence interval for an unknown, but verifiable quantity, which is then [[Scoring Rule|scored]] for [accuracy](https://wiki.lesswrong.com/wiki/accuracy) and [[Calibration|calibration]]. One individual is designated the spokesperson, who is responsible for choosing the final estimate. However, before the activity begins, one individual is secretly assigned the role of misleading the other members. The deceiver is scored higher the worse the final estimate is.

The activity is intended to teach accurate estimate, proper agreement techniques, and recognition of deception.

A typical subject for the game might be "How much maize is produced in Mexico annually?".

## Rules

- Select player roles. In person, each player receives or selects a card from a pack of role cards. For 4 players, create a pack of role cards by combining 3 black cards with 1 red card. For 4-6 players there should be 1 red card and the rest black with the rest being enough for one card per person. For 7-9 players, 2 red cards. Some variants include a role named the Advocate, which you can designate one of the black cards to represent.

Simplest variant

- Each player receives a role. No advocate.
- A question is asked.
- Players discuss for 20 minutes, then write down their individual response on a card.
- The answer is researched.
- Scores are assigned.

Advocate variant, #1

- Each player receives a role. One advocate in the deck. The player who receives the Advocate displays it to the group.
- A question is asked.
- Players discuss for 20 minutes, attempting to convince the advocate. The advocate writes down their response on a card. This is the group's answer.
- The answer is researched, scores are assigned.

Advocate variant, #2

- Each player receives a role. One advocate in the deck. No player may display their card.
- A question is asked.
- Players discuss for 20 minutes. Anyone may say anything. At the end, the advocate writes down what they think the group's response is on a card, and the group is scored for this.
- Answer researched, scores assigned.

Variation-by-argument variant

- Each player receives a role. No advocate. No player may display their card.
- A question is asked.
- Players have 2-5 minutes to write down their initial, individual estimate.
- Players discuss for 20 minutes. Anyone may say anything. At the end, players write their revised estimates on their card.
- Players are scored based on their delta -- the more you go toward the correct answer from your initial estimate, the more points.

Southern California Variant #1

At the February 2011 Southern California LW Meetup we tried playing the game. For questions we bought a game of [Wits & Wagers](http://boardgamegeek.com/boardgame/20100/wits-wagers) (which has trivia questions with numerical answers) and looked at the cards to find questions that were about substantive topics where Fermi estimates seemed useful. The speaker/advocate was chosen on a rotating basis so that everyone gets at least one chance to play that role, and cards are dealt from a deck of playing cards to everyone else. Red cards mean you're trying to make the group deliver a bad answer. Black cards mean you're trying to make the group deliver a good answer. This makes the *number* of people to be suspicious of itself an unknown parameter and leads to funny outcomes and interesting coordination problems. Scoring used the experimental scoring code that is intended to assign the most credit to small error bars around high confidence correct answers.

## Questions

It's really easy to ask a question that is then very difficult to answer later. For example, the question "How many miles of railroad are there in Africa?" is somewhat difficult to answer. Walking through the CIA World Fact Book one country at a time, we arrived at an answer in the range of 48,000-49,000. However, in cross-checking that information, we discovered that in Uganda, there are only 125 miles of active railroad, but 1200km listed in the Fact Book. It seems likely, therefore, that the total estimate includes some non-active miles of railroad, and is thus too high. This section is here to list good and bad questions and resources to get questions from or answer questions unusually easily. If listing an answer, please make the text of the answer white so people can use it if they want.

## Scoring

A not-so-trivial inconvenience to playing the game is figuring out how to score it properly.

To make this easier there is now a tentative file format for representing a game of paranoid debate and a python script for scoring games represented in this format. If you'd like to download or edit this software check out [this github project](https://github.com/JenniferRM/Paradebate). Please note that the game format and the code are very likely to evolve to remove bugs and support whatever sort of play turns out to be the most fun and/or educational.

## Blog posts

- [Selecting Rationalist Groups](http://lesswrong.com/lw/77/selecting_rationalist_groups/) \- Description and account of the game.
- [The First London Rationalist Meetup](http://lesswrong.com/lw/7r/the_first_london_rationalist_meetup/) by [taw](https://wiki.lesswrong.com/wiki/taw) \- An account of the game.

## See also

- [[Group Rationality|Group rationality]]
- [[Less Wrong Meetup Group Resources|Less Wrong meetup group resources]]
- [[Bayesian Probability|Bayesian probability]]
- [Proper scoring rules](https://wiki.lesswrong.com/wiki/Proper_scoring_rules)
- [[Calibration]]