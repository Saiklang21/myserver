"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUser = exports.createUser = void 0;
const User_1 = __importDefault(require("./User"));
const utils_1 = require("./utils");
//create user
const createUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        if (!utils_1.utils.isValidEmail(email)) {
            return res.status(400).json({ error: 'Invalid email' });
        }
        if (!utils_1.utils.isValidAge(age)) {
            return res.status(400).json({ error: 'Invalid age' });
        }
        const user = await User_1.default.create({ name, email, password, age });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createUser = createUser;
//get all users
const getUser = async (req, res) => {
    try {
        const user = await User_1.default.find();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getUser = getUser;
//get single user by id
const getUserById = async (req, res) => {
    try {
        const user = await User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getUserById = getUserById;
//update user by id
const updateUser = async (req, res) => {
    try {
        const user = await User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateUser = updateUser;
//delete user by id
const deleteUser = async (req, res) => {
    try {
        const user = await User_1.default.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.deleteUser = deleteUser;
