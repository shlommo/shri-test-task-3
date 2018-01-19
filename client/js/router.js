import Navigo from 'navigo';

const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

router
  .on({
    'event': function () {
      console.log(123);
    },
    '*': function () {

    }
  })
  .resolve();

// router.navigate('/event');
