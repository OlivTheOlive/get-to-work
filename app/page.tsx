import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Globe, Search, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeaturedJobs } from "@/components/custom/featured-jobs";
import { CompanySignup } from "@/components/custom/company-signup";
import { CompanyLogos } from "@/components/custom/company-logos";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-grid-white/[0.02] z-0" />

        {/* Glowing orbs for futuristic effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl z-0" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200">
              Connect Top Talent With <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                Leading Companies
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
              A modern platform for companies to post jobs and find the perfect
              candidates. Streamlined hiring process with AI-powered matching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
              >
                Post a Job <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800"
              >
                Explore Jobs
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
            <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                2.5K+
              </p>
              <p className="text-slate-400">Companies</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-300">
                10K+
              </p>
              <p className="text-slate-400">Job Posts</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">
                50K+
              </p>
              <p className="text-slate-400">Candidates</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-300">
                15K+
              </p>
              <p className="text-slate-400">Hires Made</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <CompanyLogos />

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              Powerful Features
            </span>{" "}
            for Modern Recruiting
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="p-3 bg-blue-500/10 w-fit rounded-lg mb-4">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Matching
              </h3>
              <p className="text-slate-300">
                Our AI algorithms connect your job posts with the most qualified
                candidates based on skills and experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-all">
              <div className="p-3 bg-violet-500/10 w-fit rounded-lg mb-4">
                <Globe className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Global Reach
              </h3>
              <p className="text-slate-300">
                Access a worldwide talent pool and promote your open positions
                to qualified candidates across the globe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="p-3 bg-cyan-500/10 w-fit rounded-lg mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Streamlined Process
              </h3>
              <p className="text-slate-300">
                Automated workflows that reduce time-to-hire and simplify the
                entire recruiting experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <FeaturedJobs />

      {/* Company Signup Section */}
      <CompanySignup />

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 z-0" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />

        <div className="container relative z-10 mx-auto max-w-4xl bg-gradient-to-br from-slate-800 to-slate-900 p-10 md:p-16 rounded-2xl border border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to find your perfect candidates?
              </h2>
              <p className="text-slate-300 max-w-xl">
                Join thousands of companies who trust our platform to connect
                with top talent.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white whitespace-nowrap"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              Industry Leaders
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-white">TechGiant Inc.</p>
                  <p className="text-slate-400">Software Development</p>
                </div>
              </div>
              <p className="text-slate-300">
                "This platform has transformed our hiring process. We've reduced
                our time-to-hire by 45% and found extremely qualified candidates
                for hard-to-fill tech roles."
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <p className="font-bold text-white">GrowthStartup</p>
                  <p className="text-slate-400">E-commerce</p>
                </div>
              </div>
              <p className="text-slate-300">
                "As a fast-growing startup, we needed to scale our team quickly
                with the right talent. This platform delivered beyond our
                expectations with its AI-powered matching."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              © 2023 Get to Work. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                {/* You can add social icons here */}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
