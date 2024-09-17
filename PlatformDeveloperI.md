# Salesforce Platform Developer I
<!-- Versiones -->
<!-- tabla de versiones -->
| Version | Fecha | Autor | Descripción |
| ---     | ---   | ---   | ---         |
| 1.0     | 29/04/2024  | Adrián Arribas | Documento de estudio para el examen de Salesforce Platform Developer I (Sin organizar)|
| 1.1     | 29/04/2024  | Adrián Arribas |Organizado y añadido cosas de Examenes FoF|
| 1.2     | 16/09/2024  | Adrián Arribas |Añadida la guía de estudio.|

## Status estudio

<!-- TABLA -->
| Tema | Porcentaje |
| ---  | ---        |
| User Interface | 53% |
| Developer Fundamentals | 64.29% |
| Testing, Debugging, and Deployment | 76.92% |
| Process Automation and Logic | 88.89% |

## To-do
- [ ] Organizar por temas 
- [ ] Audit fields ¿q son?
- [ ] Que es un campo de fórmula

## Introducción
El examen de Salesforce Platform Developer I es un examen que evalúa los conocimientos de un desarrollador de Salesforce. En este documento se recogen los conceptos más importantes que se deben conocer para aprobar el examen.

Por una parte los topics son resumenes o transcripciones de la guia de estudio de focus on force y mas adelante hay respuestas concretas a las preguntas test ademas de un banco de preguntas que he hecho yo.

| Concepto  | Descripción |
| ---       | ---         |
| Puntuación| 68%         |
| Tiempo    | 105 minutos |
| Preguntas | 60          |

## Indice 

- Dev Fundamentals
  - Multit  enant etc
  - 
- Process Automation and Logic ( Declarative, Apex, Advanced)
- User Interface
- Testing, Debugging and Deployment


## Developer Fundamentals


### Study Guide 
Introduction

Salesforce is built upon a multi-tenant architecture and consists of features and characteristics such as cloud computing, shared system resources,automatic system updates, and metadata-driven kernel. In effect, development in this environment impose different considerations compared to traditional development.

Salesforce generally follows the Model-View-Controller (MVC) architecture where each layer presents specific aspects pertaining to application development.

Solutions can be developed in the platform using several built-in declarative tools. For more complex requirements, programmatic tools are available such as Apex and Visualforce. The Lightning Component framework, which is a UI framework, can be used for building custom Lightning components to deliver responsive and efficient event-driven applications.

Multitenant 

It features shared system resources and usage limitations
#### Cloud Computing

Lighthning platforms is a PaaS that is bult for cloud computing and based on the multitenant architecture.

1. Web Based Platform
2. Focused Development
3. No software ins
#### Shared Resources
1. All Customers share the same computing power, custom-designed database, data storage and core features.
2. Salesforce monitors code execution and has various governor and resource limits associated with code execution
3. Resources such as CPU Usage, queries and records returned are limited per customer to ensure optimal performance.

*System Updates*
- System Updates

Automatic Seamless Upgrades are rolled out three times a Year Spring,Summer and Winter
- Shared Environment

All customers automatically get the same updates at the same time throughout the year

- Release Preview

Sandboxes are upgraded before production so that the changes can be previewed and tested.

*Metadata Driven Kernel*

Arch

There is a clear separation between the runtime database engine(kernel), tenant data and metadata, which allows easy upgrades.

Deployment

Deployment of new or updated metadata components to production is strictly managed. Unit tests must cover 75% of the application's source code for deployment to production.

Los recursos son compartidos para todos los usuarios, potencia de computo, custo  design database y funcionalidades core.

Ejecucion de codigo monitorizada para mantener los governor limits y los resource limits.

El uso de CPU, queries y tuplas devueltas son limitados por cliente para asegurar un rendimiento optimo.
- Cloud Computing

Restricciones al ser multitenant

- Tiempo de ejecución de SOQL (10 segundos)
- Tiempo de ejecución de CPU (10 segundos)
- Número de registros devueltos por una consulta SOQL (10,000)

MVC

En desarrollo de Apps, el MVC es un patrón de arquitacture que seapara la capa de negocio con la capa de datos y la presentacion al usuarios

Capas:

- Model
  
Representa la estructura de los objetos a traves de los sObjects, fields y clases Apex
- View

Representa la capa de presetnacion que son las pages y components
- Controller

Represents the business Logic, declarativo o programatico. Custom controller or extensions are written in Apex Classes.

Model

App Manager

- nav bar


#### Lightning Component Framework

A UI framework that allows building SPAs with dynamic and responsive User Interfaces in Salesforce.
- JavaScript on client side
- Apex in server side

There are 2 programming language models

- Aura components
- LWC

Benefits:
- Device awareness
- Cross Browser Compatibility
- Out of the box components
- Customizing Lightning Experience

About Performance it utilizes Stateful Client using JS and stateless server (apex) The client call the server only when absolutely necessary, which results in fewer calls to the server and more responsive and efficient apps.

Lightning components utilize Event-driven arch. Components are capable of listening to events and responding accordingly.

The USAGE may vary for different Contexts. For example they can be added as custom tabs in lightning Experience and the Salesforce Mobile App.
<w>

#### App Manager Page 24

An app is a group of tabs that work as a unit. In Salesforce both Lightning and Classic apps can be created and customized to serve specific functions in Salesforce.

