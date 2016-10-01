import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CollapsiblePanel.css';

export class UnstyledCollapsiblePanel extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    defaultCollapsed: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = { isCollapsed: !!props.defaultCollapsed };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  render() {
    const { header, children } = this.props;
    const { isCollapsed } = this.state;

    return (
      <div className={s.root}>
        <div className={s.header}>
          <a className={s.headerLink} href={`#/panel/${header}`} onClick={this.handleClick}>
            <span className={cx(s.headerArrow, isCollapsed ? s.headerArrowCollapse : s.headerArrowShow)} />
            {header}
          </a>
        </div>
        <div className={cx(s.body, isCollapsed ? s.bodyCollapse : s.bodyShow)}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(UnstyledCollapsiblePanel);
