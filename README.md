# Social Media Application 🌍
> React Social Media Application

<a name="top"></a>
## Table Of Contents 📖
1. [Preview](#preview)
2. [Installation](#installation)
3. [API & Data](#apidata)
4. [Login](#login)
5. [Photos & Posts](#photosposts)
6. [CRUD Operations](#crud)
7. [User’s profile page](#profilepage)
8. [Search Bar](#searchbar)
9. [Authorization](#authorization)
10. [Page Not Found](#notfound)
11. [Responsiveness](#responsiveness)
12. [Light / Dark mode](#lightdarkmode)
13. [Translations](#translations)

<a name="preview"></a>
## 1. Preview 👀

This is a social media application project written in the React framework. Users can view photos and posts of others and insert their own. The intention of the project is to show only the frontend side of the application. The backend part was not written by hand in ASP.NET or any other backend framework, the data was fetched from <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a> website, which provides a free fake API (tables of users, their photos, posts, comments, etc.) and is treated as a REST API.

![preview](https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/69e07c4a-13b1-49ac-9bd4-68027969d6b1)

<a name="installation"></a>
## 2. Installation 🛒

First of all, clone the repository. You can do it using this URL:

`https://github.com/patrykwitek/Social-Media-App-React.git`

For some reason, the react-icons library was not included in the application's dependencies, so you have to do it manually using comenedy:

`npm install react-icons –save`

(_reset Visual Studio after installation react-icons_)

Remember to install <a href="https://nodejs.org/en" target="_blank">Node.js</a> and you can start the application by using this command in console:

`npm start`

Your application should open on localhost on port 3000 - http://localhost:3000

<a name="apidata"></a>
## 3. API & Data 🚚

The database was not created independently using ASP.NET or any other backend framework. The data was fetched from the JSON Placeholder website, which offers a free fake API.

The tables and data that JSON Placeholder offers and that were used in the application are :
-	Photos
-	Albums (photos albums)
-	Posts
-	Comments (posts comments)
-	Users

<a name="login"></a>
## 4. Login 🙋‍♂️

Upon entering the application, a welcome page is displayed, where the user can go to the login page by clicking "Start Exploring" or "Login" in the page header.

Since the data is pulled from the JSON placeholder page and not from our own backend, we did not create a user registration page, only a login page. The user enters a username, and the application checks to see if one exists in the JSON placeholder database, and if it does, the login takes place.

Normally, a JWT token should be returned upon login, but since the JSON Placeholder page does not offer the service of this token, the user conventionally stays logged in until the page is refreshed. JSON Placeholder also does not offer a password service (only a username), so in the application you just need to enter the correct name of an existing user in the database.

JSON Placeholder usernames list:
- Bret
- Antonette
- Samantha
- Karianne
- Kamren
- Leopoldo_Corkery
- Elwyn.Skiles
- Maxime_Nienow
- Delphine
- Moriah.Stanton

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/af8d3de9-e358-45e0-a1eb-cca87a81e7bf

<a name="photosposts"></a>
## 5. Photos & Posts ✉️

The main idea of the application is to create a social media where users can insert their own photos and posts, view other users' work and comment on it.

In the top panel, users can navigate through the application's tabs. He can enter the photos and posts tab, where the content will be displayed. With each new refresh, photos and posts are generated with a random order. Along with scrolling down and showing new photos and posts, lazy loading is implemented.

### Photos

The photo in the photos tab has the name of the user who posted it (this is also a link to that user's profile page). It also has information about the album to which the photo belongs - a link to the album appears when you click the show more button.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/542288b0-968f-4eea-9268-f243e2c06df7

### Albums

Each photo is stored in an album. To view a given album, you can do so by expanding the show more button in the section of a given photo, or on the user page under the albums tab. The album has thumbnail photos, where a modal with the full photo is displayed when clicked.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/b08d5116-e653-42bf-a8fc-7a569544ce0a

### Posts

Each post has a link to the user who wrote it, the title of the post, its content and a comments tab.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/29f54637-1d53-49be-9828-9d8e38289ba7

<a name="crud"></a>
## 6. CRUD Operations 🖊️

The user can manage data on the site and perform CRUD (Create, Read, Update, Delete) operations. These include adding new photos and posts, deleting their photos and posts, deleting comments under their posts, and editing their user data.

### Add new photo / post

You can add a new photo through the plus button in the photo tab, or through the User panel -> Add -> Photo

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/14a3d1fb-2779-40bb-a87e-164ec3048b61

You can add a new post through the plus button in the post tab, or through the User panel -> Add -> Post

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/a820383d-7a47-4733-9197-078ed657f70c

### Deleting your photos

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/e894c4fb-0a14-4e57-bc39-68ce855e7dc8

### Deleting your posts & comments under it

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/722ca2eb-ebea-4506-b669-e739140bbfbf

<a name="profilepage"></a>
## 7. User’s profile page 🗃️

Each photo and post has a link to the author's profile. The profile page contains all the user's data from the JSON Placeholder page and 3 tabs: photos, posts and gallery (albums) belonging to the user.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/c6bfe36b-4206-4e2e-ae94-49d33f528dc7

<a name="searchbar"></a>
## 8. Search Bar 🔍

The Friends tab shows a search engine for users by username from the database, which responds to each click of the buttons on the keyboard.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/2eeb3688-b1d8-4512-bf00-368d6a980539

On the photo page you will also find a search engine that allows you to search for photos by: photo id, album id or user id

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/33b0fcb1-4a3d-41d3-a295-01a30355d3c3

<a name="authorization"></a>
## 9. Authorization 🔑

If a non-logged-in user tries to visit an application URL other than the login page, a message is displayed that only logged-in users can visit this page.

![authorization](https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/94d9194d-1424-49ef-9ea3-588e060c7c3d)

<a name="notfound"></a>
## 10. Page Not Found 🙈

If a user tries to enter through a URL to a subpage of the application that does not exist a message is returned.

![not found](https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/54ad015c-f1d7-477a-acb6-c6a9571464f2)

<a name="responsiveness"></a>
## 11. Responsiveness 📱

The app is responsive to be used on mobile devices.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/663f7c60-5ced-4337-892f-d3e0fdcc7ec4

<a name="lightdarkmode"></a>
## 12. Light / Dark mode 🌙

The application also has a night mode. You can turn it on by going to User Control Panel -> Settings -> Light / Dark Mode. The status of the dark / light mode is saved to local storage, so even after refreshing the application, the application will be displayed in the previously selected mode.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/2d385a2d-637d-42ef-ae1d-d66bd1dc707e

<a name="translations"></a>
## 13. Translations 💁

The application supports English, Polish and Ukrainian translations. To change the language of the site, go to User Panel -> Settings -> Language. The default language of the application is English.

https://github.com/patrykwitek/Social-Media-App-React/assets/117681023/2a863dd9-b3d7-44e5-9b4b-be7d8b5b391c

[🔼 Back to top](#top)
