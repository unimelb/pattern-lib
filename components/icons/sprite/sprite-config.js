import BrowserSprite from './node_modules/svg-baker-runtime/src/browser-sprite';
import domready from './node_modules/domready';

const sprite = new BrowserSprite();
domready(() => sprite.mount('#my-custom-mounting-target'));

export default sprite; // don't forget to export!
