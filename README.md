Capstone: Project Management App

Overview

You are building an app that assists in project management. Your app will allow team members to view tasks and mark them as complete. Tasks should be grouped with a project.

Project attributes (feel free to add more):
-	Team size [1 – X] Number
-	Budget [$$ x – y] Number
-	Workload [‘low’, ‘medium’, ‘high’, superhigh, etc] use t-shirt sizes
-	Completion time - predict this [some time scale] Number

Tasks attributes (feel free to add more):
-	Description – string can be anything
-	Complete/not complete status - boolean
-	Person assigned – made up names?? string
-	Due date – Date()
-	Estimated duration – story size Number
-	Comments??

The list of tasks can be reordered by any of these values.

In addition to viewing tasks, managers also create new tasks, delete them, and edit them. Since we have roles (manager and non-manager), we will need a login form and authentication.

-	Managers – name, username, pass, role:manager
-	Non-manager – ‘’,’’,’’,rôle :non-manager (or bool)
Collections
	Projects -> 1 or more tasks []tasks 
		Or collection projects -> tasks
	Tasks
	Users
Building the Application – Craig (backend)
1.	Choose Mongo DB for backend data.
2.	Use node.js to build a web service to read and write data.

Data Analysis – Zach (prediction model)
1.	Create a script that generates and populates the database with a minimum of 1000 records of dummy data.
2.	Train a model using sklearn.linear_model.LinearRegression algorithm to predict project completion time based on project attributes. 


Build the web application in React. - Combine

1. Create a React component that can take project attributes as input and pass that to the model using a RESTful service. Display the returned predicted completion time.
a.	TIP: Investigate using the python-shell npm package in Express to call Python from JavaScript. Another option is to use Flask to create the RESTful service.

