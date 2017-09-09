# A_SOCIALS

### INSTALLATION
- Navigate in to the root directory of the project and run the command below to create your local Python environment:

  `virtualenv -p python3 env`

- Activate the virtual environment with the command 
    ` source env/bin/activate` 

- create a `.env` file at the root of your repo and add the configuration to the file that conforms to the information in the `.env.sample`. Ensure your `DB_NAME`, `DB_PASSWORD` & `DB_NAME` to that of your PC.

- If you haven't set it up before use the command `./setup.sh` instead, make sure you have a `.env` that has all the information displayed in the `.env.sample` file. 

### SETUP
To start the app simply run the command: `./start.sh`, it activates your virtualenv and starts the application.

If you're making use of virtualenvwrapper `./start.sh wrap` instead as this skips the activation of virtualenvwrapper.

### DUMMY DATA
You can seed the dummy data into your database using the command `python manage.py loaddata fixtures/initial.json` when that is done you have access to dummy categories and dummy users. A user information you can use is:
*username:* _andelasocials_
*password:* _testuser_

### CONTRUBUTORS
