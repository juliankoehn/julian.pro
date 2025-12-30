---
title: "Stop Guessing, Start Engineering: Why 'Likelihood' Has No Place in Kubernetes Security"
description: "Stop using Excel for Kubernetes security. Learn why 'Likelihood' is a fallacy in Cloud-Native environments and how to replace 'Compliance Astrology' with deterministic Policy-as-Code."
language: en
topics:
  - kubernetes
  - security
  - grc
  - policy-as-code
  - asset-management
author: "Julian Köhn"
image:
  url: "../../assets/images/stop-guessing-kubernetes-security.jpg"
  alt: "Photo of a server room or code matrix representing deterministic security"
date: 2025-12-30
---

# Stop Guessing, Start Engineering: Why "Likelihood" Has No Place in Kubernetes Security

**Picture the scene:** I’m sitting in a conference room (or more likely, a Zoom call) with a CISO and a GRC consultant. They pull up a massive Excel spreadsheet. It’s the quarterly risk assessment based on ISO 27001 Clause 6.

They point to line 42: *“Unauthorized access due to misconfigured Kubernetes Service.”*

Then comes the question that makes my blood pressure spike: **“Julian, what would you say is the ‘Likelihood’ of this happening? Low, Medium, or High? Let’s put it in the matrix to calculate the risk score.”**

I usually stare back and say, **“It’s not a probability. It’s a configuration state.”**

This is the fundamental disconnect in modern security. We are trying to jam Cloud-Native reality into a legacy GRC framework designed for paper files and physical server rooms.

If you are managing your Kubernetes security using a Risk = Impact × Likelihood formula in a spreadsheet, you aren’t doing security. You are practicing **Compliance Astrology**.

### The Fallacy of "Likelihood" in Code

In the physical world, "Likelihood" makes sense. *What is the likelihood of a fire in the data center?* You calculate historical data, electrical quality, and sprinkler systems. You arrive at a stochastic probability.

In software engineering—specifically in Kubernetes and CI/CD—**there is no weather.** There is no chance. There is only code. Your infrastructure is deterministic.

Let’s take a concrete example. A developer deploys a Service of type `LoadBalancer` without specifying internal annotations in an AWS EKS cluster.

- **The GRC view:** "The likelihood of an attacker finding this IP is Medium."
- **The Engineering view:** The moment that manifest is applied, a public-facing Elastic Load Balancer spins up. Shodan scanners will index that open port within minutes, sometimes seconds. The "likelihood" of exposure isn't medium; it is effectively **100%**. It is a mathematical certainty derived from the configuration.

Treating binary system states—a port is either open or closed, a container is either running as root or it isn't—as stochastic probabilities is a dangerous illusion that gives executives a false sense of comfort.

### Snapshot Security vs. The Velocity of Cloud

Here is the second problem with the Excel-Sheet approach: **It is obsolete the moment you hit "Save."**

In a traditional IT environment, you might deploy changes once a month. In a modern setup, utilizing GitOps like ArgoCD or Flux, we are synchronizing cluster state dozens or hundreds of times a day. Ephemeral containers spin up for jobs and die in minutes.

A quarterly risk review is **Snapshot Security**. It’s like trying to secure a Formula 1 race by taking a photo of the car at the starting line and checking if the tires are screwed on tight. By the time you’ve filled out your spreadsheet row, the cluster state has changed ten times.

You cannot manage dynamic risks with static documentation.

------

### The Deep Dive: Implementing Deterministic Security

So, how do we fix this? How do we satisfy security requirements without resorting to Compliance Astrology? We stop asking engineers to fill out forms and start treating compliance as an engineering problem.

#### Phase 1: Real-Time Asset Inventory (No more guessing)

You cannot secure what you cannot see. Most organizations fail here because they rely on asking teams what they run.

In Kubernetes, "Asset Management" isn't a spreadsheet; it's a real-time query against the API Server.

If you cannot instantly answer the question, *"Show me every Pod across all namespaces currently running with `privileged: true` security context,"* you do not have asset visibility. You have fog.

We need automated systems that continuously query the cluster state, map resources to owners via labels, and identify orphaned workloads. Your inventory must be a live graph of your infrastructure, not a static document.

#### Phase 2: Policy-as-Code (The new Auditors)

This is where we replace the "Likelihood" column with a **Boolean Gate**.

Instead of writing a policy in a Wiki that says *"Developers must not deploy containers running as the root user,"* and *hoping* they read it, we enforce it deterministically in the cluster.

We use Admission Controllers like **Open Policy Agent (OPA) Gatekeeper** or **Kyverno**. These tools intercept every API request to the Kubernetes server before it is persisted.

If a manifest violates the policy, the cluster rejects it. The risk is not "mitigated"; the bad state is **mathematically impossible** to deploy.

**The Engineering Proof:**

Here is what "risk mitigation" looks like in the real world using Kyverno. This isn't a suggestion; it's a firewall for configuration.

YAML

```
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-root-user
  annotations:
    policies.kyverno.io/title: Disallow Root User
    policies.kyverno.io/category: Pod Security Standards (Restricted)
    policies.kyverno.io/severity: medium
    policies.kyverno.io/subject: Pod
    policies.kyverno.io/description: >-
      Running as root opens the door to container breakout attacks.
      This policy enforces that containers must run as a non-root user.
spec:
  validationFailureAction: Enforce # <--- This is key. Don't just audit, BLOCK.
  background: true
  rules:
    - name: check-runasnonroot
      match:
        any:
        - resources:
            kinds:
            - Pod
      validate:
        message: "Running as root is not allowed. You must set securityContext.runAsNonRoot to true."
        pattern:
          spec:
            securityContext:
              runAsNonRoot: true
            containers:
              - =:(securityContext):
                  =(runAsNonRoot): true
```

When this policy is active, if a developer tries to apply a Pod without `runAsNonRoot: true`, the Kubernetes API simply says: `Error from server (Forbidden): admission webhook "validate.kyverno.svc-fail" denied the request`.

The likelihood of running a root container just dropped from "Medium" to **Zero**.

#### Phase 3: The Deterministic Workflow

To truly move away from snapshot security, you need to combine these tools into a workflow that guarantees the state of your system:

1. **Git as Truth (GitOps):** All desired cluster configurations reside in Git. If it’s not in Git, it doesn’t exist.
2. **CI/CD Scanning:** Before code even gets merged, pipeline tools (like OPA's `conftest` or Kyverno CLI) scan the Kubernetes manifests against your policies. Violations break the build.
3. **Admission Control (The Gatekeeper):** As shown above, the in-cluster agent acts as the final, hard barrier against non-compliant deployments.
4. **Continuous Drift Detection:** Your GitOps controller (e.g., ArgoCD) constantly compares the live cluster state with Git. If someone manually changes something (creating "drift"), it is immediately detected and overridden back to the secure state defined in Git.

### Stop Rating, Start Blocking

The era of the "High/Medium/Low" risk matrix for configuration management is over. It's inadequate for the velocity of the cloud.

We need to shift our mindset from **Governance Risk Compliance (GRC)** to **Governance Engineering**.

At Kopexa, we believe that compliance documents should be generated *from* the actual running state of the system, not the other way around.

So, the next time someone asks you to estimate the "Likelihood" of a misconfiguration in your Kubernetes cluster, do them a favor. Don't give them a number. Give them a policy snippet.

**Stop guessing. Start engineering.**