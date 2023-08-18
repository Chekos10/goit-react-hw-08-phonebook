
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts, selectFilter } from 'redux/filter/filterSlice';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import css from '../Filter/filter.module.css'
const Filter = () => {
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()

    const handleFilterChange = event => {
        dispatch(filteredContacts(event.target.value))
    }
    return (
        <label className={css.filterPart}>
        <Typography component="h1" variant="h5">
        Filter contacts:
        </Typography>
        <TextField
              margin="normal"
              required minLength={3}
              id="filter"
              label="Filter"
              value={filter}
              fullWidth
              autoFocus
              onChange={handleFilterChange}
            />
        {/* <input type="text" value={filter} onChange={handleFilterChange} /> */}
        </label>
    );
};
export default Filter;