"use strict";

var db = require('../config/db.config.js');

var User = db.user;

exports.create = function (req, res) {
  var user = {};

  try {
    user.firstname = req.body.firstname;
    user.middlename = req.body.middlename;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.phonenumber = req.body.phonenumber;
    user.role = req.body.role;
    user.address = req.body.address;
    User.create(user).then(function (result) {
      res.status(200).json({
        message: "upload successfully a user with id=" + result.id,
        users: [result],
        error: ""
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "fail!",
      users: [],
      error: error.message
    });
  }
};

exports.getAlluser = function (req, res) {
  try {
    User.findAll({
      attributes: ['id', 'firstname', 'middlename', 'lastname', 'email', 'phonenumber', 'role', 'address']
    }).then(function (userinfo) {
      res.status(200).json({
        message: "Get user infos!",
        userinfo: userinfo
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "get error!",
      error: error
    });
  }
};

exports["delete"] = function _callee(req, res) {
  var _userid, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _userid = req.params.id;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findByPk(_userid));

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 9;
            break;
          }

          res.status(404).json({
            message: "Does not exist a user withid = " + _userid,
            error: "404",
            users: []
          });
          _context.next = 12;
          break;

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(user.destroy());

        case 11:
          res.status(200).json({
            message: "Delete Successfully a user with id = " + _userid,
            users: [user],
            error: ""
          });

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Error-> Can not delete a user with id = " + userid,
            error: error.message,
            users: []
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.update = function _callee2(req, res) {
  var _userid2, user, updateObject, result;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _userid2 = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findByPk(_userid2));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 9;
            break;
          }

          res.status(404).json({
            message: "Not Found For Updating a customer with id = " + _userid2,
            users: [],
            error: "404"
          });
          _context2.next = 15;
          break;

        case 9:
          updateObject = {
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            role: req.body.role,
            address: req.body.address
          };
          _context2.next = 12;
          return regeneratorRuntime.awrap(User.update(updateObject, {
            returning: true,
            where: {
              id: _userid2
            }
          }));

        case 12:
          result = _context2.sent;

          if (!result) {
            res.status(500).json({
              message: "Error-> Can not update a user with id = " + req.params.id,
              error: "Can Not Updated",
              users: []
            });
          }

          res.status(200).json({
            message: "Updates Successfully user with id = " + _userid2,
            users: [updateObject],
            error: ""
          });

        case 15:
          _context2.next = 20;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Error-> Can not update a user with id = " + req.params.id,
            error: _context2.t0.message,
            users: []
          });

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17]]);
};