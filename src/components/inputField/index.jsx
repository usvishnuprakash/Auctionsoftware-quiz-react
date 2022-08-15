import { Input, InputFieldWrapper } from "./styles";

export default function InputField({ forText = "someInput" }) {
  return (
    <InputFieldWrapper>
      <label htmlFor={forText}>{forText}</label>
      <Input typeof="text" aria-required id={forText} />
    </InputFieldWrapper>
  );
}
