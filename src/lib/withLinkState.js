import React from 'react';

const withLinkState = (keys = []) => Component => {
    const defaultState = {};

    if (!Array.isArray(keys)) {
        throw new Error('keys must be an Array of Strings!');
    }

    keys.forEach(key => defaultState[key] = '');

    class LinkStateComponent extends React.Component {
        state = defaultState;

        render() {
            return (
                <Component
                    updateState={this.updateState}
                    linkState={this.linkState}
                    getValue={this.getValue}
                    {...this.props}
                />
            );
        }

        linkState = key => ({
            value: this.state[key] || '',
            onChange: event => this.updateState(key, event.target.value)
        });

        getValue = key => this.state[key] || '';

        updateState = (key, value) => this.setState({ [key]: value });
    }

    return LinkStateComponent;
};

export default withLinkState;