const mongoose = require("mongoose");
const User = require("./user");

const eventSchema = new mongoose.Schema(
    {
        eventid: { type: String, required: true },
        title: { type: String, required: true },
        loc: { type: String, required: true },
        capacity: { type: Number, required: true},
        registeredUsers: { type: mongoose.Schema.Types.ObjectId, ref: User },
        date: { type: Date, required: true }
    },{timestamps: true}
);

const Event = mongoose.model("Event",eventSchema);
module.exports = Event;