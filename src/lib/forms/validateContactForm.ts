import { z } from 'zod';
import type { ContactFormData, ContactFormErrors } from '@/types/forms';

const phonePattern = /^[+]?[(]?[0-9\s().-]{7,20}$/;

const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.').max(80, 'Name is too long.'),
  company: z.string().trim().min(2, 'Please enter your company name.').max(100, 'Company name is too long.'),
  email: z.string().trim().email('Please enter a valid email address.').max(120, 'Email is too long.'),
  phone: z.string().trim().max(25, 'Phone number is too long.').optional(),
  serviceNeeded: z.string().trim().min(2, 'Please choose a service.').max(80, 'Service value is too long.'),
  message: z.string().trim().min(20, 'Please provide more detail (minimum 20 characters).').max(1200, 'Message is too long.'),
  companyWebsite: z.string().trim().max(0).optional(),
}).superRefine((data, ctx) => {
  if (data.phone && !phonePattern.test(data.phone)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['phone'],
      message: 'Please enter a valid phone number.',
    });
  }
});

export interface ContactFormValidationResult {
  isValid: boolean;
  data: ContactFormData;
  errors: ContactFormErrors;
}

export const sanitizeContactFormData = (formData: ContactFormData): ContactFormData => ({
  fullName: formData.fullName.replace(/\s+/g, ' ').trim(),
  company: formData.company.replace(/\s+/g, ' ').trim(),
  email: formData.email.trim().toLowerCase(),
  phone: (formData.phone ?? '').trim(),
  serviceNeeded: formData.serviceNeeded.replace(/\s+/g, ' ').trim(),
  message: formData.message.replace(/\s+/g, ' ').trim(),
  companyWebsite: (formData.companyWebsite ?? '').trim(),
});

export const validateContactForm = (formData: ContactFormData): ContactFormValidationResult => {
  const sanitized = sanitizeContactFormData(formData);
  const parsed = contactFormSchema.safeParse(sanitized);

  if (parsed.success) {
    return {
      isValid: true,
      data: parsed.data,
      errors: {},
    };
  }

  const errors: ContactFormErrors = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0] as keyof ContactFormData;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  return {
    isValid: false,
    data: sanitized,
    errors,
  };
};
