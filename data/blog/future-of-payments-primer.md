---
title: Is Primer the future of payments?
date: '2022-03-2'
tags: ['primer', 'api', 'payments', 'startup']
draft: false
summary: Primer is the future of payments.
layout: PostLayout
images: ['/static/images/primer/workflow.png']
---

[Primer](https://primer.io/) is the most exciting payments startup right now and everyone should keep 👀 out.
It claims to be the world's first automation platform for payments. It's Series A was led by Accel [without a pitch deck](https://flipboard.com/topic/spotify/fintech-primer-just-raised-18-7-million-without-a-pitch-deck-after-being-approa/a-QvjnchY-RwqVShJ0zovcWw%3Aa%3A2273650-077a568500%2Fbusinessinsider.com). Before getting into the details of what Primer has to offer I would like to give a bit of a background into the problem space. You can also skip to the bullet point [TLDR](#TLDR) section at the bottom.

## Background:

Anyone who has worked with me knows that I love talking about payments. As fate would have it I was fortunate enough to work in the payments team at [Freelancer.com](https://www.freelancer.com). This included highlights such as writing the API layer which consolidated the various PSPs (World Pay, Global Collect, PayPal, Adyen, Paytm, Skrill, NAB) into one unified payments layer. This meant that developers in other teams did not have to worry about the nuances of different payments providers.

This single interface enabled the internal payments team to move quickly on

- Customising user's checkout payment methods wrt geolocation, currency and past behaviour.
- Optimising authorization rate by retrying failed deposits.
- Manage fraud by limiting payment methods to suspicious traffic.
- Implement deposit routing workflows to maintain chargeback ratio across all payment providers. Also sometimes vendor pricing depended on volume.

I found out that almost all global tech companies have implemented a similar solution [internally](https://nordicapis.com/the-brilliance-of-spotify-internal-apis-to-mitigate-payments/). **The solution is not novel because the problem is not.**

Also, all this come with costs and challenges. The costs being that your payment state engine gets really complicated which makes things move more slowly. The challenges also arrive in reporting because of the custom workflows it becomes difficult to report actual transactional costs.

## What's Primer?

Primer solution to the problems mentioned above can be broken down into three different products.

- **Universal Checkout** which enables the developer to implement only one integration to enable providers such as Stripe, Adyen, Klarna. All customisable via the Dashboard.

- **Workflows** This is where the zapier analogy hits home. After implementing the Universal Checkout you do not need to implement anything else, you can simply configure your payments workflows using a drag and drop editor. For example if the deposit is greater than $5000 please route it through Stripe instead of Adyen.

![](/static/images/primer/workflow.png)

- **Connections** is a fancier way of saying third-party integrations. Right now the primer platform supports 50+ integrations from payment processors to fraud platforms such as Sift. These integrations can be enabled with one toggle. This powerful feature makes the whole SaaS ecosystem around payments better and more competitive. They make it easier, cheaper and quicker for you onboard other products.

## Who would use Primer:

Some reasons include:

- If you are an online gaming company or crypto exchange where authorization rate is lower than the industry standards and you need the nimbleness with custom deposit work flows.
- If you are a start-up and generally time poor, you want to move fast with Universal Checkout to take payments from multiple payment providers ASAP.
- If you are a scale-up wanting to implement custom workflows to maintain vendor relationships and do not want to go through the burden of PCI certification.

## Competitors:

There are many challenges which Primer will face. Some could be from established payment ochestrators such as [Spreedly](https://www.spreedly.com/), [Corefy](https://corefy.com/) and [Paydock](https://paydock.com/) but none of them position themselves as a complete end-to-end payment platform. My gut feels say that I would be more worried about [Very Good Security](https://www.verygoodsecurity.com/payment-optimization) as they provide payment data security as a service which is the backbone needed for payment optimisation.

## Timing:

As you can see payment orchestration is nothing new but WHY will Primer be successful? One word **Timing.**

Timing is the most emphasised T of the four Ts (TAM, TECH, TEAM, TIMING) framework promoted by the legendary Indian angel investor [Anupam Mithal.](https://mobile.twitter.com/anupammittal) Looking at the success of automation platforms such as Zapier and the prevalence of different payment providers the conditions are perfect. Primer can be the solution businesses need.

I will leave you with tweets from the founders of [Deputy](https://www.deputy.com/) and [Mixpanel.](https://mixpanel.com/)

<div className="flex flex-row md:flex-col flex-wrap -mx-2 overflow-hidden xl:-mx-2">
  <div>
    <iframe height="300" src="https://twitframe.com/show?url=https://twitter.com/deputyashik/status/1430685958328881154"></iframe>
  </div>
  <div>
    <iframe height="300" src="https://twitframe.com/show?https://twitter.com/Suhail/status/1418457863937163264"></iframe>
  </div>
</div>

## <a name="TLDR"></a> TLDR

- Primer is no-code solution to manage your entire payment stack. Think of it as zapier of payments or payment platform as a service.
- Primer product can be divided into Universal Checkout, Workflow and Connections.
- Primer makes it easier and faster for other SaaS to integrate into your payment stack.
- The challenges brought by with the rise of cross border commerce and various payment providers make conditions for Primer timing to be perfect.
