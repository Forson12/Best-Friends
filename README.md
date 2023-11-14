# Best-Friends
A group of best friends coding the new world!!

- Sexy Yout King - @KOBI
- BackEnd criteria to be met for your code to work 

# You need to install 2 main things to get started

- First thing is to download and install nodejs from this site if you don't have it on your laptop / pc already 
https://nodejs.org/en/download 
- Make sure you download according to the specs of your pc / laptop (either Windwos 64 or the one for MAc)
- Follow the installation process, pretty simple to install
- After installation, open cmd (command prompt) or VSC (Visual Studio Code) terminal and type this to make sure it is installed on our laptop
 - npm --version
- if the veriosn of node js shows then, everything worked. 
- Mind you, the version can show but the node might not work on VSC 
- else you need to add node to your path environment variables 
- Contact me to help you out or follow the instructions on this page, https://bobbyhadz.com/blog/npm-is-not-recognized-as-internal-or-external-command#:~:text=The%20error%20%22'npm'%20is,your%20system's%20PATH%20environment%20variable.

# You will then have to download and install mongodb if you want to see the login/register working 

- visit this site https://www.mongodb.com/try/download/community
- under the community server, click on select package 
- After downloading, install it. 
- The installation is straigth forward but make sure the mongo compass box is ticked as that's what we will be using 
- (leave this part for now) download mogo Shell later https://www.mongodb.com/try/download/shell 
- 


 
# Now in the terminal of VSCode, do the following  
Install 3 extensions for this program to work 
1. express 
2. hbs - an extension of express we work with (usually ejs) 
3. mongoose - to help connect mongodb to nodejs 

Note: install all this in the terminal of your working environment, in this case VSCode 

code for this is below 
# npm i express 
# npm i ejs 
# npm i mongoose  
# npm install express-session
npm install express body-parser express-session





# The notes below is not part, feel free to read through 
When your teammates clone the repository to their local machines, they will typically need to install the necessary dependencies and set up the development environment. Here are the general steps they might need to follow:

1. **Node.js and npm:**
   - Ensure that Node.js and npm (Node Package Manager) are installed on their machines. They can download and install them from the official website: [Node.js](https://nodejs.org/).

2. **Install Dependencies:**
   - Run `npm install` in the project's root directory. This command will install all the dependencies listed in the `package.json` file.

3. **MongoDB (if applicable):**
   - If your project uses MongoDB, your teammates need to have MongoDB installed on their machines. They can download it from the official website: [MongoDB](https://www.mongodb.com/try/download/community).

4. **Environment Variables:**
   - If your project uses environment variables (e.g., for database connection strings, API keys), they should set up their own environment variables based on a template or documentation provided by you. You can use a tool like `dotenv` to manage environment variables during development.

5. **Run the Application:**
   - Once the dependencies are installed, they can run the application using the command specified in your `package.json` file. Typically, it's something like `npm start` or `npm run start`.

6. **Check Documentation:**
   - If you have any specific instructions or documentation for your project, make sure your teammates read through it. This might include setup instructions, coding conventions, and any other important information.

7. **Database Setup (if applicable):**
   - If your project involves a database, they might need to run database migrations or seed data to set up the initial database state. Check if your project has any scripts or commands for this purpose.

8. **Coding Standards and Editor Configurations:**
   - If you have defined coding standards or editor configurations (e.g., `.editorconfig`), ask your teammates to follow them to maintain consistency in the codebase.

Remember, these steps may vary depending on the specifics of your project, so it's a good idea to provide clear documentation and instructions for your teammates. Additionally, you can include a `README.md` file in your repository with information on how to set up and run the project.







