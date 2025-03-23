import axios from "axios";
import { toast } from "react-hot-toast";
import { ContactDetail } from "../types";
export class EmailService {
  static async sendEmail(formData: Partial<ContactDetail>) {
    try {
      await axios.post("api", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("SendGrid Error:", error);
      toast.error("Failed to send email.");
    }
  }
}