- App Contents

Classic Apps contain standard and custom tabs, which can include standard and custom object tabs, Visualforce tabs, Lightning component tabs, Canvas apps and web apps. On the other hand, Lightning apps contain everything from the Classic apps list, plus they can contain Lightning Page tabs and utilities like Sales Dialer.

- Creating Apps

A Lightning App can be created by navigating to App Manager in Setup. Once an app is created, it can be extended by adding objects and fields, using automation, defining Access Settings, adding Users, etc... Lightning App Builder can be used to update the app branding, navigation, and other options, and manage the Lightning pages assigned to the app.

- New Lightning App Wizard

When creating a new Lightning app using the App Manager, the app can be given a name, its primary color and logo can be set, app description can be added, and the type of navigation (standard or console) can be set. Form factors available for the app can be selected. The items that appear in the navigation bar can be selected. Utility items, like Recent Items, Notes, Dialer, To do list, and Open CTI, can be added to the utility bar. The app can be assigned to user profiles.

❖NAVIGATION BAR

The item at the top of the list in the navigation bar becomes the app’s landing page on both desktop and mobile. The order of the items determines the default objects shown in the Top Results page on the search results page.

Declarative Tools

Programatic Tools

Data Import,Export and Management

![alt text](image-1.png)
---
Preguntas sobre codigo, objetos, relaciones, etc

#### Herramientas de Salesforce
##### Code Builder
- Permite escribir código en Salesforce
  - Apex
  - Lightning Web Components
  - Visualforce
##### Einstein
- **Einstein:** Permite hacer inteligencia artificial en Salesforce
Next Best Action
- ** Einstein Activity Capture:** Permite capturar las actividades de los usuarios
  - ermite capturar las actividades de los usuarios de Gmail
  - Permite capturar las actividades de los usuarios de Office 365
  - Permite capturar las actividades de los usuarios de Exchange
##### Ant Migration Tool
**Ant Migration Tool:** Permite migrar metadatos de Salesforce
- Metadata Component Member
- Metadata Component Type

##### DX
#### Schema Builder
- **Schema Builder:** Permite ver los objetos de Salesforce
  - **Schema Builder:** Permite ver los campos de un objeto
  - **Schema Builder:** Permite ver las relaciones

- Filter to display only objects of interest
- The map can be used to navigate to objects of interest
- Hide relationships to improve performance

#### AppExchange
- **AppExchange:** Permite instalar aplicaciones de Salesforce
  - Permite instalar componentes de Salesforce
  - Permite instalar flujos de Salesforce
  - Permite instalar integraciones de Salesforce
  - Permite instalar soluciones de Salesforce
#### Field deletion
- Cuando se elimina un campo de un objeto
No se puede borrar un campo si está en uso en:
- Fórmulas
- Cláusulas de búsqueda
- Workflow field updates

#### Sharing 
- **With sharing:** Permite que se apliquen las reglas de seguridad de Salesforce
Without sharing
- **Without sharing:** No aplica las reglas de seguridad de Salesforce
- **Inherited sharing:** Hereda las reglas de seguridad de Salesforce

#### Object Manager
- **Object Manager:** Permite gestionar los objetos de Salesforce
  - Permite crear objetos
  - Permite editar objetos
  - Permite eliminar objetos
  - Permite ver los campos de un objeto
  - Permite ver las relaciones de un objeto

#### Apex

Cosas de apex

Getter and setter que son como se usan
- **Getter:** Permite obtener el valor de una variable
- **Setter:** Permite establecer el valor de una variable
  - Se pueden usar DMl operations en un setter

##### Tipos
###### Primitives:
Estos tipos no necsitan ser instanciados.
- **Boolean:** `Boolean`
- **Date:** `Date`
- **Date and Time:** `Datetime`
- **Number:** `Decimal`, `Double`, `Integer`, `Long`
- **String:** `String`
- **Time:** `Time`
- **ID:** `ID`
- **Enum:** `Enum`

<!-- CLASE snippet como declarar -->

```
public class MyClass {
  Boolean isActive = true;
  Date today = Date.today();
  Datetime now = Datetime.now();
  Decimal amount = 100.0;
  Double pi = 3.14159265;
  Integer count = 10;
  Long bigNumber = 1000000000;
  String name = 'Hello, World!';
  Time now = Time.now();
  ID recordId = '0012w00000Q8Z2AAK';
  Enum day {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY};
}
```

###### Collections
- **List:** `List`
- **Set:** `Set`
  - Permite almacenar varios elementos sin duplicados
- **Map:** `Map`
  - Permite almacenar varios elementos con clave-valor

##### Bucles
- **For:** Bucle que se ejecuta un número determinado de veces
- **While:** Bucle que se ejecuta mientras se cumpla una condición
- **Do-While:** Bucle que se ejecuta al menos una vez y luego se ejecuta mientras se cumpla una condición
 <!-- Snippet -->
```
for (Integer i = 0; i < 10; i++) {
  System.debug(i);
}
```
##### Anotaciones
- **@future:** Permite ejecutar un método de forma asíncrona
  - Estos metodos deben ser void
  - No permiten sobrepasar los limites de Salesforce
- **@isTest:** Indica que el método es un test
- **@TestVisible:** Indica que el método es visible para los tests
- **@AuraEnabled:** Indica que el método es visible para los componentes de Lightning
- **@InvocableMethod:** Indica que el método es visible para los Flows


