const Contact = require("../models/contact_model");
const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(200).json({ message: "message send successfull" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = contactForm;

