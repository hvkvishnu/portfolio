import { ContactDetail } from "./contact.types";

export type SendEmailRequest = {
  to: string;
  templateId: string;
  dynamicData: ContactDetail;
};
