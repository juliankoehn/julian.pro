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

**Picture the scene:** I’m sitting in a conference room (or more likely, a Zoom call) with a CISO and a GRC consultant. They pull up a massive Excel spreadsheet. It’s the quarterly risk assessment.

They point to line 42: *“Unauthorized access to Kubernetes API server.”*

Then comes the question that makes my blood pressure spike: **“Julian, what would you say is the ‘Likelihood’ of this happening? Low, Medium, or High? Let’s put it in the matrix.”**

I usually stare back and say, **“It’s not a probability. It’s a configuration state.”**

This is the fundamental disconnect in modern security. We are trying to jam Cloud-Native reality into a legacy GRC framework designed for paper files and physical server rooms.

If you are managing your Kubernetes security using a Risk = Impact × Likelihood formula in a spreadsheet, you aren’t doing security. You are practicing **Compliance Astrology**.

### The Fallacy of "Likelihood" in Code

In the physical world, "Likelihood" makes sense. *What is the likelihood of a fire in the server room?* You calculate historical data, electrical quality, and sprinkler systems. You arrive at a probability.

In software engineering—specifically in Kubernetes and CI/CD—**there is no weather.** There is no chance. There is only code.

Your infrastructure is deterministic.

- Either the API server has public network access, or it doesn’t.
- Either your container image contains `CVE-2023-XYZ`, or it doesn’t.
- Either your RBAC policy grants `cluster-admin`, or it doesn’t.

When a port is open to the internet, the likelihood of it being scanned is **100%**. It’s not "Medium." It is a mathematical certainty. Treating binary system states as stochastic probabilities is a dangerous illusion that gives executives a false sense of comfort.

### Snapshot Security vs. The Velocity of Cloud

Here is the second problem with the Excel-Sheet approach to ISO 27001 Clause 6: **It is obsolete the moment you hit "Save."**

In a traditional IT environment, you might deploy once a month. In a modern setup, we are deploying 50, 100, maybe 500 times a day. Ephemeral containers spin up and die in minutes.

A quarterly risk review is **Snapshot Security**. It’s like trying to secure a Formula 1 race by taking a photo of the car at the starting line and checking if the tires are screwed on tight. By the time you’ve filled out your spreadsheet row, the cluster state has changed ten times.

You cannot manage dynamic risks with static documentation.

### The "Asset First" Philosophy

Before we even talk about policies, we have to talk about visibility. You cannot secure what you cannot see.

Most organizations fail at the very first step: **Asset Management.** They have shadow clusters, unknown namespaces, and forgotten workloads. If your risk assessment relies on asking people what they *think* is running rather than querying the API to see what *is* running, you are building on quicksand.

**Asset First.** Know every node, every pod, every ingress. Real-time. No guessing.

### The Solution: Deterministic Engineering

So, how do we fix this? How do we satisfy ISO 27001 without resorting to Compliance Astrology?

We stop asking engineers to fill out forms and start writing **Policy-as-Code**.

We replace the "Likelihood" column with a **Boolean Gate**. Instead of writing a policy in a Wiki that says *"Developers should not deploy containers as root,"* we enforce it in the cluster.

1. **Open Policy Agent (OPA) / Kyverno:** These are your new auditors. They don’t sleep, and they don’t guess. If a manifest violates the policy, the Admission Controller rejects it. The risk is not "mitigated"; the bad state is **mathematically impossible** to deploy.
2. **GitOps:** Your Git repository is your source of truth. The cluster state mirrors the code. If it’s not in Git, it doesn’t exist. This is continuous proof of compliance.
3. **Continuous Scanning:** We don't guess if a vulnerability exists. We scan every build. If a critical CVE is found, the build fails.

### Stop Rating, Start Blocking

The era of the "High/Medium/Low" risk matrix for configuration management is over.

We need to shift our mindset from **Governance Risk Compliance (GRC)** to **Governance Engineering**.

- **Don't estimate** the likelihood of a misconfiguration. **Prevent it** via CI/CD pipelines.
- **Don't review** risks quarterly. **Monitor** drift in real-time.
- **Don't rely** on hope. **Rely** on code.

At Kopexa, we build systems based on what is actually there, not what a spreadsheet says should be there.

So, the next time someone asks you to estimate the "Likelihood" of a misconfiguration in your Kubernetes cluster, do them a favor. Don't give them a number. Give them a solution.

**Stop guessing. Start engineering.**