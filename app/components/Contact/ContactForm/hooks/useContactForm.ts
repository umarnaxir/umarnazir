import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import {
  contactFormInitialValues,
  contactFormValidationSchema,
  type ContactFormValues,
} from './contactFormValidation';

interface UseContactFormReturn {
  formik: ReturnType<typeof useFormik<ContactFormValues>>;
  isSubmitting: boolean;
}

export const useContactForm = (): UseContactFormReturn => {
  const formik = useFormik<ContactFormValues>({
    initialValues: contactFormInitialValues,
    validationSchema: contactFormValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Failed to send message');
        }

        // Success
        toast.success("Message sent successfully! I'll get back to you shortly.");

        // Reset form
        resetForm();

        // Scroll to top, then refresh the page (short delay so the toast is visible)
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.location.reload();
        }, 1500);
      } catch (error) {
        // Error handling
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again later.';

        toast.error(`Failed to send message: ${errorMessage}`);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    formik,
    isSubmitting: formik.isSubmitting,
  };
};
