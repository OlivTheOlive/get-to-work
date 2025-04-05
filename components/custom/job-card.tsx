import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Briefcase,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  postedDate: string;
  logo?: string;
  featured?: boolean;
}

export function JobCard({
  id,
  title,
  company,
  location,
  salary,
  type,
  postedDate,
  logo,
  featured = false,
}: JobCardProps) {
  return (
    <Link href={`/jobs/${id}`}>
      <div
        className={`
        group relative p-6 rounded-xl backdrop-blur-sm transition-all duration-300
        ${
          featured
            ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/30 hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-500/10"
            : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-slate-600 hover:shadow-lg"
        }
      `}
      >
        {featured && (
          <div className="absolute -top-3 -right-1">
            <Badge className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
              Featured
            </Badge>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {logo ? (
              <img
                src={logo}
                alt={`${company} logo`}
                className="w-12 h-12 rounded-md object-cover bg-slate-700"
              />
            ) : (
              <div className="w-12 h-12 rounded-md flex items-center justify-center bg-slate-700 text-slate-300">
                <Briefcase className="w-6 h-6" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-slate-300 mb-3">{company}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" />
                <span>{salary}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>{type}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{postedDate}</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="p-2 rounded-full text-slate-400 group-hover:text-white group-hover:bg-blue-500/10 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