##### Tipos de clases
- **Standard:** Clases que vienen por defecto en Salesforce
- **Custom:** Clases que se pueden crear

- **Abstract:** Clases que no se pueden instanciar
    * No se pueden instanciar
    * Se pueden usar para heredar
    * Se pueden usar para implementar interfaces
- Virtual
    * Se pueden instanciar
    * Se pueden usar para heredar
    * Se pueden usar para implementar interfaces

<!-- tabla resuemtn -->

| Clase | Instanciable | Heredable | Interfaces |
| ---   | ---          | ---       | ---        |
| Standard | Si | Si | Si |
| Custom | Si | Si | Si |
| Abstract | No | Si | Si |
| Virtual | Si | Si | Si |

##### Clases Utiles
###### Database
* **Database:** Clase que permite hacer operaciones de DML

Database.insert

SaveResult

Index share
- JSON
- Math
- System
  * **System:** Clase que permite hacer operaciones de sistema
- Metadata
- Schema
- Test
- 
Database.query
- **Database.query:** Permite hacer queries dinámicas
- **Database.queryLocator:** Permite hacer queries dinámicas y soporta más de 50,000 registros
- 

###### Crypto
- **Crypto:** Permite encriptar y desencriptar datos
<!-- Snippet -->
```
Blob cryptoKey = Crypto.generateAesKey(256);
Blob data = Blob.valueOf('Hello, World!');
Blob encryptedData = Crypto.encrypt('AES256', cryptoKey, data);
Blob decryptedData = Crypto.decrypt('AES256', cryptoKey, encryptedData);

System.assertEquals(data, decryptedData);
```

#### Modelo Vista Controlador

Añadir foto de MVC

##### Modelo
- **Modelo:** Representa los datos y las reglas de negocio
##### Vista	
- **Vista:** Representa la interfaz de usuario
##### Controlador
- **Controlador:** Representa la lógica de negocio

#### Relaciones

- **Master-Detail:** Relación que permite que un registro hijo dependa de un registro padre
  * Si se elimina el registro padre, se eliminan los registros hijos
  * Un objeto custom no puede estar en el lado de "Master" con un objeto estándar
  * Un objeto custom en el lado de "Detail" no puede tener colas.
  * El hijo hereda el sharing del padre
  * El hijo hereda los security settings del padre
  * El propietario del padre se asigna al hijo automáticamente
  * El propietario del hijo no se puede cambiar
  * El hijo no puede tener sus propias sharing rules
- **Lookup:** Relación que permite que un registro hijo dependa de un registro padre
  * Si se elimina el registro padre, no se eliminan los registros hijos
  * Un objeto custom puede estar en el lado de "Master" con un objeto estándar
  * Un objeto custom en el lado de "Detail" puede tener colas.
- **Hierarchical:** Relación que permite que un registro hijo dependa de un registro padre
  * Si se elimina el registro padre, se eliminan los registros hijos
  * Un objeto custom no puede estar en el lado de "Master" con un objeto estándar
  * Un objeto custom en el lado de "Detail" no puede tener colas.
- **Indirect Lookup:** Relación que permite que un registro hijo dependa de un registro padre
  * Si se elimina el registro padre, no se eliminan los registros hijos
  * Un objeto custom puede estar en el lado de "Master" con un objeto estándar
  * Un objeto custom en el lado de "Detail" puede tener colas.

<!-- Tabla resumen -->

| Relación | Master-Detail | Lookup | Hierarchical | Indirect Lookup |
| ---      | ---           | ---    | ---          | ---             |
| Eliminación de registros hijos | Si | No | Si | No |
| Objeto custom en el lado de "Master" con objeto estándar | No | Si | No | Si |
| Objeto custom en el lado de "Detail" con colas | No | Si | No | Si |
#### Importación y Exportación de Datos
##### Importación
- **Data Import Wizard:** Permite importar datos de forma sencilla
- **Data Loader:** Permite importar datos de forma masiva
##### Exportación
- **Data Export:** Permite exportar datos de forma sencilla
- **Developer Fundamentals:** Permite aprender los conceptos básicos de Salesforce


Merge

- **Merge:** Permite combinar varios registros en uno solo
  - merge accountList;
  - merge accountList[0];
  - merge accountList[0], accountList[1];
  - merge accountList[0], accountList[1], accountList[2];
Como se usa merge

```
merge accountList;
```

Ejemplo de cuentas merge

```
Account account1 = new Account(Name='Account1');
Account account2 = new Account(Name='Account2');
insert account1;
insert account2;
List<Account> accountList = [SELECT Id FROM Account WHERE Name IN ('Account1', 'Account2')];
merge accountList;
```
Considerations 

When merging sObject records, consider the following rules and guidelines:
- Only leads, contacts, cases, and accounts can be merged. See sObjects That Don’t Support DML Operations.
- You can pass a master record and up to two additional sObject records to a single merge method.
- Using the Apex merge operation, field values on the master record always supersede the corresponding field values on the records to be merged. To preserve a merged record field value, simply set this field value on the master sObject before performing the merge.
- External ID fields can’t be used with merge.
### Process Automation and Logic

#### Flows 
Los flows pueden acceder datos de Salesforce y de otros sistemas

