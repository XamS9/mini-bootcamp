# Mini-bootcamp API

Backend application for mini-bootcamp api.

## How to run

* Clone project.
* Go to src/backend.
* Run `npm i` command to install dependencies.
* Rename `.env.template` file to `.env` and fill the variable with your current data.
* Before run the server you have to create a database in postgresql with the same connection data as .env file. (Every DB_* variable).
* (OPTIONAL) There's a docker-compose file with a container with postgresql & pgAdmin4, customize the ENV as you need.
* Start the backend server using `npm run dev`.
* Send a GET request to `http://localhost:3001/admin` to create the admin user (you have to login as admin to enable new users).
* Admin credentials are in admin.txt file.

## Dev

* .env file has the DB_NAME DB_USER DB_PASSWORD DB_HOST variable with all database connection data.
* .env file has the CLOUD_NAME API_KEY API_SECRET variable with cloudinary api config.
* .env file has the SECRET variable with the jwt key.

## Build

* Use `npm run build` to create the dist folder with the build.
* Use `npm run start` to run the build.
