export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  serviceNeeded: string;
  message: string;
  companyWebsite?: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