##### Condiciones de Flows
- Only when a record is created
- Only when a record is updated
- Only when a record is updated to meet the condition requirements

##### Elementos de Flows
- **Action:** Elemento que permite hacer una acción
- **Assignment:** Elemento que permite asignar un valor a una variable
- **Choice:** Elemento que permite tomar decisiones
- **Collection:** Elemento que permite almacenar varios elementos
- **Data:** Elemento que permite almacenar datos
- **Loop:** Elemento que permite hacer bucles
- **Screen:** Elemento que permite mostrar una pantalla
- **Subflow:** Elemento que permite llamar a otro flow
- **Text Template:** Elemento que permite mostrar texto
- wait for conditions
  - **Wait:** Elemento que permite esperar un tiempo
##### Funciones importantes de Flows
- Update Records
  * Permite actualizar registros de un objeto seleccionando los campos que se quieren actualizar
- Create Records
- Delete Records
- Get Records

##### Variables de Flows
  
  <!-- tabla  -->
| Variable | Descripción |
| ---      | ---         |
| `$Flow`  | Permite acceder a las variables del flow |
| `$Record`| Permite acceder a los campos del registro |
| `$GlobalConstant` | Permite acceder a las constantes globales |
| `$Label` | Permite acceder a las etiquetas |
| `$Api` | Permite acceder a las APIs |

##### Debugging de Flows

- **Debugging:** Permite ver los errores de un Flow

Se enviará un email al usuario que ha lanzado el proceso de flujo si se produce un error en el flujo. Contiene un enlace a la página de detalles del flujo en la que se puede ver el error.

No se incluye link en los siguientes casos:
- Flow inactivo
- Flow que no se ha guardado
- Platform event-triggered flow
- Managed package flow 
- As a result of an apex method call

Flow Test Coverage
Sirve para saber si el flujo tiene suficiente cobertura de pruebas
  
##### Visibilidad de componentes
La visibilidad de los componentes se puede controlar con las siguientes propiedades
- **Visibility:** Permite controlar la visibilidad de un componente
- **Accessibility:** Permite controlar la accesibilidad de un componente
##### Order de ejecución de Flows
##### Flow Orchestration
- **Flow Orchestration:** Permite orquestar varios Flows
##### Extra sobre flows
- Custom Property Editors
  - Used as a custom user interface for configuring the properties of the component
- automaticOutputVariables
  - Que es
    - Access stored variables in flow builder via JS

### User Interface 
Aqui va el tema de seguridad Injections, XSS, CSRF, etc

HTMLEncode

StripInaccessible

Sharing 

Enforce
#### Lightning Web Components
Compuestos por los siguientes elementos
- **HTML:** Permite definir la estructura de la página UI
  - No es necesario si se trata de un Service Component
- **CSS:** Permite definir el estilo de la página [Optional]
- **JavaScript:** Permite definir la lógica de la página
- **XML:** Permite definir los metadatos de la página
- **SVG:** Permite definir gráficos vectoriales

Ventajas de usar un Framework Lightning Component:
- Event Driven Architecture
  - Permite que los componentes se comuniquen entre sí
  - Better for decoupling components
  - Device Aware Capabilities and Cross Browser Compatibility

todo colocar esto en algun sitio

Lanzar una query apex corre en system mode por defecto 
Las DML operations corren en user mode por defecto

Lightning Message Service
- **LMS:** Permite la comunicación entre componentes de Lightning Web Components y Aura Components
  
  ```
  import sampleChange from '@salesforce/messageChannel/SampleMessageChannel__c';

  this.tabId = message.tabId;
  ```
- Visualforce Overrides: Permite sobreescribir la interfaz de usuario de Salesforce
  - Edit
  - View

Lightning Style Sheets
- **LSS:** Permite personalizar el estilo de los componentes de Lightning
<!-- snippetde codigo -->
```
<apex:page standardController="Account" lightningStylesheets="true">
  <body class="slds-vf-scope">
    <apex:form>
      <apex:inputField value="{!Account.Name}"/>
      <apex:commandButton action="{!save}" value="Save"/>
    </apex:form>
  </body>
</apex:page>
```

##### Como usar wire en LWC
<!-- snippet de wire account-->
```
import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class AccountRecord extends LightningElement {
  accountId;
  handleAccountIdChange(event) {
    this.accountId = event.target.value;
  }

  @wire(getRecord, { recordId: $accountId, fields: [NAME_FIELD] })
  account;
}
```

Security.stripInaccessible como usar
- **Security.stripInaccessible:** Permite quitar los campos a los que el usuario no tiene acceso
  - mas info [Security.stripInaccessible](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripinaccessible.htm)
    - Devuelve tipo SObjectAccessDecision 
      - Recuperar las tuplas -> getRecords()

