import identity from '../util/identity';
export default (γ = 1) => (γ === 1 ? identity : t => Math.pow(t, γ));
