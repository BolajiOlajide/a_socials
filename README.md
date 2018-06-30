# ANDELA SOCIALS

Andela Social was born out of the desire to keep Andelans very sociable within the organization.
It is a platform for events aggregation, to get Andelans from different departments to mingle and have fun together over a cup of coffee, a game of soccer, at a swimming pool or at a friends dinner party.
It is a platform to get events organized within the fellowship properly tracked and managed for all to see and for all to relate with irrespective of their centers.
These will improve socialization between Andelans inside and outside the company.


### INSTALLATION
Clone from git using
```
git@github.com:AndelaOSP/Andela-Socials.git
```

Create a `.env` file with the content of the `.env.sample` and edit with your personal details.

Navigate into the root directory of the project and run the script `setup.sh` with the command:
```
./setup.sh
```

This scripts automatically sets up the project automatically and starts the application once that is done.

### STARTING THE APP
Subsequently, if you need to start the application after the initial setup has completed you can run the command:
```
./start.sh
```
### SETTING UP WITH DOCKER
Before booting up the environment (`make build`) ensure that you have [docker](https://docs.docker.com/docker-for-mac/install/) **installed** and **running** on your machine.
If you are using mac this [install](https://docs.docker.com/docker-for-mac/install/) should get you started

The resources will be configured via docker-compose services. This will ensure that the application will be developed and deployed under similar environments.
To setup development environment, create a dev.env file in the `docker/dev` directory and populate it with environment variables using `.env.sample` as a model
To start the build, run:

```bash
$ make build
```
After the build is complete, spin up the containers with:

```bash
$ make start
```
Then you can access the client application; served by webpack-dev-server at `http://localhost:9000`, and the backend application; served by the django development server at `http://localhost:8000`

To stop the application, you can pull down the containers with:
```bash
$ make stop
```

To setup production environment, create a prod.env file in the `docker/prod` directory and populate it with environment variables using `.env.sample` as a model
To run any make command successfully for the production application, variable `env` must be set to `production` in the makefile.
If on a bash terminal, you can do `export env=production` before running any make command.
Alternatively, you can set the variable as part of the make command.

```bash
$ make build env=production
$ make start env=production
$ make stop env=production
```
For the production application, [Nginx](https://www.nginx.com/resources/glossary/nginx/) serves as an HTTP and reverse proxy server. It serves static assets that have been collected into the staticfiles directory and routes dynamic requests to the django application running on gunicorn server. After a succesful `make start` command, Nginx listens for requests on port 80. You can go to http://localhost to view application.

Please note that you only need to build the dockerized application once. Subsequently, run `make start` to start the application.


### DB CREATION
Use the createdb.sh script to setup your database for the application

Your .env variable should look like this, you can aslo reference the file to see how it is used. 
```
    DB_USER=a_socials
    DB_PASS=a_socials
    DB_PORT=5432
    DB_NAME=a_socials
```

### UI MOCK
The UI mock for the project is available [here](https://www.figma.com/file/Yn3JRZ3YLBVSg4o8L9dhIAv2/Andela_Socials)

### DUMMY DATA
You can seed the dummy data into your database using the command `python manage.py loaddata fixtures/initial.json` when that is done you have access to dummy categories and dummy users. A user information you can use is:
*username:* _andelasocials_
*password:* _testuser_

### CONTRIBUTORS
View the list of [contributors](https://github.com/AndelaOSP/Andela-Socials/contributors) who participate in this project.
