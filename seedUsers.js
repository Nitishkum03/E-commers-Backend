const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const connectDB = require('./db/connection');

const seedUsers = async () => {
    try {
        await connectDB();
        
        // Clear existing users
        await User.deleteMany({});
        
        // Create sample users
        const users = [
            {
                userName: 'admin',
                email: 'admin@example.com',
                password: await bcrypt.hash('password123', 10),
                role: 'admin'
            },
            {
                userName: 'customer1',
                email: 'customer@example.com',
                password: await bcrypt.hash('password123', 10),
                role: 'customers'
            },
            {
                userName: 'seller1',
                email: 'seller@example.com',
                password: await bcrypt.hash('password123', 10),
                role: 'seller'
            },
            {
                userName: 'john_doe',
                email: 'john@example.com',
                password: await bcrypt.hash('password123', 10),
                role: 'customers'
            },
            {
                userName: 'jane_smith',
                email: 'jane@example.com',
                password: await bcrypt.hash('password123', 10),
                role: 'customers'
            }
        ];
        
        await User.insertMany(users);
        
        console.log('Sample users created successfully!');
        console.log('\nDemo Accounts:');
        console.log('Admin: admin@example.com / password123');
        console.log('Customer: customer@example.com / password123');
        console.log('Seller: seller@example.com / password123');
        console.log('John: john@example.com / password123');
        console.log('Jane: jane@example.com / password123');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding users:', error);
        process.exit(1);
    }
};

seedUsers(); 