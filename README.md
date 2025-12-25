# demologinpage
“This project separates data, validation, input, and output into different JavaScript files, making the code clean, reusable, and easy to manage using a modular approach similar to POM.”
.

🌐 What is this project?
This is a simple Login + User Details project made using HTML, CSS, and JavaScript.

👉 The user:
Enters username and password
System checks if login is valid
If valid → shows user details
If not valid → shows error message

🗂️ What each file does (in very simple words)

1️⃣ index.html
This is the login page
Contains:
Username input
Password input
Login button
This is the first page user sees

2️⃣ style.css
Used only for design
Controls:
Colors
Layout
Fonts
❌ No logic here, only looks

3️⃣ users.js
This file is like a database
Stores data of all users
Each user has:
username
password
age
father name
mother name
city
profession
👉 Think of it as:
📒 “List of all registered users”

4️⃣ validation.js
This file checks login
It Takes username & password from login page
Matches them with data in users.js
If match found → ✅ login success
If not → ❌ login failed
👉 Basically: Security guard of your project

5️⃣ inputer.js
This file collects input
Reads:
Username
Password
Sends this data to validation logic
👉 Think of it as: Data collector

6️⃣ display.js
Handles what to show on screen
Shows:
Error message (wrong login)
Or success message
👉 Think of it as: Messenger

7️⃣ outputer.js
After successful login:
Fetches user details
Sends them to display page
Prepares data to be shown nicely
👉 Think of it as: Result formatter

8️⃣ user.html
This is the result page Shows:
Username
Age
Father & Mother name
City
Profession
👉 Only visible after successful login

🔄 Overall Flow (Very Important)
User opens index.html
Enters username & password
inputer.js collects data
validation.js checks credentials using users.js
If ❌ wrong → display.js shows error
If ✅ correct:
outputer.js prepares user info
user.html displays full user details
