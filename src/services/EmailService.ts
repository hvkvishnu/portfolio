import axios from "axios";
import { toast } from "react-hot-toast";
import { ContactDetail } from "../types";
import {
  EMAIL_TEMPLATE_ID,
  FirebaseAPI,
  VERIFIED_EMAIL,
} from "../constants/app.constant";
import { SendEmailRequest } from "../types/api.types";
export class EmailService {
  static async sendEmail(formData: Partial<ContactDetail>) {
    try {
      await axios.post(
        FirebaseAPI.SendEmail,
        {
          to: VERIFIED_EMAIL,
          templateId: EMAIL_TEMPLATE_ID,
          dynamicData: formData,
        } as SendEmailRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("SendGrid Error:", error);
      toast.error("Failed to send email.");
    }
  }
}
