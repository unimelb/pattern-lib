/*  eslint-disable */
import VueProgressiveImage from 'vue-progressive-image';

const componentsCtx = require.context(
  '../../components/', true,
  /^\.\/[a-z0-9-]+\/[A-Za-z1-9]+\.vue$/
);

const components = componentsCtx.keys().reduce((exp, id) => {
  exp[id] = componentsCtx(id);
  return exp;
}, { ProgressiveImage: VueProgressiveImage });

module.exports = components;
