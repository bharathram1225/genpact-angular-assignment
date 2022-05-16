# Trial
# user deatails in card layout

The end-user information are collected from a form, space storing information in the local storage of the crome broweser. The information in the browser is stored in the form of key-value pair.The value is the collection of objects that are collected from the form.

Each object from the local storage is grabed using `*ngFor` loop.

Each card has two icon one for (edit) and (delete)

## The functionality of each module as follows:-

1. Add - The button functionality is to add the fetch the details from the form and store it in the localStorage.

2. Edit - The object is the localStorage is been updated with the latest data based on the id henceforth the updated values is refflected on the browser.

3. Delete - The cards that are renerd on the browser  are removed using the delete icon based on the index  of the object henceforth immdiately reflected on the browser.

## To run the project

Download the project to your local machine.

## prerequisite are:

    1. node has to be install in your machine
    2. Ensure npm is installed in your machine
    3. Angular has to be installed in your local machine
    4. Open the project in vscode

press `ctrl + shift +` or open a new terminal

execute this command:- npm install

Finally run:- npm start

# Screenshot

![image](https://user-images.githubusercontent.com/77728403/168591201-9b34d360-4f49-4efd-919e-6a598003efc2.png)
![image](https://user-images.githubusercontent.com/77728403/168591250-01c0666a-987a-4a23-9d9d-478a92b6678e.png)



