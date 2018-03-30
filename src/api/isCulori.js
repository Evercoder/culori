import { IS_CULORI, IS_NORMALIZED } from './flags';

export default c => typeof c === 'object' && c.flags & IS_CULORI && c.flags & IS_NORMALIZED;