# Pipo Challenge - Backend :fire:

Project status: In development :warning:

### **Topics**

[**Project description**](#project-description)

[**Functionalities**](#functionalities)

[**Prerequisites**](#prerequisites)

[**Technologies**](#technologies)

[**How to run the application**](#how-to-run-the-application)

[**How to run the test suite**](#how-to-run-the-test-suite)

<br>

![GitHub package.json version](https://img.shields.io/github/package-json/v/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/gabrielloppes/pipo_challenge_backend?style=for-the-badge)


## **Project description**
The objective of this project is to create a solution that facilitates the current process of including an employee in an health insurance company, where we ask only for the necessary data  for inclusion in those benefits, validating the data according to the plan's offer.

## **Functionalities**

As a company i can:
- [x] Create an account and login
- [ ] CRUD employees
- [ ] CRUD health insurance companies and append to an employee 

## **Prerequisites**

To run this project locally you'll need:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

To test API requests you can use [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/) or any other REST client of your choice. Alternatively you can use [MongoDB Compass](https://www.mongodb.com/products/compass) to visualize the data

## **Technologies**

The following tools were used in this project

- ExpressJS
- Mongoose
- JSON Web Tokens
- BcryptJS

## **How to run the application**

In the terminal, clone the repository:<br>

- Using HTTPS:
  - `https://github.com/gabrielloppes/pipo_challenge_backend.git`

- Using SSH:
  - `git@github.com:gabrielloppes/pipo_challenge_backend.git`

- Using Github CLI:
  - `gh repo clone gabrielloppes/pipo_challenge_backend`

Enter the project's folder:

`cd pipo_challenge_backend`

Install the dependencies:

`yarn install`

or

`npm install`

Run the application:

`yarn dev`

## **How to run the test suite**

To run the test suit run:

`yarn test`

I'm running tests with [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest)
