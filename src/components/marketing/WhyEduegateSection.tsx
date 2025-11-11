import React from 'react';

// Asset URLs from Figma
const img111 = "https://www.figma.com/api/mcp/asset/65672a5e-05da-41e1-bf6a-6affa79188a9";
const imgFrame13197 = "https://www.figma.com/api/mcp/asset/4fbf9785-8305-4329-85ff-54d0bbb70500";
const imgGroup781 = "https://www.figma.com/api/mcp/asset/83b98422-6863-437e-99f4-53b6487ae00b";
const imgStudentDetails11 = "https://www.figma.com/api/mcp/asset/97962613-5bdf-4517-9576-0ff7bce28dc6";
const imgStudentJourney1 = "https://www.figma.com/api/mcp/asset/0dc43643-fb9b-45cc-b1e0-b29317e947c5";
const imgGroup = "https://www.figma.com/api/mcp/asset/15d9ff71-c64f-40af-82c3-5d67904a29ae";

export function WhyEduegateSection() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 px-52 py-16 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-7 w-full max-w-4xl text-center">
          <div className="flex flex-col items-center gap-5">
            <p className="text-2xl text-gray-600 font-['Poppins']">Why Eduêgate</p>
            <h2 className="text-4xl font-bold text-blue-900 font-['Poppins']">Built for Performance, Powered by Intelligence</h2>
          </div>
          <p className="text-base text-gray-600 leading-relaxed font-['Poppins']">
            eduêgate is a mobile-ready educational ERP available in both cloud and on-premise setups, connecting students, parents, teachers, and admins globally. It offers real-time access to lessons, performance data, and workflows—making education seamless, automated, and accessible from anywhere.
          </p>
        </div>

        {/* Card 1: Multi-School Management (Image + Text) */}
        <div className="flex gap-10 items-center w-full">
          <div className="w-96 h-60 rounded-lg shadow-lg overflow-hidden flex-shrink-0">
            <img src={img111} alt="Multi-School Management" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4 font-['Poppins']">Multi-School Management</h3>
              <p className="text-base text-gray-600 leading-relaxed font-['Poppins']">
                Is your ERP limiting your growth? eduêgate is built to scale. Manage multiple schools, campuses, or branches from a single dashboard. Share resources, standardize operations, and monitor performance across institutions—all without switching systems.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-9">
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Centralized administration</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Independent academics</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-9">
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Shared resources</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Unified reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Built-In Workflow Management (Text + Image) */}
        <div className="flex gap-10 items-center w-full flex-row-reverse">
          <div className="w-96 h-80 rounded-lg shadow-lg overflow-hidden flex-shrink-0">
            <img src={imgFrame13197} alt="Workflow Management" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4 font-['Poppins']">Built-In Workflow Management</h3>
              <p className="text-base text-gray-600 leading-relaxed font-['Poppins']">
                Every school operates differently. eduêgate's flexible workflow engine allows institutions to customize processes like admissions, approvals, evaluations, and reporting. No need to force-fit your operations into rigid templates—Eduêgate adapts to you
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-9">
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Multi-Level approval Chains</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>AND/OR conditions</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-9">
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Dynamic routing</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Real-Time status & audit trail</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Digital Twin Visualization (Image + Text) */}
        <div className="flex gap-10 items-center w-full">
          <div className="w-80 relative flex-shrink-0">
            <div className="relative">
              <img src={imgGroup781} alt="Group78" className="w-64 h-52 rounded-lg shadow-lg object-cover" />
              <img src={imgStudentDetails11} alt="Student Details" className="absolute w-64 h-56 rounded-lg shadow-lg object-cover left-32 top-14" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4 font-['Poppins']">Digital Twin Visualization</h3>
              <p className="text-base text-gray-600 leading-relaxed font-['Poppins']">
                See your school like never before. eduêgate's Digital Twin approach offers real-time graphical representations of activities, resources, and performance metrics—helping administrators make informed decisions with clarity and speed.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-9">
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Student Journey Mapping</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Live dashboards</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-9">
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Bus Location & Occupancy Tracking</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <ul className="list-disc text-base text-gray-600 font-['Poppins:Medium'] ml-6">
                    <li>Revenue & Financial Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Degree Audit & Certification (Text + Image) */}
        <div className="flex gap-10 items-center w-full flex-row-reverse">
          <div className="w-96 h-80 rounded-lg shadow-lg overflow-hidden flex-shrink-0">
            <img src={imgStudentJourney1} alt="Student Journey" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4 font-['Poppins']">Degree Audit & Certification Pathway</h3>
              <p className="text-base text-gray-600 leading-relaxed font-['Poppins']">
                Track every step of a student's journey—from onboarding to graduation. Eduêgate records academic progress, attendance, assessments, and certifications, offering a complete visual audit trail for compliance and transparency
              </p>
            </div>
            <div className="space-y-2 text-base text-gray-600 font-['Poppins:Medium']">
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>End-to-end student lifecycle tracking</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Visual certification progress maps</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Automated degree audit and eligibility checks</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Secure digital certificate generation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Your Data, Your Security (Image + Text) */}
        <div className="flex gap-10 items-center w-full">
          <div className="w-96 h-72 rounded-lg shadow-lg overflow-hidden flex-shrink-0">
            <img src={imgGroup} alt="Security" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4 font-['Poppins']">Your Data, Your Security</h3>
              <p className="text-base text-gray-600 leading-relaxed font-['Poppins']">
                Eduêgate puts you in control. Whether deployed on-premise or in the cloud, your IT team can schedule backups, manage access, and retrieve data securely from the front end. No hidden layers—just full ownership and peace of mind.
              </p>
            </div>
            <div className="space-y-2 text-base text-gray-600 font-['Poppins:Medium']">
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Flexible deployment: cloud or on-premise</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Scheduled backups and recovery tools</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Secure front-end data access</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <ul className="list-disc ml-6">
                  <li>Full data ownership and transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
