import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/custom/job-card";

// Sample job data - in a real app, this would come from an API or database
const jobs = [
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
  {
    id: "4",
    title: "Product Manager",
    company: "InnovateCorp",
    location: "Chicago, IL",
    salary: "$110K - $140K",
    type: "Full-time" as const,
    postedDate: "1 day ago",
  },
  {
    id: "5",
    title: "Backend Developer",
    company: "DataFlow",
    location: "Remote",
    salary: "$100K - $130K",
    type: "Full-time" as const,
    postedDate: "3 days ago",
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    salary: "$140K - $170K",
    type: "Full-time" as const,
    postedDate: "4 days ago",
  },
];

export default function JobsPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Job Openings</h1>
          <p className="text-slate-400 max-w-2xl">
            Browse our curated list of job opportunities from leading companies
            around the globe. Find your perfect role in tech, design, marketing,
            and more.
          </p>
        </div>

        {/* Filter options would go here in a complete implementation */}
        <div className="mb-8 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-slate-300">
              Showing{" "}
              <span className="font-medium text-white">{jobs.length}</span> job
              openings
            </p>
            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-700 text-white">
                Filter
              </Button>
              <Button variant="outline" className="border-slate-700 text-white">
                Sort by: Latest
              </Button>
            </div>
          </div>
        </div>

        {/* Job listings */}
        <div className="grid gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Pagination would go here in a complete implementation */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-1">
            <Button variant="outline" className="border-slate-700 text-white">
              Previous
            </Button>
            <Button className="bg-blue-600 text-white">1</Button>
            <Button variant="outline" className="border-slate-700 text-white">
              2
            </Button>
            <Button variant="outline" className="border-slate-700 text-white">
              3
            </Button>
            <Button variant="outline" className="border-slate-700 text-white">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
