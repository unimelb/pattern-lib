// svg-sprite-loader auto inject the sprite in the top of the body
// this helper is to change the default behaviour and mount to the bottom of the body.
import BrowserSprite from '../../../node_modules/svg-baker-runtime/src/browser-sprite';
import domready from '../../../node_modules/domready';

const sprite = new BrowserSprite();

// Mount in the end of the body
domready(() => sprite.mount('body'));

export default sprite;
