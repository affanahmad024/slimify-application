import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    // user inputs
    msg: {
        type: String,
    },
    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model("notes", notesSchema);

export default Notes;