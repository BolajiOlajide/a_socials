# ANDELA SOCIALS

Andela Social was born out of the desire to keep Andelans very sociable within the organization.
It is a platform for events aggregation, to get Andelans from different departments to mingle and have fun together over a cup of coffee, a game of soccer, at a swimming pool or at a friends dinner party.
It is a platform to get events organized within the fellowship properly tracked and managed for all to see and for all to relate with irrespective of their centers.
These will improve socialization between Andelans inside and outside the company.


### INSTALLATION
Clone from git using
```
git@github.com:BolajiOlajide/a_socials.git
```

Navigate into the root directoru of the project and run the script `setup.sh` with the command:
```
./setup.sh
```

This scripts automatically sets up the project automatically and starts the application once that is done.

### STARTING THE APP
Subsequently, if you need to start the application after the initial setup has completed you can run the command:
```
./start.sh
```

### UI MOCK
The UI mock for the project is available [here](https://www.figma.com/file/Yn3JRZ3YLBVSg4o8L9dhIAv2/Andela_Socials)

### DUMMY DATA
You can seed the dummy data into your database using the command `python manage.py loaddata fixtures/initial.json` when that is done you have access to dummy categories and dummy users. A user information you can use is:
*username:* _andelasocials_
*password:* _testuser_

### CONTRIBUTORS
View the list of [contributors](https://github.com/BolajiOlajide/a_socials/contributors) who participate in this project.
