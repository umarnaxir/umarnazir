import * as Yup from 'yup';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const contactFormInitialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

export const contactFormValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(200, 'Name must be less than 200 characters')
    .trim(),
  email: Yup.string()
    .required('Email is required')
    .email('Please provide a valid email address')
    .max(200, 'Email must be less than 200 characters')
    .trim(),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .trim(),
});

