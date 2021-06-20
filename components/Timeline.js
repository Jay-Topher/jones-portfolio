import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { MdStar } from "react-icons/md";
import colors from "../constants/colors";

function Timeline() {
  return (
    <div className="tl-timeline">
      <VerticalTimeline className="vert">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.white,
            color: colors.brown,
            borderTop: `5px solid ${colors.primary}`,
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
          dateClassName="tl-date"
        >
          <h3 className="vertical-timeline-element-title">
            Maramoja Transport
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Nairobi, Kenya</h6>
          <p>Front end Engineer</p>
          <p>React | Redux | Reflux | Vagrant</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.white,
            color: colors.brown,
            borderTop: `5px solid ${colors.primary}`,
          }}
          date="2019 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
          dateClassName="tl-date"
        >
          <h3 className="vertical-timeline-element-title">Decagon Institute</h3>
          <h6 className="vertical-timeline-element-subtitle">Lagos, Nigeria</h6>
          <p>Full Stack Engineer</p>
          <p>
            React | React Native | Redux | NodeJs | Typescript | PostgreSQL |
            MongoDB | Docker
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          contentStyle={{
            background: colors.white,
            color: colors.brown,
            borderTop: `5px solid ${colors.primary}`,
          }}
          iconStyle={{ background: "rgb(100, 100, 100)", color: "#fff" }}
          icon={<MdWork />}
          dateClassName="tl-date"
        >
          <h3 className="vertical-timeline-element-title">
            Codebot Technologies
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            Port Harcourt, Nigeria
          </h6>
          <p>Software Developer / STEM Instructor</p>
          <p>HTML | CSS | Javascript | Python | Wordpress</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStar />}
        />
      </VerticalTimeline>

      <style global>{`
        .tl-date {
          color: ${colors.white};
        }
        .vertical-timeline-element--work {
          background: colors.white,
          color: colors.brown,
          borderTop: 5px solid ${colors.primary},
        }
      `}</style>
      <style jsx>{`
        .tl-timeline {
          font-size: 1.6rem;
        }
      `}</style>
    </div>
  );
}

export default Timeline;
