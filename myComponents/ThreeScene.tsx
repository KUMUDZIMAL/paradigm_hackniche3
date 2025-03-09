'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Spline from '@splinetool/react-spline/next';

const ThreeScene: React.FC = () => {
return (<>

<div>
<Spline
    scene="https://prod.spline.design/8gVnTVjsiIi058mE/scene.splinecode"
  />
</div>
</>)

}
export default ThreeScene;
