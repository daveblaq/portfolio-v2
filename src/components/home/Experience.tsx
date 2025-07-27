import React, { useContext } from "react";
import { work } from "../../data/work";
import { DarkModeContext } from "../../App";

interface DataItem {
  id: number;
  company: string;
  role: string;
  image: string;
  start: string;
  end: string;
  description: string;
  status: number;
}

interface ItemProps {
  item: DataItem;
  index: number;
}

function Experience() {
  const { isDarkMode } = useContext(DarkModeContext);

  const Item: React.FC<ItemProps> = ({ item, index }) => {
    return (
      <div className="relative group">
        {/* Timeline Line */}
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-700"></div>

        <div className="relative flex items-start space-x-6">
          {/* Company Logo */}
          <div className="relative flex-shrink-0">
            <div
              className={`w-12 h-12 rounded-2xl border-2 shadow-lg flex items-center justify-center overflow-hidden group-hover:border-primary-200 transition-all duration-300 ${
                isDarkMode
                  ? "bg-slate-800 border-slate-600"
                  : "bg-white border-slate-200"
              }`}
            >
              <img
                src={item?.image}
                alt={item?.company}
                className="w-8 h-8 object-cover rounded-lg"
              />
            </div>
            {item?.status === 1 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-300 rounded-full border-2 border-white"></div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div
              className={`rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all duration-300 group-hover:border-primary-200 ${
                isDarkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item?.company}
                  </h3>
                  <p
                    className={`text-lg font-medium mb-2 ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {item?.role}
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-slate-700 text-slate-300"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item?.start} - {item?.end}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                className={`leading-relaxed text-sm ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item?.description}
              </p>

              {/* Status Badge */}
              {item?.status === 1 && (
                <div
                  className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                    isDarkMode
                      ? "bg-primary-900/20 text-primary-300 border-primary-400"
                      : "bg-primary-50 text-primary-700 border-primary-400"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary-300 rounded-full mr-2 animate-pulse"></div>
                  Current Position
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6 ${
              isDarkMode
                ? "bg-primary-900/20 border-primary-400 text-primary-300"
                : "bg-primary-50 border-primary-700 text-primary-700"
            }`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
            Professional Journey
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Work Experience
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A journey through my professional growth, from internships to
            leadership roles, each experience shaping my expertise in software
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-12">
            {work.map((item: DataItem, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div
            className={`rounded-3xl p-8 lg:p-12 ${
              isDarkMode
                ? "bg-gradient-to-r from-primary-900/20 to-primary-800/20"
                : "bg-gradient-to-r from-primary-50 to-primary-100"
            }`}
          >
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Ready to work together?
            </h3>
            <p
              className={`text-lg mb-8 max-w-2xl mx-auto ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:o.davecodes@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-300 border-2 border-black text-slate-900 font-medium rounded-md hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 dark:border-primary-400"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in Touch
              </a>
              <a
                href="/about-me"
                className={`inline-flex items-center justify-center px-8 py-4 border-2 font-medium rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "border-primary-400 text-slate-300 hover:border-primary-300 hover:bg-primary-900/20"
                    : "border-primary-700 text-slate-700 hover:border-primary-300 hover:bg-primary-50"
                }`}
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
