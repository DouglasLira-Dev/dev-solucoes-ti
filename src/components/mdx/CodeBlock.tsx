"use client";

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-dark-card border border-dark-border rounded-lg overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-dark-surface border-b border-dark-border">
        <span className="text-xs text-gray-400 font-mono uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="Copiar código"
        >
          {copied ? <Check className="w-4 h-4 text-cyber-green" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}