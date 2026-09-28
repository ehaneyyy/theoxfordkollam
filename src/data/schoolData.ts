export interface AcademicProgram {
  id: string;
  stage: string;
  grades: string;
  ageGroup: string;
  tagline: string;
  overview: string;
  curriculumHighlights: string[];
  keySubjects: string[];
  timing: string;
}

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'kindergarten',
    stage: 'Early Childhood Education',
    grades: 'Play Class, LKG & UKG',
    ageGroup: 'Ages 3 to 5 Years',
    tagline: 'British EYFS Framework blended with child-centric experiential play',
    overview: 'Our foundational years nurture natural curiosity, sensory development, linguistic confidence, and foundational numeracy through play-based discovery and emotional security.',
    curriculumHighlights: [
      'Phonics-based early reading and storytelling circles',
      'Montessori-inspired sensorial and practical life exercises',
      'Safe outdoor exploratory gardens and water-play areas',
      'Gentle bilingual exposure with music and rhythmic movement',
      'Daily social-emotional bonding and motor coordination routines'
    ],
    keySubjects: ['Early English Literacy', 'Numeracy in Play', 'Creative Arts', 'Nature & Discovery', 'Physical Movement'],
    timing: '8:45 AM – 1:00 PM'
  },
  {
    id: 'primary',
    stage: 'Primary Schooling',
    grades: 'Grades I to V',
    ageGroup: 'Ages 6 to 10 Years',
    tagline: 'Inquiry-led foundation in core sciences, humanities, and languages',
    overview: 'Primary years focus on developing critical thinking, mathematical clarity, multilingual expression, and moral integrity within a calm, positive classroom setting.',
    curriculumHighlights: [
      'Interactive smart classroom pedagogy with digital aids',
      'Integrated hands-on STEM and environmental projects',
      'Second language choices: Malayalam, Hindi, Arabic, or French',
      'Daily reading hour and central library exploration',
      'Foundation in physical education, swimming, and performing arts'
    ],
    keySubjects: ['English Language & Literature', 'Mathematics', 'Environmental Science (EVS)', 'Second Language', 'Information Technology', 'Visual & Performing Arts'],
    timing: '8:30 AM – 3:15 PM'
  },
  {
    id: 'middle',
    stage: 'Middle School',
    grades: 'Grades VI to VIII',
    ageGroup: 'Ages 11 to 13 Years',
    tagline: 'Deepening analytical inquiry, lab experimentation, and sportsmanship',
    overview: 'Students transition into specialized discipline-based learning, fostering scientific inquiry, collaborative problem solving, and leadership across clubs and sports.',
    curriculumHighlights: [
      'Practical experiments in dedicated Science & Robotics labs',
      'Third language introduction and creative writing forums',
      'After-school sports training including KUFS football and swimming',
      'Public speaking, Model United Nations, and debate society',
      'Values-centered life-skills and digital citizenship'
    ],
    keySubjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Social Sciences', 'Third Language', 'Computer Applications'],
    timing: '8:30 AM – 3:30 PM'
  },
  {
    id: 'secondary',
    stage: 'Secondary Section (CBSE)',
    grades: 'Grades IX & X',
    ageGroup: 'Ages 14 to 15 Years',
    tagline: 'Rigorous CBSE curriculum with dedicated board examination mentorship',
    overview: 'Comprehensive preparation for the All India Secondary School Examination (AISSE) with personalized academic tutoring, regular assessment feedback, and diagnostic testing.',
    curriculumHighlights: [
      'Structured CBSE syllabus coverage completed with ample revision cycles',
      'Regular subjective and objective diagnostic assessments',
      'Remedial clinics and accelerated learning tracks',
      'Career counseling and stream selection orientation workshops',
      'Integrated physical training and mindfulness sessions'
    ],
    keySubjects: ['English Communicative / Language & Lit', 'Mathematics (Standard / Basic)', 'Science (Physics, Chem, Bio)', 'Social Science', 'Second Language', 'Artificial Intelligence'],
    timing: '8:15 AM – 3:45 PM'
  },
  {
    id: 'senior-secondary',
    stage: 'Senior Secondary (CBSE +2)',
    grades: 'Grades XI & XII',
    ageGroup: 'Ages 16 to 17 Years',
    tagline: 'Specialized Science and Commerce streams tailored for premier university admissions',
    overview: 'Rigorous preparation for CBSE AISSCE alongside structured coaching support for national competitive tests (NEET, JEE, KEAM, CA Foundation, CUET).',
    curriculumHighlights: [
      'Stream A: Science with Biology / Math / Computer Science options',
      'Stream B: Commerce with Accountancy, Business Studies & Economics',
      'Advanced collegiate laboratory sessions with individual apparatus',
      'Visiting faculty sessions, university application guidance, and alumni mentorship',
      'Hostel supervised night prep and faculty clearance hours'
    ],
    keySubjects: ['Physics / Chemistry / Mathematics / Biology', 'Computer Science / Informatics Practices', 'Accountancy / Business Studies / Economics', 'Physical Education', 'English Core'],
    timing: '8:15 AM – 4:00 PM'
  }
];

