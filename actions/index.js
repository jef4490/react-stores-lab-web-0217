import counterStore from '../stores/counterStore'

function increment(){
  counterStore.increment()
}

function decrement(){
  counterStore.decrement()
}

module.exports = {
  increment,
  decrement
};
