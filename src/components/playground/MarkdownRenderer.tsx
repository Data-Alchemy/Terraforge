import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm'; // for extended markdown features like tables

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Copied to clipboard successfully!');
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]} // enables GitHub Flavored Markdown features like tables, task lists, etc.
      components={{
        h1: ({ node, ...props }) => <h1 style={{ color: 'tomato' }} {...props} />,
        h2: ({ node, ...props }) => <h2 style={{ color: 'orange' }} {...props} />,
        h3: ({ node, ...props }) => <h3 style={{ color: 'gold' }} {...props} />,
        h4: ({ node, ...props }) => <h4 style={{ color: 'yellowgreen' }} {...props} />,
        h5: ({ node, ...props }) => <h5 style={{ color: 'lightseagreen' }} {...props} />,
        h6: ({ node, ...props }) => <h6 style={{ color: 'mediumslateblue' }} {...props} />,
        p: ({ node, ...props }) => <p style={{ lineHeight: '1.6' }} {...props} />,
        table: ({ node, ...props }) => (
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '12px', backgroundColor: '#333', color: '#fff' }} {...props} />
        ),
        thead: ({ node, ...props }) => (
          <thead style={{ backgroundColor: '#444', color: '#fff' }} {...props} />
        ),
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => (
          <tr style={{ borderBottom: '1px solid #555' }} {...props} />
        ),
        th: ({ node, ...props }) => (
          <th
            style={{
              border: '1px solid #555',
              padding: '8px',
              textAlign: 'left',
              backgroundColor: '#444',
              color: '#fff',
              fontSize: '12px',
            }}
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            style={{
              border: '1px solid #555',
              padding: '8px',
              textAlign: 'left',
              fontSize: '12px',
            }}
            {...props}
          />
        ),
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          const codeText = String(children).replace(/\n$/, '');
          return !inline ? (
            <div style={{ position: 'relative', marginBottom: '1em' }}>
              <button
                onClick={() => copyToClipboard(codeText)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: '#333',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  zIndex: 1,
                }}
              >
                Copy
              </button>
              <SyntaxHighlighter
                style={oneDark}
                language={match ? match[1] : undefined}
                PreTag="pre"
                {...props}
              >
                {codeText}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        pre: ({ node, children, ...props }) => <pre {...props}>{children}</pre>,
        blockquote: ({ node, ...props }) => (
          <blockquote style={{ borderLeft: '4px solid #ddd', paddingLeft: '1em', color: '#555' }} {...props} />
        ),
        ul: ({ node, ...props }) => <ul style={{ paddingLeft: '1.5em' }} {...props} />,
        ol: ({ node, ...props }) => <ol style={{ paddingLeft: '1.5em' }} {...props} />,
        li: ({ node, ...props }) => <li style={{ marginBottom: '0.5em' }} {...props} />,
        a: ({ node, ...props }) => <a style={{ color: 'dodgerblue' }} {...props} />,
        img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} />,
      }}
    />
  );
};

export default MarkdownRenderer;
