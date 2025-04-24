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
    - [Given a set of business requirements, determine the appropriate sharing solution.](#given-a-set-of-business-requirements-determine-the-appropriate-sharing-solution)
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

Snapshots are used to capture the state of a report at a specific point in time. This can be useful for tracking changes in data over time or for creating historical reports.

### Given a set of requirements, determine the appropriate global, object-specific actions and layouts to optimize the Salesforce mobile user experience

Mobile Navigation

- Smart Search Items
  
### Identify common scenarios for extending an org using AppExchange apps.

What is AppExchange?

![alt text](image-8.png)

AppExchange is a marketplace for Salesforce applications and components. It allows users to find, install, and customize applications that extend the functionality of Salesforce.

### Apply features and capabilities available to restrict and extend object, record and field access

Profiles: Profiles are used to define the permissions and access levels for users in Salesforce. They determine what users can see and do in the system.

Permission Sets: Permission sets are used to grant additional permissions to users beyond what is defined in their profile. They can be used to give users access to specific objects, fields, and records without changing their profile.

A User can get delete access to a record if the user via Profile or permission set.

- Org Access

- Object Access
- Record Access
- Field Access

**What are scoping rules?**

Scoping rules are used to determine which records are included in a report or dashboard. They can be used to filter records based on specific criteria, such as record type, owner, or date range. todo revisar

### Given a set of business requirements, determine the appropriate sharing solution.
### Describe the customizations and uses cases for Chatter

Chatter is a collaboration tool that allows users to communicate with each other in real time. It is integrated with Salesforce and can be used to share information, files, and updates with other users.

Features of Chatter:

- Chatter Groups: Users can create and join groups to collaborate on specific topics or projects.
- Out of Office: Allows users to set their status to out of office and automatically notify other users when they are unavailable.

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

Data Modeling and Management is the process of designing and managing the data structures and relationships in Salesforce. It includes creating custom objects, fields, and relationships, as well as managing data integrity and security.

### Given a scenario, determine the appropriate data model


Person Account cannot have hierarchical structure.

Case Scenario for a Junction Object:

Job Position and Candidate

- A Job Position can have many Candidates 
- A Candidate can apply for many Job Positions
- An intermediate object is needed to create a many-to-many relationship between Job Position and Candidate. This intermediate object is called a junction object. In this case a Job Application object can be created to store the relationship between Job Position and Candidate.
  
![alt text](image-4.png)

Case Scenario for an Object + Lookup Relationship over a Picklist:

Global Containers want to track the location of each container.

Advantages of using a Lookup Relationship over a Picklist:
- Additional information about the container can be stored in a custom object called Container Location.
- Larger number of locations can be added to the system without modifying the picklist values.
- User can add new locations without modifying the picklist values.
  

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
  - Limited to 50,000 records
- Data Loader
- Workbench
- Apex Data Loader


| Tool                | Data Import Wizard | Data Loader | Workbench | Apex Data Loader |
| ---                 | ---                | ---         | ---       | ---              |
| Maximum Records     | 50,000             | 5 Million   | 5 Million | 5 Million        |
| File Formats        | CSV                | CSV         | CSV       | CSV              |
| Object Types       | Standard and Custom| Standard and Custom | Standard and Custom | Standard and Custom |
| Bulk API           | No                 | Yes         | Yes       | Yes              |

How to insert records from an external system into Salesforce with unique identifiers?
- External IDs can be used to insert records from an external system into Salesforce. External IDs are unique identifiers that are used to match records in Salesforce with records in the external system.
  
Case Scenario for External IDs:
SAP system has a unique identifier for each record. This identifier can be used as an external ID in Salesforce to match records in Salesforce with records in the SAP system.

We define the SAP Id as an external ID in Salesforce on the Account object for example. When we import records from the SAP system into Salesforce, we can use the SAP Id as an external ID to match records in Salesforce with records in the SAP system.

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

A master-detail relationship is a type of relationship in Salesforce that allows you to create a parent-child relationship between two objects. In a master-detail relationship, the detail record is dependent on the master record. This means that if the master record is deleted, all detail records associated with it are also deleted.

![alt text](image-5.png)

- Roll-up summary fields can be created on the master record to summarize data from the detail records.
- No more than 2 MD relationships to the same object
- Ownership of the detail record is determined by the master record

Child records in master-detail on custom objects can be reparented to different parent records by selecting the Allow Reparenting checkbox on the master-detail relationship definition.

**Lookup**

A lookup relationship is a type of relationship in Salesforce that allows you to create a link between two objects. In a lookup relationship, the child record is not dependent on the parent record. This means that if the parent record is deleted, the child record is not deleted.
Limitations

- No Roll-up summary fields

## User Interface

### Describe the user interface customization options.

On Lightning App Builder you can customize and create the following:
- Lightning Pages
- Record Pages
- Home Pages
- App Pages

Fields can be arranged in either 1 or 2 columns in Lightning App Builder.

Middle Name and Suffix fields can be disabled on User Interface -> Name Settings

## App Deployment

This topic relies on how to maintain your application up to date between different environments.

App Deployment is the process of moving customizations and configurations from one Salesforce org to another. This can include moving custom objects, fields, page layouts, and other components.

### Given a scenario, determine the appropriate deployment plan

What is staging

### Given a set of business requirements, recommend a solution for key milestones and considerations when managing the application lifecycle and various types of sandboxes

**Sandboxes types**

- Developer Sandbox: A sandbox that is used for development and testing. It contains a copy of the production org's metadata but does not contain any production data.
- Developer Pro Sandbox: A sandbox that is used for development and testing. It contains a copy of the production org's metadata and a larger storage capacity than a Developer Sandbox.
- Partial Copy Sandbox: A sandbox that is used for testing and training. It contains a copy of the production org's metadata and a subset of production data.
- Full Sandbox: A sandbox that is used for testing and training. It contains a complete copy of the production org's metadata and production data.

Table of Sandbox Types

| Sandbox Type        | Description                                                                                   | Storage Limitations |
| ---                 | ---                                                                                           | ---                 |
| Developer Sandbox   | A sandbox that is used for development and testing. It contains a copy of the production org's metadata but does not contain any production data. | 200 MB              |
| Developer Pro Sandbox | A sandbox that is used for development and testing. It contains a copy of the production org's metadata and a larger storage capacity than a Developer Sandbox. | 1 GB                |
| Partial Copy Sandbox | A sandbox that is used for testing and training. It contains a copy of the production org's metadata and a subset of production data. | 5 GB                |
| Full Sandbox        | A sandbox that is used for testing and training. It contains a complete copy of the production org's metadata and production data. | 100% of production data |

Sandbox Refreshing
- Interval
Integration testing step -> Define

- Integration testing is the process of testing the interaction between different components of a system to ensure that they work together as expected. It is typically done after unit testing and before system testing.

Release Environments:

1. **Develop and Test**: Each of the members own Developer Sandbox to create their assigned customization. Developer Sandbox contain no production data.
2. **Build Release**: Each member migrates their customization from their DevSandboxes to a common DevProSandbox for integration. DPS do not contain production data but you can seed them with testing data.
3. **Test Release**: For UAT, the team uses a partial copy sandbox to create a complete replica of production (without production Data)
4. **Release**: After the release is in production, the team can use the full sandbox to train users without the risk of altering production data. A full sandbox includes a copy of production data.

**Logging on to Sandbox environments**

You can log in to a sandbox environment from the production environment by going to Setup -> Sandboxes and clicking on the login link for the sandbox you want to log in to.

You can also log in to a sandbox environment by going to the sandbox URL and entering your production username and password.

Sandbox Templates

- Sandbox templates are used to define the data that is included in a sandbox when it is created. They can be used to include or exclude specific objects, fields, and records from the sandbox.
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

- Quick deploy is a feature that allows you to deploy a change set without running all tests. This can be useful when you want to deploy a change set quickly and do not want to wait for all tests to run.

### Describe the uses cases and considerations when using unmanaged and managed packages

<p align="center">
  <img src="image-6.png" alt="alt text">
</p>
What is a package on Salesforce?
- A package is a container for components that can be distributed and installed in other Salesforce orgs. Packages can include custom objects, Apex code, Visualforce pages, and other components.

![alt text](image-7.png)
 
Unmanaged Package

- Unmanaged packages are used to distribute open-source projects or applications that are not intended to be upgraded. Unmanaged packages do not include a namespace and can be modified by the recipient org. Once the components are installed in the recipient org, they are no longer associated with the original package and cannot be edited. The developer of the unmanaged package does not have control over the components in the recipient org.
  
Managed Package

- Managed packages are used to distribute commercial applications that are intended to be upgraded. Managed packages include a namespace and can be modified by the recipient org. The developer of the managed package has control over the components in the recipient org and can upgrade the package. Managed packages can also include a license agreement and can be sold on the AppExchange.

**Naming conflicts**

- Unmanaged packages do not include a namespace and can cause naming conflicts with other components in the recipient org. Managed packages include a namespace and do not cause naming conflicts with other components in the recipient org.




