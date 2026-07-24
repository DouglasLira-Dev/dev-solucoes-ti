import Link from 'next/link';
import Image from 'next/image';
import { CodeBlock } from './CodeBlock';

const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-3" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg md:text-xl font-semibold text-gray-200 mt-4 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-300 leading-relaxed mb-4" {...props} />
  ),
  a: ({ href, children, ...props }: any) => {
    const isExternal = href?.startsWith('http');
    const className = "text-primary hover:text-primary-dark underline transition-colors";
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
          <span className="ml-1 text-xs">↗</span>
        </a>
      );
    }
    
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  },
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-300" {...props} />
  ),
  li: (props: any) => <li className="text-gray-300" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-dark-surface/50 rounded-r-lg" {...props} />
  ),
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';
    const isInline = !className;

    if (isInline) {
      return (
        <code className="bg-dark-surface text-primary px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }

    return <CodeBlock language={language} code={String(children).trim()} />;
  },
  pre: (props: any) => <pre className="mb-4 overflow-x-auto" {...props} />,
  img: ({ src, alt, ...props }: any) => (
    <div className="my-6">
      <Image
        src={src}
        alt={alt || 'Imagem do blog'}
        width={800}
        height={400}
        className="rounded-lg border border-dark-border"
        {...props}
      />
      {alt && <p className="text-center text-gray-500 text-sm mt-2">{alt}</p>}
    </div>
  ),
  hr: (props: any) => <hr className="border-dark-border my-8" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-dark-border bg-dark-surface px-4 py-2 text-left text-white" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-dark-border px-4 py-2 text-gray-300" {...props} />
  ),
};

export default MDXComponents;