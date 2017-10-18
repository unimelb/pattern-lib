import { createDecorator } from '../utils';

import Pad from './Pad.vue';
import Main from './Main.vue';

export const PadDecorator = createDecorator(Pad);
export const MainDecorator = createDecorator(Main);
