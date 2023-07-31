import { Input } from 'components/Form/Form.styled';
import { FormFilter } from './Filter.styled';
const Filter = ({ value, onChange }) => {
  return (
    <FormFilter action="">
      <label htmlFor="">
        <Input type="name" value={value} onChange={onChange} />
      </label>
    </FormFilter>
  );
};
export default Filter;
