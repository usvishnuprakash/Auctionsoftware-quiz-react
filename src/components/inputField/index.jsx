import { Input, InputFieldWrapper } from "./styles";

export default function InputField({ forText = "someInput", onChange = () => {}, error = "" }) {
  return (
    <InputFieldWrapper>
      <div>
        <label htmlFor={forText}>{forText}</label>
      </div>

      <Input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        typeof="text"
        aria-required
        id={forText}
      />
      {!!error === true && <p className="error">{error}</p>}
    </InputFieldWrapper>
  );
}
