import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';

const Code = ({ children, language = 'javascript' }) => {
  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
                Prism.languages.javascript,
              language.toLowerCase()
            ),
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
          font-weight: 400;
          font-size: 1.2rem;
          overflow-wrap: break-word;
          box-sizing: border-box;
          margin: 0 0 1.5rem;
          font-family: Operator Mono SSm A, Operator Mono SSm B, Source Code Pro,
            Menlo, Consolas, Monaco, monospace;
          clear: both;
          background: #1F2937;
          padding: 0;
          tab-size: 2;
          word-break: normal;
          hyphens: none;
          position: relative;
          line-height: 28px;
          border-radius: 8px;
          min-width: 100px;
          //width: max-content;
          max-width: 100%;
          overflow: hidden;
        }
        code {
          overflow-wrap: break-word;
          color: #fff;
          tab-size: 2;
          word-break: normal;
          hyphens: none;
          box-sizing: border-box;
          font-family: Operator Mono SSm A, Operator Mono SSm B, Source Code Pro,
            Menlo, Consolas, Monaco, monospace;
          background: #1F2937;
          white-space: pre;
          overflow-x: scroll;
          display: block;
          max-width: 100%;
          min-width: 100px;
          font-size: 16px;
          padding: 15px 20px 12px 22px;
          line-height: 1.75;
        }
      `}</style>
    </>
  );
};

export default Code;
