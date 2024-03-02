import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  startDateTime: Date;
  endDateTime: Date;
  location?: string;
  imageUrl: string;
  price?: number;
  isFree?: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    startDateTime: { type: Date, default: Date.now() },
    endDateTime: { type: Date, default: Date.now() },
    location: { type: String },
    imageUrl: { type: String, required: true },
    price: { type: Number },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Event = models.Event || model("Event", EventSchema);

export default Event;
