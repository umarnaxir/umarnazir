'use client';

import React from 'react';
import { Input, Textarea } from '../../atoms';
import { Send } from 'lucide-react';
import { useContactForm } from './hooks/useContactForm';
import { ContactFormWrapper, FormRow, FormActions, SendButton } from './ContactForm.styles';

export const ContactForm: React.FC = () => {
  const { formik, isSubmitting } = useContactForm();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <ContactFormWrapper onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
      <FormRow>
        <Input
          label="NAME"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name ? errors.name : undefined}
          placeholder=""
        />
        <Input
          label="EMAIL"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email ? errors.email : undefined}
          placeholder=""
        />
      </FormRow>
      <Textarea
        label="MESSAGE"
        name="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message && errors.message ? errors.message : undefined}
        placeholder=""
      />
      <FormActions>
        <SendButton
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </SendButton>
      </FormActions>
    </ContactFormWrapper>
  );
};

