interface Props {
  darkBackgroundColor: string;
}

export function OrangeBall(props: Props) {
  return (
    <div
      className="orangeBall"
      style={{
        width: "82px",
        height: "82px",
        backgroundColor: "orange",
        position: "absolute",
        borderRadius: "50%",
        margin: "0 340px 440px 0",
        boxShadow: `1px 1px 4px ${props.darkBackgroundColor}`,
      }}
    />
  );
}

export default OrangeBall;
