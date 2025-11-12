import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700/50 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-slate-200 hover:text-white transition-colors"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDownIcon className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="pt-4 text-slate-400">
            {answer}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
