The app is a task scheduling App that allows students to manage their tasks and their time

The user can navigate to the dashboard to see some basic stats of their projects and events

The user can then go to the different pages, such as the projects, calender and notes pages to use ther functionalities in those pages. 

The user can also use the help page if they are stuck on using the app.


**Deploying the APP**

To deploy the project, download the zip file and extract it. Then open the extracted folder into VS code 
Make sure that on the left where the files are, the folders and files that should show should only be the public, src and the other files. Make sure there isn't another task3 folder within the folder as this will ruin the deployment process. The only folders that should be shown on the left of VS codeare the public 
folder and the src folder. 

Once the folder is open, open up the terminal by pressing the 3 dots button on the top and type the command:

npm i 

to install all the relevant dependancies, once this is done type:

npm run dev 

to deploy the project, this will generate a link in the terminal which the user can press to open up the project in their browser. 
To stop the deployment press control + C  while in the terminal to close the deployment. 
To once again deploy the app, type the command:

npm run dev 
