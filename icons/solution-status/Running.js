import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 16 16">
  <defs/>
  <g fill="#FF8719" fill-rule="nonzero" transform="translate(2 2)">
    <circle cx="3.149" cy="12.098" r="1.7" opacity=".5"/>
    <circle cx="14.133" cy="10.817" r="1.481" opacity=".2"/>
    <circle cx="12.781" cy="3.606" r="1.223" opacity=".05"/>
    <ellipse cx="1.794" cy="7.863" opacity=".6" rx="1.794" ry="1.75"/>
    <ellipse cx="7.012" cy="14.342" opacity=".4" rx="1.646" ry="1.55"/>
    <ellipse cx="11.243" cy="13.775" opacity=".3" rx="1.564" ry="1.523"/>
    <ellipse cx="3.721" cy="3.648" opacity=".8" rx="1.844" ry="1.8"/>
    <ellipse cx="14.601" cy="6.969" opacity=".1" rx="1.399" ry="1.373"/>
    <circle cx="8.221" cy="1.75" r="1.75"/>
  </g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
