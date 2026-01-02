const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const protect = require('../middlewares/auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Used by AdminLayout / UserLayout
router.get('/verify-token', protect, (req, res) => {
    res.status(200).json({
        status: 200,
        valid: true,
        user: req.user
    });
});

module.exports = router;
