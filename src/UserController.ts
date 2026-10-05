import { Request, Response } from 'express';
import User from './User';
import { utils } from './utils';

//create user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, age } = req.body;

        if (!utils.isValidEmail(email)) {
            return res.status(400).json({ error: 'Invalid email' });
        }
        if (!utils.isValidAge(age)) {
            return res.status(400).json({ error: 'Invalid age' });
        }
        
        const user = await User.create({ name, email, password, age });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

//get all users
export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

//get single user by id
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};


//update user by id
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

//delete user by id
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};
