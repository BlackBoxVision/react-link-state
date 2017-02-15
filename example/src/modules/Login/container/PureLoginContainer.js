import withLinkState from '../../../../../src/lib/withLinkState';
import PureLoginView from '../components/PureLoginView';

const PureLoginContainer = withLinkState(['email', 'password', 'emailError', 'passwordError'])(PureLoginView);

export default PureLoginContainer;