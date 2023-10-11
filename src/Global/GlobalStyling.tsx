import { createGlobalStyle } from 'styled-components';

import { COLOR } from './globalStyles';

const GlobalStyle = createGlobalStyle`
	p, span, a, input, label, h1, h2, h3, h4, h5, h6, div {
		font-family: 'Raleway';
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
	}
 	a {
		text-decoration: unset;
    color: inherit;
        text-decoration: inherit;
        font-size: inherit;
        font-weight: inherit;
	}
	button {
		cursor: pointer;
	}
  i {
    font-style: italic;
  }
  strong {
    font-weight: bold;
  }
  body {
    background-color: ${COLOR.ghostWhite};
  }
`;

export default GlobalStyle;
