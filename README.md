# Ahoy Capy! A Location Recommendation Application
Ahoy Capy! Is a location recommendation application that finds unique locations for you to visit. When you open the application, you’ll be recommended a curated list of recommended locations for you that best fit your interests. Ahoy Capy! offers many different types of activities including food, outdoor, leisure, drinks, shopping, and educational activities. There are also filters for both pet-friendly and family-friendly options so that you can find activities that either your family, your pets, or both, can join you through your ventures! 

## Project Installation
> This project should be supported on all operating systems that support NodeJS and the packages installed via Node Package Manager (npm), such as Linux (Debian-Based, Ubuntu), Windows, and MacOS.

To install and view the project, you must install NodeJS in order to preview and edit the project. To Do this, either click the link below:

*Windows/MacOS/Other Linux Distributions*

[Install NodeJS](https://nodejs.org/en/download/current)

*Linux (Ubuntu) Command*

    sudo apt install nodejs && sudo apt install npm

After installing NodeJS, you must install a database. To install a database, visit either one of the URLs below:

[Mysql](https://www.mysql.com/)
 
[MariaDB](https://mariadb.org/)


After installing your database, import the db.sql file data onto your database using the following command

    mysql -u <your set username or root> -p < <your file name>.sql

> Please make sure to change your database username and password on the code itself. Navigate to the directory db/db_conn.js and make sure to update the this.connCredentials variable with the database information set when installing your database.

After creating your database and tables, you can now install the other required tools using the following command:

    npm install --save express expo-cli

This will install the packages required for the user-interface, as well as the backend for the application.

Note that these packages also need to be installed. Navigate to the backend of the application and type the following commands below

    npm install express mysql 
    npm install express body-parser

After typing the commands above, you can now navigate to the user-interface folder, then navigate to ahoycapy/app folder and type the following command below:

    npm install

Once you finish installing the necessary packages above you can now start the backend, as well as the user-interface of the application.

To start the user-interface, navigate back to the backend folder and type the following command

    node index.js

Once you finish starting up, you should see a message stating that the server is up and running in the console. 

Then you need to start the user-interface of the application. To do this, you can navigate back to the user-interface of the application and type the following command below:

> Make sure to open a seperate new terminal in order to run this command

    npx expo start

After starting expo, you will be displayed with the expo menu screen containing options, such as "w", which is the command to open the browser version of the application, as well as "a", which opens the android emulator, if [Android Studio](https://developer.android.com/studio) is installed. If you are using a MacOS device, the "i" command should be able to work, but [XCode](https://developer.apple.com/xcode/) is required in order to use the IOS simulator on MacOS. 

Other preview options, as shown from the expo menu screen include a QR code, which is used to preview your application using an external device. This can be achieved by installing [ExpoGo](https://expo.dev/client), which is a client made for IOS and Android used to externally preview your applications during the development process. To preview the application after installing the ExpoGo client, open your camera app and scan the QR code displayed on the terminal. This should open up the ExpoGo app and start your preview.