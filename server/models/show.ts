import mongoose = require("mongoose");

export interface IShow extends mongoose.Document {
    tzMazeId: number;
    name: string;
};

export const ShowSchema : mongoose.Schema = new mongoose.Schema({
    name: { type: String, required: true },
    tzMazeId: Number,
});

export const ShowModel = mongoose.model<IShow>("Show", ShowSchema);
