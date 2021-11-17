var uuidv4 = require("uuid/v4");
const mongoose = require("mongoose");

// Will add the UUID type to the Mongoose Schema types
require("mongoose-uuid2")(mongoose);
var UUID = mongoose.Types.UUID;

const sslg_device_m = new mongoose.Schema({
  hostname: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    enum: ["SSLG", "SSLP"],
  },
  ip_address: {
    type: String,
    trim: true,
  },
  remarks: {
    type: String,
    trim: true,
  },
  customer: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Active/Connected", "Inactive/Disconnected"],
  },
  sslg_uuid: {
      type: UUID,
      default: uuidv4,
    },
  tunnel_ip_address: {
    type: String,
    trim: true,
  },
  serial_number: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("SSLG", sslg_device_m);
