import modeSel from './components/mode-selector';
import patch from './utils/patch';

function main (state, oldVnode, {view, update}) {
    const newVnode = view(state, (action) => {
        const newState = update(state, action);
        main(newState, newVnode, {view, update});
    });

    patch(oldVnode, newVnode);
}

main(
    modeSel.init(),
    document.querySelector('#target'),
    modeSel
);
