import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 13 13">
  <defs/>
  <g data-name="Layer 2">
    <g data-name="Layer 1">
      <path fill="#4aa7a9" d="M14 4.16a.8.8 0 01.8.8v7a.8.8 0 01-.8.8H7a.8.8 0 01-.8-.8V5a.8.8 0 01.8-.8h7M14 3H7a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2V5a2 2 0 00-2-2z"/>
      <path fill="none" stroke="#4aa7a9" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.2" d="M10.7 15.46H5.49a1.79 1.79 0 01-1.79-1.79V8.46"/>
    </g>
  </g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
