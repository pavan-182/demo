import React, { useState, useEffect } from 'react';

const steps = [
  "Parsing & chunking...",
  "Adding contextual prefixes...",
  "Deriving figure & table findings...",
  "Extracting relationships...",
  "Transforming to structured AI ready schema..."
];

const BeaconLoader: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (steps.length + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-white flex justify-center items-center overflow-hidden font-['Inter',sans-serif]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
      
      <div className="flex flex-col items-center gap-[40px] w-[400px]">
        {/* Logo */}
        <img src="/beacon-logo.svg" className="w-[160px] animate-float" alt="Beacon Logo" />

        {/* Segmented Progress Bar Container (from Edit Central submit page) */}
        <div className="w-full h-8 border-[3px] border-[#3B17D3] rounded-full p-1 flex items-center">
          <div className="flex-1 flex gap-1 h-full">
            {steps.map((_, i) => (
              <div 
                key={i}
                className={`h-full flex-1 transition-colors duration-500 ${
                  i < index ? 'bg-[#3B17D3]' : 'bg-[#E5E7EB]'
                } ${i === 0 ? 'rounded-l-full' : ''} ${i === steps.length - 1 ? 'rounded-r-full' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Checklist (from Edit Central submit page) */}
        <div className="w-full space-y-5">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              {/* Icon Container */}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                i < index ? 'bg-[#3B17D3] border-[#3B17D3]' : (i === index ? 'border-[#3B17D3]' : 'border-gray-300')
              }`}>
                {i < index ? (
                  /* Checkmark */
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                ) : i === index ? (
                  /* Spinner */
                  <div className="w-3.5 h-3.5 border-2 border-[#3B17D3] border-t-transparent rounded-full animate-spin"></div>
                ) : null}
              </div>

              {/* Step Text */}
              <span className={`text-[17px] transition-colors duration-300 ${
                i < index ? 'text-[#1F2937] font-medium' : (i === index ? 'text-[#1F2937] font-semibold' : 'text-gray-400')
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeaconLoader;
