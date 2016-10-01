import { connect } from 'react-redux';
import IconList from '../components/IconList';

/**
 * Return a list of items sorted by key alphabetically and filtered by the search term and tags
 * @param items - all the items we could display
 */
const getVisibleItems = (items) => {
  console.log(items);
  return items
  /**
   * Sort the list of items by key while ignoring case
   */
    .sort((a, b) => {
      const keyA = a.name.toLowerCase();
      const keyB = b.name.toLowerCase();

      if (keyA < keyB) {
        return -1;
      }

      if (keyA > keyB) {
        return 1;
      }

      return 0;
    })

    /**
     * Map the items to a generic iconItem to be rendered by the IconList
     */
    .map((item) => ({
      key: item.id,
      title: item.name,
      group: item.image.group,
      image: item.image.full,
      withVersion: true,
    }))
};

export const mapStateToProps = (state, { items }) => ({
  /**
   * The list of items to display based on the search term and filters
   */
  items: getVisibleItems(items),
});

const VisibleItemList = connect(mapStateToProps)(IconList);
export default VisibleItemList;
