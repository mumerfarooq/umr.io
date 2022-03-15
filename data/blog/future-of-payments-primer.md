---
title: Is Primer the future of payments?
date: '2022-03-14'
tags: ['primer', 'api', 'payments', 'future']
draft: true
summary: Primer
images: []
layout: PostLayout
---

[Primer](https://primer.io/) is the most exciting payments startup right now and everyone should keep 👀 out. You can also skip to the bullet point [TLDR](#TLDR) section at the bottom.

## What's Primer?

Primer claims to be the world's first automation platform for payments. It's Series A was led by Accel [without a pitch deck](https://flipboard.com/topic/spotify/fintech-primer-just-raised-18-7-million-without-a-pitch-deck-after-being-approa/a-QvjnchY-RwqVShJ0zovcWw%3Aa%3A2273650-077a568500%2Fbusinessinsider.com). Before getting into the details of what Primer has to offer I would like to give a bit of a background.

## Background:

Anyone who has worked with me knows that I love talking about payments. As fate would have it I was fortunate enough to work in the payments team at [Freelancer.com](https://www.freelancer.com). This included highlights such as writing the API layer which consolidated the various various PSPs (World Pay, Global Collect, PayPal, Adyen, Paytm, Skrill, NAB) into one unified payments layer. This meant that developers in other teams did not have to worry about the nuances of different payments providers.

This single interface enabled the internal payments team to move quicly on

- Customising user's checkout payment methods wrt geolocation, currency and past behaviour.
- Optimising authorization rate by retrying failed deposits. This was enabled by having a PCI certified vault.
- Manage fraud by limiting payment methods to suspicious traffic.
- Implement deposit routing workflows to maintain chargeback ratio across all payment providers.

I found out that almost all global tech companies have implemented something similar [internally](https://nordicapis.com/the-brilliance-of-spotify-internal-apis-to-mitigate-payments/). **The solution is not novel because the problem is not.** The challenges listed above are unavoidable due to

Also, all this come with a cost and more challenges. The cost being that your payment state engine gets really complicated which make things move more slowly. The challenges also arrive in reporting as because of the custom workflows it becomes difficult to report actual transactional costs.

Payment orchestration is nothing new but WHY will Primer be successful? One word **Timing.**

Timing is the most emphasised T of the four Ts (TAM, TECH, TEAM, TIMING) framework promoted by the legendary Indian angel investor [Anupam Mithal.](https://mobile.twitter.com/anupammittal) Looking at the success of automation platforms such as Zapier. And the prevalence of different payment providers conditions are perfect. Pimer can be the solution businesses need I will leave you with tweets from the founders of [Deputy](https://www.deputy.com/) and [Mixpanel](https://mixpanel.com/)

<div className="flex flex-row md:flex-col flex-wrap -mx-2 overflow-hidden xl:-mx-2">
  <div>
    <iframe height="453" src="https://twitframe.com/show?url=https://twitter.com/deputyashik/status/1430685958328881154"></iframe>
  </div>
  <div>
    <iframe height="600" src="https://twitframe.com/show?https://twitter.com/Suhail/status/1418457863937163264"></iframe>
  </div>
</div>

https://paydock.com/
https://www.spreedly.com/
https://corefy.com/
https://whenthen.com/
https://www.processout.com/telescope/
https://www.verygoodsecurity.com/
https://www.checkout.com/#know-more-solutions
https://news.ycombinator.com/threads?id=primerapi
