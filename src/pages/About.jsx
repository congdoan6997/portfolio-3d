// constants
import { Shadow } from "@react-three/drei";
import { skills, experiences } from "../constants";

// react vertical timeline component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CTA } from "../components";
const About = () => {
  return (
    <section className="max-container ">
      <h3 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          PhDBui
        </span>
      </h3>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          Software engineer based in VietNam, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back" />
              <div className="btn-front flex justify-center items-center rounded-lg">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here're the rundown:
          </p>
        </div>
        <div className="mt-16 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_names}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center h-full w-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: "0" }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50  font-normal text-sm pl-1"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
