// import specific service class
const event_ser = require("../../../services/event");

// mention the service's needed actions (methods)
const event_controller = {
  getAll(req, res) {
    res.json(event_ser.getAll());
  },
  create(req, res) {
    res.status(201).json(event_ser.create(req, res));
  },
  update(req, res) {
    const ticket = event_ser.update(req.params.id, req.body);

    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404).send("Event not found");
    }
  },
  delete(req, res) {
    const ticket = event_ser.getById(req.params.id);

    if (ticket) {
      event_ser.delete(req.params.id);
      res.status(204).send("Event deleted successfully");
    } else {
      res.status(404).send("Event not found");
    }
  },
};

module.exports = event_controller;
