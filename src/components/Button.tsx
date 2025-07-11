function Button(props) {
  return (
    <button style={{ backgroundColor: "#3b82f6" }} onClick={props.clickHandler}>
      {props.label}{" "}
      <span
        style={{
          backgroundColor: "black",
          borderRadius: "50%",
          display: "inline-block",
          width: "20px",
          height: "20px",
        }}
      >
        {props.badge}
      </span>
    </button>
  );
}

export default Button;
