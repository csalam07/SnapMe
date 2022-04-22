import React from 'react';

function Input({
  icon,
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  style,
}) {
  return (
    <div class="search-bar">
      <i class={`uil uil-${icon}`}></i>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={style}
      />
    </div>
  );
}

export default Input;
