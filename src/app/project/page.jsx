import CardProject from "../components/CardProject/CardProject";
import data from "../utils/json/data.json";

export default function page() {
  return (
    <div>
      <div>
        <h2 className="text-secondary-color mt-10 font-bold text-3xl border-b-4 border-secondary-color my-text-shadow w-fit mx-auto px-10 py-5">
          HIS RECENT PROJECTS
        </h2>
      </div>
      {/* PROJECTS */}
      <div className="mt-10 flex justify-center items-center">
        {data.map((project) => (
          <CardProject key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
