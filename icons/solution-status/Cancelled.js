import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 12 12">
  <defs/>
  <g fill="none" fill-rule="evenodd" stroke="#E02020" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.822 5.189l-9.627 9.626M5.196 5.189l9.627 9.626"/>
  </g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
