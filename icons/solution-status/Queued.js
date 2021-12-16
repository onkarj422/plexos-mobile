import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.9 13.09">
  <defs/>
  <g data-name="Layer 2">
    <g data-name="Layer 1">
      <path fill="#7f90bf" d="M10.9 1.2a.8.8 0 01.8.8v7a.8.8 0 01-.8.8h-7a.8.8 0 01-.8-.8V2a.8.8 0 01.8-.8h7m0-1.2h-7a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2V2a2 2 0 00-2-2z"/>
      <path fill="none" stroke="#7f90bf" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.2" d="M7.6 12.49H2.39A1.79 1.79 0 01.6 10.71V5.49"/>
    </g>
  </g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
