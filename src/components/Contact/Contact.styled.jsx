import styled from '@emotion/styled';
export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ContactTitle = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 24 px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;
export const Paragraf = styled.p`
  margin: 16 px;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 64px;
  background-color: #31d0aa;
  padding: 8px;
  height: 24px;
  border-radius: 4px;
  text-align: center;
  align-items: center;
  border: 1px solid transparent;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
