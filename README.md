# Best-Friends
A group of best friends coding the new world!!

- @KOBI
- BackEnd criteria to be met for your code to work 

# You need to install 2 main things to get started

- First thing is to download and install nodejs from this site if you don't have it on your laptop / pc already 
https://nodejs.org/en/download 
- Make sure you download according to the specs of your pc / laptop (either Windwos 64 or the one for MAc)
- Follow the installation process, pretty simple to install
- After installation, open cmd (command prompt) or VSC (Visual Studio Code) terminal and type this (npm --version) to make sure it is installed on our laptop
- I suggest you type this in the terminal of VSC since we will be running the code there 
 - npm --version
- if the veriosn of node js shows then, everything worked. 
- Mind you, the version can show but the node might not work on VSC 
- else you need to add node to your path environment variables 
- To do that type node on the search bar of the Laprop/Pc you are using
- Click on open file location, once the location is opened, right click and select open file location again 
- copy the file location path, usually found on top for windows 
- on the windows search bar, search for environment variables 
- Once open, click on the environment variables, a pop up appears 
- click on new and paste the path you copied in both textfields 
- click on ok, twice 
- Go back to the terminal and try the (npm --version) again 
- Should work this time if not 
- Follow the instructions on this page, https://bobbyhadz.com/blog/npm-is-not-recognized-as-internal-or-external-command#:~:text=The%20error%20%22'npm'%20is,your%20system's%20PATH%20environment%20variable.


# You will then have to download and install mongodb if you want to see the login/register working 

- visit this site https://www.mongodb.com/try/download/community
- under the community server, click on select package 
- After downloading, install it. 
- The installation is straigth forward but make sure the mongo compass box is ticked as that's what we will be using 
- (leave this part for now) download mogo Shell later https://www.mongodb.com/try/download/shell 
- Mongo cmopass should open automatically after installment. 
- Open MongoDB  Compass 
- now click on the connect database to automatically connect to you node server 
- now move to the next since everything should be done on the installation part 


# After installation 
- type node server.js or npm start to run the project 
- you should be good to go if not do the following(below)
- try creating an account and logging in to see  


# Only do this if the server doesn't start 
# Now in the terminal of VSCode, do the following  
Install 3 extensions for this program to work 
1. express 
2. hbs - an extension of express we work with (usually ejs) 
3. mongoose - to help connect mongodb to nodejs 

Note: install all this in the terminal of your working environment, in this case VSCode 

code for this is below 
1. npm i express 
2. npm i ejs 
3. npm i mongoose  
4. npm install express-session
5. npm install express body-parser express-session








# Donont touch!
Welcome  <%= user.username %>!</h2>
<p><%= organization.orgName %></p>
<p><%= organization.email %></p>
<p><%= organization.phoneNumber %></p>
<p><%= organization.instaHandles %> </p>
 <p><%= organization.twitterHandles %></p>
