import { connect } from 'react-redux';

function withCdn(component) {
  const mapStateTopProps = ({ runtime }, props) => ({
    cdnUrl: runtime.cdnUrl,
    ...props,
  });

  return connect(mapStateTopProps)(component);
}

export default withCdn;
