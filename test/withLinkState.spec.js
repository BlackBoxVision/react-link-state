import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import withLinkState from '../src/lib/withLinkState';

//Simple component to test behavior
const Component = props => (
    <div>
        <input name="test" {...props.linkState('test')}/>
        <p>{props.getValue('test')}</p>
    </div>
);

const WrappedComponent = withLinkState()(Component);

describe('Testing -> <LinkStateComponent/>', () => {
    it('instance of <LinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent).to.not.equal('undefined');
    });

    it('instance of <Component/> wrapped in <LinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find(Component)).to.not.equal('undefined');
    });

    it('instance of <LinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent).to.not.equal('null');
    });

    it('instance of <Component/> wrapped in <LinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find(Component)).to.not.equal('null');
    });

    it('linkState from <LinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('linkState')).to.not.equal('undefined');
    });

    it('getValue from <LinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('getValue')).to.not.equal('undefined');
    })

    it('linkState from <LinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('linkState')).to.not.equal('null');
    });

    it('getValue from <LinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('getValue')).to.not.equal('null');
    })
});