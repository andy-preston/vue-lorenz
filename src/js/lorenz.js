/**
 * @param {object} init x,y,z,rho
 * @returns {object} Lorenz attractor calculator
 */
export default (init) => {
    const sigma = 10.0;
    const beta = 8.0 / 3.0;
    const dt = 0.015;

    if (typeof init == 'undefined') {
        init = {};
    }
    var cart = {
        'x': typeof init.x != 'undefined' ? init.x : -6.0,
        'y': typeof init.y != 'undefined' ? init.y : -1.0,
        'z': typeof init.z != 'undefined' ? init.z : 20.0
    };
    var rho = typeof init.rho != 'undefined' ? init.rho : 28.0;

    /**
     * Return the result of the last iteration or the initial conditions
     *
     * @param {string} spec undefined = all values 'xz' = just x and z
     * @returns {object} x,y,z as numbers - depending on resultSpec
     */
    const get = (spec) => {
        if (typeof spec == 'undefined') {
            return Object.assign(cart);
        }

        return Object.keys(cart).filter(
            axis => spec.includes(axis)
        ).reduce(
            (result, axis) => {
                result[axis] = cart[axis];
                return result;
            }, {}
        );
    };

    return {
        /**
         * `get` is probably only exposed for testing, you will usually get a
         * result through `nextValue`
         *
         * @param {string} spec undefined = all values 'xz' = just x and z
         * @returns {object} x,y,z as numbers - depending on resultSpec
         */
        'get': get,

        /**
         * @param {number} newRho new value of rho (or undefined)
         * @returns {number} new value of rho
         */
        'rho': (newRho) => {
            if (typeof newRho != 'undefined') {
                rho = newRho;
            }
            return rho;
        },

        /**
         * Do the next iteration and return a value
         *
         * @param {string} resultSpec undefined = all values 'xz' = just x and z
         * @returns {object} x,y,z as numbers - depending on resultSpec
         */
        'nextValue': (resultSpec) => {
            const newCart = {
                'x': cart.x + dt * (sigma * (cart.y - cart.x)),
                'y': cart.y + dt * (cart.x * (rho - cart.z) - cart.y),
                'z': cart.z + dt * (cart.x * cart.y - beta * cart.z)
            };
            cart = newCart;
            return get(resultSpec);
        }
    };
};