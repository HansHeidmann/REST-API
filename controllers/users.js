import { v4 as uuidv4 } from 'uuid'; // npmjs.com/package/uuid

let users = []; // databsase for now


export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`New User: ${user.firstname} ${user.lastname} was added to the DB`);  // server response to postman/client POST req
}

export const getUser = (req, res) => {
    const { id } = req.params; // req.params { id: uuid }
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    // id to delete: 123
    // Hans 123
    // Hansi 321
    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from DB`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstname = firstName;
    if(lastName) user.lastname = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}
