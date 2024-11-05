import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for trying out AIforge',
    features: [
      'Up to 1,000 API calls/month',
      'Basic AI models',
      'Community support',
      'API access',
      'Basic analytics'
    ],
    cta: 'Start for free',
    mostPopular: false
  },
  {
    name: 'Pro',
    price: 49,
    description: 'For growing businesses and teams',
    features: [
      'Up to 50,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'Team collaboration'
    ],
    cta: 'Start free trial',
    mostPopular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited API calls',
      'Custom AI models',
      'Dedicated support',
      'Advanced security',
      'Custom training',
      'SLA guarantee'
    ],
    cta: 'Contact sales',
    mostPopular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plans for Every Need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl ${
                tier.mostPopular
                  ? 'bg-white ring-2 ring-indigo-600 shadow-xl'
                  : 'bg-white shadow-lg'
              } p-8`}
            >
              {tier.mostPopular && (
                <span className="absolute top-0 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                  {typeof tier.price === 'number' && (
                    <span className="ml-1 text-xl text-gray-500">/month</span>
                  )}
                </div>
                <p className="mt-4 text-gray-500">{tier.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  className={`w-full rounded-lg px-6 py-3 text-center text-sm font-semibold ${
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  } transition-colors duration-200`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;