import Button from "./styles";

export default function Index({ width = "100%", text = "Submit" }) {
  return (
    <Button
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      width={width}
      type="submit"
    >
      {text}
    </Button>
  );
}
