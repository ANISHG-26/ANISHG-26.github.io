---
layout: project
title: Moving Services Application
status: Client-restricted case study
context: uOttawa industry-internship course · 2023
---

## The project

A student team worked with a moving-company client on an application that estimated moving costs from household items. The broader product vision was larger than the term allowed; the useful outcome was a working, deployable foundation with clear remaining scope.

## The architecture

<figure class="mini-architecture" aria-labelledby="moving-architecture-caption">
  <div class="terminal-window-bar" aria-hidden="true">
    <span>~/ag/projects/moving-services/public-architecture</span>
    <span>SANITIZED VIEW</span>
  </div>
  <div class="mini-architecture-body">
    <div class="architecture-flow architecture-flow-compact" role="img" aria-label="Client requirements flow into a React progressive web application, a containerized Spring Boot API, and an Azure service foundation.">
      <div class="architecture-node architecture-node-owned"><strong>Moving workflow</strong><small>client requirements</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node"><strong>React PWA</strong><small>Static Web Apps</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node"><strong>Spring Boot API</strong><small>App Service · containerized</small></div>
      <span class="architecture-arrow" aria-hidden="true">→</span>
      <div class="architecture-node architecture-node-owned"><strong>Azure foundation</strong><small>Maps · Cosmos DB · Container Registry</small></div>
    </div>
    <div class="architecture-support"><span>delivery path</span><strong>GitHub Actions → Azure environments</strong></div>
  </div>
  <figcaption id="moving-architecture-caption">A simplified view of how client requirements became a deployable Azure foundation.</figcaption>
</figure>

## My contribution

As the cloud engineer, I mapped requirements to cloud services, evaluated the architecture, and recommended Azure for cost and compatibility with the client’s environment. The foundation included Static Web Apps, App Service, Azure Maps, Cosmos DB, Container Registry, a containerized Java/Spring Boot backend, and a GitHub Actions delivery path.

## What stayed with me

Translating a business workflow into technical choices taught me that requirements, cost, architecture, and delivery are one conversation. That requirements-to-solution loop became the bridge between engineering and the consulting work I later pursued.

> This is a sanitized case study. Client source, repository links, credentials, and private implementation details are intentionally not included.