Targets LWC

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>52.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
```
#### Visualforce 

Metodos utiles para Visualforce
- **Apex:** `detail` -> Muestra los detalles de un registro
- **renderAs:** Imprime la página
- `getSelected()` records para obtener las filas seleccionadas

Useful controllers:
- Standard Controller
- Standard List Controller
  - A dynamic list of records can be loaded on the page
- Standard set Controller
  - getCompleteResult() 
    - returns FALSE if the controller wont be able to process all the returned records
- Custom Controller
  
Standard controller methods
- **Apex:** `save` -> Guarda el registro
- **Apex:** `cancel` -> Cancela la edición
- **Apex:** `delete` -> Elimina el registro
- **Apex:** `edit` -> Edita el registro
- **Apex:** `quickSave` -> Guarda el registro
- **Apex:** `list`-> Lista los registros

Para añadir visualforce a un layout necesitamos:

- Standard Controller
- Controller Extension
- ApexPages.StandardController

<!-- snippet -->
Visualforce Page
```
<apex:page standardController="Case" extensions"CaseLogicExtension">
```
Controlador Apex
```
public class CaseLogicExtension {
  public CaseLogicExtension(ApexPages.StandardController controller) {
    Case c = (Case)controller.getRecord();
  }
}
```
#### Aura
##### Aura Components
Permite aprender los conceptos de los componentes de Aura

Orden de firing 
  - Init
    - Empieza desde el componente inermost y va hacia afuera.
##### Eventos
- Application Event
- Component Event
- Bubble Event
  - Configuracion de Bubble Event
  - Bubble Event: true
  - Composed: false 
    - De esta manera no se propaga a través de Shadow DOM 
- Capture Event
- System Event

<!-- Como importar un CSS -->
```
/**
  * @description CSS file
  */
@import "c/style.css";
```

<!-- Como hacer un componente con valor editable por usuario -->
```
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
  <aura:attribute name="message" type="String" default="Hello, World!" />
  <lightning:input type="text" label="Message" value="{!v.message}" />
</aura:component>
```
<!-- design component -->
```
<design:component>
  <design:attribute name="message" label="Message" description="The message to display" />
