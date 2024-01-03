import React from "react";

export const Input = ({ placeholder, label, id, type }) => {
  return (
    <>
      <label className={`${label ? "text-gray" : "sr-only"}`}>
        {label}
      </label>
      <input
        type={type ? type : 'type'}
        id={id ? id : "input"}
        className="bg-white-60 text-gray px-4 py-2 block"
        placeholder={placeholder}
      />
    </>
  );
};
