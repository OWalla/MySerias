import mongoose = require("mongoose");

export interface IShow extends mongoose.Document {
    tvMazeId: number;
    name: string;
};

export const ShowSchema : mongoose.Schema = new mongoose.Schema({
    name: { type: String, required: true },
    tvMazeId: Number,
});

export const ShowModel = mongoose.model<IShow>("Show", ShowSchema);
