import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans dark:bg-skills-gradient bg-surface-light/50 clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-content-dark text-content-light">EDUCATION</h2>
        <div className="w-40 h-1 bg-primary mx-auto mt-4"></div>
        <p className="dark:text-gray-400 text-gray-600 mt-4 text-lg font-semibold">
       My educational journey has been a continuous process of growth and learning, shaping my skills and knowledge over the years. Below are the details of my academic background.        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 dark:bg-content-dark bg-content-light h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
           

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-lg border border-primary dark:bg-surface-dark bg-surface-light backdrop-blur-md ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold dark:text-content-dark text-content-light">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm dark:text-gray-300 text-gray-600">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm dark:text-gray-500 text-gray-600 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 dark:text-gray-400 text-gray-600 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 dark:text-gray-400 text-gray-600">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
