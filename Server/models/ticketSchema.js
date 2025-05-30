const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
    },
  ],
});

// export default mongoose.model("Ticket", ticketSchema);
module.exports = mongoose.model("Ticket", ticketSchema);