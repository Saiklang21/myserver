import {Router} from "express";
import { createUser, getUser, getUserById, updateUser, deleteUser } from "./UserController";

const router = Router();
//REST API routes for user management
router.post('/users', createUser);
router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;  