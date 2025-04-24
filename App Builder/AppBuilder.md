# Salesforce Platform App Builder  
<!-- Versiones -->
| Version | Fecha       | Descripción                                          |
| ---     | ---         | ---                                                  |
| v1     | 24/10/2024  | Documento de estudio para el examen de Salesforce Platform App Builder |
| v1     | 24/10/2024  | Documento de estudio para el examen de Salesforce Platform App Builder |

## Introduction

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
| Salesforce Fundamentals                | 23%     |
| Business Logic and Process Automation  | 28%     |
| Data Modeling and Management           | 22%     |
| User Interface                         | 17%     |
| App Deployment                         | 10%     |

**Table of Contents**
- [Salesforce Platform App Builder](#salesforce-platform-app-builder)
  - [Introduction](#introduction)
  - [Salesforce Fundamentals](#salesforce-fundamentals)
    - [Identify the features and capabilities available when creating reports, report types and dashboards](#identify-the-features-and-capabilities-available-when-creating-reports-report-types-and-dashboards)
    - [Given a set of requirements, determine the appropriate global, object-specific actions and layouts to optimize the Salesforce mobile user experience](#given-a-set-of-requirements-determine-the-appropriate-global-object-specific-actions-and-layouts-to-optimize-the-salesforce-mobile-user-experience)
    - [Identify common scenarios for extending an org using AppExchange apps.](#identify-common-scenarios-for-extending-an-org-using-appexchange-apps)
    - [Apply features and capabilities available to restrict and extend object, record and field access](#apply-features-and-capabilities-available-to-restrict-and-extend-object-record-and-field-access)
    - [Describe the customizations and uses cases for Chatter](#describe-the-customizations-and-uses-cases-for-chatter)
  - [Business Logic and Process Automation](#business-logic-and-process-automation)
    - [Given a scenario, demonstrate the use of formula fields to meet stated business requirements](#given-a-scenario-demonstrate-the-use-of-formula-fields-to-meet-stated-business-requirements)
    - [Given a scenario, determine the capabilities and use cases for approval processes](#given-a-scenario-determine-the-capabilities-and-use-cases-for-approval-processes)
    - [Given a scenario, demonstrate the use of validation rules to meet stated business requirements](#given-a-scenario-demonstrate-the-use-of-validation-rules-to-meet-stated-business-requirements)
    - [Given a scenario, determine the capabilities and use cases for workflow, Flows and Process Builder](#given-a-scenario-determine-the-capabilities-and-use-cases-for-workflow-flows-and-process-builder)
      - [Workflow Rules](#workflow-rules)
      - [Flows](#flows)
      - [Process Builder](#process-builder)
  - [Data Modeling and Management](#data-modeling-and-management)
    - [Given a scenario, determine the appropriate data model](#given-a-scenario-determine-the-appropriate-data-model)
    - [Given a scenario, determine the considerations when selecting or changing a field data type](#given-a-scenario-determine-the-considerations-when-selecting-or-changing-a-field-data-type)
    - [Given a scenario, determine the options and considerations when importing and exporting data, including the capabilities of external data sources.](#given-a-scenario-determine-the-options-and-considerations-when-importing-and-exporting-data-including-the-capabilities-of-external-data-sources)
    - [Given a scenario, explain the capabilities of the various relationship types and the implications of each on record access, user interface and reporting](#given-a-scenario-explain-the-capabilities-of-the-various-relationship-types-and-the-implications-of-each-on-record-access-user-interface-and-reporting)
  - [User Interface](#user-interface)
    - [Describe the user interface customization options.](#describe-the-user-interface-customization-options)
  - [App Deployment](#app-deployment)
    - [Given a scenario, determine the appropriate deployment plan](#given-a-scenario-determine-the-appropriate-deployment-plan)
    - [Given a set of business requirements, recommend a solution for key milestones and considerations when managing the application lifecycle and various types of sandboxes](#given-a-set-of-business-requirements-recommend-a-solution-for-key-milestones-and-considerations-when-managing-the-application-lifecycle-and-various-types-of-sandboxes)
    - [Given a use case, demonstrate knowledge, viability and troubleshooting when using change sets](#given-a-use-case-demonstrate-knowledge-viability-and-troubleshooting-when-using-change-sets)
    - [Describe the capabilities and consideration when using change set](#describe-the-capabilities-and-consideration-when-using-change-set)
    - [Describe the uses cases and considerations when using unmanaged and managed packages](#describe-the-uses-cases-and-considerations-when-using-unmanaged-and-managed-packages)

## Salesforce Fundamentals

Salesforce is a cloud-based customer relationship management (CRM) platform that provides a range of tools and services to help businesses manage their customer relationships, sales, marketing, and other business processes.

Decide on:
- when and why to pick an existing Salesforce Solution or search on the AppExchange.
- Which type of Solution to be chosen. Flow or Trigger.

Apex Email Handler

### Identify the features and capabilities available when creating reports, report types and dashboards

Snapshots que son

### Given a set of requirements, determine the appropriate global, object-specific actions and layouts to optimize the Salesforce mobile user experience

Mobile Navigation

- Smart Search Items
  
### Identify common scenarios for extending an org using AppExchange apps.

### Apply features and capabilities available to restrict and extend object, record and field access

A User can get delete access to a record if the user via Profile or permission set.

- Org Access

- Object Access
- Record Access
- Field Access

What are scoping rules?


### Describe the customizations and uses cases for Chatter

Chatter is a collaboration tool that allows users to communicate with each other in real time. It is integrated with Salesforce and can be used to share information, files, and updates with other users.

## Business Logic and Process Automation

### Given a scenario, demonstrate the use of formula fields to meet stated business requirements

What is a formula field?

- A formula field is a read-only field that derives its value from a formula expression. The formula expression can include merge fields, operators, and functions.

What field types can be used in formula fields?
- Text
- Number
- Currency
- Date
- etc
What fields cannot be used in formula fields?
- Formula fields cannot be used in formula fields.
- Text Area fields cannot be used in formula fields.
- Rich Text Area fields cannot be used in formula fields.
- Long Text Area fields cannot be used in formula fields.
  
### Given a scenario, determine the capabilities and use cases for approval processes

Approval Process

![alt text](image-3.png)

What is an approval process?
- Automated process for approving records in Salesforce
- Number of approvers can be defined in the process
  
Who can edit a record while submitted for approval?
- The System Administrator can edit a record while it is submitted for approval. Also the approver can edit the record while it is submitted for approval.

- Define the steps necessary for a record to be approved

### Given a scenario, demonstrate the use of validation rules to meet stated business requirements

What is a validation rule?

A validation rule is a rule that verifies that the data entered in a record meets the specified criteria before the record can be saved.

VLOOKUP use to-do

### Given a scenario, determine the capabilities and use cases for workflow, Flows and Process Builder
#### Workflow Rules
#### Flows
- Flow is a powerful tool that allows you to automate business processes in Salesforce. It can be used to create complex workflows, automate data entry, and integrate with external systems.

Variables in Flow etc
- Flow variables are used to store data that can be used in the flow. They can be used to store input data, output data, and intermediate data.
#### Process Builder

## Data Modeling and Management

### Given a scenario, determine the appropriate data model


Person Account cannot have hierarchical structure.

Case Scenario for a Junction Object:

Job Position and Candidate

- A Job Position can have many Candidates 
- A Candidate can apply for many Job Positions
- An intermediate object is needed to create a many-to-many relationship between Job Position and Candidate. This intermediate object is called a junction object. In this case a Job Application object can be created to store the relationship between Job Position and Candidate.
  
![alt text](image-4.png)

### Given a scenario, determine the considerations when selecting or changing a field data type

All Types of fields:

Case Picklist to Multipicklist
values retain

How text(encrypted) fields are stored in the database? work

- Encrypted text fields are stored in the database as encrypted values. The original value is not stored in the database, only the encrypted value is stored. 
- Mask can be applied to the field to hide the original value. The mask is applied when the field is displayed in the user interface. The original value is not displayed in the user interface, only the masked value is displayed.

### Given a scenario, determine the options and considerations when importing and exporting data, including the capabilities of external data sources.

Data Importing and Exporting Tools

- Data Import Wizard	
- Data Loader
- Workbench
- Apex Data Loader

What happens when you try to import a file with values that are not in a restricted picklist?
- The import will fail and the values will not be imported into the system. Errors will be generated for each record that contains a value not in the restricted picklist.

**Setting**
![alt text](image.png)

**Error**
![alt text](image-1.png)

### Given a scenario, explain the capabilities of the various relationship types and the implications of each on record access, user interface and reporting

What is a relationship in Salesforce?
- A relationship is a link between two objects that allows you to associate records in one object with records in another object.

**Master Detail**

Limitations

- No more than 2 MD relationships to the same object

Child records in master-detail on custom objects can be reparented to different parent records by selecting the Allow Reparenting checkbox on the master-detail relationship definition.

**Lookup**

Limitations

- No Roll-up summary fields

## User Interface

### Describe the user interface customization options.

On Lightning App Builder you can customize and create the following:
- Lightning Pages
- Record Pages
- Home Pages
- App Pages



## App Deployment
Sandboxes types
This topic relies on how to maintain your application up to date between different environments.

Sandbox Refreshing
- Interval

### Given a scenario, determine the appropriate deployment plan

What is staging

### Given a set of business requirements, recommend a solution for key milestones and considerations when managing the application lifecycle and various types of sandboxes

Integration testing step -> Define

- Integration testing is the process of testing the interaction between different components of a system to ensure that they work together as expected. It is typically done after unit testing and before system testing.

Release Environments:

1. **Develop and Test**: Each of the members own Developer Sandbox to create their assigned customization. Developer Sandbox contain no production data.
2. **Build Release**: Each member migrates their customization from their DevSandboxes to a common DevProSandbox for integration. DPS do not contain production data but you can seed them with testing data.
3. **Test Release**: For UAT, the team uses a partial copy sandbox to create a complete replica of production (without production Data)
4. **Release**: After the release is in production, the team can use the full sandbox to train users without the risk of altering production data. A full sandbox includes a copy of production data.

Logging on to Sandbox environments

Sandbox Templates
### Given a use case, demonstrate knowledge, viability and troubleshooting when using change sets

**What is a Change Set?**

![alt text](image-2.png)

- A change set is a container for components that you want to deploy from one Salesforce org to another. Change sets are used to move customizations between related orgs, such as from a sandbox to a production org.
- When a change set fails the entire transaction is rolled back
- Cannot be rolled back once deployed
- Validation is not required but recommended
- Can go from sandbox to production or production to sandbox
  
**Inbound and Outbound**
- Inbound change set: A change set that is received by an org. Inbound change sets are used to deploy components from a source org to a target org.
- Outbound change set: A change set that is sent from an org. Outbound change sets are used to deploy components from a target org to a source org.

**Best Practices for change sets**

1. Deploy all dependent components
2. Add permissions and access settings to outbound change set
3. Clone a change set to add dependent components to an uploaded change set
4. Use distinct names for global publisher layouts and Outlook publisher layouts
5. Plan deployments around maintenance schedule
6. Validate change sets before deployment
7. View component details


### Describe the capabilities and consideration when using change set
Quick deploy
run specified tests

### Describe the uses cases and considerations when using unmanaged and managed packages


Packages on Salesforce

Managed
Unmanaged

Naming conflicts




