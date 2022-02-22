// const Redux = require('redux');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return ({
        ...state,
        index: state.index === 5 ? 0 : state.index + 1,
      })
    case 'PREVIOUS_COLOR':
      return({
        ...state,
        index: state.index === 0 ? 5 : state.index - 1,
      })
    default:
      return state
  }
}

previousButton.addEventListener('click', () => store.dispatch({ type: 'NEXT_COLOR' }));
nextButton.addEventListener('click', () => store.dispatch({ type: 'PREVIOUS_COLOR' }));

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});
