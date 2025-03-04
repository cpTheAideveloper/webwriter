import React, { ChangeEvent } from "react";

interface TextInputProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  }

  export default function TextInput({ label, value, onChange }: TextInputProps) {
    return (
      <div className="flex flex-col mb-4">
        <label className="font-bold mb-2">{label}</label>
        <textarea
          className="border rounded p-2"
          value={value}
          onChange={onChange}
          rows={5}
        />
      </div>
    );
  }