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
});