import InputField from "../../components/inputField";
import ButtonField from "../../components/buttonField";
import LoginWrapper from "./styles";

export default function Index() {
  return (
    <LoginWrapper>
      <div className="child">
        <InputField forText="User Name" />
        <InputField forText="Password" />
        <ButtonField />
      </div>
    </LoginWrapper>
  );
}
