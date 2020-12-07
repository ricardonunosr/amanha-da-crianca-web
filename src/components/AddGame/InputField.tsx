import React from 'react';
import { useField, useFormikContext } from 'formik';
import Input from '../../styles/elements/Input';
import ErrorMessage from '../../styles/elements/ErrorMessage';

const InputField = ({ ...props }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'file' && e.target.files !== null) {
      props.setFile(e.target.files[0]);
    }
    setFieldValue(field.name, e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input {...field} {...props} onChange={handleChange} />
      {props.error && props.touched ? (
        <ErrorMessage>{props.error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputField;
