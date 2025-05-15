
---

#### 📄 3. `/content/understanding-closures.md`

```md
# Understanding JavaScript Closures

Closures are a powerful feature in JavaScript.

## What is a Closure?

A closure gives you access to an outer function’s scope from an inner function.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
