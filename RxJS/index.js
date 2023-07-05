
import * as rxjs from 'rxjs';
import fs from 'fs'
import readline from 'readline';

// const name = prompt('');
// console.log(`Hey there ${name}`);

function fn_origin(n) { console.log(n) }

// take new and cancel olds
function debounce(fn_origin, ms) {
  let timer = null
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { fn_origin.apply(this, args) }, ms)
  }
}
// take one and cancel new while timer
function throttle(fn_origin, ms) {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = true;
    setTimeout(() => {
      fn_origin.apply(this, args)
      timer = false;
    }, ms);
  }
}
//fn = fn_origin;
//fn = debounce(fn_origin, 300);
// const fn = throttle(fn_origin, 300);
// fn(1); fn(2); fn(3); fn(4); fn(5);


// RXJS
const stream$ = rxjs.from([1, 2, 3, 4])
stream$.subscribe(
  (data) => { console.log(data) }
)

const file = fs.createReadStream('text.txt')
const line = readline.createInterface({ input: file })
const line$ = rxjs.from(line)
line$.pipe(
  rxjs.map((line) => line[0]),
  rxjs.debounceTime(1000)
).subscribe({
  next: (line) => { console.log(line) }

});



