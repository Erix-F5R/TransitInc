const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const port = 4000;


express()
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.json())

  //req.params

  .get("/welcome", (req, res) => {

    res
      .status(200)
      .json({ status: 200, message: "Says hi back" });
  })


  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Nothing to see here.",
    });
  })

  .listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
