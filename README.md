# SoSe-21-RDBMS-HW04

# Installation

To run the database navigate to the project directory and run:

#### `$ docker-compose up db` 

To clean up properly the volumes containing the DB data have to be removed:

#### `$ docker-compose down --volumes` 


# Database connection

**Host:** 127.0.0.1:3306\
**Username:** root\
**Password:** root\
**Database:** office-management

# Usage 

to list all treatments:
#### `$ node src/index.js list-treatments` 

to add a treatment:
#### `$ node src/index.js add-treatment "treatment-name"`

to delete a treatment:
#### `$ node src/index.js delete-treatment "treatment-name"`

to add a new patient:
#### `$ node src/index.js add-patient "name" "email"`

to search for an appointment for a specific treatment:
#### `$ node src/index.js search-appointment "treatment-name"`

to book an appointment:
#### `$ node src/index.js book-appointment "appointment-datetime" patient-id`

to finish an appointment:
#### `$ node src/index.js finish-appointment "appointment-datetime"`


