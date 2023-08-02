import { Input } from 'components/Form/Form.styled';
import { FormFilter } from './Filter.styled';
const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      <Input type="name" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
