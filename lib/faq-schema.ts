export const generateFAQSchema = () => {
  const faqs = [
    {
      question: 'How quickly do you respond to new leads?',
      answer: 'We message leads instantly via WhatsApp when they come in from Facebook/Instagram. If WhatsApp only gets partial info or goes quiet, our AI caller kicks in within ~60 minutes when possible.',
    },
    {
      question: 'What information do you capture from leads?',
      answer: 'We capture basics (name, email, phone) and dig into needs, budget, area, timeline, and challenges. For each booked appointment, you get a rich summary with chat + call transcripts, extracted challenges/objections, and all the key details.',
    },
    {
      question: 'How many follow-ups do you do?',
      answer: 'We run 7-9 follow-ups over time if leads go cold. The AI caller will also retry the next day if a call is ignored.',
    },
    {
      question: 'What calendars do you integrate with?',
      answer: 'We integrate with Google Calendar and Outlook. Appointments are booked directly onto your calendar.',
    },
    {
      question: 'Can I upload old lead lists?',
      answer: 'Yes! On higher plans, you can upload lead lists and we\'ll reactivate old leads using the same WhatsApp and AI caller process.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Setup is quick. We connect your Facebook/Instagram lead sources, set up your calendar integration, and you\'re ready to go. Book a call to learn more about the setup process.',
    },
    {
      question: 'What if a lead doesn\'t want to book an appointment?',
      answer: 'We handle objections and try to overcome them during the conversation. If they\'re not ready, we continue following up over time. You only get appointments with leads who are actually interested.',
    },
    {
      question: 'How do I see what\'s happening with my leads?',
      answer: 'You get full visibility: chat transcripts, call transcripts, lead status, and rich summaries for each booked appointment. Everything is organized and accessible.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

