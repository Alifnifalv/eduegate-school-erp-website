import React from 'react';
import ServiceCard from './ServiceCard';

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <ServiceCard title="Administration Suite">
        Manage admissions, student records, attendance and scheduling from a single dashboard.
      </ServiceCard>

      <ServiceCard title="Academic & LMS">
        Deliver lessons, track progress, and provide assessments with integrated learning tools that teachers and students love.
      </ServiceCard>

      <ServiceCard title="Finance & Billing">
        Simplify fee collection, invoicing and financial reporting with secure workflows.
      </ServiceCard>
    </div>
  );
}

export default ServicesGrid;
