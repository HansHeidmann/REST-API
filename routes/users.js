import express from 'express'; // npm install express
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// these routes start with /users

router.get('/', getUsers);

router.post('/', createUser);

// /users/id
router.get('/:id', getUser);


router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
