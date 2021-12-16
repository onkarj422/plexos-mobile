import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
  <defs/>
  <g data-name="Layer 2">
    <g data-name="Layer 1">
      <path fill="#e9ab00" d="M7 1.2A5.8 5.8 0 111.2 7 5.8 5.8 0 017 1.2M7 0a7 7 0 107 7 7 7 0 00-7-7z"/>
      <path fill="none" stroke="#e9ab00" stroke-miterlimit="10" stroke-width="1.2" d="M2.33 11.67l9.34-9.34"/>
    </g>
  </g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
