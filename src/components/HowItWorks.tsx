import React from 'react';
import { FileSearch, Cpu, BarChart, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Upload Your Data',
    description: 'Simply upload your data through our secure interface. We support all major file formats.',
    icon: FileSearch,
    color: 'bg-blue-500'
  },
  {
    title: 'AI Processing',
    description: 'Our advanced AI models analyze your data in real-time with high accuracy.',
    icon: Cpu,
    color: 'bg-purple-500'
  },
  {
    title: 'Get Insights',
    description: 'Receive detailed analytics and actionable insights from your processed data.',
    icon: BarChart,
    color: 'bg-green-500'
  },
  {
    title: 'Take Action',
    description: 'Implement the recommendations and watch your business grow.',
    icon: CheckCircle,
    color: 'bg-indigo-500'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple and Effective Process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get started with AIforge in just a few simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute w-full h-1 bg-gray-200 top-1/2 transform -translate-y-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-center text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;