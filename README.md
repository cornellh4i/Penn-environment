# Eco Bill Tracker Application Information

In order to run this application, you need to have Node and npm installed.
To run locally, type in these commands into the root folder:

Create a .env file in the client folder with the mongoDB api key.

1. Run npm install
2. Run npm installAll
3. Run npm start

This should open up the web page onto localhost:3000 and the backend on localhost:3001

In order to build the application, you need to have the heroku CLI installed.

Type in these commands into the root folder:

1. heroku login (you will be prompted to login on the browser)
2. npm build (this will create the build folders)
3. git add . (add all the files for commit)
4. git commit -m "add in commit message"
5. git push heroku master (this will build the site to github)
