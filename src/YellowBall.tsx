interface Props {
  darkBackgroundColor: string;
}

export function YellowBall(props: Props) {
  return (
    <div
    className="yellowBall"
      style={{
        width: "248px",
        height: "248px",
        position: "absolute",
        margin: "340px 440px 0 0",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
          backgroundColor: "yellow",
          position: "absolute",
          borderRadius: "50%",
          boxShadow: `1px 1px 4px ${props.darkBackgroundColor}`,
        }}
      />
    </div>
  );
}

export default YellowBall;
