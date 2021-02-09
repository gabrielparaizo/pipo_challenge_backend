<h1 align="center">
Pipo Challenge - Backend :fire:
</h1>
<h3 align="center">
  
<div align="center">
  
  ![GitHub last commit](https://img.shields.io/github/last-commit/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
  ![GitHub package.json version](https://img.shields.io/github/package-json/v/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
  ![GitHub repo size](https://img.shields.io/github/repo-size/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
  ![GitHub top language](https://img.shields.io/github/languages/top/gabrielloppes/pipo_challenge_backend?style=for-the-badge)
  
</div>

</h3>

<p align="center">
🔥 The main objective of this project is to create a solution that facilitates the current process of including new employees, where: We only ask for the necessary data for inclusion in those benefits; We validate the data provided according to the customer's benefits offer (avoiding possible future problems at the health insurance companies)
</p>

## Installation

To run this project locally you'll need:<br>

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/), feel free to choose
- [MongoDB](https://www.mongodb.com/)

Optionally, you can use [Insomnia](https://insomnia.rest/) to test API requests and [MongoDB Compass](https://www.mongodb.com/products/compass) to easily manipulate the database

## Usage

You must clone this repository to your local machine:<br>

- Using HTTPS:
  `https://github.com/gabrielloppes/pipo_challenge_api.git`

- Using SSH:
  `git@github.com:gabrielloppes/pipo_challenge_api.git`

- Using Github CLI:
  `gh repo clone gabrielloppes/pipo_challenge_api`

After that, navigate to the project's folder and run `npm install` to install dependencies

## Strategy and technical desicions

- ### Strategy Design Pattern<br>

  - The Strategy pattern is an interesting pattern, as it defines a family of algorithms and places each one in a separate class, so that you can use them interchangeably for different actions.

- ### RESTful API approach<br>
  - The advantage of using the RESTful API approach is the decoupling, this way, each layer of the application will have its own responsibility separately.

## Technical debts:

- [x] Create users and authenticate with JWT and encrypt with BcryptJS

- [ ] Validations

- [ ] Test with Jest
