'use client';

import { useState } from 'react';

interface HeaderProps {
  isConnected: boolean;
}

export function Header({ isConnected }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('8VdoFhtW7FYTna5TyQSStvCUizvXZniSSJZwuY3ypump');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="pixel-header mb-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-pixel-headline text-base md:text-lg text-accent-red flex items-center gap-4" style={{ textShadow: '2px 2px 0 #fff' }}>
          <span className="text-2xl">&#129420;</span>
          Frostbyte Dashboard
        </h1>
        
        <div className="flex items-center gap-2 text-sm md:text-base">
          <span className="text-text-muted">Contract Address:</span>
          <button
            onClick={handleCopy}
            className="text-accent-gold hover:text-accent-orange transition-colors cursor-pointer font-pixel-body"
            title="Click to copy"
          >
            {copied ? 'Copied!' : '8VdoFhtW7FYTna5TyQSStvCUizvXZniSSJZwuY3ypump'}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xl pulse">
        <div
          className={`w-3 h-3 ${
            isConnected ? 'bg-[#00e676]' : 'bg-[#ff3333]'
          }`}
          style={{
            boxShadow: isConnected ? '0 0 10px #00e676' : '0 0 10px #ff3333',
          }}
        />
        <span className={isConnected ? 'text-accent-green' : 'text-accent-red'}>
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
      </div>
    </header>
  );
}
