import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeSelectedTab } from '../actions/tabs';

// components
import Tabs from '../components/Tabs';

export class UnconnectedSmartTabs extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    handleTabChange: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { id, selected, handleTabChange } = this.props;
    handleTabChange(id, selected);
  }

  onChange = (index) => {
    const { id, handleTabChange } = this.props;
    handleTabChange(id, index);
  };

  render() {
    const { selected, children } = this.props;

    return (
      <Tabs selected={selected} handleTabChange={this.onChange}>
        {children}
      </Tabs>
    );
  }
}

export const mapStateToProps = ({ tabs }, { id, defaultSelected = 0 }) => ({
  id,
  selected: tabs[id] || defaultSelected,
});

export const mapDispatchToProps = (dispatch) => ({
  /**
   * dispatch the CHANGE_SELECTED_TAB action with the new index
   * @param index
   */
  handleTabChange(id, index) {
    dispatch(changeSelectedTab(id, index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedSmartTabs);
