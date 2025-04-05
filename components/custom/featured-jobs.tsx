import { JobCard } from "./job-card";

// Sample job data - in a real app, this would come from an API
const featuredJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechGiant Inc.",
    location: "Remote",
    salary: "$120K - $150K",
    type: "Full-time" as const,
    postedDate: "2 days ago",
    featured: true,
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "New York, NY",
    salary: "$90K - $110K",
    type: "Full-time" as const,
    postedDate: "1 week ago",
    featured: true,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "San Francisco, CA",
    salary: "$130K - $160K",
    type: "Full-time" as const,
    postedDate: "3 days ago",
    featured: true,
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-gradient-blue-purple">Featured</span> Jobs
          </h2>
          <a
            href="/jobs"
            className="mt-4 md:mt-0 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
          >
            View all jobs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
