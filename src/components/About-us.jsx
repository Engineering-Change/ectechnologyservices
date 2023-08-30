import { useRef } from "react";

import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const values = [
  {
    name: "Be world-class.",
    description:
      " Our coding-passionate Engineers ensure top-tier software development with a focus on usability, performance, and reliability.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Take responsibility.",
    description:
      "From hardware to support, we deliver seamless operations and comprehensive assistance.",
    icon: HandRaisedIcon,
  },
  {
    name: "Be supportive.",
    description:
      "From embedded systems to software design, we provide guidance throughout development, ensuring your products are innovative and well-supported.",
    icon: UserGroupIcon,
  },
  {
    name: "Always learning.",
    description:
      "Committed to staying current with industry trends, our team delivers cutting-edge solutions that align with evolving technologies.",
    icon: AcademicCapIcon,
  },
  {
    name: "Share everything you know.",
    description:
      "Through transparent collaboration, we share our knowledge to empower you with insights and solutions for success.",
    icon: SparklesIcon,
  },
  {
    name: "Enjoy downtime.",
    description:
      " Amidst our tech dedication, we value balance and downtime for enhanced creativity and innovation, recognizing its role in our approach.",
    icon: SunIcon,
  },
];

export default function AboutUs() {
  const aboutRef = useRef(null);

  return (
    <section>
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-36"
        id="about"
        ref={aboutRef}
      >
        <div className="mx-auto max-w-4xl text-justify lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who we are & what we value
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
            EC Technology Services specializes in captivating designs and
            delivering seamless user experiences. We offer a comprehensive range
            of services, including Web and Software Development, and Software
            Testing. Through automating your tasks and enhanced collaboration,
            we ensure efficient project delivery. Reach out to us to leverage
            our expertise in creating exceptional Web experiences and exploring
            our Software Development solutions.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold text-white ">
                <value.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {value.name}
              </dt>{" "}
              <dd className="inline">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
