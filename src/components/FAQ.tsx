import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does AIforge's technology work?",
    answer: "AIforge uses state-of-the-art machine learning models and neural networks to process and analyze your data. Our systems are built on advanced algorithms that continuously learn and improve from usage patterns while maintaining strict privacy standards."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you with any questions or issues you might encounter."
  },
  {
    question: "Is my data secure with AIforge?",
    answer: "Yes, we take data security very seriously. We use enterprise-grade encryption, regular security audits, and comply with major data protection regulations. Your data is encrypted both in transit and at rest."
  },
  {
    question: "Can I integrate AIforge with my existing tools?",
    answer: "Absolutely! AIforge offers robust APIs and pre-built integrations with popular business tools. Our developer-friendly documentation makes custom integrations straightforward and efficient."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer flexible, scalable pricing plans that grow with your needs. From our free tier for individuals to enterprise solutions for large organizations, you only pay for what you use. Check our pricing page for detailed information."
  },
  {
    question: "How long does it take to get started?",
    answer: "You can start using AIforge immediately after signing up. Our intuitive interface and guided onboarding process will help you set up your first project in minutes. For enterprise customers, we offer dedicated support for custom implementations."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Find answers to common questions about AIforge and our services.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6 text-indigo-500" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-500">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;