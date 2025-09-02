/**
 * Database Configuration and Connection Pool Setup
 * This file handles the database connection configuration and creates a connection pool
 * for efficient database operations. Supports both MySQL and PostgreSQL.
 */

import mysql from 'mysql2';
import pkg from 'pg';
const { Pool: PGPool } = pkg;
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Determine which database to use
const DB_TYPE = process.env.DB_TYPE || 'mysql'; // 'mysql' or 'postgresql'

let pool;

if (DB_TYPE === 'postgresql') {
    // PostgreSQL configuration
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'barberin',
        port: process.env.DB_PORT || 5432,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    };

    pool = new PGPool(dbConfig);

    // Test PostgreSQL connection
    pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('❌ Error testing PostgreSQL connection:', err);
        } else {
            console.log('✅ PostgreSQL connection pool created successfully');
            console.log('📅 Database time:', res.rows[0].now);
        }
    });

    pool.on('error', (err) => {
        console.error('❌ Unexpected error on idle client', err);
        process.exit(-1);
    });

} else {
    // MySQL configuration (default)
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Qwe.123*',
        database: process.env.DB_NAME || 'Barberin',
        acquireTimeout: 60000,
        timeout: 60000,
        reconnect: true
    };

    pool = mysql.createPool(dbConfig);

    // Test MySQL connection
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('❌ Error connecting to MySQL database:', err);
            return;
        }
        console.log('✅ MySQL connection pool created successfully');
        connection.release();
    });
}

// Export the connection pool for use in other parts of the application
export default pool;
