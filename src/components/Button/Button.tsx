import styles from "./Button.module.css";

interface Props {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  buttonLabel: string;
  onClick: () => void;
}
const Button = ({ color = "primary", buttonLabel, onClick }: Props) => {
  return (
    <div>
      <button className={[styles.btn, styles[`btn-${color}`]].join(" ")} onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Button;
