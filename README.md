# LinkState HOC
> :fire_engine: linkState comes to the rescue of your event handlers!

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/link-state-hoc.svg)](https://badge.fury.io/js/link-state-hoc) 

The idea of this module started from this post **[Using linkState in your React Components to simplify event handlers](https://medium.com/@jonatan_salas/using-linkstate-in-your-react-components-to-simplify-event-handlers-9d157cb75082#.ck4t4rij1)**

Also, this could be an upgrade from the [**linkState** mixin](https://facebook.github.io/react/docs/two-way-binding-helpers.html). 

##Installation

**YARN**

```javascript
yarn add link-state-hoc
```

**NPM**

```javascript
npm install --save link-state-hoc
```

##Usage

Import **withLinkState** and in your component export default declaration call it. 

**withLinkState** provides you with two functions injected as props: 

- **linkState** -> takes a **key** as a param and returns an Object containing the current value taken from the state, and  the onChange event handler for the input. 

- **getValue** -> takes a **key** and returns the value stored in the component's state.

This is an example code:

```javascript
import React from 'react';

import { withLinkState } from 'link-state-hoc';

class LoginView extends React.Component {
  render() {
    const usernameLink = this.props.linkState('username');
    const passwordLink = this.props.linkState('password');
  
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label for='username'>
                  Username
              </label>
            </div>
            <div>
              <input
                name='username'
                value={usernameLink.value}
                onChange={usernameLink.onChange}/>
            </div>
          </div>
          <div>
            <div>
              <label for='password'>
                Password
              </label>
            </div>
            <div>
              <input 
                name='password'
                value={passwordLink.value}
                onChange={passwordLink.onChange}/>
            </div>
          </div>
          <div>
            <button type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  handleSubmit = e => {
    const formValues = {
      username: this.props.getValue('username'),
      password: this.props.getValue('password')
    };
  
    console.log(`These are the values -> ${JSON.stringify(formValues, null, 2)}`);
  }
}

export default withLinkState(LoginView);
```

##Issues

If you found a bug, or you have an answer, or whatever. Please, open an [issue](https://github.com/BlackBoxVision/link-state-hoc/issues). I will do the best to fix it, or help you.

##Contributing

Of course, if you see something that you want to upgrade from this library, or a bug that needs to be solved, **PRs are welcome!**

##License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/link-state-hoc/blob/master/LICENSE) for more information.
