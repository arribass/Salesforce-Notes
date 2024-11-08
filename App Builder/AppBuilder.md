# Salesforce Platform App Builder  
<!-- Versiones -->
<!-- tabla de versiones -->
| Version | Fecha       | Descripción                                          |
| ---     | ---         | ---                                                  |
| 0.1     | 24/10/2024  | Documento de estudio para el examen de Salesforce Platform App Builder |

## Introducción
to-do cambiar

[Guia de estudio](https://developer.salesforce.com/resources2/certification-site/files/SGCertifiedPlatformAppBuilder.pdf)

El examen de Salesforce Platform App Builder es un examen que evalúa los conocimientos necesarios para construir aplicaciones en la plataforma Salesforce, incluyendo lógica empresarial y automatización de procesos. En este documento se recogen los conceptos más importantes que se deben conocer para aprobar el examen.

Los temas están organizados de acuerdo a la guía oficial de estudio y se incluye un desglose del peso de cada sección del examen.

| Concept  | Description       |
| ---       | ---               |
| Scoring   | 63%               |
| Time      | 105 minutes       |
| Questions | 60                |
| Cost      | USD $200          |
| Retake Fee| USD $100          |

| Syllabus                           | Weighage |
| ---                                | ---       |
| Business Logic and Process Automation  | 28%     |
| Salesforce Fundamentals                | 23%     |
| Data Modeling and Management           | 22%     |
| User Interface                         | 17%     |
| App Deployment                         | 10%     |

Status  
<!-- TABLA -->
| Topic                                 | Percentage |
| ---                                   | ---        |
| Business Logic and Process Automation | 0%         |
| Salesforce Fundamentals               | 0%         |
| Data Modeling and Management          | 0%         |
| User Interface                        | 0%         |
| App Deployment                        | 0%         | 

## Business Logic and Process Automation
## Salesforce Fundamentals

Decide on:
- when and why to pick an existing Salesforce Solution or search on the AppExchange.
- Which type of Solution to be chosen. Flow or Trigger.


Apex Email Handler
## Data Modeling and Management
## Given a scenario determine the appropriate data model
### Given a scenario, determine the considerations when selecting or changing a field data type

Case Picklist to Multipicklist
values retain

## User Interface

## App Deployment
Sandboxes types
This topic relies on how to maintain your application up to date between different environments.

Sandbox Refreshing
- Interval

### Given a scenario, determine the appropriate deployment plan
What is staging
### Given a set of business requirements, recommend a solution for key milestones and considerations when managing the application lifecycle and various types of sandboxes

Release Environments:

1. **Develop and Test**: Each of the members own Developer Sandbox to create their assigned customization. Developer Sandbox contain no production data.
2. **Build Release**: Each member migrates their customization from their DevSandboxes to a common DevProSandbox for integration. DPS do not contain production data but you can seed them with testing data.
3. **Test Release**: For UAT, the team uses a partial copy sandbox to create a complete replica of production (without production Data)
4. **Release**: After the release is in production, the team can use the full sandbox to train users without the risk of altering production data. A full sandbox includes a copy of production data.

Logging on to Sandbox environments

Sandbox Templates
### Given a case, demonstrate knowledge, viability and troubleshooting when using change sets

Inbound and outbound 

production org
### Describe the capabilities and consideration when using change set
Quick deploy
run specified tests

### Describe the uses cases and considerations when using unmanaged and managed packages


Packages on Salesforce

Managed
Unmanaged

Naming conflicts




