import "./btn.scss";

interface buttonParams {
  value: string;
  link?: string;
  className?: string;
}

function Button({ value, link, className }: buttonParams) {
  return (
    <a href={link} className={`btn ${className}`}>
      <p>{value}</p>
    </a>
  );
}

export default Button;
