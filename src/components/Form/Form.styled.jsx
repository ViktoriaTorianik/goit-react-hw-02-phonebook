import styled from '@emotion/styled';
export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16);
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16);
  color: green;
  :focus,
  :hover {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
