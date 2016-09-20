import { connect } from 'react-redux';

export const mapStateToProps = ({ runtime }, { group, image, withVersion }) => {
  let src;
  const version = runtime.versions[group];

  if (withVersion) {
    src = `${runtime.cdnUrl}/${version}/img/${group}/${image}`;
  } else {
    src = `${runtime.cdnUrl}/img/${group}/${image}`;
  }

  return { src };
};

// I don't want to pass group, image, withVersion, or dispatch to the `img` component
export const mergeProps = ({ src }, dispatchProps, { group, image, withVersion, ...props }) => ({ // eslint-disable-line no-unused-vars
  ...props,
  src,
});

const CdnImage = connect(mapStateToProps, null, mergeProps)('img');

export default CdnImage;
