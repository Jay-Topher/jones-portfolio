import Link from "next/link";
import colors from "../constants/colors";

function Button({ to, variant, className, isLink, children, ...props }) {
  return isLink ? (
    <Link
      className={`button ${variant} ${className}`}
      href={isLink ? to : null}
      {...props}
    >
      {children}

      <style jsx>{`
        .filled {
          color: #fff;
          background-color: ${colors.primary};
        }

        .outlined {
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
          text-align: center;
        }
        .button {
          padding: 5px 20px;
          border-radius: 3px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .hire-btn {
          margin-right: 10px;
        }
      `}</style>
    </Link>
  ) : (
    <a className={`button ${variant} ${className}`} href={to} {...props}>
      {children}

      <style jsx>{`
        .filled {
          color: #fff;
          background-color: ${colors.primary};
        }

        .outlined {
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
          text-align: center;
        }
        .button {
          padding: 5px 20px;
          border-radius: 3px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .hire-btn {
          margin-right: 10px;
        }
      `}</style>
    </a>
  );
}

export default Button;
