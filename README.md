<p align="center"><img src="https://github.com/regs37/Trait.js/blob/master/src/img/trait.js-logo.png?raw=true" alt="k6" /></p>
<h3 align="center">Inherit methods from multiple trait to any class</h3>
<p align="center">
  <a href="https://github.com/regs37/trait.js/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/trait.js" alt="License"></a>
  <a href="https://www.npmjs.com/package/trait.js"><img src="https://img.shields.io/npm/dw/trait.js" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/trait.js"><img src="https://img.shields.io/npm/v/trait.js" alt="Version"></a>
  <a href="https://travis-ci.org/github/regs37/trait.js"><img src="https://img.shields.io/github/workflow/status/regs37/trait.js/Node.js%20CI" alt="Build"></a>
</p>

**Trait.js** is a helper which allows javascript to have the same behavior with the Php Trait feature. Allows you to inherit or reuse methods to any classes or objects. There's been other libraries/repositories out there that is also respresents the javascript equivalent of **Php - Traits**. Among them, this solution is a simple and lightweight package and serves only one purpose, **allow any classes to inherit methods from multiple traits**.

### Installation
##### NPM

```bash
npm install trait.js --save
```
#### CDN
[https://unpkg.com/trait.js@1.2.12/build/trait.min.js](https://unpkg.com/trait.js@1.2.12/build/trait.min.js)

### Sample Usage:

Let's create a simple trait that displays the user's fullname.

#### UserTrait.js
```javascript
import trait from 'trait.js';

export default trait({
  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  },
});
```
#### User.js

For example we have a user model that wants to use the **UserTrait.js**
```javascript
import UserTrait from './UserTrait.js';

export default class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

UserTrait.inheritTo(User);
// or
UserTrait.in(User); // a shorthand for inheritTo
```
Let's try to use that method:
```javascript
import User from './User.js';

const user = new User({
  first_name: 'Foo',
  last_name: 'Bar',
});

// We can now use the trait method getFullname()
console.log(user.getFullname()); // Foo Bar
```
### Why use Trait?

Javascript only supports single inheritance: a child class can inherit only from one single parent.

So, what if a class needs to inherit multiple behaviors? OOP traits solve this problem.

Traits are used to declare methods that can be used in multiple classes. Traits can have methods and abstract methods that can be used in multiple classes, and the methods can have any access modifier (public, private, or protected).

### License
GNU General Public License v3.0 © 2020 Regs Isabelo
