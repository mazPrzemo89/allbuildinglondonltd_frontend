# allbuildinglondonltd_fronteend
This is a website project for AllBuildingLondonltd construction company. It gives the administrator of the page the freedom to create photo gallery categories and then associate pictures with them. An email API is integrated in the app for quoting pourposes. Users are free to rate the services by posting a comment and a star rating which is to be verified by the admin later. The whole application is hosted on a virtual private server. The frontend is written in ReactJS, it utilizes custom npm packages. CSS is used for styling of the application's layout and components. Backend is written in latest stable version of NodeJS, an Express sever connected to a MongoDB database via mongoose library, serves a React production build. Frontend and backend communtcate via REST API's.

# Components

## Admin

Admin Component is visible and available only to a logged in admin user. The admin user is determined a specific email adress and a JWT token signed by the server. The token is stored in the browsers local storage. In the admin page user can create category and upload photos to it. Deleting category will result in deleting all the pictures associated with it.

## Gallery

Gallery Component displays the uploaded photos by selected category. Deleting photos happes directly in the gallery component. For an authenticated admin user a delete button will be displayed under each photo. 

## Home

Home page is a small display of the company's work it can take the end user directly to construction, steelwork, scaffoldong pages and the comment section.

## Construction, Steelwork and Scaffoldong

Construction, Steelwork and Scaffoldong pages are all stateless Components. They are a short introduction to what the company does and what their goals and achievements are. 

## Comments

In Comments page any end user can add a comment about the company. Every posted comment must be verified by the admin before being displayes to the end users.

## About 

About page is also a stateless Component, it contains information about the companys history, their standards and policies.

## Contact

Contact page lets end users send a free quote to the companys email adress. A form is sent from the backend witch is integrated with an email sending API. 


# Deployment

For production run ``` npm run build ``` command form the projects main directory. After the build is completed. Move it to your production's express server root directory, you'll find instructions on how to deploy a production server for this app in allbuildinglondonltd_backend repo.