export interface CampusFacility {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imagePath: string;
}

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'campus-grounds',
    name: 'Serene Architectural Campus',
    tagline: '20+ Acres of Tranquil Learning Environment',
    description: 'Surrounded by lush greenery in Umayanalloor, Kollam, our purpose-built campus provides calm, pollution-free spaces designed to inspire focus and scholarly reflection.',
    features: ['Expansive manicured courtyards', 'Dedicated open-air amphitheatres', 'Secure perimeter with 24/7 CCTV surveillance', 'Eco-friendly rainwater harvesting & solar integration'],
    imagePath: '/images/campus-vision.jpg'
  },
  {
    id: 'smart-classrooms',
    name: 'Inspiring Academic Studios',
    tagline: 'Interactive, Well-Ventilated Learning Studios',
    description: 'Every classroom is engineered with ergonomic seating, abundant natural daylight, acoustic paneling, and high-resolution interactive smart displays.',
    features: ['Interactive multi-touch LED panels', 'Optimal teacher-to-student ratio of 1:15', 'Wi-Fi enabled campus network', 'Audio-visual curriculum repositories'],
    imagePath: '/images/campus-mission.jpg'
  },
  {
    id: 'aquatics-sports',
    name: 'Campus Infrastructure & Hostels',
    tagline: 'Air-Conditioned Hostels & Athletics Complex',
    description: 'World-class sports infrastructure featuring a certified swimming pool, international-standard football pitch, and indoor sports pavilions for holistic development.',
    features: ['Semi-Olympic swimming pool with certified lifeguards', 'Football academy with Kerala United Football School (KUFS)', 'Full-size basketball & volleyball courts', 'Indoor badminton, table tennis & chess studios'],
    imagePath: '/images/campus-infrastructure.jpg'
  },
  {
    id: 'stem-labs',
    name: 'Scholastic Discovery & Student Life',
    tagline: 'Hands-on Prototyping & Holistic Activities',
    description: 'State-of-the-art Physics, Chemistry, Biology, and Robotics laboratories enabling practical experimentation and scientific discovery.',
    features: ['Modern 3D printing & microcontroller workbenches', 'Dedicated individual laboratory work-stations', 'Annual science, mathematics & design exhibitions', 'Digital research library with global journal access'],
    imagePath: '/images/student-life.png'
  }
];

export interface BoardingHighlight {
  title: string;
  description: string;
  detail: string;
}

