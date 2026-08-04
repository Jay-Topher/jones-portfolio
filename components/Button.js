import Link from "next/link";
import styles from "../styles/Button.module.css";

function Button({ to, variant, className, isLink, children, ...props }) {
  const cls = [styles.button, variant && styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return isLink ? (
    <Link className={cls} href={to} {...props}>
      {children}
    </Link>
  ) : (
    <a className={cls} href={to} {...props}>
      {children}
    </a>
  );
}

export default Button;
