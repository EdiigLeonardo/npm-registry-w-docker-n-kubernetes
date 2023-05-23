# User eXperience design

## User Story

### Searching for a Package

As a software developer, we wanted to create an application that would allow me to easily search and find packages in the NPM registry, for anyone looking to incorporate them into their projects quickly.

To achieve this goal, we need to enter a search expression which can be the name of the package itself or an associated keyword. The result should, among many things, include the package name, the package description, and the keywords of the package. We also need to view detailed information about the packages, including the package name, description, dist tags for the latest version, home page, and license for the latest version.

### Viewing NPM Registry Information

Additionally, we want to view the overall state of the NPM registry, including important information like uuid, db_name, and engine. This will help us understand the registry better and make more informed decisions when selecting packages for my projects.

### Accessing the Application on Different Devices

As a developer working on multiple devices, we need the app to be available on:
- Desktop:
    * Debian v.10;
    * Windows 11 Pro:
- Web 
    * Chromium 2023;
    * Firefox 2023;

so we can use it no matter where We're working.

Overall, the NPM Registry Explorer application will help us save time and be more productive by providing an easy and efficient way to search and locate packages in the NPM registry.


## Goals/requirements

The specific requirements of the project include:

* The ability to enter a search expression and retrieve results that include the package name, package description, and keywords
* Detailed information about packages, including package name, description, dist tags for the latest version, home page, and license for the latest version
* The ability to view information about the NPM registry, including uuid, db_name, and engine
* Compatibility with desktop and web environments, including Debian v.10, Windows 11 Pro, Chromium 2023, and Firefox 2023
* Clear and intuitive screen navigation, with a home page that leads to the NPM Status Monitor page, the Library Info Hub page, and the NPM Library Search page

### Target environments

The application should be Web first, it should adapt to the available area in a Desktop environment.


## Screen navigation

To achieve the objectives outlined above, the following navigation should be used in the prototype:
1.	### Home page
    *  1. The buttom NPM Status Monitor displays the NPM Status Monitor page.
    *  2. The buttom Library Info Hub displays the Library Info Hub page;
    *  3. The buttom NPM Library Search displays the Search page.
2.	### Npm Status Monitor
    * This page display a state of a npm registry;
    * 1. The home page returns to Home Page;
    * 2. The buttom Library Info Hub displays the Library Info Hub page;
3.	### Library Info Hub
    * Open the search bar.
    * Enter the library name.
    * Click the search button.
    * View the library info results.
    * 1. The home page returns to Home Page;
    * 2. The buttom NPM Library Search displays the Search page.
4.	### NPM Library Search
    * Open the search bar.
    * Enter the search expression.
    * Click the search button.
    * View the search results.
    * 1. The buttom NPM Status Monitor displays the NPM Status Monitor page.
    * 2. The home page returns to Home Page;

## Fonts and colors

### Fonts

* 'Source Sans Pro’, sans-serif;
* 'Roboto, "Helvetica Neue", sans-serif';
*  Font Awesome icon library for icons;
*  Bootstrap icons;
*  Bootstrap fonts;

### Colors:

* Body Background-Color: #f5f8fa **(Gainsboro)**;
* Borders: #abddff **(Light Steel Blue)**;
* btn BlackGround Hover: #fffaf5 **represents a very light, pale shade of beige or off-white**;
* Grid BlackGround Color: #ffffff **white**;
* Input PlaceHolder: #1d3232 **represents a dark shade between yellow, teal or green-blue**;
