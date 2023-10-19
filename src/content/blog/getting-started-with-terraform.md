---
title: Introduction to Terraform - Infrastructure as Code 
description: Learn how Terraform enables infrastructure as code for managing, versioning and deploying cloud and on-prem resources.
slug: getting-started-with-terraform
topics:
  - terraform
  - infrastructure-as-code
  - cloud
  - devops
author: "Julian Köhn"
image:
  url: "../../assets/images/syahrin-seth-WhWYV0nQJGc-unsplash.jpg"
  alt: "Growing a plant"
date: 2023-10-21
---

# Introduction to Terraform - Infrastructure as Code

Terraform is a popular open source tool for managing infrastructure as code. It allows you to define cloud, container, networking and other infrastructure resources in template files that can be version controlled and shared.

In this beginner's guide you will learn:

- **What Terraform is used for** - Infrastructure provisioning, management and versioning
- **Core concepts** - Providers, resources, modules
- **Writing infrastructure as code** - HCL syntax, variables, outputs
- **Basic operations** - terraform init, plan, apply, destroy
- **State management** - Local and remote state
- **Collaboration features** - Shared state, workspaces

By the end you'll understand the benefits of infrastructure as code and be able to start using Terraform for your own projects.

## What is Terraform Used For?

Terraform enables infrastructure as code for environments like:

- **Cloud** - AWS, Azure, GCP, DigitalOcean
- **Containers** - Kubernetes, Docker, ECS
- **Network** - VPCs, Firewalls, Load Balancers  
- **SaaS** - GitHub, Datadog, Cloudflare
- **On-prem** - VMs, VPNs, Storage, Databases

With Terraform instead of manually clicking around UIs you define desired infrastructure states in template files that can be shared and version controlled.

Terraform manages infrastructure lifecycles through incremental execution of your templates. It handles provisioning, updating and decommissioning resources as your infrastructure needs evolve.

Infrastructure as code has benefits like:

- **Agility** - Fast, repeatable environment setup
- **Stability** - Immutable infrastructure reduces drift 
- **Maintainability** - Shared, modular, reusable configs 
- **Collaboration** - Git based workflow, shared state     

Next let's look at how Terraform works under the hood.

## Core Terraform Concepts

Terraform configurations are composed of several key components:

### 1. Providers

Providers are plugins that manage infrastructure APIs. HashiCorp and third-parties offer providers for most major platforms.

Example providers:

- `aws` - Amazon Web Services
- `azurerm` - Azure 
- `google` - Google Cloud 
- `kubernetes` - Kubernetes

You initialize providers with authentication like access keys before using them.

### 2. Resources

Resources represent infrastructure objects. Examples:

```hcl
# AWS EC2 Instance
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

# Azure Resource Group
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West US 2"
}
``` 

Resources are defined using the `resource` block along with a local name and provider type. 

### 3. Modules

Modules encapsulate groups of resources to be reused and shared. For example a module for a VPC:

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name = "my-vpc"

  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

}
```

Reusable modules simplify configurations.

## Writing Infrastructure as Code 

Terraform templates are written in HashiCorp Configuration Language (HCL) format:

```hcl
resource "aws_instance" "web" {
  ami           = "ami-a1b2c3d4" 
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}
``` 

HCL is a structured configuration language developed by HashiCorp. It is designed to be readable and writable by humans while also supporting functionality like:

- Comments
- Variables
- Expressions
- Blocks for grouping resources
- Built-in functions

These capabilities make HCL well-suited for defining infrastructure configurations concisely. It is not a direct data serialization format like JSON or YAML. The syntax allows creating nested configuration blocks to declaratively describe components.

Variables parametrize your configurations:

```hcl
variable "region" {
  default = "us-east-1" 
}

resource "aws_s3_bucket" "data" {
  bucket = "my-tf-data-${var.region}"
  acl    = "private"

  tags = {
    Name        = "My bucket"
    Environment = var.environment
  }
}
```

Outputs export information: 

```hcl
output "s3_bucket_name" {
  value = aws_s3_bucket.data.id
}
```

Together these constructs define your infrastructure plan.

## Basic Terraform Operations

Terraform supports several commands for working with infrastructure:

- **terraform init** - Initializes providers and modules
- **terraform plan** - Preview changes 
- **terraform apply** - Provision resources
- **terraform destroy** - Tear down infrastructure

A typical workflow is:

1. `terraform init` - Setup Terraform
2. `terraform plan` - Preview changes
3. `terraform apply` - Apply changes
4. `terraform destroy` - Destroy when done

State snapshots are stored locally between runs. Remote backends provide shared state storage.

Next we'll look at managing Terraform state.

## Managing Terraform State

Terraform maintains state snapshots to track infrastructure:

Local state is stored by default in `terraform.tfstate`. For team usage remote backends like S3 or Consul are recommended.

Backends allow:

- **Sharing** - Enables collaboration between team members 
- **Locking** - Prevent multiple concurrent updates 
- **Durability** - Maintain state through deleted workspaces

Partial configurations can be isolated with **workspaces**.

Remote state and workspaces allow you to safely use Terraform in teams.

## Next Steps 

This guide covered the basics of managing infrastructure as code with Terraform including:

- Defining infrastructure resources as code
- Provisioning and changing resources incrementally 
- Safely collaborating through remote state
- Reusing configurations with modules

With this foundation, you can start adopting Terraform to manage your infrastructure in a scalable, maintainable way.

Here are some recommended next steps:

- Try deploying sample infrastructure following the [Terraform getting started guide](https://learn.hashicorp.com/collections/terraform/aws-get-started)
- Learn more about the [Terraform standard module library](https://registry.terraform.io/browse/modules)
- Consider using [Terragrunt](https://terragrunt.gruntwork.io/) to manage Terraform modules
- Explore infrastructure roles like the [Terraform certificates book](https://terraformbook.com/) 

Terraform is a powerful tool for anyone working with infrastructure. This intro should give you a strong starting point on your journey. Happy coding!
