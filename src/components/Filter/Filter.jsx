// import { Input } from 'components/Form/Form.styled';
import { FormFilter } from './Filter.styled';
const Filter = ({ value, onChange }) => {
  return (
    <label>
      <FormFilter type="name" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
