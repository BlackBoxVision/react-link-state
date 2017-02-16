import React from 'react';
import ReactDOM from 'react-dom';
import injectEventTapPlugin from 'react-tap-event-plugin';

import AppContainer from './src/modules/App/AppContainer';

injectEventTapPlugin();

ReactDOM.render(<AppContainer pureView/>, document.querySelector('#app'));