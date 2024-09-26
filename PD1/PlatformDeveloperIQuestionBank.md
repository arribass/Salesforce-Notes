Este documento contiene una batería de preguntas para el examen de PDI, no estan ponderadas asi que es posible que haya mas de un topic que de otros.

Autor: Adrian Arribas
# Plantilla
### Question

**[Aquí va la pregunta]**

- **Objective:** [Descripción del objetivo]
- **Detailed Objective:** [Descripción detallada del objetivo]

**Options:**

- A. [Opción A]
- B. [Opción B]
- C. [Opción C]
- D. [Opción D]
- [Añade más opciones si es necesario]

**Answer:**  
[Respuesta correcta]

---

### Explanation:

[Aquí va la explicación de la respuesta correcta]

---

## Pregunta 1:

Dado el siguiente código de la clase `ItemController`, ¿qué ocurrirá cuando se ejecute el método `populate()`?

```apex
public class ItemController {

    public void populate() {

        Item__c a = new Item__c(Name = 'New Item');
        Database.insert(a, false); // partial success

        for (Integer x = 0; x < 150; x++) {
            Item__c b = new Item__c(Name = 'New Item');
            
            try {
                insert b;
            } catch (Exception e) {
                System.debug('DML limit reached');
            }
        }
    }
}
```
¿Cuál será el resultado después de ejecutar el siguiente script?
```
ItemController i = new ItemController();
i.populate();
```

Opciones:
  A. Ningún registro será creado.
  B. Solo se creará el primer registro porque se permite el éxito parcial.
  C. El mensaje "DML limit reached" será impreso en el log.
  D. La clase no puede ser instanciada porque no hay un constructor definido.

Respuesta correcta:
A. Ningún registro será creado.

Explicación:
El número total de operaciones DML es 151, lo que excede el límite del gobernador de 150. Al exceder este límite, todas las operaciones que ocurrieron en la transacción se revertirán. Además, las excepciones por los límites del gobernador no pueden ser manejadas, por lo que el bloque catch no será llamado, y el primer registro también será revertido.

## Pregunta 2: 
- Objective: Process Automation and Logic
- Detailed Objective: Given a scenario write SOSL, SOQL and DML statements in Apex

Un desarrollador escribió un script para generar registros ficticios en una organización de Salesforce. Al eliminar los registros ficticios, se descubrió que otros registros fueron eliminados accidentalmente en el proceso. ¿Qué sentencia DML se puede usar para recuperar esos registros?

- A) upsert
- B) restore
- C) undelete
- D) rollback

## Respuesta correcta:

- C) undelete

## Explicación:

La sentencia DML `undelete` se utiliza para restaurar los registros eliminados de la Papelera de Reciclaje (Recycle Bin). `Upsert` se utiliza para insertar o actualizar registros, mientras que `rollback` es un método disponible en la clase `Database` para restaurar una base de datos a un estado anterior, pero no es una sentencia DML. No existe una sentencia DML llamada `restore`.

### Snippet de código:

```apex
Account a = new Account(Name='Resurrected'); 
insert a; 
delete a; // Elimina el registro

Account[] restoreRecords = [
    SELECT Id, Name
    FROM Account
    WHERE Name = 'Resurrected' ALL ROWS  // Consulta los registros en la Papelera de Reciclaje y actividades archivadas
];

undelete restoreRecords; // Restaura el registro eliminado
```

### Question 3

- **Objective:** User Interface  
- **Detailed Objective:** Describe the Lightning Component framework, its benefits, and the types of content that can be contained in a Lightning web component.

**James is a Developer at Sunny Tomatoes, a company specializing in tomato cultivation. To monitor and request information about the tomato growth forecasts, James created several Lightning Web Components (LWCs) that gather information from various places. Recently, the executive team of Sunny Tomatoes decided to change the branding completely. Now, the colors, margins, and fonts of each LWC need to be updated. Which of the following options should be recommended so that styling updates would be easier to implement and manage?**  
**Choose 3 answers.**

- A. Copy-paste the styles in each of the component CSS files.
- B. Load a common CSS static resource in each component.
- C. Create a CSS module and import it into each component.
- D. Use inline styling in the HTML files of the components.
- E. Define custom Aura design tokens and use them in CSS files.

**Answer:**  
- B. Load a common CSS static resource in each component.  
- C. Create a CSS module and import it into each component.  
- E. Define custom Aura design tokens and use them in CSS files.

---

### Explanation:

A CSS module can be created using a Lightning Web Component that contains only CSS and configuration files. This CSS module can be imported into the CSS file of the LWC that requires the style.

Custom Aura design tokens can also be used to share CSS in LWCs. Design tokens store values such as margins, font sizes, families, and color hex values. Tokens can be defined in a Token Bundle and accessed in components via the standard `VAR()` function in CSS.

Alternatively, a CSS file can be uploaded as a static resource and then referenced in the LWC's controller.

Using inline CSS or copy-pasting CSS does not promote code reuse and can result in duplicate work.

---

### Question 1
A Salesforce administrator is required to define a custom field on the User object that would record a user's secondary manager in a matrix organizational structure. Which relationship type should be used to achieve this?

- **Objective**: Developer Fundamentals  
- **Detailed Objective**: Given a scenario, determine, create, and access the appropriate data model including objects, fields, relationships, and external IDs.

**Options**:
- A. Lookup
- B. None of these options
- C. Master-detail
- D. Hierarchical

**Correct Answer**:  
D. Hierarchical

**Explanation**:  
Lookup and master-detail relationships are not available on the User object. The User object can only be linked with itself, which is possible by using a hierarchical relationship.

### Question 2
Before code can be deployed to production, which of the following must be true?

- **Objective**: Testing, Debugging, and Deployment  
- **Detailed Objective**: Write and execute tests for triggers, controllers, classes, flows, and processes using various sources of test data.

**Options Choose 2**:
- A. At least 75% of Apex code in triggers must be covered by unit tests
- B. At least 75% of Apex code must be covered by unit tests
- C. All classes and triggers must compile successfully
- D. Test methods and test classes must be counted as part of code coverage

**Correct Answers**:  
B. At least 75% of Apex code must be covered by unit tests  
C. All classes and triggers must compile successfully

**Explanation**:  
At least 75% of your Apex code must be covered by unit tests, and all of those tests must complete successfully. Every trigger must have some test coverage, and all classes and triggers must compile successfully.

### Question 3
Which of the following is true regarding custom setting data?

- **Objective**: Process Automation and Logic  
- **Detailed Objective**: Given a scenario, follow best practices to write Apex classes and triggers.

**Options**:
- A. Custom setting data can be accessed by formula fields, validation rules, Apex, and Visualforce pages
- B. Custom setting data cannot be queried using SOQL
- C. Custom setting data needs to be queried once using SOQL and then it is stored in the cache
- D. Custom setting data can be stored using three custom setting types

**Correct Answer**:  
A. Custom setting data can be accessed by formula fields, validation rules, Apex, and Visualforce pages

**Explanation**:  
Custom setting data is exposed in the application cache, which avoids repeated queries to the database. Hierarchy custom settings can be accessed using the `$Setup` variable, and list settings can only be accessed via Apex or API calls.

