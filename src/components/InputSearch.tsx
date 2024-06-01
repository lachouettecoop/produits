"use client";
import { RxCross2 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

import { useState } from "react";

const InputSearch = ({
  defaultValue,
  onChange,
}: {
  defaultValue: string;
  onChange: (value: string) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <label className="input input-bordered flex items-center gap-2 mb-4">
      <input
        type="text"
        className="grow"
        placeholder="Rechercher"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
          setValue(e.currentTarget.value);
        }}
      />
      {value.length === 0 ? (
        <GoSearch />
      ) : (
        <RxCross2
          className="cursor-pointer"
          onClick={() => {
            onChange("");
            setValue("");
          }}
        />
      )}
    </label>
  );
};

export default InputSearch;
