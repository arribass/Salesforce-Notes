### Pregunta 1:

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

apex
Copiar código
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
