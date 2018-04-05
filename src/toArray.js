import { components } from './modes';

export default (include) => color => (include || components[color.mode]).map(k => color[k]);