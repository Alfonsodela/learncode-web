import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Code } from '../ui/Snippet';

export type Props = {
  code: string;
  language: string;
}

export const SUPPORTED_LANGUAGES = [''];

const defaultCode = `console.log('Hola MiniCoders')`;

const CodeBlock = ({ code, language = 'javascript' }: Props) => {
    return (
      <Code>
        <SyntaxHighlighter language={language} style={tomorrow}>
          {code || defaultCode}
        </SyntaxHighlighter>
      </Code>
    );
  };
  
  export default CodeBlock;