import express from 'express'; // npm install express
import { v4 as uuidv4 } from 'uuid'; // npmjs.com/package/uuid

const router = express.Router();

let users = []; // databsase for now

// these routes start with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);

})

router.post('/', (req, res) => {
    const user = req.body; // json from incoming POST
    const userId = uuidv4(); // create a unique uuid (v4)
    const userWithId = { ...user, id: userId } //creates an object with all of the properties of the user then adds 1 more value on top (userId)
    users.push(userWithId); // add new user

    res.send(`New User: ${user.firstname} ${user.lastname} was added to the DB`);  // server response to postman/client POST req
});

// /users/id
router.get('/:id', (req, res) => {
    const { id } = req.params; // req.params { id: uuid }
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // id to delete: 123
    // Hans 123
    // Hansi 321
    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from DB`);
});

export default router;
