const client = require("./client");
const bcrypt = require("bcrypt");
const SALT = 10;

async function getAllUsers() {
    try {
      const { rows } = await client.query(
        `SELECT id, username, "isAdmin" 
        FROM users;
      `);
    
      return rows;
    } catch (error) {
      throw error;
    }
  }
  
  async function getUserById(userId) {
    try {
      const { rows: [user] } = await client.query(`
        SELECT id, username, "isAdmin"
        FROM users 
        WHERE id=${userId}
      `)
  
      if (!user) {
        return null;
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  }
  
  async function registerUser({
    username,
    password,
    isAdmin
  }) {

    const hashedPassword = bcrypt.hashSync(password, 10)
    

    try {
      const { rows: [user] } = await client.query(`
        INSERT INTO users(username, password, "isAdmin")
        VALUES($1, $2, $3)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;
      `, [username, hashedPassword, isAdmin]);
  
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function loginUser(username, password) {
    try {
      const { rows: [user] } = await client.query(`
        SELECT * FROM users 
        WHERE username=$1;
      `, [username])
  
      if (!user) {
        return null;
      }

      const passwordMatches = bcrypt.compareSync(password, user.password);

      if (!passwordMatches) {
        return null;
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers
};
