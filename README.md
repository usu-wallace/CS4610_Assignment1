# Assignment 1: Quote Search

For this first project you will be building a simple application that uses a quotes api to search for quotes by author name. Do not underestimate this application! It sounds simple but for many of you, this will be your first foray into React and TypeScript and you will likely be using this as a refresher for JavaScript, HTML and CSS as well. In this assignment you will build and deploy the application. In the next assignment you will turn this application into a progressive web application and add responsive features to make it look nice on bigger screens. You only need to target small screens for this assignment but feel free to get ahead if you would like and add responsiveness if you feel like it.

## Objectives
---
1. Remember JavaScript and learn TypeScript :p
2. Apply the core idea of Unidirectional Data Flow
3. Build a React App using Vite for development.
4. Deploy a web application.

## Requirements
---
You are to design and build a mobile-first web application that allows the user to search for quotes said by a given author. Watch the following for a video demonstration of my solution and an explanation:

*insert video here on GitHub*

Do you love how I am terrible at spelling, haha! Note that I have the dev tools open and mobile mode enabled to demonstrate how it looks on a small screen. I will be using this to grade your submission so you should develop your application in this mode.

The API you will use is a mimic of the API that lives here https://github.com/lukePeavey/quotable

**That API is broken!** Instead you will use the API that I created that mimics that api, it lives here https://usu-quotes-mimic.vercel.app. You can use the documentation from the quotable api though to know the shape of the objects it will return from the random API and the search API.

This api is really easy to use: for example you might run the following (in an async function):

```
const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
console.log(await result.json());
```

This will log a javascript object that contains a random quote in it. Look at the docs at that link above for more information about what that object will look like.

You can use the 'search' api to search for quotes by author name. That will look something like:

```
const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=Thomas Jefferson");
console.log(await result.json());
```

This will log out a result object that has a key called 'results' that contains a list of quotes that belong to someone with the name of George. **The example in the docs is wrong for this endpoint. It should a list of authors in the results key but it will actually return a list of quotes.**

Note also that my api endpoint is slightly different that the endpoint for quotable. In my api you do not need to specify that you are searching by author as it will always search by author.

### When the app loads

1. I should see a title, a search bar, and random quote. This UI must be styled and look nice on a small screen. I recognized that "looking nice" is entirely subjective but I want you to put some effort into the design of this application. It doesn't need to be professionally designed but it should be obvious that some effort was put into making it look nice.

2. Pressing enter while in the search bar should perform the search. You are welcome to also have a search button if you would like, but pressing enter should still perform the search without me having to push the button. If you put your search input in a form then pushing the enter key will trigger the onSubmit event on the form and you can use that to perform the search. Just don't forget to call preventDefault on the event object otherwise your page will refresh!

### When a search is performed

1. The search bar should move up to the top of the screen. I don't want you to use anything like react router to put the search results on a different page. Rather, you should change the state of the program and rearrange the UI accordingly.  (This can be done very easily by conditionally applying a class to the main container element based on whether or not a search was performed combined with a little CSS).

2. The search results should be displayed. I should be able to scroll to see results if there are more results than those that fit on the screen.

3. When I perform another search the result should be replaced with the new results.

## Instructions
---
1. Use Vite to generate a React Application with TypeScript. In case you forgot the command looks like this

```
yarn create vite MyProjectName --template react-ts
```

Obviously, you should replace "MyProjectName" with something that actually makes sense.

2. Create a git repo on github for you project and push up your code. The repo should be public because you will be using it to deploy.

3. Build the application! Remember to commit often!

4. Deploy your application to github pages.

**Don't forget that github publicly hosts the docs folder for your application. The means you need to change the root during the build process to "./" in your vite.config.js file.**

**Also, remember to change to output directory to be "docs" instead of the default of "dist".**

5. Delete your node_modules folder and zip up your project folder for submission. Be sure to include the docs folder in the zip!

6. Submit the zip of your project folder and in a submission comment include the link to your hosted application.

## Penalties
---
### Failure to follow instructions

These submissions will take forever to download if you forget to remove your node_modules folder. You will lose 5% if your submission has the node_modules folder in it.

If you forget to include the link to your hosted application (or were otherwise unable to deploy your application) you will receive a penalty of 10%. We will be using your hosted application for grading. If we don't have your link then we will try to build and run your application locally which takes extra time.

### Code Formatting and Quality

You will be met with a 1-10% total penalty if there are issues with your code quality depending severity. Poor quality code might include: poor variable names, improper indentation, redundant or unnecessarily repeated code, useless comments, or commented out code (you should never leave commented out code in a final product). You will also get this penalty if you are not using typescript effectively (for example, declaring everything as the unknown type or the object type to avoid strict type checking).

## Submit
---
Upload the zip of you project after you have removed the node_modules folder. Add a submission comment that includes the url to your hosted application.