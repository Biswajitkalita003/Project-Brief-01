const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Campus Connect backend is working successfully",
  });
});

module.exports = router;