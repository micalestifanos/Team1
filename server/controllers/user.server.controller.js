const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var User = require('../models/users.server.model');
const secret = require('../config/config').secretOrKey;


exports.registerUser = function (req, res) {
    User.findOne({ name: req.body.name })
        .then(user => {
            if (user) {
                return res.status(400);
            } else {
                const newUser = new User({
                    name: req.body.name,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash;

                        newUser.save().then(saveUser => res.json(saveUser));
                    });
                });
            }
        });
}

exports.loginUser = function (req, res) {
    User.findOne({ name: req.body.name })
        .then(user => {
            if (!user) {
                return res.status(404);
            }

            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, name: user.name };
                        jwt.sign(payload, secret, { expiresIn: '1d' }, (err, token) => {
                            return res.json({ success: true, token: `Bearer ${token}` });
                        });
                    } else {
                        return res.status(400).json({ errors: "Incorrect password" });
                    }
                });
        });
}