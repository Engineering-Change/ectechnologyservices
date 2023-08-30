import { useRef } from "react";

import {
  CpuChipIcon,
  ChatBubbleLeftEllipsisIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Software Development",
    description:
      "We can help you with your software development needs. We have experience with a wide range of technologies and frameworks.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Technical Support",
    description:
      "Our team of experts can help you with your technical support needs. We can help you with your hardware and software issues.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Embedded Systems",
    description:
      "Creating a new product? We can help you with your embedded systems needs. We have experience with a wide range of microcontrollers and sensors.",
    icon: CpuChipIcon,
  },
];

export default function Services() {
  const servicesRef = useRef(null);

  return (
    <section id="services" ref={servicesRef}>
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 sm:pt-48 lg:pt-56"
        id="services"
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
            Our team is dedicated to creating solutions that prioritize
            usability, performance, and reliability. By fostering collaboration
            and employing efficient strategies, we ensure the timely and
            effective delivery of your project.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
