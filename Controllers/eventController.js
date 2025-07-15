const Event = require("../models/event");

const createEvent = async (req, res) => {
    try {
        if (Event.capacity <= 1000 && Event.capacity > 0) {
            const { eventid, title, date, loc, capacity} = req.body;
            const newevent = new Event({ eventid, title, date, loc, capacity });
            await newevent.save();
            res.status(201).json({ message: "Event created successfully." },eventid);
        }
    } catch (error) {
        console.error("Error in createEvent controller!");
        console.log("Interal Server Error!");
    }
};

const getEventDetails = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
        res.json(events.registeredUsers);
        res.status(200).json({ message: "All the event data and registered users fetched successfully." });
    } catch (error) {
        console.error("Error in getEventDetails controller!");
        console.log("Internal Server Error!");
    }
};

const cancelUserRegistration = async (req, res) => {
    try {
        if (!Event.registeredUsers) {
            return console.log("This User is not registered.");
        }
        await Event.findByIdAndDelete(registeredUsers);
        res.status(200).json({ message: "Cancellation of a user's registration successfull." });
    } catch (error) {
        console.error("Error in cancelUserRegistration controller!");
        console.log("Internal Server Error!");
    }
};

const eventStatus = async (req, res) => {
    try {
        if(Event.registeredUsers > 0) {
            await Event.find();
            return res.json({message: "Registered Users:"},Event.registeredUsers);
        }
        res.status(200).json({ message: "Total registrations fetched successfully." });

        const remainingCapacity = Event.capacity - Event.registeredUsers;
        res.json({message: "Remaining Capacity :"},remainingCapacity);
        res.status(200).json({message: "Remaining Capacity fetched successfully."});

    } catch (error) {
        console.error("Error in eventStatus controller!");
        console.log("Internal Server Error!");
    }
};

module.exports = {
    createEvent, getEventDetails, cancelUserRegistration, eventStatus
};