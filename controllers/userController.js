
const { where,Op } = require('sequelize');

const User = require('../models/userModel');
//new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({ name, email, age });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserByEmail = async (req, res) => {
    try {
        const {email} = req.query
        console.log("Email received: ", email);
        const user = await User.findOne({
            where: { email: email }
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found in the db' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve user by ID
exports.getUserById = async (req, res) => {
    try {
        console.log("pooda");
        
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.name = name;
            user.email = email;
            user.age = age;
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find Youngsters from the age 25 to 45

exports.getYoungsters = async (req, res) => {
    try {
        console.log("im inside")
        const users = await User.findAll(
            {
                attributes:['id','name','age'],
                where:{
                    age:{
                        [Op.between]: [24, 46],
                    }
                }
            }
        );
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message+"Blah blah" });
    }
};