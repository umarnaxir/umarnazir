'use client';

import React, { useState } from 'react';
import { Input, Textarea } from '../../atoms';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Success
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Error handling
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again later.';
      
      toast.error('Failed to send message', {
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
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

