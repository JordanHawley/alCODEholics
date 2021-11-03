const client = require('./client')

const createAlcohol = async ({ type, name, price, description, inStock, imageUrl }) => {
  try {
    const { rows } = await client.query(
      `
          INSERT INTO alcohols(type, name, price, description, "inStock", imageUrl)
          VALUES($1, $2, $3, $4, $5, $6)
          RETURNING *
          `,
      [type, name, price, description, inStock, imageUrl]
    );

    return rows;
  } catch (error) {
    throw error;
  }
};

const getAllAlcohol = async () => {
  try {
    const { rows } = await client.query(`
  SELECT *
  FROM alcohols
  `);

    return rows;
  } catch (error) {
    throw error;
  }
};


//getAlcoholById
const getAlcoholById = async (id) => {
  try {
    const {rows: [alcohol]} = await client.query(`
      SELECT *
      FROM alcohols
      WHERE id=$1
    `, [id])

    return alcohol
  } catch (error) {
    throw error
  }
}

// export
module.exports = {
  createAlcohol,
  getAllAlcohol,
  getAlcoholById
};
