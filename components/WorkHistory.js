import colors from "../constants/colors";
import Title from "./Title";
import Timeline from "./Timeline";

function WorkHistory() {
  return (
    <section className="work-history">
      <div className="container">
        <div className="work-main">
          <Title color={colors.white} lineThickness={10}>
            Work History
          </Title>
          <Timeline />
        </div>
      </div>

      <style jsx>{`
        .work-history {
          background-color: ${colors.lightBrown};
          color: ${colors.white};
          min-height: 100vh;
        }
      `}</style>
    </section>
  );
}

export default WorkHistory;
