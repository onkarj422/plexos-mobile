import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
<defs>
    <style>.cls-1{fill:#13ce8b;}.cls-2{fill:none;stroke:#13ce8b;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px;}</style>
</defs>
<g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
        <g id="I-W-02">
            <path class="cls-1" d="M7,14A7,7,0,1,1,9.82.59a.44.44,0,0,1,.22.58.43.43,0,0,1-.57.22A6.13,6.13,0,1,0,13.12,7a.47.47,0,0,1,.44-.47.42.42,0,0,1,.44.41V7A7,7,0,0,1,7,14Z" />
            <polyline class="cls-2" points="12.69 3.58 6.85 9.41 3.94 6.49" />
        </g>
    </g>
</g>
</svg>
`;

export default props => <SvgCss xml={xml} {...props} />;
