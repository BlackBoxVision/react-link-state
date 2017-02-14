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
                    linkState={this.linkState}
                    getValue={this.getValue}
                    {...this.props}
                />
            );
        }

        linkState = key => ({
            value: this.state[key] || '',
            onChange: event => this.setState({ [key]: event.target.value })
        });

        getValue = key => this.state[key] || '';
    }

    return LinkStateComponent;
};

export default withLinkState;