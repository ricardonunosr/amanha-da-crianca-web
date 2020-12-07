import styled from 'styled-components';
import { Form } from 'formik';
import InputField from './InputField';
import SelectField from './SelectField';
import DatePickerField from './DatePickerField';
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';

export const Container = styled.div`
  border: 2px;
  width: 100%;
  margin: auto;
  display: flex;
  height: 80%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const StyledInputField = styled(InputField)`
  margin-top: 10px;
`;

export const StyledSelectField = styled(SelectField)`
  margin-top: 70px;
`;

export const StyledDatePickerField = styled(DatePickerField)`
  width: 100%;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TrashIcon = styled(TrashFill)`
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:hover {
    color: grey;
  }
`;
