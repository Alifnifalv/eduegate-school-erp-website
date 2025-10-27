// src/lib/featuresData.ts
import {
  Users, Bus, Library, Calendar, DollarSign, Bell, MessageSquare, UserCheck, ShieldCheck, 
  Presentation, FileText, HeartPulse, Puzzle, Search, Car, UserCog, Printer, Home, 
  BarChart, ArrowRight, UserPlus, PenSquare, FileUp, FileClock, Webhook, Wrench, 
  GalleryHorizontal, Newspaper, Star, UserRound, Award, Webcam, Server, Shield, 
  Handshake, Album, Lightbulb, UserRoundCog, Briefcase, WebhookIcon, BookMarked, BookCopy, Fingerprint
} from 'lucide-react';
import React from 'react';
import { LucideProps } from 'lucide-react';

// The TypeScript interface for a single feature object
export interface Feature {
  slug: string;
  title: string;
  icon: React.FC<LucideProps>;
  shortDescription: string;
  longDescription: string;
  imageSrc: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
}

// === ALL 40+ FEATURES ARE DEFINED HERE ===
export const allFeaturesData: Feature[] = [
  {
    slug: 'transport-management',
    title: 'Transport Management System',
    icon: Bus,
    shortDescription: 'Ensuring student safety and transport efficiency with real-time tracking.',
    imageSrc: '/features/transport.png',
    longDescription: "Our School ERP's comprehensive transport management software is designed to streamline and enhance transportation operations. By leveraging real-time execution and GPS tracking, our system offers a seamless way to monitor and manage the school's transportation network.",
    keyFeatures: [
      { title: 'Real-Time GPS Tracking', description: 'Monitor the exact location of school buses, providing precise data to authorities and ensuring student safety.' },
      { title: 'Driver Accountability & Speed Monitoring', description: 'Prioritize safety by enabling real-time monitoring of bus speed and ensuring driver accountability.' },
      { title: 'Scheduled Timings & Optimized Routing', description: 'Maintains accurate records of bus timings and optimizes routing for maximum efficiency.' },
      { title: 'Transport Alerts for Parents', description: 'Receive real-time transport alerts via a mobile app for immediate action in case of any emergency.' },
    ]
  },
  {
    slug: 'student-information-system',
    title: "Student Information System",
    icon: Users,
    shortDescription: "Centralized profiles, academic records, and personal details.",
    imageSrc: "/features/student-management.png",
    longDescription: "The Student Information System is the core of our ERP, providing a centralized hub for managing all student profiles, academic records, and personal details securely and efficiently.",
    keyFeatures: [
      { title: 'Complete Student Lifecycle', description: 'Track students from initial inquiry and admission through to graduation and alumni status.' },
      { title: 'Customizable Data Fields', description: "Adapt the system to your institution's specific needs with custom fields for any type of data." },
      { title: 'Secure, Role-Based Access', description: 'Ensure data integrity with permissions that grant access only to authorized staff members.' },
      { title: 'Automated ID Card Generation', description: 'Generate and print student identification cards for security and identification purposes.'}
    ]
  },
  {
    slug: 'online-admission-management',
    title: "Online Admission Management",
    icon: UserPlus,
    shortDescription: "Secured student login portal with OTP protection for admission.",
    imageSrc: "/features/placeholder.png",
    longDescription: "Streamline your entire admissions workflow from inquiry to enrollment with our powerful online admission management system. Reduce paperwork and administrative burden.",
    keyFeatures: [
      { title: 'Customizable Admission Forms', description: 'Build dynamic online forms to collect all necessary information from applicants.' },
      { title: 'Document Upload Portal', description: 'Allow applicants to securely upload required documents like birth certificates and transcripts.' },
      { title: 'Application Status Tracking', description: 'Provide a portal for parents and students to track the real-time status of their application.' },
      { title: 'Merit List Generation', description: 'Automate the generation of merit lists based on your institution\'s custom criteria.' },
    ]
  },
  {
    slug: 'fees-fine-management',
    title: "Fees & Fine Management",
    icon: DollarSign,
    shortDescription: "Streamlines school fee and fine management and payment processing.",
    imageSrc: "/features/finance.png",
    longDescription: "Automate your entire fee collection process. Our module handles everything from generating invoices to tracking payments, sending reminders, and managing fines.",
    keyFeatures: [
      { title: 'Customizable Fee Structures', description: 'Create multiple fee categories and apply them to different classes or student groups.' },
      { title: 'Automatic Late Fee Calculation', description: 'Set rules for late fees that are automatically applied to overdue payments.' },
      { title: 'Secure Online Payment Gateway', description: 'Allow parents to pay fees anytime, anywhere through a secure, integrated portal.' },
      { title: 'Detailed Financial Reporting', description: 'Generate comprehensive reports on fee collection, outstanding dues, and revenue.' },
    ]
  },
  {
    slug: 'timetable-management',
    title: "Timetable Management",
    icon: Calendar,
    shortDescription: "Generate and alter timetables for classes and teachers easily.",
    imageSrc: "/features/placeholder.png",
    longDescription: "Our Timetable Management module allows administrators to create balanced, clash-free schedules for the entire institution with an intuitive drag-and-drop interface.",
    keyFeatures: [
      { title: 'Drag & Drop Scheduler', description: 'Easily arrange periods, subjects, and teachers to build the perfect schedule.' },
      { title: 'Automatic Conflict Detection', description: 'The system automatically flags scheduling conflicts like double-booking a teacher or classroom.' },
      { title: 'Teacher Substitution Management', description: 'Quickly assign substitute teachers and automatically notify all relevant parties.' },
    ]
  },
  {
    slug: 'library-management',
    title: "Library Management System",
    icon: Library,
    shortDescription: "Operate the entire library with an automated and integrated system.",
    imageSrc: "/features/library.png",
    longDescription: "Digitize every aspect of your library's operations, from cataloging to circulation, making it more accessible and easier to manage for both librarians and students.",
    keyFeatures: [
      { title: 'Digital Book Cataloging (OPAC)', description: 'Create a searchable online catalog of all books and resources available in the library.' },
      { title: 'Barcode-Based Circulation', description: 'Streamline the process of issuing and returning books with integrated barcode scanning.' },
      { title: 'Fine & Due Date Management', description: 'Automatically track due dates, calculate fines for overdue books, and send reminders.' },
    ]
  },
  {
    slug: 'examination-management',
    title: "Examination Management System",
    icon: FileText,
    shortDescription: "Monitor and manage all examination and grading activities.",
    imageSrc: "/features/exam-online.png",
    longDescription: "A complete solution to manage the entire examination process, from creating exam schedules to publishing results and generating detailed analytical reports.",
    keyFeatures: [
      { title: 'Exam Scheduling & Hall Tickets', description: 'Plan exam timetables, allocate rooms, and generate printable hall tickets for students.' },
      { title: 'Online & Offline Grade Entry', description: 'Flexible options for teachers to enter marks and grades directly into the system.' },
      { title: 'Automatic Report Card Generation', description: 'Generate and publish comprehensive, customizable student report cards automatically.' },
    ]
  },
  {
    slug: 'parent-teacher-interaction',
    title: "Parent – Teacher Interaction Module",
    icon: MessageSquare,
    shortDescription: "Gives parents real-time access to their child's daily performance.",
    imageSrc: "/features/parent-portal.png",
    longDescription: "Foster a strong school-home connection with a dedicated portal that facilitates seamless communication and keeps parents engaged in their child's academic journey.",
    keyFeatures: [
      { title: 'Real-time Alerts & Notifications', description: 'Instantly notify parents about attendance, grades, school events, and fee reminders.' },
      { title: 'Secure Direct Messaging', description: 'Enable secure, one-on-one communication between parents and teachers.' },
      { title: 'Progress Report Access', description: 'Parents can view and download their child\'s academic reports and performance analysis anytime.' },
    ]
  },
  {
    slug: 'attendance-management',
    title: 'Attendance Management System',
    icon: UserCheck,
    shortDescription: 'Keep track of daily attendance in real-time.',
    imageSrc: '/features/placeholder.png',
    longDescription: 'Our real-time attendance system helps maintain accurate records, automate alerts for absenteeism, and generate detailed reports for administrative use.',
    keyFeatures: [
        { title: 'Biometric & RFID Integration', description: 'Utilize modern hardware for foolproof, automated attendance tracking.' },
        { title: 'Manual & Mobile Attendance', description: 'Empower teachers to take attendance directly from their mobile app or desktop.' },
        { title: 'Absentee Alerts', description: 'Automatically notify parents via SMS or push notification when their child is marked absent.' }
    ]
  },
  {
    slug: 'hr-management',
    title: 'HR Management',
    icon: Briefcase,
    shortDescription: 'Manages employee records, recruitment, and HR processes.',
    imageSrc: '/features/placeholder.png',
    longDescription: 'A complete Human Resources module to manage the entire employee lifecycle, from recruitment and onboarding to payroll and performance reviews.',
    keyFeatures: [
        { title: 'Employee Profiles', description: 'Maintain a centralized database of all staff information, documents, and history.' },
        { title: 'Payroll Generation', description: 'Automate salary calculations, deductions, and payslip generation.' },
        { title: 'Leave Management', description: 'Streamline leave requests, approvals, and tracking for all staff members.' }
    ]
  },

  {
    slug: 'inventory-management',
    title: 'Inventory Management',
    icon: BookMarked,
    shortDescription: 'Manages school inventory, procurement, and asset tracking.',
    imageSrc: '/features/placeholder.png',
    longDescription: 'Keep a detailed record of all school assets, from stationery and lab equipment to furniture and sports gear. Manage stock levels, procurement, and distribution.',
    keyFeatures: [
        { title: 'Centralized Stock Register', description: 'Maintain a complete record of all school assets and consumables.' },
        { title: 'Low Stock Alerts', description: 'Set reorder levels and receive automatic notifications when stock is running low.' },
        { title: 'Supplier & Purchase Management', description: 'Manage supplier information, create purchase orders, and track deliveries.' }
    ]
  },
  {
    slug: 'student-behavior-management',
    title: 'Student Behavior Management',
    icon: Shield,
    shortDescription: 'Records and manages student behavior incidents and interventions.',
    imageSrc: '/features/placeholder.png',
    longDescription: 'A dedicated module to help monitor, record, and manage student discipline, fostering a positive and productive learning environment.',
    keyFeatures: [
        { title: 'Incident Reporting', description: 'Digitally log all disciplinary incidents with detailed notes and actions taken.' },
        { title: 'Merit & Demerit System', description: 'Implement a points-based system to reward positive behavior and track infractions.' },
        { title: 'Behavioral Analytics', description: 'Generate reports to identify trends and patterns in student behavior over time.' }
    ]
  },


  {
    slug: "library-management-system",
    title: "Library Management System",
    icon: Library,
    shortDescription: "Automate book lending and inventory for your school library.",
    imageSrc: "/features/library.png",
    longDescription: "Streamline book cataloging, lending, and returns with digital tools and self-service options.",
    keyFeatures: [
      { title: "Digital Catalog", description: "Manage books and resources electronically." },
      { title: "Automated Lending", description: "Track loan periods and overdue returns." },
      { title: "Reporting", description: "View library usage and analytics." }
    ]
  },
  {
    slug: "examination-management-system",
    title: "Examination Management System",
    icon: FileText,
    shortDescription: "Digitally manage and monitor exams and assessments.",
    imageSrc: "/features/exams.png",
    longDescription: "Plan, conduct, and analyze exams and assessments, all from one platform.",
    keyFeatures: [
      { title: "Exam Scheduling", description: "Organize exam dates and locations." },
      { title: "Result Publishing", description: "Share results securely with students." },
      { title: "Analytics", description: "Analyze performance trends." }
    ]
  },
  {
    slug: "report-cards-result-analysis",
    title: "Report Cards & Result Analysis",
    icon: BarChart,
    shortDescription: "Automated report card generation and result analysis.",
    imageSrc: "/features/report-cards.png",
    longDescription: "Generate student report cards and analyze performance data by class, subject, or individual.",
    keyFeatures: [
      { title: "Card Generation", description: "Auto-create and distribute report cards." },
      { title: "Result Analytics", description: "Identify strengths and areas for improvement." },
      { title: "Parent Access", description: "Enable secure online access for parents." }
    ]
  },
 
  {
    slug: "automated-notifications-system",
    title: "Automated Notifications System",
    icon: Bell,
    shortDescription: "Keep everyone updated with smart auto-alerts.",
    imageSrc: "/features/notifications.png",
    longDescription: "Automate alerts for assignments, schedules, and key school communications to parents, staff and students.",
    keyFeatures: [
      { title: "Task Alerts", description: "Notify stakeholders of deadlines and events." },
      { title: "Attendance Alerts", description: "Send absence/presence notifications." },
      { title: "Custom Announcements", description: "Distribute school-wide messages instantly." }
    ]
  },

  {
    slug: "homework-management",
    title: "Homework/assignment Management",
    icon: Home,
    shortDescription: "Teachers post homework and assignments online.",
    imageSrc: "/features/homework.png",
    longDescription: "Online module for publishing, tracking, and grading student homework and assignments.",
    keyFeatures: [
      { title: "Assignment Posting", description: "Teachers upload homework online for instant access." },
      { title: "Submission Tracker", description: "Monitor who completed assignments and when." },
      { title: "Grading", description: "Allow quick feedback and marks." }
    ]
  },
  {
    slug: "discipline-management-system",
    title: "Discipline management System",
    icon: ShieldCheck,
    shortDescription: "Monitor and manage student discipline effectively.",
    imageSrc: "/features/discipline.png",
    longDescription: "Keep a record of student conduct, behaviors, and interventions for a positive school atmosphere.",
    keyFeatures: [
      { title: "Incident Recording", description: "Log disciplinary events and resolutions." },
      { title: "Behavior Analytics", description: "Track trends in student conduct." },
      { title: "Notification", description: "Alert staff and parents to important incidents." }
    ]
  },
  {
    slug: "leave-management-system",
    title: "Leave Management System",
    icon: PenSquare,
    shortDescription: "Simplified leave request and tracking.",
    imageSrc: "/features/leave.png",
    longDescription: "Online leave application and approval for students and staff, with attendance integration.",
    keyFeatures: [
      { title: "Digital Application", description: "Request leave online, any time." },
      { title: "Status Tracker", description: "See application outcomes instantly." },
      { title: "Integration", description: "Automatic update of attendance records." }
    ]
  },
  {
    slug: "e-learning-system",
    title: "E-learning System: Virtual Classroom",
    icon: Presentation,
    shortDescription: "Real-time online learning and resource sharing.",
    imageSrc: "/features/elearning.png",
    longDescription: "Conduct engaging live web classes, share notes, and manage e-learning resources.",
    keyFeatures: [
      { title: "Live Classes", description: "Host virtual lessons for remote students." },
      { title: "Resource Sharing", description: "Distribute documents, slides, and quizzes with ease." },
      { title: "Participation Tracking", description: "Monitor who attended and engaged in class." }
    ]
  },
  {
    slug: "transfer-certificate-generation",
    title: "Transfer Certificate Generation",
    icon: FileUp,
    shortDescription: "Easily generate official transfer certificates online.",
    imageSrc: "/features/tc.png",
    longDescription: "Create and issue transfer certificates for leaving students quickly and efficiently.",
    keyFeatures: [
      { title: "Auto-Generated Formats", description: "Standardized templates for all certificates." },
      { title: "Quick Issuance", description: "Speed up the process for families and administration." },
      { title: "Digital Archive", description: "Store and retrieve issued certificates at any time." }
    ]
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    icon: HeartPulse,
    shortDescription: "Record and manage student health information.",
    imageSrc: "/features/healthcare.png",
    longDescription: "Store health records, track medical history and monitor special health needs safely.",
    keyFeatures: [
      { title: "Health Profiles", description: "Log allergies, conditions, and treatments." },
      { title: "Visits Tracking", description: "Monitor health office visits and responses." },
      { title: "Secure Access", description: "Limit access to sensitive records." }
    ]
  },
  {
    slug: "co-curricular-activities-system",
    title: "Co-curricular Activities System",
    icon: Puzzle,
    shortDescription: "Manage all non-academic school activities.",
    imageSrc: "/features/cocurricular.png",
    longDescription: "Organize extracurricular activities that foster student growth and development.",
    keyFeatures: [
      { title: "Activities Planner", description: "Schedule sports, clubs, and arts programs year-round." },
      { title: "Participation Records", description: "Track which students participate and achievements." },
      { title: "Event Analytics", description: "Measure engagement and program success." }
    ]
  },
  {
    slug: "enquiry-management-system",
    title: "Enquiry Management System",
    icon: Search,
    shortDescription: "Centralized management of school admission enquiries.",
    imageSrc: "/features/enquiry.png",
    longDescription: "Record, route, and respond to prospective student enquiries with ease.",
    keyFeatures: [
      { title: "Digital Enquiry Forms", description: "Prospective students send questions online." },
      { title: "Enquiry Tracking", description: "Monitor status and follow-up process." },
      { title: "Automated Replies", description: "Send instant response and information." }
    ]
  },
  {
    slug: "work-allocation-management",
    title: "Work Allocation Management",
    icon: UserCog,
    shortDescription: "Digitally assign and monitor staff tasks.",
    imageSrc: "/features/work-allocation.png",
    longDescription: "Allocate work to faculty and staff for better coordination, efficiency and progress tracking.",
    keyFeatures: [
      { title: "Role-based Assignment", description: "Assign tasks by department or role." },
      { title: "Progress Tracking", description: "See status of assigned work in real time." },
      { title: "Automated Reminders", description: "Notify staff of deadlines and updates." }
    ]
  },
  {
    slug: "managing-printing-documents",
    title: "Managing and Printing Documents",
    icon: Printer,
    shortDescription: "Automatic generation and printing of certificates and forms.",
    imageSrc: "/features/print.png",
    longDescription: "Digitally create, format, and print certificates, forms, and official documents for school processes.",
    keyFeatures: [
      { title: "Template Library", description: "Access customizable document templates." },
      { title: "Batch Printing", description: "Print multiple records easily." },
      { title: "Secure Storage", description: "Archive important documents online." }
    ]
  },
  {
    slug: "udise-reports",
    title: "U-Dise Reports",
    icon: FileClock,
    shortDescription: "Generate and submit Unified District Information System reports.",
    imageSrc: "/features/udise.png",
    longDescription: "Prepare data for U-Dise reporting and ensure district compliance each term.",
    keyFeatures: [
      { title: "Auto Generation", description: "Create reports from existing school data." },
      { title: "Submission Tracking", description: "Monitor whether data was sent and accepted." },
      { title: "Compliance Alerts", description: "Reminders for deadlines and requirements." }
    ]
  },
  {
    slug: "biometric-integration",
    title: "Biometric Integration",
    icon: Webhook,
    shortDescription: "Enable biometric authentication for access and attendance.",
    imageSrc: "/features/biometric.png",
    longDescription: "Integrate fingerprint or face ID for reliable, digital attendance and controlled access.",
    keyFeatures: [
      { title: "Fingerprint/Face ID", description: "Authenticate users with biometric devices." },
      { title: "Attendance Log", description: "Secure, real-time tracking via biometrics." },
      { title: "Security Integration", description: "Link to door access and sensitive areas." }
    ]
  },
  {
    slug: "access-management-system",
    title: "Access Management System",
    icon: Wrench,
    shortDescription: "Control software user roles and security permissions.",
    imageSrc: "/features/access-management.png",
    longDescription: "Set permissions and access levels for staff, students, and admins to ensure data safety.",
    keyFeatures: [
      { title: "Role-based Access", description: "Assign software access by user type." },
      { title: "Permission Management", description: "Granular control over all features." },
      { title: "Audit Logs", description: "Monitor who accessed or changed data." }
    ]
  },
  {
    slug: "photo-gallery-school-videos",
    title: "Photo Gallery & School Videos",
    icon: GalleryHorizontal,
    shortDescription: "Organize and share school event media online.",
    imageSrc: "/features/gallery.png",
    longDescription: "Upload, store and display photo albums and event videos for the whole school community.",
    keyFeatures: [
      { title: "Media Library", description: "Store unlimited images and videos." },
      { title: "Gallery Pages", description: "Public or private event galleries." },
      { title: "Sharing Tools", description: "Distribute via messaging or social channels." }
    ]
  },
  {
    slug: "news-events",
    title: "News & Events",
    icon: Newspaper,
    shortDescription: "Share school announcements and upcoming events.",
    imageSrc: "/features/news-events.png",
    longDescription: "Communicate news, updates, and events to students, parents, and staff in real time.",
    keyFeatures: [
      { title: "Announcements", description: "Create posts for school-wide news." },
      { title: "Event Calendars", description: "Publish and update event details." },
      { title: "Notifications", description: "Send event reminders to all stakeholders." }
    ]
  },
  {
    slug: "achievement-talent",
    title: "Achievement & Talent",
    icon: Star,
    shortDescription: "Showcase student achievements and highlights.",
    imageSrc: "/features/achievement.png",
    longDescription: "Highlight student talents, awards and milestones in dedicated online spaces.",
    keyFeatures: [
      { title: "Recognition Posts", description: "Share stories of achievement and awards." },
      { title: "Talent Portfolios", description: "Publish student work and highlights." },
      { title: "Milestone Tracking", description: "Maintain a record of special accomplishments." }
    ]
  }


  
];

// Function to get a single feature by its slug (useful for the detail page)
export function getFeatureBySlug(slug: string): Feature | undefined {
  return allFeaturesData.find(feature => feature.slug === slug);
}