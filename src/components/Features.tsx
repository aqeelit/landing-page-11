import React from 'react';
import { Brain, Cpu, LineChart, Lock, Rocket, Users } from 'lucide-react';

const features = [
  {
    name: 'Advanced AI Models',
    description: 'Powered by cutting-edge machine learning algorithms',
    icon: Brain,
  },
  {
    name: 'Real-time Processing',
    description: 'Get instant results with our optimized infrastructure',
    icon: Cpu,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Comprehensive insights and performance metrics',
    icon: LineChart,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade encryption and data protection',
    icon: Lock,
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces',
    icon: Users,
  },
  {
    name: 'Scalable Solution',
    description: 'Grows with your business needs',
    icon: Rocket,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of AI tools is designed to help you achieve more with less effort.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;