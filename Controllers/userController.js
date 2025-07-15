const User = require("../models/user");
const Event = require("../models/event");

const registerEvent = async (req,res) => {
    try{
        if(Event.registeredUsers.length == Event.capacity){
            return console.log("Registration closed for this event!");
        }
        const {userid,name,email} = req.body;
        const newUser = new User({userid,name,email});
        await newUser.save();
        res.status(200).json({message: "Registration Successfull."})
    } catch (error) {
        console.error("Error in registerEvent controller!");
        console.log("Internal Server Error!");
    }
};

const listUpcomingEvents = async (req,res) => {
    try{
        const upcomingevents = await Event.find()
        res.json(upcomingevents);
        res.status(200).json({message: "Upcoming events fetched successfully."});
    } catch (error) {
        console.error("Error in listUpcomingEvents controller!");
        console.log("Internal Server Error!");
    }
};

module.exports = {
    registerEvent,listUpcomingEvents
};
