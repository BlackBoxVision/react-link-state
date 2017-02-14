import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import withLinkState from '../src/lib/withLinkState';

//Simple component to test behavior
const Component = props => (
    <div>
        <input name="test" {...props.linkState('test')}/>
        <p>{props.getValue('test')}</p>
    </div>
);

describe('<withLinkState/>', () => {
    it('<withLinkState/> instance is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(withLinkState(Component));
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent).to.not.equal('null');
    })
});