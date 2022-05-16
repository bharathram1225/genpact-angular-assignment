# Trial
# user deatails in card layout

The enduser information are collected from a form,space storing information in the local storage of the crome broweser. The information in the browser is stored in the form of key-value pair.The value is the collection of objects that are collected from the form.

Each object from the local storage is grabed using `*ngFor` loop.
Each card has two icon one for (edit) and (delete)

Edit - The object is the localStorage is been updated with the latest data based on the id henceforth the updated values is refflected on the browser.
Delete - The cards that are renerd on the browser  are removed using the delete icon based on the index  of the object henceforth immdiately reflected on the browser.


