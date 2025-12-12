'use client';

import React, { useState } from 'react';
import { Input, Textarea } from '../../atoms';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <Input
        label="NAME"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder=""
      />
      <Input
        label="EMAIL"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder=""
      />
      <Textarea
        label="MESSAGE"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
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

