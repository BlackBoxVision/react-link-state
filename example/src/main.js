import React from 'react';
import ReactDOM from 'react-dom';
import injectEventTapPlugin from 'react-tap-event-plugin';

import MainApp from './components/MainApp';

injectEventTapPlugin();

ReactDOM.render(<MainApp pureView/>, document.querySelector('#app'));