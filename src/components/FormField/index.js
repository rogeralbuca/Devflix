import React from 'react';

function FormField({label, name, type, value, onChange, tag, className}) {

  const TagName = tag;

  return (
    <div>
        {label}
        <TagName
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={className}
        />
    </div>
  )
}

export default FormField;
