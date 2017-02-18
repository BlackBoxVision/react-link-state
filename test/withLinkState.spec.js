import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import withLinkState from '../src/lib/withLinkState';

//Simple component to test behavior
const Component = ({ linkState, getValue }) => (
    <div>
        <input name="test" {...linkState('testValue')}/>
        <p>{getValue('testValue')}</p>
    </div>
);

const WrappedComponent = withLinkState(['testValue'])(Component);

const getRenderedComponent = (component = WrappedComponent) => shallow(React.createElement(component));

describe('Testing -> <LinkStateComponent/>', () => {
    it('instance of <LinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent()).to.not.equal('undefined');
    });

    it('instance of <Component/> wrapped in <LinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent().find(Component)).to.not.equal('undefined');
    });

    it('instance of <LinkStateComponent/> is not null', () => {
        expect(getRenderedComponent()).to.not.equal('null');
    });

    it('instance of <Component/> wrapped in <LinkStateComponent/> is not null', () => {
        expect(getRenderedComponent().find(Component)).to.not.equal('null');
    });

    it('linkState from <LinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent().find('linkState')).to.not.equal('undefined');
    });

    it('getValue from <LinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent().find('getValue')).to.not.equal('undefined');
    });

    it('getState from <LinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent().find('getState')).to.not.equal('undefined');
    });

    it('updateState from <LinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent().find('updateState')).to.not.equal('undefined');
    });

    it('linkState from <LinkStateComponent/> is not null', () => {
        expect(getRenderedComponent().find('linkState')).to.not.equal('null');
    });

    it('getValue from <LinkStateComponent/> is not null', () => {
        expect(getRenderedComponent().find('getValue')).to.not.equal('null');
    });

    it('getState from <LinkStateComponent/> is not null', () => {
        expect(getRenderedComponent().find('getState')).to.not.equal('null');
    });

    it('updateState from <LinkStateComponent/> is not null', () => {
        expect(getRenderedComponent().find('updateState')).to.not.equal('null');
    });

    it('testValue in <WrappedLinkStateComponent/> is not null', () => {
        expect(getRenderedComponent().find('testValue')).to.not.equal('null');
    });

    it('testValue in <WrappedLinkStateComponent/> is not undefined', () => {
        expect(getRenderedComponent().find('testValue')).to.not.equal('undefined');
    });

    it('testValue in <WrappedLinkStateComponent/> is a String value', () => {
        expect(getRenderedComponent().state().testValue).to.be.a('string');
    });

    it('testValue in <WrappedLinkStateComponent/> is an Empty String', () => {
        expect(getRenderedComponent().state().testValue).to.equal('');
    });

    it('linkState from <LinkStateComponent/> is a function', () => {
        expect(getRenderedComponent().props().linkState).to.be.a('function');
    });

    it('getValue from <LinkStateComponent/> is a function', () => {
        expect(getRenderedComponent().props().getValue).to.be.a('function');
    });

    it('getState from <LinkStateComponent/> is a function', () => {
        expect(getRenderedComponent().props().getState).to.be.a('function');
    });

    it('updateState from <LinkStateComponent/> is a function', () => {
        expect(getRenderedComponent().props().updateState).to.be.a('function');
    });

    it('Calling updateState from <LinkStateComponent/> updates the component state', () => {
        const renderedComponent = getRenderedComponent();
        renderedComponent.props().updateState({ 'testValue': 'hello world' });

        expect(renderedComponent.state().testValue).to.equal('hello world');
    });

    it('Calling getValue from <LinkStateComponent/> returns a valid value', () => {
        const renderedComponent = getRenderedComponent();
        renderedComponent.props().updateState({ 'testValue': 'hello world' });

        const testValue = renderedComponent.props().getValue('testValue');

        expect(testValue).to.equal('hello world');
    });

    it('Calling getState from <LinkStateComponent/> returns a valid Object state', () => {
        expect(getRenderedComponent().props().getState()).to.be.a('object');
    });

    it('Calling getState and accessing a key from <LinkStateComponent/> state returns a valid value', () => {
        const renderedComponent = getRenderedComponent();
        renderedComponent.props().updateState({ 'testValue': 'hello world' });

        const state = renderedComponent.props().getState();

        expect(state['testValue']).to.equal('hello world');
    });

    it('Calling linkState from <LinkStateComponent/> returns an JSON Object', () => {
        const renderedComponent = getRenderedComponent();
        const testValueLink = renderedComponent.props().linkState('testValue');

        expect(testValueLink).to.be.a('object');
    });

    it('Calling linkState from <LinkStateComponent/> and accessing to JSON Object property "value" is a String', () => {
        const renderedComponent = getRenderedComponent();
        const testValueLink = renderedComponent.props().linkState('testValue');

        expect(testValueLink.value).to.be.a('string');
    });

    it('Calling linkState from <LinkStateComponent/> and accessing to JSON Object property "onChange" is a function', () => {
        const renderedComponent = getRenderedComponent();
        const testValueLink = renderedComponent.props().linkState('testValue');

        expect(testValueLink.onChange).to.be.a('function');
    });

    it('Passing a callback to linkState and calling manually onChange modifies the state of <LinkStateComponent/>', () => {
        const renderedComponent = getRenderedComponent();
        const testValueLink = renderedComponent.props().linkState('testValue', value => value + "aaa");

        let event = {};
        event['target'] = {};
        event['target']['value'] = 'hello world';

        testValueLink.onChange(event);

        expect(renderedComponent.props().getValue('testValue')).to.equal('hello worldaaa');
    });

    it('Calling manually onChange modifies the state of <LinkStateComponent/>', () => {
        const renderedComponent = getRenderedComponent();
        const testValueLink = renderedComponent.props().linkState('testValue');

        let event = {};
        event['target'] = {};
        event['target']['value'] = 'hello world';

        testValueLink.onChange(event);

        expect(renderedComponent.props().getValue('testValue')).to.equal('hello world');
    });

    it('Wrapping a component with withLinkState and passing an array as state keys is the way', () => {
        expect(withLinkState()(Component)).to.not.throw(new Error('keys must be an Array of Strings/Objects!'));
    });

    it('When passing a wrong param to withLinkState, it throws an Error containing the message: keys must be an Array of Strings!', () => {
        try {
            withLinkState({})(Component);
        } catch (err) {
            expect(err.message).to.equal('keys must be an Array of Strings/Objects!');
        }
    });
    
    it('Wrapping a component with withLinkState and passing an array with objects is the way', () => {
        const WrappedComponent = withLinkState([{ 
            'key': 'testValue', 
            'value': 'This is a test value' 
        }])(Component);
        
        const renderedComponent = getRenderedComponent(WrappedComponent);

        expect(renderedComponent).to.not.throw(new Error('keys must be an Array of Strings/Objects!'));
    })
});