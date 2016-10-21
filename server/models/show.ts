import * as mongoose from "mongoose";

export interface IShow extends mongoose.Document {
    tzMazeId: number;
    name: string;
};

export const ShowSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tzMazeId: Number,
});

export default const Show = mongoose.model<IShow>("Show", ShowSchema);
