import colors from "../constants/colors";

function Title({ children, fontSize, lineThickness, color }) {
  return (
    <h2 className="title">
      {children}
      <style jsx>{`
        .title {
          position: relative;
          display: inline-block;
          font-size: ${fontSize || "5rem"};
          color: ${color || "#000"};
        }

        .title::before {
          content: "";
          width: 60%;
          height: ${lineThickness ? `${lineThickness}px` : "6px"};
          position: absolute;
          bottom: -6px;
          background-color: ${colors.primary};
          border-radius: 10px;
          left: 0;
        }
      `}</style>
    </h2>
  );
}

export default Title;
