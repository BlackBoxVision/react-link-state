import React from 'react';

const getDefaultKey = item => Object.keys(item)[0];

const mapValuesToDefaultState = (defaultState, item) => {
    if (typeof item === 'string') {
        defaultState[item] = '';
    }

    if (typeof item === 'object') {
        defaultState[getDefaultKey(item)] = item[getDefaultKey(item)];
    }
}

const withLinkState = (baseState = []) => Component => {
    const defaultState = {};

    if (!Array.isArray(baseState)) {
        throw new Error('keys must be an Array of Strings/Objects!');
    }

    baseState.forEach(item => mapValuesToDefaultState(defaultState, item));

    class LinkStateComponent extends React.Component {
        state = defaultState;

        render() {
            return (
                <Component
                    getState={this.getState}
                    linkState={this.linkState}
                    getValue={this.getValue}
                    updateState={this.updateState}
                    {...this.props}
                />
            );
        }

        linkState = (key, callback) => ({
            value: this.state[key] || '',
            onChange: event => {
                let value = event.target.value;

                if (callback && typeof(callback) === 'function') {
                    const modifiedValue = callback(event.target.value);
                    value = modifiedValue ? modifiedValue : value;
                }

                this.updateState({
                    [key]: value
                });
            }
        });

        getState = () => this.state;

        getValue = key => this.state[key] || '';

        updateState = (object, callback = undefined) => this.setState(object, callback);
    }

    return LinkStateComponent;
};

export default withLinkState;