import { connect } from 'react-redux';
import cx from 'classnames';

const mapStateToProps = ({ tabs }, { className, selectedClassName, index }) => ({
  className: cx(className, tabs === index ? selectedClassName : ''),
});

const mergeProps = ({ className }, dispatchProps, { children }) => ({
  className,
  children,
});

export default connect(mapStateToProps, null, mergeProps)('div');
