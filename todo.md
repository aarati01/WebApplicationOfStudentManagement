# Workflow
```
    Folder Structure
    Controller
       studentcontroller.js
            -logic to get  data from student database
            -logic to create student
            and delete student
        coursecontroller.js
            -logic to get  data from course database
            -logic to create course
            and delete course

    model
        student.js
            -student model
        course.js
            -course model
    public just like that

    main.js
        -entry point of the appliction
        -logic to start server, all the endpoints, middlewares, body parser, database connection

```

            

    


    [ ] create an express server

    [] create html pages

        [] create one page to create a new student 
            [] create input fields for each data using form and action set to createStudent endpoint with method post
            [] create a list/table(ul/li or tr tbody ) to display existing data/student data
            [] link to add new course page

         [] create one page to create a new course
            [] create input fields for each data 
            [] set action to createCourse and method to post, use body parser to get data from post request
            [] way to display exisiting course data
        Tip: Its not necessary to make the page dynamic so html extension can be used instead of ejs
    [] create model for student data
        [] model should include reference to course model which is gonna be created later

    [] create model for course table.
        Tip: You create a schema for the table(how the table looks like ), and use mongoose.model method to create the model from schema

    []create endpoints to display student and courses data

        [] use model.find method to get all data in a controller folder, create two functions that uses model.find method to get data from mongodb
        [] in html page, fetch data from the endpoint using fetch, with "http://localhost:3000/getstudents" endpoint and display that

    [] create endpoint to create course and student
        [] make controller for both endpoints: createStudent and createCourse
        [] in the controller, from req object, get the data sent from html action createData
        [] use model.create method to create the data and send a success message to the user

