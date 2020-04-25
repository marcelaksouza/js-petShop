# web-ca


Interactive Web Application CA2 - Pet's World 

Marcela Souza (2017374)
Github: https://github.com/marcelaksouza/web-ca



Project outline
My interactive web application is a pet adoption center called  Pet’s World Adoption Center. 
The application was developed targeting the staff of Pet’s World Adoption Center, 
it has the functionality of include a new pet, read, adopt, edit the pet information and/or delete a pet. 
The application also list all the pets that are for adoption and the ones that was already adopted.
All those functionalities sent an API request to the server which manipulates the JSON file accordingly. The application will also dynamically allocated new ids to the new entries.
Application is using HTML, CSS, JavaScript for the frontend and Node.js with Express.js along with other packages for the backend. 

	
Sanitation and Validation
I am using the module express-autosanitizer to sanitize the inputs.
For validation only a valid schema can be added to the Json file.



User manual

Image 1 : Website


To run the application
Go to ca/backend and use npm install to install all the dependencies of the project then npm run dev to start the server. 
The application is set to run on port 3000. Open a browser and type localhost:3000

To insert a new pet
Simply insert the information into the form and click submit. It will update the table with the new information automatically

to edit the pet’s information 
Hover over the information you want to edit and press edit to make the change permanent.

To delete a pet
Hover over the pet you want to delete and click delete. The table will be updated automatically. 
Further development 
Develop the functionality of the button . 



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
