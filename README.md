# My Andela challenge SendIT-API-Endpoints

**About SendIT**

SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.


Travis CI
> - Master Branch [![Build Status](https://travis-ci.org/blaisebakundukize/SendIT-API-endpoints.svg?branch=master)](https://travis-ci.org/blaisebakundukize/SendIT-API-endpoints)
> - Develop Branch [![Build Status](https://travis-ci.org/blaisebakundukize/SendIT-API-endpoints.svg?branch=develop)](https://travis-ci.org/blaisebakundukize/SendIT-API-endpoints)

coveralls: [![Coverage Status](https://coveralls.io/repos/github/blaisebakundukize/SendIT-API-endpoints/badge.svg?branch=master)](https://coveralls.io/github/blaisebakundukize/SendIT-API-endpoints?branch=master)

#### API V1 Available Functionalities

| API Endpoints | Functionality |
| ---| ---|
| GET `/api/v1/parcels` | Fetch all parcels delivery orders |
| GET `/api/v1/parcels/<parcelID>` | Fetch a specific parcel delivery order |
| GET `/api/v1/users/<userID>/parcels` | Fetch all parcels delivery orders by a specific user |
| PUT `/api/v1/parcels/<parcelID>/cancel` | Cancel the specific parcel delivery order |
| POST `/api/v1/parcels` | Create a parcel delivery order |
| POST `/api/v1/users` | Register new user |

#### Access API

> - Access the API Here: [https://agile-dusk-15975.herokuapp.com/api/v1/]
> - Fetching all parcels: [https://agile-dusk-15975.herokuapp.com/api/v1/parcels]
> - For other roots use IDs 1, 2 for users and parcels
> - For creating a parcel you have to post a json data: 
`{
	"userId": 1,
	"parcel": {
		"quantity": 1,
		"weight": 5,
		"height": 60,
		"width": 60,
		"length": 60,
		"countryFrom": "USA",
		"postZipCodeFrom": "12345",
		"countryTo": "Kenya",
		"postZipCodeTo": "23453"
	}
}`


#### Core Technology
> - Back-end: Expressjs
> - Libraries: es6, Babel-Node, eslint, Mocha/Chai + chai-http
> - System Dependencies: Nodejs

#### Folder Structure
> - `src`: contains project API folder developeded in Node/express
      ├── `db`: contains object data that api use to store and retrieve
      ├── `routes`: contains api routes for users and parcels
> - `test`: contains test file for both users and parcels routes

#### Getting Started
> **Installation**
> - Clone the repo `https://github.com/blaisebakundukize/SendIT-API-endpoints.git` inside foldername
> - Ensure you have installed Nodejs which comes with npm
> - Navigate into the app root directory: `cd foldername`
> - Run `$ npm install` to install all dependencies
> - Run tests to ensure the app is not broken: `npm test`
> - If test fail to run, install mocha globally: `npm install -g mocha`
> - Run tests again

> **How to Demo**
> - To start the app run: `npm start`
> - If failed to start, install nodemon globally: `npm install -g nodemon`

#### Author
> - [Blaise Bakundukize](https://github.com/blaisebakundukize)
