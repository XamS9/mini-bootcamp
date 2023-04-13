# Mini-bootcamp API

Backend application for mini-bootcamp api.

## How to run

* Clone project.
* Go to src/backend.
* Run `npm i` command to install dependencies.
* Before run the server you have to create a database in postgresql with the same connection data as .env file. (Every DB_* variable)
* Start the backend server using `npm run dev`.
* Send a GET request to `http://localhost:3001/admin` to create the admin user (you have to login as admin to enable new users).

## Dev

* .env file has the DB_NAME DB_USER DB_PASSWORD DB_HOST variable with all database data connection
* .env file has the CLOUD_NAME API_KEY API_SECRET variable with cloudinary api config
