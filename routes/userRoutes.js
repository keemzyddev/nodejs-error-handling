const express = require("express");
const Joi = require("joi");
const router = express.Router();
const { SubError, Api400Error } = require("../utils/apiError");
const { tryCatch } = require("../utils/tryCatch");

const getUser = () => undefined;
const getSubscription = () => undefined;

router.get(
  "/",
  tryCatch(async (req, res) => {
    const user = getUser();
    if (!user) {
      throw new Api400Error("user not found");
    }

    res.status(200).json("success: true");
  })
);
const schema = Joi.object({
  userId: Joi.number().required(),
});

router.post(
  "/login",
  tryCatch(async (req, res) => {
    const { error, value } = schema.validate({});
    // if (error) throw error;
    const subscription = getSubscription();
    if (!subscription) {
      throw new SubError("Subscription not found");
    }
  })
);

router.post(
  "/",
  tryCatch(async (req, res) => {
    const users = [
      { id: 1, name: "hakeem" },
      { id: 2, name: "femi" },
      { id: 3, name: "john" },
    ];
    const { name } = req.body;

    const user = users.find((user) => user.name === name);
    if (user) {
      throw new Api400Error("user exist");
    }
    let newUser = {
      id: Math.floor(Math.random() * 100 + 4),
      name: name,
    };
    const addUser = users.push(newUser);
    res.json(users);
  })
);

module.exports = router;
