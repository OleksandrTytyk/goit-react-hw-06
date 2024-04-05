import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilterSelector = useSelector((state) => state.filter.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={nameFilterSelector}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
