import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BootsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Boots = model("boots", BootsSchema);

export default Boots;
