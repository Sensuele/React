import {createStore} from 'redux';

const reducer = (state, action) => {
 switch (action.type) {
   case "INC":
     return state + 1;
   case "DEC":
     return state - 1;
   case "CLR":
     return 0;
   default:
     return 0
 }
}

const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const clr = () => ({type: "CLR"});

const store = createStore(reducer);

document.querySelector(".btn-success").addEventListener("click", () => {
  store.dispatch(inc());
});

document.querySelector(".btn-warning").addEventListener("click", () => {
  store.dispatch(dec());
});

document.querySelector(".btn-danger").addEventListener("click", () => {
  store.dispatch(clr());
});

const update = () => {
  document.querySelector("#counter").textContent = store.getState();
}

store.subscribe(update);
