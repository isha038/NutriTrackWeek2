

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });  // This ensures .env is loaded properly

import pg from 'pg';



const config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false  // Enable SSL for production environments
    }
};

export const pool = new pg.Pool(config);

