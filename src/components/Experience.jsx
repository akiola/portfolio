import { motion } from "framer-motion";
import { experiences } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const logError = (message, error) => {
  console.error(`Error: ${message}`, error);
};

const ExperienceCard = ({ experience }) => {
  try {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  } catch (error) {
    logError("Error rendering ExperienceCard", error);
    return <div>Error loading experience data.</div>; 
  }
};

const Experience = () => {
  try {
    return (
      <section id="experience" className="relative overflow-hidden">
        <motion.div variants={textVariant()} className="relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mt-12">
            Work Experience
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col relative z-10">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    );
  } catch (error) {
    logError("Error rendering Experience section", error);
    return <div>Error loading experience section.</div>; 
  }
};

export default Experience;
