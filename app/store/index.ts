let storeExports: any;

if (process.env.NODE_ENV === 'production') {
  storeExports = require('./configureStore.prod');
} else {
  storeExports = require('./configureStore.dev');
}

const { configureStore, history } = storeExports;

export { 
  configureStore,
  history
};
