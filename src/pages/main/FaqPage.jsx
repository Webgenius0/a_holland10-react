import React from 'react';
import FaqHero from '@/components/Faq/FaqHero';
import FaqContent from '@/components/Faq/FaqContent';

const FaqPage = () => {
    return (
        <main className="min-h-screen">
            <FaqHero />
            <FaqContent />
        </main>
    );
};

export default FaqPage;
