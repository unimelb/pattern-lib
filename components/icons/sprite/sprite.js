import BrowserSprite from 'svg-baker-runtime/src/browser-sprite';
import domready from 'domready';

const sprite = new BrowserSprite();
domready(() => sprite.mount('#my-custom-mounting-target'));

export default sprite; // don't forget to export!
