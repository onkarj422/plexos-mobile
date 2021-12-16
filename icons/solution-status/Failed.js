import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 14 14">
  <defs/>
  <g fill="#FF6043" fill-rule="nonzero" transform="translate(2 3)">
    <circle cx="8" cy="9.78" r="1" stroke="#FF6043" stroke-width=".2"/>
    <path d="M8 1a.36.36 0 01.28.19l5.63 9.47a.69.69 0 010 .67.34.34 0 01-.28.2H2.37a.34.34 0 01-.28-.2.69.69 0 010-.67l5.63-9.47A.36.36 0 018 1m0-1a1.32 1.32 0 00-1.13.68l-5.64 9.47a1.55 1.55 0 001.14 2.38h11.26a1.55 1.55 0 001.14-2.38L9.13.68A1.32 1.32 0 008 0z"/>
    <path stroke="#FF6043" stroke-width=".2" d="M8.27 8.33h-.54l-.45-4A.75.75 0 018 3.51h0a.75.75 0 01.72.85l-.45 3.97z"/>
  </g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
