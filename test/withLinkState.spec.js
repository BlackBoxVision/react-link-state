import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import withLinkState from '../src/lib/withLinkState';

//Simple component to test behavior
const Component = (props) => (
    <div>
        <input name="test" {...props.linkState('test')}/>
        <p>{props.getValue('test')}</p>
    </div>
)

describe('<withLinkState/>' () => {
    it('<withLinkState/> instance is not null', () => {
        const WrappedComponent = shallow(withLinkState(Component));
        expect(WrappedComponent).to.not.equal('null')
    })
});
