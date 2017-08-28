WSDS_EXAMPLE is based upon the PAMM seed and utilises the following technical stack:
-----------

-   [Play](https://www.playframework.com/) for server side web pages and services

-   [AngularJS](https://angularjs.org/) for client side rich user interfaces

-   [MariaDb](https://mariadb.org/) for relational data

-   [MongoDb](https://www.mongodb.org/community) for document based non-relational data


Pre-requisites
-----

Prior to running the application the simple build tool (SBT) should be installed on your local environment. A h2 database should also be installed and run to work in a development environment.

1. Running the Application
----------

Open a command window at the WSDS_EXAMPLE  root folder and enter the following command

	sbt svc/run

Please note you will also have to have a H2 database running. Hint install database and execute the java binary with the following command java -jar h2-1.4.193.jar 

Enter the following URL in a browser

    http://localhost:9000

The login page should be presented. The applicatoin has no authentication configured for this version, so by entering any username and password, the dashboard should be displayed. The angular client is integrated with the Play backend and any actions on the Angular client will be routed to the Play backend




