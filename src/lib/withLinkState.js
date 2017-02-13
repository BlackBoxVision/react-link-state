import React from 'react';

const withLinkState = Component => {
    class LinkStateComponent extends React.Component {
        state = {};

        render() {
            return <Component linkState={this.linkState}/>;
        }

        linkState = key => ({
            value: this.state[key],
            onChange: event => this.setState({ [key]: event.target.value })
        });
    }

    return LinkStateComponent;
};

export default withLinkState;