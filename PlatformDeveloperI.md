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


## Flows 

Funciones importantes de Flows
- Update Records
  * Permite actualizar registros de un objeto seleccionando los campos que se quieren actualizar
- Create Records
- Delete Records
- Get Records