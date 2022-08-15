import Button from "./styles";

export default function Index({ text = "Submit" }) {
  return <Button type="submit">{text}</Button>;
}
