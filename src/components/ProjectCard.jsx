import { LinkIcon } from "@heroicons/react/24/outline";
import { PropTypes } from "prop-types";

function ProjectsCard({ name, description, link, linkLabel, image }) {
  return (
    <div className="group relative flex flex-col items-start">
      <img className="w-full h-50 rounded-t" src={image} />
      <h2 className="mt-6 text-base font-semibold text-zinc-100">
        <>
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-slate-800/50 sm:-inset-x-6 sm:rounded-2xl" />
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{name}</span>
          </a>
        </>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-400">{description}</p>
      <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">{linkLabel}</span>
      </p>
    </div>
  );
}

ProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectsCard;
