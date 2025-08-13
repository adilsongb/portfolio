import React, { useState, useEffect } from 'react';

interface HtmlRendererProps {
  htmlContent?: string;
  htmlFile?: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({
  htmlContent,
  htmlFile
}) => {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    if (htmlContent) {
      setHtml(htmlContent);
    } else if (htmlFile) {
      // Carregar arquivo HTML do diretório public
      fetch(htmlFile)
        .then(response => response.text())
        .then(content => setHtml(content))
        .catch(error => {
          console.error('Erro ao carregar arquivo HTML:', error);
          setHtml('<p>Erro ao carregar o arquivo HTML</p>');
        });
    }
  }, [htmlContent, htmlFile]);

  return (
    <div
      className="html-renderer"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default HtmlRenderer;
