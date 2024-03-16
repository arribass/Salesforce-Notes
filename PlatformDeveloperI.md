# Salesforce Platform Developer I

## Introducción
## To-do
- [ ] Organizar por temas 
- [ ] Audit fields ¿q son?
- [ ] 
### LÍMITES

Informacion sobre los límites de Salesforce en la documentación oficial [Salesforce Governor Limits](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)

- `queryLocator`: 10,000 tuplas
- `queryMore`: 2,000 tuplas
- `@future`: 50
- `@future` (con `callout`): 10
- `@future` (con `callout` y `batch`): 5

### Interfaz de Usuario

Metodos utiles para Visualforce
- **Apex:** `detail` -> Muestra los detalles de un registro
- **renderAs:** Imprime la página
- `getSelected()` records
- 
Standard controller methods
- **Apex:** `save` -> Guarda el registro
- **Apex:** `cancel` -> Cancela la edición
- **Apex:** `delete` -> Elimina el registro
- **Apex:** `edit` -> Edita el registro
- **Apex:** `quickSave` -> Guarda el registro
- **Apex:** `list`-> Lista los registros
  
## App Builder
### Componentes
- **Standard:** Componentes que vienen por defecto en Salesforce
- **Custom:** Componentes que se pueden crear
- **Custom Managed:** Componentes que se pueden instalar desde AppExchange
- **Custom Unmanaged:** Componentes que se pueden crear y modificar
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

## Relaciones

- **Master-Detail:** Relación que permite que un registro hijo dependa de un registro padre
  * Si se elimina el registro padre, se eliminan los registros hijos
  * Un objeto custom no puede estar en el lado de "Master" con un objeto estándar
  * Un objeto custom en el lado de "Detail" no puede tener colas.
- **Lookup:** Relación que permite que un registro hijo dependa de un registro padre

## Apex

### Tipos
Los primitive data types son:
- **Boolean:** `Boolean`
- **Date:** `Date`
- **Date and Time:** `Datetime`
- **Number:** `Decimal`, `Double`, `Integer`, `Long`
- **String:** `String`
- **Time:** `Time`
- **ID:** `ID`
  
  Estos tipos no necsitan ser instanciados, ya que son primitivos.
### Bucles
- **For:** Bucle que se ejecuta un número determinado de veces
- **While:** Bucle que se ejecuta mientras se cumpla una condición
- **Do-While:** Bucle que se ejecuta al menos una vez y luego se ejecuta mientras se cumpla una condición

### Clases que se pueden usar
- Database
* **Database:** Clase que permite hacer operaciones de DML
- JSON
- Math
- System
  * **System:** Clase que permite hacer operaciones de sistema
- Metadata
- Schema
- Test
  
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
  
### Tipos de clases
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
### Cosas de queries
Database.query
- **Database.query:** Permite hacer queries dinámicas
- **Database.queryLocator:** Permite hacer queries dinámicas y soporta más de 50,000 registros

### Anotaciones
- **@future:** Permite ejecutar un método de forma asíncrona
- **@isTest:** Indica que el método es un test
- **@TestVisible:** Indica que el método es visible para los tests
- **@AuraEnabled:** Indica que el método es visible para los componentes de Lightning
- **@InvocableMethod:** Indica que el método es visible para los Flows

### Testing
- **System.assert:** Permite hacer aserciones
- **System.assertEquals:** Permite hacer aserciones
- **System.assertNotEquals:** Permite hacer aserciones
### Colecciones
- **List:** Colección que permite almacenar varios elementos
- **Set:** Colección que permite almacenar varios elementos sin duplicados
- **Map:** Colección que permite almacenar varios elementos con clave-valor

### Exception

Que es una excepción?
- Una excepción es un error que ocurre en tiempo de ejecución
- Las excepciones pueden ser atrapadas y manejadas
- Las excepciones pueden ser lanzadas
- Las excepciones pueden ser lanzadas por el sistema o por el usuario
  
