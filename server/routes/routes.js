const express = require("express");
const router = express.Router();
const signuptempcopy = require("../models/signupmodels");

router.post("/SignUp", (request, response) => {
  const signupuser = new signuptempcopy({
    Firstname: request.body.Firstname,
    Lastname: request.body.Lastname,
    Email: request.body.Email,
    Password: request.body.Password,
  });
  signupuser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});
router.get("/Users", (req, res) => {
  signuptempcopy
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.delete("/User/:id", (request, response) => {
  signuptempcopy
    .deleteOne({ _id: request.params.id })
    .then((result) => {
      console.log("Deleted Applicant");
      response.status(200).json(result);
    })
    .catch((error) => console.log(error));
});
router.get("/User/:id", function (req, res) {
  signuptempcopy
    .findById(req.params.id)
    .then((data) => {
      console.log("Data by ID Fetched");
      res.json(data);
    })
    .catch((error) => console.log(error));
});

router.put("/UpdateUser/:id", (request, response) => {
  signuptempcopy
    .updateOne(
      { _id: request.params.id },
      {
        $set: {
          Firstname: request.body.Firstname,
          Lastname: request.body.Lastname,
          Email: request.body.Email,
          Password: request.body.Password,
        },
      }
    )
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((error) => console.log(error));
});
module.exports = router;
