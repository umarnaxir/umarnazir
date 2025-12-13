'use client';

import React from 'react';
import { Input, Textarea } from '../../atoms';
import { Send } from 'lucide-react';
import { useContactForm } from './hooks/useContactForm';
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const { formik, isSubmitting } = useContactForm();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
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
      <Textarea
        label="MESSAGE"
        name="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message && errors.message ? errors.message : undefined}
        placeholder=""
      />
      <div className={styles.formActions}>
        <button
          type="submit"
          className={styles.sendButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </button>
      </div>
    </form>
  );
};

