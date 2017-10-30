/*  eslint-disable */
const componentsCtx = require.context(
  '../../components/', true,
  /^\.\/[a-z0-9-]+\/[A-Za-z1-9]+\.vue$/
);

const components = componentsCtx.keys().reduce((exp, id) => {
  exp[id] = componentsCtx(id);
  return exp;
});

module.exports = components;
