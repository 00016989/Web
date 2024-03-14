const express = require("express");
const { validationResult } = require("express-validator");
const {
  addTicketValidation,
  updateTicketValidation,
  deleteTicketValidation,
} = require("../../../validators/event");

const router = express.Router();
const event_controller = require("../../../controllers/api/event");

// Define API routes
router.get("/", (req, res) => {
  event_controller.getAll(req, res);
});

router.post("/", addTicketValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  event_controller.create(req, res);
});

router.put("/:id", updateTicketValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  event_controller.update(req, res);
});

router.delete("/:id", deleteTicketValidation(), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  event_controller.delete(req, res);
});

module.exports = router;
