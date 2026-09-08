---
layout: project
title: Cross-Cloud MLOps Pipeline
status: Academic prototype
context: uOttawa · 2023
---

## The project

A three-person university project exploring how the same continuous training and deployment intent changes across GCP, AWS, and Azure. An image-classifier workflow served as the test vehicle; the engineering focus was the delivery system around it.

## The architecture

We held the workflow intent steady across all three providers: package the training code, run managed training, store a versioned model asset, build a serving image, deploy it to Kubernetes, and test the hosted endpoint.

<figure class="mlops-architecture" aria-labelledby="mlops-architecture-caption">
  <div class="terminal-window-bar" aria-hidden="true">
    <span>~/ag/projects/cross-cloud-mlops/architecture</span>
    <span>ACADEMIC PROTOTYPE</span>
  </div>
  <div class="mlops-architecture-body">
    <svg class="mlops-architecture-desktop" viewBox="0 0 920 510" role="img" aria-labelledby="mlops-diagram-title mlops-diagram-desc">
      <title id="mlops-diagram-title">Cross-cloud continuous training and deployment architecture</title>
      <desc id="mlops-diagram-desc">Source code is packaged as a training image. The image and dataset feed a managed training job, producing a versioned model asset. The model and serving code are packaged as a deployment image, deployed to Kubernetes, and tested through a hosted endpoint.</desc>
      <defs>
        <marker id="mlops-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="mlops-arrow-head" />
        </marker>
      </defs>

      <g class="mlops-phase">
        <rect x="18" y="40" width="884" height="112" rx="12" />
        <text x="36" y="67" class="mlops-phase-label">01 / CONTINUOUS INTEGRATION</text>
        <path d="M 273 105 H 347" class="mlops-edge" />
        <path d="M 573 105 H 647" class="mlops-edge" />
        <g class="mlops-node">
          <rect x="53" y="80" width="220" height="50" rx="8" />
          <text x="163" y="101"><tspan>Source + training code</tspan><tspan x="163" dy="17" class="mlops-node-detail">version control</tspan></text>
        </g>
        <g class="mlops-node">
          <rect x="347" y="80" width="226" height="50" rx="8" />
          <text x="460" y="101"><tspan>Training image build</tspan><tspan x="460" dy="17" class="mlops-node-detail">provider build service</tspan></text>
        </g>
        <g class="mlops-node">
          <rect x="647" y="80" width="220" height="50" rx="8" />
          <text x="757" y="101"><tspan>Training image</tspan><tspan x="757" dy="17" class="mlops-node-detail">container registry</tspan></text>
        </g>
      </g>

      <g class="mlops-phase">
        <rect x="18" y="174" width="884" height="142" rx="12" />
        <text x="36" y="201" class="mlops-phase-label">02 / CONTINUOUS TRAINING</text>
        <path d="M 273 240 H 347" class="mlops-edge" />
        <path d="M 273 278 H 310 V 265 H 347" class="mlops-edge" />
        <path d="M 573 247 H 647" class="mlops-edge" />
        <g class="mlops-node">
          <rect x="53" y="218" width="220" height="44" rx="8" />
          <text x="163" y="245">Training image</text>
        </g>
        <g class="mlops-node">
          <rect x="53" y="268" width="220" height="34" rx="8" />
          <text x="163" y="290">Dataset store</text>
        </g>
        <g class="mlops-node mlops-node-accent">
          <rect x="347" y="222" width="226" height="66" rx="8" />
          <text x="460" y="250"><tspan>Managed training job</tspan><tspan x="460" dy="18" class="mlops-node-detail">same workload, native primitives</tspan></text>
        </g>
        <g class="mlops-node">
          <rect x="647" y="222" width="220" height="66" rx="8" />
          <text x="757" y="250"><tspan>Versioned model asset</tspan><tspan x="757" dy="18" class="mlops-node-detail">object storage</tspan></text>
        </g>
      </g>

      <g class="mlops-phase">
        <rect x="18" y="338" width="884" height="154" rx="12" />
        <text x="36" y="365" class="mlops-phase-label">03 / CONTINUOUS DEPLOYMENT</text>
        <path d="M 225 416 H 268" class="mlops-edge" />
        <path d="M 428 416 H 471" class="mlops-edge" />
        <path d="M 611 416 H 654" class="mlops-edge" />
        <path d="M 729 444 V 463" class="mlops-edge" />
        <g class="mlops-node">
          <rect x="48" y="386" width="177" height="60" rx="8" />
          <text x="136.5" y="410"><tspan>Model asset +</tspan><tspan x="136.5" dy="18">serving code</tspan></text>
        </g>
        <g class="mlops-node">
          <rect x="268" y="386" width="160" height="60" rx="8" />
          <text x="348" y="410"><tspan>Deployment</tspan><tspan x="348" dy="18">image build</tspan></text>
        </g>
        <g class="mlops-node">
          <rect x="471" y="386" width="140" height="60" rx="8" />
          <text x="541" y="410"><tspan>Runtime</tspan><tspan x="541" dy="18">registry</tspan></text>
        </g>
        <g class="mlops-node mlops-node-accent">
          <rect x="654" y="386" width="150" height="60" rx="8" />
          <text x="729" y="410"><tspan>Kubernetes</tspan><tspan x="729" dy="18">endpoint</tspan></text>
        </g>
        <g class="mlops-test-node">
          <rect x="672" y="463" width="114" height="22" rx="6" />
          <text x="729" y="478">endpoint test</text>
        </g>
      </g>
    </svg>

    <div class="mlops-mobile-flow" aria-label="Cross-cloud continuous training and deployment architecture">
      <section>
        <h3>01 / Continuous Integration</h3>
        <ol><li>Source + training code</li><li>Training image build</li><li>Container registry</li></ol>
      </section>
      <section>
        <h3>02 / Continuous Training</h3>
        <ol><li>Training image + dataset</li><li>Managed training job</li><li>Versioned model asset</li></ol>
      </section>
      <section>
        <h3>03 / Continuous Deployment</h3>
        <ol><li>Model asset + serving code</li><li>Deployment image build</li><li>Runtime registry</li><li>Kubernetes endpoint + test</li></ol>
      </section>
    </div>
  </div>
  <figcaption id="mlops-architecture-caption">One delivery intent, expressed through three providers. The image classifier was the test workload; the comparison focused on the surrounding delivery system.</figcaption>
</figure>

<div class="mlops-provider-map" aria-label="Historical cloud service mapping">
  <section><h3>AWS</h3><p>SageMaker · S3 · CodeBuild · ECR · EKS</p></section>
  <section><h3>Azure</h3><p>Azure Machine Learning · Blob Storage · Azure DevOps · ACR · AKS</p></section>
  <section><h3>GCP</h3><p>Vertex AI · Cloud Storage · Cloud Build · GCR · GKE</p></section>
</div>

## My contribution

I led the team and owned the primary cross-cloud workflow implementation, including provider-specific data, training, artifact, container, registry/build, Kubernetes, and endpoint-test flows. SonarQube and Snyk were added late in the project.

## What stayed with me

The same engineering intent can be expressed through very different provider primitives. Architecture became more than a diagram: it was the shared vision that kept the workflow coherent while each provider forced different implementation choices.

> This was an educational prototype, not production MLOps ownership. The project was collaborative, and the model was a test vehicle rather than the core innovation.
