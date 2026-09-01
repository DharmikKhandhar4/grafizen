import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Ouraproch = () => {
  const approaches = [
    {
      id: 1,
      icon: '📊',
      title: 'Strategy First',
      description: 'We understand your brand, audience, and goals before creating a content direction that works.'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Creative & Consistent',
      description: 'We design high-quality content that represents your brand and keeps your audience engaged.'
    },
    {
      id: 3,
      icon: '📈',
      title: 'Measure & Improve',
      description: 'We track performance, analyze results, and continuously improve your social media presence.'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden py-20 px-4 md:px-8">
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR <span className="text-[#dd0403]">APPROACH</span>
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-8">
            <span className="text-lg md:text-xl font-semibold text-gray-700">Strategy.</span>
            <span className="text-lg md:text-xl font-semibold text-[#dd0403]">Creativity.</span>
            <span className="text-lg md:text-xl font-semibold text-gray-700">Consistency.</span>
            <span className="text-lg md:text-xl font-semibold text-[#dd0403]">Growth.</span>
          </div>
        </div>

        {/* Process Flow Container */}
        <div className="relative">
          {/* Desktop Connecting Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
            {/* Left Line */}
            <div className="absolute top-0 left-[15%] right-[65%] h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400" style={{backgroundImage: 'repeating-linear-gradient(90deg, #dd0403 0px, #dd0403 10px, transparent 10px, transparent 20px)'}}></div>
            
            {/* Right Line */}
            <div className="absolute top-0 left-[65%] right-[15%] h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400" style={{backgroundImage: 'repeating-linear-gradient(90deg, #dd0403 0px, #dd0403 10px, transparent 10px, transparent 20px)'}}></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {approaches.map((approach, index) => (
              <div
                key={approach.id}
                className="group flex flex-col items-start"
              >
                {/* Icon Box */}
                <div className="mb-6 flex items-center justify-center w-24 h-24 bg-[#dd0403]/10 border-2 border-[#dd0403] rounded-2xl group-hover:bg-[#dd0403]/20 transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-5xl">{approach.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {approach.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed">
                    {approach.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="mt-6 h-1 w-0 bg-[#dd0403] rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Mobile Connecting Lines (Vertical) */}
          <div className="lg:hidden mt-8 flex flex-col gap-4">
            <div className="h-8 border-l-2 border-dashed border-[#dd0403] mx-auto"></div>
            <div className="h-8 border-l-2 border-dashed border-[#dd0403] mx-auto"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-700 mb-6">
            Ready to transform your brand with our strategic approach?
          </p>
          
          <button className="inline-flex items-center gap-2 bg-[#dd0403] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#c00302] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-xl">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ouraproch;