</design:component>
```

#### Seguridad
#####  CSRF
- **CSRF:** Cross-Site Request Forgery
  - Que es: Ataque que permite que un atacante realice acciones en nombre de un usuario

Como evitarlo en Salesforce
- **CSRF Token:** Permite evitar que se realicen ataques CSRF
  - mas info [CSRF Token](https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_csrf.htm)

- **OWD: Organization Wide Defaults** Permite definir la visibilidad de los registros
##### XSS Threats
- JSINHTMLENCODE()
  * Evita que se ejecute código JavaScript
- HTMLENCODE()
  * Evita que se ejecute código HTML
- JSENCODE()
  * Evita que se ejecute código JavaScript 

### Testing, Debugging, and Deployment
- Dividido en 4 Objetivos
  * Testing
  * Debugging
  * Deployment
  * Performance

Cosas de API etc<>
Cosas sobre los packages etc sandboxes
#### Testing 

Donde ejecutar todos los tests:
- Selecting Run All Tests in the Developer Console
- Using the Run All Tests button on the Apex Classes page in Salesforce Setup

Unit tests cannot perform callouts to external services. To test callouts, use a mock callout test.

Unit tests can't send emails.

Unit tests can test single and bulk actions.

- **System.assert:** Permite hacer aserciones
- **System.assertEquals:** Permite hacer aserciones
- **System.assertNotEquals:** Permite hacer aserciones

Tienen acceso a:
- Profiles
- Users
- Record Types
Cuanta cobertura de código se necesita?
- 75% de cobertura de código para clases Apex
- 1% de cobertura de código para triggers
Donde se puede hacer Run All 
- Developer Console
- Capabilities:
  - Develop a Visualforce page
  - View and examine debug logs
  - Execute anonymous Apex code
- Setup Apex Classes
  

  Skip code coverage
  - New Run menu item in the Developer Console
  - Apex Test Execution page in Setup
  - 
#### Deployments
deployments can be scripted and scheduled using the Salesforce CLI
change sets are cloud based and do not require files to be downloaded locally
#### Tipos de sandboxes

- **Developer:** Permite desarrollar en Salesforce
- **Developer Pro:** Permite desarrollar en Salesforce
- **Partial:** Permite desarrollar en Salesforce
  - TODO algo de info aqui
- **Full:** Permite desarrollar en Salesforce
  - Perfomance testing
  - Load testing
  - Staging
#### Como distribuir un paquete comercial en AppExchange
what do you need to distrubute a commercial package on the AppExchange

- Partner Developer Edition to manage all the source code 
- Developer Edition to create the package

Developer Pro or Partial Copy cannot be used to distribute a commercial package on the AppExchange
##### Devops

devops center +github account for tracking changes and managing deployments and testing across the orgs
## App Builder
### Componentes
- **Standard:** Componentes que vienen por defecto en Salesforce
- **Custom:** Componentes que se pueden crear
- **Custom Managed:** Componentes que se pueden instalar desde AppExchange
  - No pueden ser modificados por el usuario ya que son de terceros
- **Custom Unmanaged:** Componentes que se pueden crear y modificar
  - Pueden ser modificados por el usuario
- **AppExchange:** Componentes que se pueden instalar desde AppExchange
- **Flow:** Componentes que se pueden crear con Flow
- **Lightning Page:** Componentes que se pueden crear con Lightning Page
- **Visualforce Page:** Componentes que se pueden crear con Visualforce Page
- **Web Tab:** Componentes que se pueden crear con Web Tab
- **Aura Component:** Componentes que se pueden crear con Aura Component
- **Canvas App:** Componentes que se pueden crear con Canvas App
- **Chatter Tab:** Componentes que se pueden crear con Chatter Tab
- **Dashboard:** Componentes que se pueden crear con Dashboard
- **HomePage Component:** Componentes que se pueden crear con HomePage Component
- **HomePage Layout:** Componentes que se pueden crear con HomePage Layout
- **Report:** Componentes que se pueden crear con Report
- **Report Type:** Componentes que se pueden crear con Report Type
- **S-Control:** Componentes que se pueden crear con S-Control
- **Site.com Page:** Componentes que se pueden crear con Site.com Page
- **Visualforce Component:** Componentes que se pueden crear con Visualforce Component
- **Visualforce Tab:** Componentes que se pueden crear con Visualforce Tab

Lightning Message Service
- **LMS:** Permite la comunicación entre componentes de Lightning Web Components y Aura Components

Tooling API ApexLog
- **ApexLog:** Permite ver los logs de Apex
  - Partes de un log
    - Header
    - LogLines
    - Execution Units
    - Code Units
### Logs levels
- NONE
- ERROR
- WARN
- INFO
- DEBUG
- FINE
- FINER
- FINEST

**Traced entities:** Permite ver las entidades que se han trazado
  - Automated Process
  - Platform Integration
  - User
  - Apex Class
  - Apex Trigger
  
  
### Orden de ejecución salesforce
- Before Trigger
- Validation Rules
- Save to the database (no commit)
- After Trigger
- Assignment Rules
- Auto-Response Rules
- Workflow Field Updates
- before and after triggers one more time
- Escalation Rules
- Parent Rollup Summary Fields
- Criteria Based Sharing Rules
- Commit to the database all DML operations
- Post-commit logic

### Exception

Que es una excepción?
- Una excepción es un error que ocurre en tiempo de ejecución
- Las excepciones pueden ser atrapadas y manejadas
- Las excepciones pueden ser lanzadas
- Las excepciones pueden ser lanzadas por el sistema o por el usuario
  
Tipos de excepciones
- **DMLException:** Excepción que ocurre cuando hay un error en una operación de DML
- **LimitException:** Excepción que ocurre cuando se supera un límite de Salesforce
- **NullPointerException:** Excepción que ocurre cuando se intenta acceder a un objeto nulo

Crear tu propia excepción
- **CustomException:** Excepción que se puede crear para manejar errores personalizados

<!-- snippet para crear exception -->
```
public class CustomException extends Exception {}
```

revisar
Custom Events

<!-- Que tiene el evento en salesforce -->
this.eventData = event.detail;
this.eventData = event.detail.value;
this.eventData = event.detail.recordId;

#### Schema
- **Schema:** Permite obtener información de los objetos de Salesforce
<!-- Snippet -->
```
Schema.DescribeSObjectResult objectResult = Account.SObjectType.getDescribe();
System.debug('Is the object createable? ' + objectResult.isCreateable());
```
<!-- Que podemos obtener desde schema -->
#### DescribeFieldResult
- **DescribeFieldResult:** Permite obtener información de un campo
#### DescribeSObjectResult
- **DescribeSObjectResult:** Permite obtener información de un objeto
#### IsUpdateable
- **IsUpdateable:** Permite saber si un campo es editable
<!-- Snippet -->
```
Schema.DescribeFieldResult fieldResult = Account.Name.getDescribe();
System.debug('Is the field updateable? ' + fieldResult.isUpdateable());
```
<!-- With sharing  -->
#### Que es una clase de servicio

#### Custom Buttons
They can be added to standard page layouts and work with standard and custom objects


Basic data import  ???

<!-- tabla de importacion -->
| Herramienta | Ventajas | Desventajas | número de registros |
| ---         | ---      | ---         | ---                 |
| Data Import Wizard | Fácil de usar | No permite importar muchos registros | 50,000 |
| Data Loader | Permite importar muchos registros | Difícil de usar | 5,000,000 |
| Data Export | Permite exportar datos de forma sencilla | No permite exportar muchos registros | 50,000 |

Revisar

todo tabla con numero de registros que se pueden exportar segun el tipo de licencia
Consideraciones

The number of records to be loaded
If the data needs to be loaded multiple times
If the object is supported by the Data Import tool


### Heap Tab
- **Heap Tab:** Permite ver el uso de memoria de un proceso
  - Types
  - Instances
  - State

Test data 

- Loaded from static resources
- Created in the test method programmatically
- Existing data via SOQL and seeAllData=true
  

## To-do

- getRecord() vs getRecords()
  * getRecord() -> Devuelve un solo registro
  * getRecords() -> Devuelve varios registros ???? 



## Restricciones al ser multitenant

Que es multitenant? 

4 claves

- Tiempo de ejecución de SOQL (10 segundos)
- Tiempo de ejecución de CPU (10 segundos)
- Número de registros devueltos por una consulta SOQL (10,000)


## Salesforce DX
**Salesforce DX:** Permite desarrollar en Salesforce
- Salesforce Extensions Pack
  * Ejecutar consultas SOQL
  * Desplegar componentes de metadata
  * Lanzar Apex tests
- Version Control Systems
- Salesforce CLI 

## Excepciones
- No podemos obtener debug logs de Time-Based Workflow porque se ejecutan en un contexto de sistema.



## Variables
- old y new
  * Trigger.old -> Valores antiguos
  * Trigger.new -> Valores nuevos
- prior y after
  * prior -> Valores antiguos
  * after -> Valores nuevos

## Salesforce Extension Pack
## Dev hub
  que es?
  - **Dev Hub:** Permite desarrollar en Salesforce
  - **Dev Hub:** Permite crear Scratch Orgs
  - **Dev Hub:** Permite crear Sandboxes
## Salesforce CLI
  que es?
  - **Salesforce CLI:** Permite ejecutar comandos de Salesforce
  - **Salesforce CLI:** Permite ejecutar comandos de Salesforce DX
  - **Salesforce CLI:** Permite ejecutar comandos de Salesforce Extensions
## WorkBench
  que es?
  - **WorkBench:** Permite hacer operaciones de Salesforce
  - **WorkBench:** Permite hacer operaciones de Salesforce DX
  - **WorkBench:** Permite hacer operaciones de Salesforce Extensions
  - Insertar registros
  - Actualizar registros
  - Borrar registros
  - Ejecutar SOQL y SOSL
  - REST API 
  - Describe Metadata and data
## Developer Console
que podemos ver y hacer 
- **Developer Console:** Permite hacer operaciones de Salesforce
- **Developer Console:** Permite hacer operaciones de Salesforce DX
- Customizable

### Que tabs podemos ver
- Logs
- Tests
- Checkpoints: Contienen lo siguiente:
  - Namespace
  - Class
  - Line
  - Date
- Query Editor
- Progress
- Problems
![Tabs de Developer Console](image.png)

## Checkpoin Inspector
- **Checkpoint Inspector:** Permite ver los checkpoints de un Flow
- **Checkpoint Inspector:** Permite ver los checkpoints de un Process Builder
- **Checkpoint Inspector:** Permite ver los checkpoints de un Workflow
- **Checkpoint Inspector:** Permite ver los checkpoints de un Flow Builder
- **Checkpoint Inspector:** Permite ver los checkpoints de Apex Code

### Anonymous Code
- **Anonymous Code:** Permite ejecutar código anónimo en Salesforce
- Se ejecuta como el usuario que lo ejecuta
- Los cambios se comitean automáticamente al final de la ejecución
- no genera code coverage

### Visual Studio Code Salesforce DX
- Apex Unit Tests can be executed from the Code Editor
- Updates from other developers can be tracked and retrieved from a central repository
- Metadata components from the org can be modifies

## Debug logs set flags
## Scheduled Jobs and Apex Jobs 
## Performance -> Execution Units debug logs
## Debug level


## User Interface
- **User Interface:** Permite aprender los conceptos de la interfaz de usuario de Salesforce

#### Vulnerabilidades
SOQL Injection
- **SOQL Injection:** Ataque que permite que un atacante ejecute código en Salesforce
  - Usar bind variables con ':variable'
##### Como evitar el SOQL Injection
###### **SOQL Injection:** Ataque que permite que un atacante ejecute código en Salesforce
  - Usar bind variables

```
String name = 'Hello, World!';
List<Account> accounts = [SELECT Id, Name FROM Account WHERE Name = :name];
```
Usar escapeSingleQuotes
- **escapeSingleQuotes:** Permite escapar las comillas simples
  - Usar bind variables
```
String s = '\'Hello World\'';
System.debug(s);
    <!-- Result  -> Hello World -->
