import h from 'snabbdom/h';

const VERTICAL = Symbol('v');
const HORIZONTAL = Symbol('h');

function init () {
    return 'NONE';
}

function view (label, handler) {
    return h('div', [
        h('button.v', {
            on: { click: handler.bind(null, { type: VERTICAL }) },
        }, 'Vertical'),
        h('button.h', {
            on: { click: handler.bind(null, { type: HORIZONTAL }) },
        }, 'Horizontal'),
        h('label', `Selection: ${label}`),
    ]);
}

function update (type, action) {
    return action.type === VERTICAL ? 'VERTICAL'
        : action.type === HORIZONTAL ? 'HORIZONTAL'
        : type;
}

export default { view, init, update, action: { HORIZONTAL, VERTICAL } };
