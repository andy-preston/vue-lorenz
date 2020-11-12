export const Lorenz = (startX, startY, startZ) => {
    var cart = {
        'x': typeof startX != 'undefined' ? startX : 2.0,
        'y': typeof startY != 'undefined' ? startY : 3.0,
        'z': typeof startZ != 'undefined' ? startZ : 4.0
    }

    const sigma = 10.0;
    const rho = 28.0;
    const beta = 8.0 / 3.0;
    const dt = 0.015;

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
        /* get is probably only exposed for testing, you will usually get a
         * result through `nextValue
         */
        'get': get,

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