String escaped = String.escapeSingleQuotes(s);
System.debug(escaped);
    <!-- Result  -> \'Hello World\' -->
```

Usar type casting

Replacing characters

Allowlisting


Cross-Site Scripting
- **XSS:** Ataque que permite que un atacante ejecute código JavaScript
  - Usar JSINHTMLENCODE()
  - Usar HTMLENCODE()
  - Usar JSENCODE()
Cross-Site Request Forgery
- **CSRF:** Ataque que permite que un atacante realice acciones en nombre de un usuario
  - Usar CSRF Token

<!-- Anexo content Sniffing -->
#### Content Sniffing

#### Lightning Data Tables 

<!-- Como acceder a los draftValues simple -->

Como hacer un update record

Es necesarios acceder a los draftValues de la lightning-datatable y especificar los campos que se quieren actualizar incluyendo el Id.
<!-- ejemplo -->

```
import { updateRecord } from 'lightning/uiRecordApi';

handleSave(event) {
  const fields = {};
  updateRecord(recordInput)
    .then(() => {
        fields['id'] = event.detail.draftValues[0].Id;
        fields['Name'] = event.detail.draftValues[0].Name;
        fields['Industry'] = event.detail.draftValues[0].Industry;
      );
    })
}
```
#### WITH SECURITY_ENFORCED
- Permite que se apliquen las reglas de seguridad de Salesforce
<!-- ejemplo -->
```
@AuraEnabled(cacheable=true)
public static List<Account> getAccounts() {
  return [SELECT Id, Name FROM Account WITH SECURITY_ENFORCED];
}
```


#### How to use third-party javascript libraries in Aura Components
Use Static Resources to store the library
then use ltng:require to load the library

### Bundles 

Quizas aqui hacer una tabla con los tipos de bundles
- **Bundle:** Permite agrupar varios elementos
  - Component
    - Component
    - Controller
    - Design
    - Documentation
    - Renderer
    - Helper
    - SVG  
    - JS
  - Application
    - Application
    - Controller
    - Design
    - Documentation
    - Renderer
    - Helper
    - SVG
  - Lightning Com

  
### Visualforce

Security.stripInaccessible como usar
- **Security.stripInaccessible:** Permite quitar los campos a los que el usuario no tiene acceso
  - mas info [Security.stripInaccessible](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripinaccessible.htm)
    - Devuelve tipo SObjectAccessDecision 
      - Recuperar las tuplas -> getRecords()

## Anexo
### Limites

Informacion sobre los límites de Salesforce en la documentación oficial [Salesforce Governor Limits](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)


| Límite | Valor |
| ---    | ---   |
| `queryLocator` | 10,000 |
| `queryMore` | 2,000 |
| `@future` | 50 |
| `@future` (con `callout`) | 10 |
| `@future` (con `callout` y `batch`) | 5 |


### Consideraciones
<!-- Preguntas y respuestas -->

The Salesforce Administrator at Cosmic Mobile has configured the Next Best Action component to display recommendations to its customer service representatives (CSRs) regarding phone plans. When a CSR accepts a recommendation for a customer who wants to upgrade to a certain plan, a flow is launched to process the upgrade. If the offer is rejected, the flow needs to perform a different action. How can a Salesforce Administrator meet this requirement?

a Build a single flow to perform an action that is used when a recommendation is accepted or rejected                                            
b Enable 'Launch Flow on Rejection' for the Next Best Action component in Lightning App Builder                                            

A recommendation can only invoke one and the same flow when it is either accepted or rejected by the user. By default, a recommendation only launches the flow when it is accepted. To also launch the flow when it is rejected, a Decision element is added to the flow that specifically uses an "isRecommendationAccepted" boolean variable for determining whether the recommendation that launched it was approved or rejected, and then perform the necessary logic in the flow accordingly. Also, the 'Launch Flow on Rejection' settings for the Next Best Action component must be enabled in Lightning App Builder.

dolar contentAssetGlobal puede contener imagenes, archivos de texto, videos, etc.
- JavaScript
- CSS
- Images

Donde podemos usar Visualforce
 - Custom App
 - Navigation Bar
 - Standard Page Layout

@salesforce/customPermission scoped module to check if a user has a custom permission

No hacer modificaciones en trigger after insert/update porque puede causar un error de recursión.  

Campos formula field consideraciones
- No permite Long/Rich Text Area/
- isFormulaTreatNullNumberAsZero() -> Para saver si un campo de formula trata los valores nulos como cero 
- No puede referenciar campos de otros objetos

Funciones formula
- AddMonths,AddYears, etc\dots
- TODO añadir
- 

Cross Object Formula Field
- Permite hacer referencia a campos de otros objetos
  - Can pull fields from objects 10 relationships away
  - Can pull data from a record even if the user does not have access to it
  - Can pull fields from master-detail or lookup relationships

Pueden incluir sopporte y mantenimiento

Soluciones probadas y verificadas por clientes

Polyglot persistence
- **Polyglot persistence:** Permite usar varios tipos de bases de datos
  - Permite usar bases de datos relacionales
  - Permite usar bases de datos NoSQL
  - Permite usar bases de datos en memoria
  - Permite usar bases de datos de gráficos

WORKFLOW RULES QUE SON

Snippet de standard controller con recordSetVar

```
<apex:page standardController="Account" recordSetVar="accounts">
  <apex:pageBlock title="Accounts">
    <apex:pageBlockTable value="{!accounts}" var="a">
      <apex:column value="{!a.Name}"/>
    </apex:pageBlockTable>
  </apex:pageBlock>
