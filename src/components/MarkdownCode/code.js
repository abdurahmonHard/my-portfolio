import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock({ language, children }) {
  return (
    <SyntaxHighlighter language={language} style={arta}>
      {children}
    </SyntaxHighlighter>
  );
}