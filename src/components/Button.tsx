
interface Props {
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    buttonLabel: string;
    onClick: () => void;
}
const Button = ({ color = "primary", buttonLabel, onClick }: Props) => {
  return (
    <div>
        <button className={`btn btn-${color}`} onClick={onClick}>{buttonLabel}</button>
    </div>
  )
}

export default Button