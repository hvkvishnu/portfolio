import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import sgMail from "@sendgrid/mail";

admin.initializeApp();
const API_KEY = process.env.SENDGRID_API_KEY || "";
sgMail.setApiKey(API_KEY);

export const sendEmail = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.set("Access-Control-Allow-Methods", "POST"); // Allowed methods
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send(""); // Preflight response
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const { to, templateId, dynamicData } = req.body;

    if (!to || !templateId || !dynamicData) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const msg = {
      to,
      from: process.env.SENDER_EMAIL || "", // Use a verified sender from SendGrid
      templateId, // SendGrid template ID
      dynamicTemplateData: dynamicData, // Data for template variables
    };

    await sgMail.send(msg);
    res.status(200).json({ success: "Email sent successfully" });
    return;
  } catch (error: any) {
    console.error("SendGrid Error:", error.response?.body || error);
    res.status(500).json({ error: "Failed to send email" });
    return;
  }
});
