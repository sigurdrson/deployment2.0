/**
 * PostgreSQL Database Configuration
 * Alternative to MySQL for Railway deployment
 */

import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

/**
 * PostgreSQL configuration object
 * Uses environment variables with fallback values
 */
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'barberin',
    port: process.env.DB_PORT || 5432,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

/**
 * Create PostgreSQL connection pool
 */
const pool = new Pool(dbConfig);

/**
 * Test database connection
 */
pool.on('connect', () => {
    console.log('✅ PostgreSQL connection pool created successfully');
});

pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle client', err);
    process.exit(-1);
});

/**
 * Test the connection
 */
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Error testing PostgreSQL connection:', err);
    } else {
        console.log('✅ PostgreSQL connection test successful:', res.rows[0]);
    }
});

export default pool;
