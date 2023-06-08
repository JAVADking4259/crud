const { Router } = require('express');
const router = Router();
const { register, getUser, updateUser, deleteUser } = require('../controller/auth');

router.post('/user', register);
router.get('/user', getUser);
router.put('/user/:id', updateUser);
router.delete('/user', deleteUser);

module.exports = router;