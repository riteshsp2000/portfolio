import React from 'react';

// Libraries
import Highlight, {defaultProps} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';

// Components
import {Wrapper, Pre, Line, LineContent} from './styles';

// Utils
import {useTheme} from '@theme';

const exampleCode = `
import React from 'react';

// Libraries
import styled from 'styled-components';

const Div = styled.div;

const Item = () => {
	return (
		<Div>
			<h1>Hello World </h1>
		</Div>
	)
}

export default Item;
`;

const Code = ({className: cn = 'language-jsx'}) => {
  const [colorMode] = useTheme();
  const language = cn.replace('language-', '');

  return (
    <div style={{margin: '3rem 0'}}>
      <Highlight
        {...defaultProps}
        theme={colorMode === 'dark' ? vsDark : vsLight}
        code={exampleCode}
        // @ts-ignore
        language={language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Wrapper>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({line, key: i})}>
                  <LineContent>
                    {line.map((token, key) => {
                      let ct = '';
                      if (token.content.search(/\t/) !== -1) {
                        let count = token.content.split('\t').length - 1;
                        while (count > 0) {
                          ct += '  ';
                          count--;
                        }

                        token = {
                          ...token,
                          content: ct,
                        };
                      }

                      return (
                        <span key={key} {...getTokenProps({token, key})} />
                      );
                    })}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          </Wrapper>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
