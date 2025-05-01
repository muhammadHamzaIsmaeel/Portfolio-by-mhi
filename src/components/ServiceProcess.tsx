// components/ServiceProcess.tsx
import { FaSearch, FaPenAlt, FaCode, FaCheckCircle } from "react-icons/fa";

export default function ServiceProcess() {
  const steps = [
    {
      icon: <FaSearch className="text-purple-600 text-2xl" />,
      title: "Discovery",
      description: "We analyze your requirements and plan the approach"
    },
    {
      icon: <FaPenAlt className="text-blue-600 text-2xl" />,
      title: "Design",
      description: "Creating wireframes and design mockups"
    },
    {
      icon: <FaCode className="text-green-600 text-2xl" />,
      title: "Development",
      description: "Building the solution with quality code"
    },
    {
      icon: <FaCheckCircle className="text-yellow-500 text-2xl" />,
      title: "Delivery",
      description: "Thorough testing and final deployment"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Process</h2>
      <div className="relative">
        {/* Progress line */}
        <div className="hidden md:block absolute left-8 top-8 h-3/4 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-green-200"></div>
        
        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <span className="text-purple-600 mr-2">{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}