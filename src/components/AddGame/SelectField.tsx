import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';
import {
  OptionsType,
  ValueType,
  components,
  OptionProps,
  SingleValueProps
} from 'react-select';
import { TrashIcon } from './styles';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  defaultValue?: any;
  handleDelete: (url: string) => {};
}

const Option = (props: OptionProps<any>) => (
  <components.Option {...props}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        {props.data.url && (
          <img
            src={props.data.url}
            style={{ width: 36, margin: '0 5px' }}
            alt={props.data.label}
          />
        )}
        {props.data.label}
      </div>
    </div>
  </components.Option>
);

const SingleValue = (props: SingleValueProps<any>) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {props.data.url && (
      <img src={props.data.url} style={{ width: 30 }} alt={props.data.label} />
    )}
    {props.data.label}
  </div>
);

const Control = (props: any) => {
  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <components.Control {...props} />
      {props.selectProps.value.url && (
        <TrashIcon
          onClick={() => {
            props.selectProps.selectProps.handleDelete(
              props.selectProps.value.url
            );
            props.clearValue();
          }}
        />
      )}
    </div>
  );
};

const SelectField = ({
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  isClearable = false,
  isSearchable = false,
  defaultValue,
  handleDelete
}: CustomSelectProps) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    option
      ? form.setFieldValue(
          field.name,
          isMulti
            ? (option as Option[]).map((item: Option) => item.value)
            : (option as Option).value
        )
      : form.setFieldValue(field.name, 'new');
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };

  return (
    <Select
      selectProps={{ handleDelete }}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      isClearable={isClearable}
      isSearchable={isSearchable}
      defaultValue={defaultValue}
      components={{ Option, SingleValue, Control }}
      styles={{
        control: base => ({ ...base, width: '100%' })
      }}
    />
  );
};

export default SelectField;
