---
layout: project
title: Music Recommendation Chatbot
status: Collaborative course project
context: uOttawa · 2023
---

## The project

A four-person course team built a music-recommendation prototype that combined song features with a conversational interface. The complete system connected a Telegram conversation, Dialogflow intent handling, a Flask webhook, a containerized recommendation service on Google Cloud Run, and Spotify data.

## The architecture

<figure class="mini-architecture" aria-labelledby="music-architecture-caption">
  <div class="terminal-window-bar" aria-hidden="true">
    <span>~/ag/projects/music-chatbot/flow</span>
    <span>TEAM SYSTEM</span>
  </div>
  <div class="mini-architecture-body">
    <div class="architecture-flow" role="img" aria-label="Telegram sends a conversation to Dialogflow ES, which calls a Flask webhook packaged with Docker and deployed on Cloud Run before returning music recommendations.">
      <div class="architecture-node"><strong>Telegram</strong><small>conversation</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node"><strong>Dialogflow ES</strong><small>intent + parameters</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node"><strong>Flask webhook</strong><small>team application</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node architecture-node-owned"><strong>Docker · Cloud Run</strong><small>my deployment focus</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node"><strong>Recommendations</strong><small>shared outcome</small></div>
    </div>
    <div class="architecture-support"><span>shared integrations</span><strong>Spotify API · song data · model assets</strong></div>
  </div>
  <figcaption id="music-architecture-caption">The system was collaborative. My primary ownership was the deployment path and the integration needed to make the pieces run together.</figcaption>
</figure>

## My contribution

I contributed data cleansing, initial data analysis, and exploratory analysis. I also initiated and owned the infrastructure, deployment, and system-integration work: packaging the Flask service with Docker, deploying it to Cloud Run, and connecting the hosted service into the Dialogflow ES and Telegram flow.

## What stayed with me

Collaboration works best when shared effort and individual ownership are both visible. The model and application were team work; I took responsibility for the path that made those pieces available as one working system.

> This was an academic team project. I am not claiming sole model ownership, personal ownership of the Spotify integration, or ownership of every connected component. Repository links are intentionally withheld until project hygiene is complete.
