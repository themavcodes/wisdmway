import pool from "../config/db.js";

// Find a user by email
export const findUserByEmail = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Error finding user by email: " + error.message);
  }
};

// Create a new user
export const createUser = async (email, password) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};
