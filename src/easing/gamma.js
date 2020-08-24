export default (γ = 1) => (γ === 1 ? t => t : t => Math.pow(t, γ));
