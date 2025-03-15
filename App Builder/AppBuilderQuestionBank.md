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

# Universal Containers - Project Access Requirement

## Scenario  
Universal Containers manages internal projects by department using a custom object called **Projects**.  
- Only employees in the project's respective department should have **view access** to all of their department's project records.  
- If an employee **changes job roles and moves to another department**, they should no longer have access to their former department's projects.  
- The **organization-wide default (OWD) for Projects is set to Private**.  

## Question  
Which two options will meet these requirements? *(Choose two.)*  

### Options:  
- **A.** Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.  
- **B.** Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.  
- **C.** Create a criteria-based sharing rule using the Project's department that grants access to users by roles. **_Most Voted_** ✅  
- **D.** Create a criteria-based sharing rule using the Project's department that grants access to users by public groups. **_Most Voted_** ✅  

## Correct Answers:  
✅ **C.** Criteria-based sharing rule using roles → Ensures access is dynamically updated when an employee moves to another department.  
✅ **D.** Criteria-based sharing rule using public groups → Can group users by department and provide appropriate access.  

### Explanation:  
- **Profiles and Permission Sets** (*Options A & B*) do not control record access dynamically based on department changes.  
- **Roles** (*Option C*) reflect the organizational hierarchy, and when an employee's role changes, their access updates automatically.  
- **Public Groups** (*Option D*) allow for flexible access control and can be maintained for department-based permissions.  

📌 **Conclusion:** The best approach is to use **Roles** and **Public Groups** to grant and revoke access dynamically as employees change departments.


# Universal Containers - Improving Search Experience

## Scenario  
Universal Containers has a customer base where many customers have the same or similar **company names**.  
The company wants to improve the **end user's search experience**.

## Question  
Which functionality should be configured to improve the end user's search experience? *(Choose two.)*  

### Options:  
- **A.** Update the account search layouts search filter fields. **_Most Voted_** ✅  
- **B.** Update the account search layouts accounts tab columns displayed.  
- **C.** Update the account search layouts search results columns displayed. **_Most Voted_** ✅  
- **D.** Update the account search layouts list view filter settings.  

## Correct Answers:  
✅ **A.** Update the account search layouts search filter fields → Allows users to filter based on relevant fields, improving the search relevance.  
✅ **C.** Update the account search layouts search results columns displayed → Customizing the displayed columns in search results helps users better differentiate similar account names.  

### Explanation:  
- **Search Filter Fields** (*Option A*) help users narrow down search results quickly based on specific criteria, making it easier to find the correct account when multiple similar names exist.  
- **Search Results Columns** (*Option C*) help users view key fields directly in search results, allowing them to distinguish between similar account names based on other identifiers, such as location or account type.  
- **Tab Columns** (*Option B*) and **List View Filters** (*Option D*) do not directly impact the search process, but rather affect the display of records or filters in lists.  

📌 **Conclusion:** Configuring **search filter fields** and **search result columns** is the most effective way to improve the search experience when dealing with similar account names.


# Account Validation Rule and Workflow Conflict

## Scenario  
An app builder creates a **Validation Rule** on the **Industry** field that throws an error if the length of the field is longer than 6 characters. Another app builder creates a **Workflow Rule** with a **field update** that sets the **Industry** field to "Technology" whenever the **Billing City** field is set to "San Francisco".

## Question  
What will happen the next time a salesperson saves an Account with a Billing City of San Francisco, and the **Industry** field is modified (either by the workflow or manually)?

### Options:  
- **A.** The record will save and the Industry field will change to Technology. **_Most Voted_** ✅  
- **B.** The record will not save and no error message will be displayed.  
- **C.** The record will not save and the validation rule's error message will be displayed.  
- **D.** The record will save but the Industry field will not change to Technology.  

## Correct Answer:  
✅ **A.** The record will save and the Industry field will change to Technology.

### Explanation:  
When the **Billing City** is set to "San Francisco", the **Workflow Rule** will update the **Industry** field to "Technology", which is within the 6-character limit and does not violate the **Validation Rule**. 

- **Workflow Rule Bypasses Validation Rule:** The **Workflow Rule** can update fields without triggering the **Validation Rule**, so the **Industry** field will be updated to "Technology" without causing an error.
- **If Industry or Other Fields are Modified After Workflow Update:**  
  If the **Industry** field is changed manually after the workflow update, and the new value exceeds the 6-character limit, the **Validation Rule** will trigger an error. The record will not save, and an error message will be displayed.

### Important Note:  
A **Workflow Rule** can bypass the **Validation Rule** during the field update. However, if the field is modified later (either by a user or another process) and the new value violates the validation rule, the error will occur at that point.

📌 **Conclusion:** The record will save successfully with the **Industry** field updated to "Technology", but if the field is modified later and exceeds the character limit, the **Validation Rule** will prevent the save.
