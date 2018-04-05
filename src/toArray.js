import { getChannels } from './modes';

export default () => color => getChannels(color.mode).map(k => color[k]);