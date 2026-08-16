import { Schema, model } from "mongoose";

export interface ContactDocument {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new Schema<ContactDocument>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = model<ContactDocument>("Contact", contactSchema);
