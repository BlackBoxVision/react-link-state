import React from 'react';

const withLinkState = () => Component => {
    class LinkStateComponent extends React.Component {
        state = {};

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