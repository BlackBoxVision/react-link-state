import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import withLinkState from '../src/lib/withLinkState';

//Simple component to test behavior
const Component = props => (
    <div>
        <input name="test" {...props.linkState('testValue')}/>
        <p>{props.getValue('testValue')}</p>
    </div>
);

const WrappedComponent = withLinkState(['testValue'])(Component);

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
    });

    it('getState from <LinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('getState')).to.not.equal('undefined');
    });

    it('updateState from <LinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('updateState')).to.not.equal('undefined');
    });

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
    });

    it('getState from <LinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('getState')).to.not.equal('null');
    });

    it('updateState from <LinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('updateState')).to.not.equal('null');
    });

    it('testValue in <WrappedLinkStateComponent/> is not null', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('testValue')).to.not.equal('null');
    });

    it('testValue in <WrappedLinkStateComponent/> is not undefined', () => {
        //Create an element by passing Component class wrapped
        const wrappedComponent = React.createElement(WrappedComponent);
        const renderedComponent = shallow(wrappedComponent);

        expect(renderedComponent.find('testValue')).to.not.equal('undefined');
    });
});