</apex:page>
```

apex standard controller class snippet

```
public with sharing class AccountController {
  public Account account { get; set; }
  public AccountController(ApexPages.StandardController controller) {
    this.account = (Account)controller.getRecord();
  }
}
```

No params

cosas

deploy flow as active

flow test coverage


mas

crontrigger state
query example

```
SELECT Id, State FROM CronTrigger
```  

asyncapexjob status 
query example
  
  ```
  SELECT Id, Status FROM AsyncApexJob WHERE JobType = 'ScheduledApex'
  ```

Como saber si lightning data table supports inline editing

UpdateRecords from the uiRecordApi module to update records

```
import { updateRecord } from 'lightning/uiRecordApi';
```
#### cometD que es?
- **CometD:** Permite hacer comunicación en tiempo real en Salesforce
  -  Permite hacer comunicación en tiempo real en Aura Components
  -  Permite hacer comunicación en tiempo real en Visualforce
  -  Permite hacer comunicación en tiempo real en Lightning Web Components 

#### IMAGEPROXYURL

QUE ES
- **IMAGEPROXYURL:** Permite mostrar imágenes en Salesforce
  -  Permite mostrar imágenes en Aura Components
  -  Permite mostrar imágenes en Visualforce
  -  Permite mostrar imágenes en Lightning Web Components
-  VENTAJAS
  -  No se necesita una URL completa

custom email handler

custom setting data

devops center +github account for tracking changes and managing deployments and testing across the orgs

executed units

IFRAME RESOURCE


transient keyword


## Preguntas

Aqui tienes una lista de preguntas que te pueden ayudar a preparar el examen de Salesforce Platform Developer I

- ¿Qué es un campo de fórmula?
  * Un campo que calcula un valor en función de otros campos

## Referencias
Creado por [Adrián Arribas](https://www.linkedin.com/in/adrian-arribas/) para la preparación del examen de Salesforce Platform Developer I 
