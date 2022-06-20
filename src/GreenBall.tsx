interface Props {
  darkBackgroundColor: string;
}

export function GreenBall(props: Props) {
  return (
    <div
      className="greenBall"
      style={{
        width: "142px",
        height: "142px",
        backgroundColor: "green",
        position: "absolute",
        borderRadius: "50%",
        margin: "0 0 120px 380px",
        boxShadow: `1px 1px 4px ${props.darkBackgroundColor}`,
      }}
    />
  );
}

export default GreenBall;
