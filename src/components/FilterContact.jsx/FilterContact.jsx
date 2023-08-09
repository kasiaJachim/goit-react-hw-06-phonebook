import css from './filterContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const FilterContact = () => {
  const dispatch = useDispatch();
  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const updateFilter = e => {
    onSetFilter(e.target.value);
  };
  const filter = useSelector(getFilter);

  return (
    <div>
      <label className={css.filterLabel} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={updateFilter}
        placeholder="Search contacts"
      />
    </div>
  );
};
export default FilterContact;
