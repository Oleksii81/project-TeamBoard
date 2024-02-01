import {createGlobalStyle} from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`

:root {
  --boxShadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  --authBgGradient: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  --transition_data: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  transition: 0.3s ease;
  background-color: var(--boardBgColor);
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.button {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export default GlobalStyle;