export const BOARDING_HIGHLIGHTS: BoardingHighlight[] = [
  {
    title: 'Air-Conditioned Residential Wings',
    description: 'Separate, highly secure boarding houses for boys and girls from Grade III onwards.',
    detail: 'Comfortable twin and quadruple occupancy rooms with personal study cubicles, orthopedic bedding, and round-the-clock power backup.'
  },
  {
    title: 'Supervised Evening Prep & Tutoring',
    description: 'Dedicated study hours under the direct mentorship of resident faculty.',
    detail: 'Resident teachers offer one-on-one doubt clarification in Mathematics, Sciences, and Commerce every evening, eliminating external tuition needs.'
  },
  {
    title: 'Wholesome Culinary Nutrition',
    description: 'Hygienic multi-cuisine dining serving fresh vegetarian and non-vegetarian menus.',
    detail: 'Nutritionist-curated four daily meals including fresh milk, fruits, wholesome South Indian & continental lunches, and evening refreshment snacks.'
  },
  {
    title: 'Medical Care & Pastoral Wellness',
    description: 'On-campus infirmary with qualified nursing staff and visiting physicians.',
    detail: 'Dedicated resident wardens, 24/7 security escorts, immediate hospital liaison, and structured parent communication channels.'
  }
];

export interface SchoolNotice {
  id: string;
  date: string;
  category: 'Admissions' | 'Academics' | 'Events' | 'Circular';
  title: string;
  summary: string;
  badge: string;
}

export const SCHOOL_NOTICES: SchoolNotice[] = [
  {
    id: 'n-1',
    date: 'March 2026',
    category: 'Admissions',
    title: 'Admissions Open for Academic Year 2026–27 (KG to Grade XI)',
    summary: 'Online registration is now active. Merit-based entrance assessments and campus walkthrough slots can be booked through the admissions portal.',
    badge: 'Active Registration'
  },
  {
    id: 'n-2',
    date: 'February 2026',
    category: 'Events',
    title: 'KUFS Football Coaching Summer Intensive Clinic',
    summary: 'Registration opens for after-school and weekend football training conducted by AIFF-licensed coaches from Kerala United Football School.',
    badge: 'Sports'
  },
  {
    id: 'n-3',
    date: 'February 2026',
    category: 'Academics',
    title: 'CBSE Secondary (Class X & XII) Preparatory Series',
    summary: 'Schedule and guidelines for the final comprehensive model examinations ahead of the CBSE Board Examinations.',
    badge: 'Examination'
  },
  {
    id: 'n-4',
    date: 'January 2026',
    category: 'Circular',
    title: 'Annual Science & Robotic Innovation Showcase 2026',
    summary: 'Students from Grades VI through XII will present multidisciplinary research exhibits and automated robotics prototypes.',
    badge: 'Exhibition'
  }
];

export interface SchoolFAQ {
  question: string;
  answer: string;
}

export const SCHOOL_FAQS: SchoolFAQ[] = [
  {
    question: 'What syllabus does The Oxford School Kollam follow?',
    answer: 'The Oxford School Kollam is affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No. 930421). Our Kindergarten uses the British EYFS (Early Years Foundation Stage) framework blended with experiential discovery.'
  },
  {
    question: 'What are the streams available for Senior Secondary (Grades XI & XII)?',
    answer: 'We provide two primary tracks: Science Stream (Physics, Chemistry, Mathematics with Biology or Computer Science / Informatics Practices) and Commerce Stream (Accountancy, Business Studies, Economics with Computer Science or Physical Education).'
  },
  {
    question: 'Are boarding and hostel facilities available for outstation students?',
    answer: 'Yes, we have separate air-conditioned residential boarding wings for boys and girls from Grade III onwards. Boarding includes 24/7 faculty supervision, scheduled evening prep classes, nutritious multi-cuisine dining, and structured weekend activities.'
  },
  {
    question: 'What sports and extra-curricular facilities does the school offer?',
    answer: 'Our campus features a semi-Olympic swimming pool, an international standard football ground with coaching by Kerala United Football School (KUFS), basketball courts, indoor badminton, robotics labs, art and music academies.'
  },
  {
    question: 'What is the procedure for new admissions?',
    answer: 'Admissions begin with submitting an online inquiry or registration form. Applicants for primary through senior secondary undergo a diagnostic aptitude interaction to understand their learning stage, followed by document verification and formal enrollment.'
  },
  {
    question: 'Does the school provide student transportation across Kollam?',
    answer: 'Yes, our fleet of modern school buses covers extensive routes across Kollam district, equipped with GPS real-time tracking, CCTV cameras, speed governors, and trained female attendants for maximum student safety.'
  }
];
