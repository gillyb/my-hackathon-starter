import test from './dependency';

const func = () => {
    console.log('hello world');
};

const t = new test();
console.log(t);
t.something();