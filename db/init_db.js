const client = require('./client')

const { createAlcohol, registerUser} = require("./index");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    console.log("Starting to DROP TABLES...");
    await client.query(`
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS alcohols;
    DROP TABLE IF EXISTS users;
    `);
    console.log("Successfully DROPPED TABLES!");

    // build tables in correct order
    console.log("Attempting to CREATE TABLES...");
    await client.query(
      `
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "isLoggedIn" BOOLEAN DEFAULT false,
        "isAdmin" BOOLEAN DEFAULT false
        );
      CREATE TABLE alcohols(
        id SERIAL PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        price NUMERIC NOT NULL,
        description VARCHAR(255),
        "inStock" BOOLEAN DEFAULT false,
        inventory INT DEFAULT 500 NOT NULL,
        imageUrl VARCHAR(255) NOT NULL
        );
      CREATE TABLE cart(
        id SERIAL PRIMARY KEY,
        "userId" INT REFERENCES users("id"),
        "alcoholId" INT REFERENCES alcohols("id"),
        "isPending" BOOLEAN DEFAULT true,
        quantity INT DEFAULT 1
      );
        `
    );

    //status column to cart (completed, inprogress, returned)
    //cart storage
    console.log("Successfully CREATED TABLES!");
  } catch (error) {
    throw error;
  }
}

async function populateInitialUsers() {
  console.log("Trying to create users...");
  try {
    const usersToCreate = [
      {
        username: "Brian M",
        password: "BrianMwashere",
        isAdmin: true,
      },
      {
        username: "Jordan H",
        password: "JordanHwashere",
        isAdmin: true,
      },
      {
        username: "Chris W",
        password: "ChrisWwashere",
        isAdmin: true,
      },
      {
        username: "Maxwell M",
        password: "MaxwellMwashere",
        isAdmin: true,
      },
      {username: "SuperUser",
       password: "SuperPassword",
       isAdmin: true
      }
    ];

    const users = await Promise.all(usersToCreate.map(registerUser));

    console.log("Users Created");
    console.log("Users Created: ", users);
    console.log("Finished creating users!");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  console.log("Trying to create Alcohols...");

  try {
    const alcoholsToCreate = [
      {
        type: "Rum",
        name: "Malibu",
        price: 14.99,
        description: "Smooth and delicious, great for mixed drinks!",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Malibu%20Rum.png"
      },
      {
        type: "Vodka",
        name: "Smirnoff",
        price: 22.99,
        description: "This is a dangerous drink, you won't notice the taste.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Vodka.png"
      },
      {
        type: "Whiskey",
        name: "Teacher's",
        price: 16.99,
        description: "This is some interesting Whiskey",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Blended%20Whiskey.png"
      },
      {
        type: "Cognac Fine Champagne",
        name: "Courvoisier",
        price: 49.99,
        description: "This isn't too bad for alcohol.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Cognac.png"
      },
      {
        type: "English Gin",
        name: "Plymouth",
        price: 26.99,
        description: "Classy drink with strong taste",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Gin.png"
      },
      {
        type: "Vodka",
        name: "Burnett's Pineapple",
        price: 6.99,
        description: "This is some pretty good vodka for what it is.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Pineapple%20vodka.png"
      },
      {
        type: "Apple Brandy",
        name: "Santa Fe Spirits",
        price: 36.99,
        description: "I have never personally had this before, I cannot really describe it.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Apple%20Brandy.png"
      },
      {
        type: "Jamaican Rum",
        name: "Captain Morgan: Black Label",
        price: 29.99,
        description: "Every Pirates of the Carribean film is an cinematic masterpiece.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Rum.png"
      },
      {
        type: "Tequila, Silver",
        name: "Sierra Tequila",
        price: 15.99,
        description: "This alcohol is only every bought in order to get the tiny red hat the comes with it.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Tequila.png"
      },
      {
        type: "Banana Liquer",
        name: "Collins Cordials",
        price: 23.99,
        description: "This stuff is really good.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Banana%20Liqueur.png"
      },
      {
        type: "Bourbon, Whiskey",
        name: "Michter's Small Batch",
        price: 45.99,
        description: "Very strong and potent Whiskey",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Bourbon.png"
      },
      {
        type: "Banana Liquer",
        name: "BOLS",
        price: 14.99,
        description: "Cant get enough of the Banana Liquer.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Creme%20De%20Banane.png"
      },
      {
        type: "Light Rum",
        name: "Bacardi: Superior",
        price: 14.99,
        description: "This is a great rum, especially with mixed drinks.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Light%20Rum.png"
      },
      {
        type: "Single-Malt Scotch",
        name: "Macallan Amber",
        price: 89.99,
        description: "This is a fantastic bottle of Scotch that we are sure you will love.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Scotch.png"
      },
      {
        type: "Rye Whiskey",
        name: "Journeyman Distillery: Last Feather Rye",
        price: 45.99,
        description: "Delicious, Smooth Whiskey to shares with friends.",
        imageUrl: "https://www.thecocktaildb.com/images/ingredients/Rye%20Whiskey.png"
      },
    ];

    const alcohols = await Promise.all(alcoholsToCreate.map(createAlcohol));

    console.log("Alcohols Created");
    console.log("Alcohols Created: ", alcohols);
    console.log("Finished creating alcohols!");
  } catch (error) {
    throw error;
  }
}


buildTables()
  .then(populateInitialUsers)
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
