import {pool} from './database.js'
import './dotenv.js'
import foodData from '../data/items.js'

const createItemsTable = async() =>{
    const createTableQuery = `
        DROP TABLE IF EXISTS items;

        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            image TEXT NOT NULL,
            calories INT,
            vitaminC VARCHAR(10),
            fiber VARCHAR(10),
            potassium VARCHAR(10)
        )

    `
    try{
        const res = await pool.query(createTableQuery)
        console.log('Items table created successfully')

    }
    catch(err){
        console.error('Error creating items table',err)

    }

}


const seedItemsTable = async () => {
    await createItemsTable();
  
    try {
      for (const item of foodData) {
        const insertQuery = `
          INSERT INTO items (title, image, calories, vitaminC, fiber, potassium)
          VALUES ($1, $2, $3, $4, $5, $6)
        `;
  
        const values = [
          item.title,
          item.image,
          item.calories,
          item.keyNutrients.vitaminC,
          item.keyNutrients.fiber,
          item.keyNutrients.potassium,
        ];
  
        await pool.query(insertQuery, values);
        console.log(`${item.title} added successfully`);
      }
  
      console.log('All items added successfully.');
    } catch (err) {
      console.error('Error inserting item:', err);
    }
  };
  
  seedItemsTable();
