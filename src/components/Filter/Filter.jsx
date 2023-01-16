import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);

  return (
    <div className={css.filter}>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          value={filter}
          onChange={evt => {
            const action = filterContact(evt.target.value);
            dispatch(action);
          }}
        />
      </label>
    </div>
  );
};

export default Filter;
