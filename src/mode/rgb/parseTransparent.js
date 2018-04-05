import parseNumber from './parseNumber';

export default c => c === 'transparent' ? parseNumber(0x00000000, 8) : undefined;