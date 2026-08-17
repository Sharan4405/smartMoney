import { Request, Response } from "express";
import { Contact } from "../models/contact.model.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(req: Request, res: Response): Promise<void> {
  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !phone || !message) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }

  if (!EMAIL_REGEX.test(email)) {
    res.status(400).json({ message: "Please provide a valid email address." });
    return;
  }

  try {
    const contact = await Contact.create({ name, email, phone, message });

    res.status(201).json({
      message: "Thank you, we'll get back to you shortly.",
      id: contact._id,
    });
  } catch (error) {
    console.error("Failed to save contact submission:", error);
    res.status(500).json({
      message: "We couldn't save your message right now. Please try again shortly.",
    });
  }
}
