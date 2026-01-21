import React from 'react';
import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';

const Contact = () => {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactForm />
        </main>
    );
};

export default Contact;