Tipos de excepciones
- **DMLException:** Excepción que ocurre cuando hay un error en una operación de DML
- TODO rellenar
- 
## Flows 
### Condiciones de Flows
- Only when a record is created
- Only when a record is updated
- Only when a record is updated to meet the condition requirements

### Elementos de Flows
- **Action:** Elemento que permite hacer una acción
- **Assignment:** Elemento que permite asignar un valor a una variable
- **Choice:** Elemento que permite tomar decisiones
- **Collection:** Elemento que permite almacenar varios elementos
- **Data:** Elemento que permite almacenar datos
- **Loop:** Elemento que permite hacer bucles
- **Screen:** Elemento que permite mostrar una pantalla
- **Subflow:** Elemento que permite llamar a otro flow
- **Text Template:** Elemento que permite mostrar texto
  
### Funciones importantes de Flows
- Update Records
  * Permite actualizar registros de un objeto seleccionando los campos que se quieren actualizar
- Create Records
- Delete Records
- Get Records

Custom Events

// 
this.eventData = event.detail;

## Modelo Vista Controlador

Añadir foto de MVC

### Modelo
- **Modelo:** Representa los datos y las reglas de negocio
### Vista	
- **Vista:** Representa la interfaz de usuario
### Controlador
- **Controlador:** Representa la lógica de negocio
## Importación y Exportación de Datos
### Importación
- **Data Import Wizard:** Permite importar datos de forma sencilla
- **Data Loader:** Permite importar datos de forma masiva
### Exportación
- **Data Export:** Permite exportar datos de forma sencilla

## Testing 
Cuanta cobertura de código se necesita?
- 75% de cobertura de código para clases Apex
- 1% de cobertura de código para triggers
Donde se puede hacer Run All 
- Developer Console
- Setup Apex Classes
  
## To-do

- getRecord() vs getRecords()
  * getRecord() -> Devuelve un solo registro
  * getRecords() -> Devuelve varios registros ???? 

## Field deletion
- Cuando se elimina un campo de un objeto
No se puede borrar un campo si está en uso en:
- Fórmulas
- Cláusulas de búsqueda
- Workflow field updates

## Restricciones al ser multitenant
- Tiempo de ejecución de SOQL (10 segundos)
- Tiempo de ejecución de CPU (10 segundos)
- Número de registros devueltos por una consulta SOQL (10,000)

## Seguridad
- **OWD:** Permite definir la visibilidad de los registros

XSS Threats
- JSINHTMLENCODE()
  * Evita que se ejecute código JavaScript
- HTMLENCODE()
  * Evita que se ejecute código HTML
- JSENCODE()
  * Evita que se ejecute código JavaScript 

## Einstein
- **Einstein:** Permite hacer inteligencia artificial en Salesforce
Next Best Action

## Ant Migration Tool
**Ant Migration Tool:** Permite migrar metadatos de Salesforce
- Metadata Component Member
- Metadata Component Type

## Code Builder
**Code Builder:** Permite escribir código en Salesforce
- Apex
- Lightning Web Components
- Visualforce

## Salesforce DX
**Salesforce DX:** Permite desarrollar en Salesforce
- Salesforce Extensions Pack
  * Ejecutar consultas SOQL
  * Desplegar componentes de metadata
  * Lanzar Apex tests
- Version Control Systems
- Salesforce CLI 

## Sharing 
- **With sharing:** Permite que se apliquen las reglas de seguridad de Salesforce
Without sharing
- **Without sharing:** No aplica las reglas de seguridad de Salesforce

## Excepciones
- No podemos obtener debug logs de Time-Based Workflow porque se ejecutan en un contexto de sistema.

## Pregruntas
- ¿Qué es un campo de fórmula?
  * Un campo que calcula un valor en función de otros campos


## Referencias

Creado por [Adrián Arribas](https://www.linkedin.com/in/adrian-arribas/) para la preparación del examen de Salesforce Platform Developer I 

## Salesforce Extension Pack
