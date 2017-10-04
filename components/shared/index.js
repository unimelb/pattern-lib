export { default as logo } from './logo.svg';

import logoResponsiveSvg from './logo-responsive.svg';
import loadScript from './load-script';
import loadStylesheet from './load-stylesheet';

export const utils = {
  loadScript,
  loadStylesheet
};

export const logoResponsive = logoResponsiveSvg;