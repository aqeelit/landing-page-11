import React from 'react';
import { ArrowRight, Bot, Zap, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform your workflow with</span>
                <span className="block text-indigo-600">AI-powered tools</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Supercharge your productivity with our suite of AI tools. From content generation to data analysis,
                we've got everything you need to stay ahead in the digital age.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </button>
                </div>
              </div>
            </div>
          </main>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-bl-[80px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 p-8">
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <Bot className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-sm text-gray-600">24/7 intelligent support</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <Zap className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="font-bold">Fast Processing</h3>
                  <p className="text-sm text-gray-600">Lightning quick results</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <Shield className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="font-bold">Secure & Private</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;