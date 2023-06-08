const { where } = require('sequelize');
const { User } = require('../db/models/index');


async function register(req, res) {
    const { body } = req;
    try {
        const inputData = {
            firstName: body.firstName,
            lastName: body.lastName
        }
        const result = await User.create(inputData);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
};

async function getUser(req, res) {
    const { body } = req;
    try {
        if (!req.query.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وازد نمایید' }
            }
        }

        const inputData = {
            id: req.query.id
        };
        const result = await User.findOne(inputData);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
};
async function updateUser(req, res) {
    try {
        const inputData = req.body;
        const result = await User.update({ firstName: inputData.firstName, lastName: inputData.lastName }, { where: { id: inputData.id } });
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
};
async function deleteUser(req, res) {
    try {
        const inputData = req.query.id;
        User.destroy({ where: { id: inputData } }).then(() => {
            res.send('user deleted')
        })
    } catch (err) {

    }
};
module.exports = { register, getUser, updateUser, deleteUser };