const Contact = require('../models/contact');

exports.getContacts = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        let newcontact = new Contact({
            name,
            email,
            message
        });
        newcontact = await newcontact.save();   
        res.status(201).json(newcontact);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}