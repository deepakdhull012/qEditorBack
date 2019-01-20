const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.getUser = function (req, res) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.send(users);
    })
};

exports.postUser = function (req, res) {
    let user = new User(
        {
            email: req.body.email,
            password: req.body.password
        }
    );

    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send(user)
    })
};