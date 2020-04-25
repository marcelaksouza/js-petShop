# web-ca


Interactive Web Application CA2 - Pet's World 

Marcela Souza (2017374)
Github: https://github.com/marcelaksouza/web-ca
Heroku link: https://sleepy-forest-46802.herokuapp.com/


My interactive web application is a pet adoption center called Pet’s World Adoption Center. 
The application was developed targeting the staff of this adoption Center. 
The web site can execute the following functionalities: 
-Add a new pet, 
-List and categorize the pets,
-Adopt, 
-Edit information,
-Delete a pet. 
All those functionalities sent an API request to the server which manipulates the JSON file accordingly. The application will also dynamically allocate new ids to the new entries.
Application is using HTML, CSS, JavaScript for the frontend and Node.js with Express.js along with other packages for the backend. 

 
Sanitation and Validation
Frontend:
New pet form: 
-Fields name, and age are required.  
-Name must be a string and age a number. 
Owner form: 
-Pet owner’s name is mandatory.
-Owner’s name must be a string
Backend:
-Express-autosanitizer 
-Required fields added to schema model


User manual
To run the application
Go to https://sleepy-forest-46802.herokuapp.com/ 

List all pets for adoption
To adoption is the default list value selected but to load it again, click in the to adoption radio button. 
List all adopted pets
After entering an owner for a pet you will be directed to the adopted list. You can also access it by clicking on the adopted radio button. 
Insert a new pet
Simply insert the information into the form and click . It will update the table with the new information automatically

Edit the pet’s information 
Hover over the information you want to edit and press  to make the change permanent.

To adopt a pet
Click the button adopt and a modal loading the pet’s information will open along with the owner's form. Enter the Owner’s name and its address. The name is the only required field. After enter the information the submit button will redirect the user to adopt session where the new entry will be listed


Delete a pet
Hover over the pet you want to delete and click delete. The table will be updated automatically. 




References
Backend
Tutorial: https://medium.com/@etiennerouzeaud/how-create-an-api-restfull-in-express-node-js-without-database-b030c687e2ea
Repository : 
https://github.com/EtienneR/api_express_no_db/blob/master/routes/post.routes.js

Tutorial:
https://www.youtube.com/watch?v=BRdcRFvuqsE&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8

Tutorial:
https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/
Repository:
https://github.com/bpk68/api-server-starter
Frontend
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://www.w3schools.com/js/
