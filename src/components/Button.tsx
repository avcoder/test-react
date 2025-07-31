import styled from "./Button.module.css";
import classnames from "classnames";

function Button(props) {
  const classes = classnames({
    [styled.bgGray]: props.severity === "secondary",
    [styled.bgOrange]: props.severity === "warning",
  });
  return (
    <button onClick={props.clickHandler} className={classes}>
      {props.label}{" "}
      {props.badge && (
        <>
          <span className={styled.badge}>{props.badge}</span>
        </>
      )}
    </button>
  );
}

export default Button;
