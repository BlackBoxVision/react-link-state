# LinkState HOC
> :fire_engine: linkState comes to the rescue of your event handlers!

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/link-state-hoc.svg)](https://badge.fury.io/js/link-state-hoc) 

The idea of this module started from this post **[Using linkState in your React Components to simplify event handlers](https://medium.com/@jonatan_salas/using-linkstate-in-your-react-components-to-simplify-event-handlers-9d157cb75082#.ck4t4rij1)**

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

To use this library you should import **withLinkState**, and in your **export** declaration should call this function. **withLinkState** component injects a function called **linkState**, this method takes a **key** (the key represents the portion of the state you want to update), and returns a **JSON object** containing a **value + onChange** handler that you must pass to your input component. 

This is an example code:

```javascript
import React from 'react';

import { withLinkState } from 'link-state-hoc';

class LoginView extends React.Component {

  render() {
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
              <input name='username' {...this.props.linkState('username')}/>
            </div>
          </div>
          <div>
            <div>
              <label for='password'>
                Password
              </label>
            </div>
            <div>
              <input name='password' {...this.props.linkState('password')}/>
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
  
  handleSubmit = event => console.log(`These are the values -> ${JSON.stringify(this.state, null, 2)}`);
}

export default withLinkState(LoginView);
```

##Issues

If you found a bug, or you have an answer, or whatever. Please, open an [issue](https://github.com/BlackBoxVision/link-state-hoc/issues). I will do the best to fix it, or help you.

##Contributing

Of course, if you see something that you want to upgrade from this library, or a bug that needs to be solved, **PRs are welcome!**

##License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/link-state-hoc/blob/master/LICENSE) for more information.
