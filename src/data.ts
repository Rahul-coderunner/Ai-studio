import { Course, BlogPost, Testimonial, Booking } from './types';

export const FOUNDER_PROFILE = {
  name: 'Dyaneshwar',
  title: 'Founder & Head Coach',
  bio: 'With over 15 years of leadership experience across Fortune 500 tech companies and management consultancies in India and globally, Dyaneshwar founded WeConnect with a simple mission: to bridge the gap between academic theory and real-world executive excellence. He has personally mentored over 2,000+ professionals transit into leadership, product management, and high-growth technical roles.',
  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600',
  linkedin: 'https://linkedin.com/in/dyaneshwar-weconnect'
};

export const CORE_VALUES = [
  {
    title: 'Professionalism',
    description: 'We carry out our advisory training and client support with standard execution, reliable schedules, and complete competence.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Pride',
    description: 'We take absolute pride in our results, curriculum depth, and in setting up our alumni for extreme career breakthroughs.',
    icon: 'Award'
  },
  {
    title: 'Proactivity',
    description: 'We study macroeconomic trends, hiring updates, and technical shifts proactively so our learners are always preparing headers ahead.',
    icon: 'Users'
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: '2021',
    title: 'The Spark',
    description: 'Dyaneshwar leaves his corporate executive gig to formulate WeConnect, tutoring 15 handpinned high-potential candidates.'
  },
  {
    year: '2022',
    title: 'Official Launch',
    description: 'WeConnect digital platform goes live. Launches the communication curriculum and technical bootcamp.'
  },
  {
    year: '2023',
    title: '1,000 Alumni Strong',
    description: 'Crossed the milestone of 1,000+ graduates placed successfully in top tier companies across Bengaluru, Mumbai, and Delhi NCR.'
  },
  {
    year: '2024',
    title: 'Leadership Circle Launch',
    description: 'Introduced high-impact executive presence Masterclasses for mid-career managers searching for senior corporate roles.'
  },
  {
    year: '2025',
    title: 'AI and New-Age Technical Labs',
    description: 'Introduced specialized Technical Product Management and AI Strategy curricula to address immediate industry standard shifts.'
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Soft Skills Training',
    category: 'Soft Skills',
    duration: '4 Weeks',
    level: 'Beginner',
    description: 'Develop your interpersonal attributes, personality traits, and social graces. This solutions module transforms everyday workspace interactions and empowers team cohesion.',
    price: 9999,
    rating: 4.8,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Sneha Rao',
    instructorRole: 'Behavioral Psychologist & Leadership Coach',
    syllabus: [
      'Week 1: Mindset & Empathy - The Foundations of Social Intelligence',
      'Week 2: Listening Competence - Passive vs Active Feedback loops',
      'Week 3: Assertive Expression - Conveying ideas clearly without conflict',
      'Week 4: Influence & Team Bonding - Leveraging positive interpersonal cues'
    ],
    outcomes: [
      'Establish clean, constructive dialogue habits across multi-functional cohorts',
      'Learn standard active-listening framework structures to diffuse workplace friction',
      'Acquire simple verbal keys to project alignment and high engagement capability',
      'Validate your interpersonal skills profile with tailored peer assessments'
    ]
  },
  {
    id: 'c2',
    title: 'Behavioral Skills Training',
    category: 'Soft Skills',
    duration: '4 Weeks',
    level: 'Intermediate',
    description: 'Optimize behavioral habits, group dynamics, conflict resolution pathways, and professional composure under high-stress corporate scenarios.',
    price: 12999,
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Sneha Rao',
    instructorRole: 'Behavioral Psychologist & Leadership Coach',
    syllabus: [
      'Week 1: Stress & Regulation - Neurological triggers in peer meetings',
      'Week 2: Collaborative Alignment - Navigating difficult boss or client dynamics',
      'Week 3: Conflict Mitigation - Decoupling professional feedback from emotional ego',
      'Week 4: Leadership Behaviors - Modeling poise, accountability, and standard execution'
    ],
    outcomes: [
      'Control mental and physiological stress triggers during critical board meetings',
      'Develop constructive techniques to negotiate project roadblocks professionally',
      'Apply non-defensive language structures to respond to critical corporate auditing',
      'Establish reliable habits of deliberate communication and feedback tracking'
    ]
  },
  {
    id: 'c3',
    title: 'Public Speaking',
    category: 'Soft Skills',
    duration: '6 Weeks',
    level: 'Intermediate',
    description: 'Conquer speech anxiety. Learn voice modulation, pacing, posture control, and audience engagement keys to deliver memorable addresses.',
    price: 14999,
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Dyaneshwar',
    instructorRole: 'Founder & Head Coach',
    syllabus: [
      'Week 1-2: Overcoming Glottis Tightness & Audience Stage Phobia',
      'Week 3: Voice Pitching, Cadence Controls, and Strategic Pause Placement',
      'Week 4: Posture, Gestures, and Spatial Presence across Virtual or Physical Stages',
      'Week 5-6: Framing Hook Openings, Core Structures, and Compelling CTA Conclusions'
    ],
    outcomes: [
      'Deliver high-stakes keynotes confidently without reading from raw scripts',
      'Adapt voice modulation to capture focus and command immediate workspace authority',
      'Master visual stage presence frameworks that signal professional gravitas',
      'Conduct 3 complete simulated speech reviews with direct expert audio analysis'
    ]
  },
  {
    id: 'c4',
    title: 'Selling Skills',
    category: 'Soft Skills',
    duration: '6 Weeks',
    level: 'Intermediate',
    description: 'Master sales psychological triggers, lead conversions, client rapport building, high-ticket pitch workflows, and objection closing strategies.',
    price: 15999,
    rating: 4.7,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Amit Sharma',
    instructorRole: 'Sales Growth Catalyst & Corporate Consultant',
    syllabus: [
      'Week 1: Mindset of Advisor - Moving from product pitching to consultation',
      'Week 2: Deep Diagnostics & Discovery - Unearthing buyer pain-points',
      'Week 3: Value Proposition Alignment - Customizing solutions for distinct business levels',
      'Week 4: Objection Defusal - Resolving price concerns and contract delays',
      'Week 5-6: Closing Formats, Negotiation Parameters, and Relationship Renewal loops'
    ],
    outcomes: [
      'Adopt a consultative mindset that builds rapid professional client trust',
      'Map client issues structurally to deliver highly responsive solution pitches',
      'Handle pricing pushback and scope alignments with clear value-led responses',
      'Build scalable pipelines and tracking frameworks for client follow-ups'
    ]
  },
  {
    id: 'c5',
    title: 'Start-up Coaching',
    category: 'Leadership',
    duration: '8 Weeks',
    level: 'Advanced',
    description: 'Acquire early-stage founder frameworks: raising capital, initial product market fit diagnostics, agile scaling, and investor relationship management.',
    price: 29999,
    rating: 4.9,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Dyaneshwar',
    instructorRole: 'Founder & Head Coach',
    syllabus: [
      'Week 1-2: Product-Market Fit (PMF) Metrics & Audience Diagnostic Iterations',
      'Week 3-4: Pitch deck preparation & storytelling for venture capital',
      'Week 5-6: Lean operational structures, hiring, and unit economics validation',
      'Week 7-8: Strategic marketing channels, scalable growth, and client traction'
    ],
    outcomes: [
      'Develop robust startup models validated by actual target audience data',
      'Design clean pitch structures featuring concise financial metrics and growth lines',
      'Configure lean sprint goals to release fast MVP products without budget runaways',
      'Access highly useful templates for cap-table tracking and pitch narratives'
    ]
  },
  {
    id: 'c6',
    title: 'Emotional Intelligence',
    category: 'Soft Skills',
    duration: '4 Weeks',
    level: 'Intermediate',
    description: 'Enhance self-awareness, active empathy, emotional self-regulation, and relational mastery. Vital for cross-collaborative project leaders.',
    price: 11999,
    rating: 4.8,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Sneha Rao',
    instructorRole: 'Behavioral Psychologist & Leadership Coach',
    syllabus: [
      'Week 1: Intrapersonal Mastery - Identifying implicit emotional triggers',
      'Week 2: Regulation & Reflection - Pausing between stimuli and professional responses',
      'Week 3: Empathy Engineering - Reading subtle group dynamics and micro-expressions',
      'Week 4: Strategic Relationship Management - Inspiring team trust and cohesion'
    ],
    outcomes: [
      'Formulate professional responses during moments of high workspace tension',
      'Build strong, trusted human bridges across diverse department levels',
      'Read and diffuse client anxiety or peer resentment before it impacts delivery',
      'Establish a daily mental check routine to maintain peak cognitive execution'
    ]
  },
  {
    id: 'c7',
    title: 'Problem Solving',
    category: 'Technical',
    duration: '6 Weeks',
    level: 'Intermediate',
    description: 'Rigorous frameworks for diagnostic brainstorming, root-cause calculations, analytical decision modeling, and scalable solution implementation.',
    price: 14499,
    rating: 4.8,
    reviewsCount: 110,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Dyaneshwar',
    instructorRole: 'Founder & Head Coach',
    syllabus: [
      'Week 1-2: Root-Cause Auditing - MECE tree splits & the 5-Whys framework',
      'Week 3: Analytical Modeling - Weighing tradeoffs through quantitative score matrices',
      'Week 4: Creative Brainstorming - Lateral thinking & constraints-based design',
      'Week 5-6: Operational Rollout - Scaling prototype fixes to global user models'
    ],
    outcomes: [
      'Formulate MECE (Mutually Exclusive, Collectively Exhaustive) diagnosis charts',
      'Draft highly convincing, data-backed solution pitches for executive review',
      'Minimize blind spots and errors during complex system upgrades',
      'Build robust checklists for operational problem resolution tracking'
    ]
  },
  {
    id: 'c8',
    title: 'Presentation Skills',
    category: 'Soft Skills',
    duration: '4 Weeks',
    level: 'Beginner',
    description: 'Design premium visual slide decks and couple them with high-stakes speaking flow. Structural outline for presenting concepts to directories.',
    price: 10499,
    rating: 4.7,
    reviewsCount: 134,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Amit Sharma',
    instructorRole: 'Sales Growth Catalyst & Corporate Consultant',
    syllabus: [
      'Week 1: Visual Storyboards - Storytelling hierarchies that replace boring paragraphs',
      'Week 2: Slide Designing - Layout balance, color emphasis, and visual graphs',
      'Week 3: Verbal Delivery Integration - Coordinating physical gestures with screen shifts',
      'Week 4: Q&A Handlings - Standing firm and addressing live hostile peer questions'
    ],
    outcomes: [
      'Create clean, professional slide structures presenting complex analytical metrics',
      'Deliver fluid, engaging presentations that coordinate narration with visuals',
      'Address demanding Q&A sessions from senior stakeholders with complete composure',
      'Receive pre-configured executive slide templates ready for instant deployment'
    ]
  },
  {
    id: 'c9',
    title: 'Time Management',
    category: 'Soft Skills',
    duration: '3 Weeks',
    level: 'Beginner',
    description: 'Combat burnout. Master operational prioritization grids, focus cycles, task delegations, and boundary setting for professional sustainability.',
    price: 7999,
    rating: 4.6,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Amit Sharma',
    instructorRole: 'Sales Growth Catalyst & Corporate Consultant',
    syllabus: [
      'Week 1: Priority Diagnostics - Decoupling the urgent from the truly strategic',
      'Week 2: Deep Work Routines - Mitigating Slack noise, notification pings, & distraction loops',
      'Week 3: Boundary Diplomacy - Saying "no" constructively to preserve code execution quality'
    ],
    outcomes: [
      'Establish balanced work rhythms that prevent mental burnout and task spillover',
      'Decline unstrategic commitments elegantly using proven diplomacy scripts',
      'Optimize daily deep work schedules to deliver high-quality project tasks faster',
      'Formulate robust, personal daily habits aligned with priority goals'
    ]
  },
  {
    id: 'c10',
    title: 'Leadership Development',
    category: 'Leadership',
    duration: '8 Weeks',
    level: 'Advanced',
    description: 'Transition from manager to visionary leader. Focus on strategic planning, human delegation, remote team alignment, and cultural engineering.',
    price: 24999,
    rating: 4.9,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Dyaneshwar',
    instructorRole: 'Founder & Head Coach',
    syllabus: [
      'Week 1-2: Defining the Vision - Translating board expectations to team milestones',
      'Week 3-4: Strategic Delegation - Matching employee parameters to the correct task size',
      'Week 5-6: Motivation & Morale - Cultivating ownership and low attrition team environments',
      'Week 7-8: Cultural Architecture - Building frameworks of extreme accountability'
    ],
    outcomes: [
      'Transition smoothly from manual task execution to macro-level team tracking',
      'Delegate critical projects with solid safety blocks and checklist reviews',
      'Create high-responsiveness workspaces that attract and retain skilled professionals',
      'Acquire customizable 1-on-1 employee sync sheets and review models'
    ]
  },
  {
    id: 'c11',
    title: 'Business Etiquette',
    category: 'Soft Skills',
    duration: '4 Weeks',
    level: 'Beginner',
    description: 'Navigate boardroom codes, internal diplomacy, high-level business meals, international communication style matching, and corporate code of conduct.',
    price: 8999,
    rating: 4.8,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Sneha Rao',
    instructorRole: 'Behavioral Psychologist & Leadership Coach',
    syllabus: [
      'Week 1: Corporate Dressing & Grooming - The semiotics of executive styling',
      'Week 2: Written Diplomacy - Establishing absolute poise over Slack, Emails, and Notes',
      'Week 3: International Cultures - Adapting to North American, European, and Asian business norms',
      'Week 4: Dining & Networking Composure - Managing conversations during executive meets'
    ],
    outcomes: [
      'Signal status and refinement immediately upon entering executive spaces',
      'Draft highly polished, diplomatic business emails that elicit fast responses',
      'Navigate multi-cultural meetings without awkward timing errors and custom misalignments',
      'Develop complete mastery over written, verbal, and physical boardroom habits'
    ]
  },
  {
    id: 'c12',
    title: 'Communication Skills',
    category: 'Soft Skills',
    duration: '6 Weeks',
    level: 'Intermediate',
    description: 'The foundation of all career advancement. Learn active listening, precise business writing, structured responses, and assertive alignment speaking.',
    price: 12499,
    rating: 4.9,
    reviewsCount: 224,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Sneha Rao',
    instructorRole: 'Behavioral Psychologist & Leadership Coach',
    syllabus: [
      'Week 1-2: Verbal Clarity - Eliminating filler words and articulating ideas concisely',
      'Week 3: Structural Presentation - Expressing arguments using logic grids',
      'Week 4: Assertiveness vs Aggressiveness - Direct talking with respectful tone weights',
      'Week 5-6: Executive Summaries - Synthesizing data for brief supervisor checks'
    ],
    outcomes: [
      'Convey complex technical concepts to non-technical directors without any jargon',
      'Structure every response logically to respect valuable meeting timelines',
      'Speak assertively with appropriate pacing and tone emphasis',
      'Create exact status updates that build immediate project progress confidence'
    ]
  },
  {
    id: 'c13',
    title: 'Entrepreneurship Development',
    category: 'Leadership',
    duration: '10 Weeks',
    level: 'Advanced',
    description: 'For future enterprise leaders. Learn company incorporation blueprints, cash flow statements, sales pipeline setups, and product launch mechanics.',
    price: 34999,
    rating: 4.9,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1531535934027-667f6db8a8ae?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Dyaneshwar',
    instructorRole: 'Founder & Head Coach',
    syllabus: [
      'Week 1-2: Visioning & Incorporation - Tax structures, equity splitting, and legal files',
      'Week 3-4: Unit Economics - Pricing formulas, runway calculations, and break-even points',
      'Week 5-7: Sales Pipelines & Launch Planning - Marketing and sales sequence tracking',
      'Week 8-10: Operations Scaling - Recruiting core teams, configuring systems, and managing clients'
    ],
    outcomes: [
      'Construct a complete, functional business blueprint ready for client acquisition',
      'Analyze cash flow statements and calculate burn rates with absolute precision',
      'Set up and monitor sales software and early pipeline outreach automation',
      'Obtain standardized legal and financial checklist sheets for founders'
    ]
  },
  {
    id: 'c14',
    title: 'Personal Effectiveness',
    category: 'Soft Skills',
    duration: '4 Weeks',
    level: 'Intermediate',
    description: 'Unlock peak cognitive agency. Work on habit loop restructuring, self-motivation hacks, public accountability metrics, and focused daily routines.',
    price: 11499,
    rating: 4.7,
    reviewsCount: 102,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    instructorName: 'Sneha Rao',
    instructorRole: 'Behavioral Psychologist & Leadership Coach',
    syllabus: [
      'Week 1: Habit Triggers & Restructuring - Designing behavioral feedback loops',
      'Week 2: Attention Preservation - Controlling screen dependency and dopamine triggers',
      'Week 3: Deep Focus Routines - Maintaining prolonged attention on strategic goals',
      'Week 4: Performance Auditing - Rigorous tracking of weekly achievement metrics'
    ],
    outcomes: [
      'Reconfigure daily habit loops to consistently prioritize strategic growth tasks',
      'Build long-term mental resilience against distraction and burnouts',
      'Establish a solid, predictable, and highly disciplined daily schedule',
      'Deploy custom tracking scoreboards to audit personal productivity levels'
    ]
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Navigating the Indian Tech Job Market: 2026 Developer Survival Guide',
    category: 'Industry Trends',
    excerpt: 'With shifting requirements and global macroeconomic changes, landing a premier tech role in cities like Bengaluru and Hyderabad requires a new tactical approach. Here is what recruiters are really looking for.',
    isFeatured: true,
    author: 'Dyaneshwar',
    date: 'May 12, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
    content: `
The tech job landscape across India's top hubs (Bengaluru, Hyderabad, Pune, Delhi NCR) has fundamentally shifted. The days of getting 5 offers simply by memorizing standard LeetCode scripts or boilerplate react templates are behind us. 

In 2026, recruiters have leveled up. Organizations are operating with leaner headcount parameters and expect "Force Multiplier" qualities even from mid-level engineers.

### 1. The Death of the "Pure Coder"
Companies are actively avoiding engineers who just take tickets, convert them to code, and slide them across the table. They need professionals who:
* **Deeply Understand Business Outcomes:** Can you explain how your refactoring of the notification service directly improved cart conversion by 1.2%?
* **Demonstrate High Agency:** If you notice a logical mismatch in the API specification, do you schedule a quick Sync with the Product Manager to rectify it, or do you code it regardless and complain during QA?

### 2. High Demand for System & Architecture Competency
Interview loops now prioritize Low-Level and High-Level System Design (LLD/HLD) early in the gating process.
* **Why?** Poor architecture decisions cost companies millions in cloud bills and maintenance hours. Showing you understand trade-offs between SQL indexing, NoSQL partition keys, and Redis caching makes you an instant standout.

### 3. Exec Presence is the Ultimate Edge
If you can architect a system, code it flawlessly, **and** present it to a non-technical director with clear, conversational English and slides, you are in the top 1% of candidate evaluations.

**Actionable Step:** Stop building standard clones for your portfolio. Build real, deployable microservice templates that solve a specific problem, document the architectural constraints, and write a neat Medium or LinkedIn log explaining your engineering choices.
    `
  },
  {
    id: 'b2',
    title: '5 Communication Soft Skills That Will Double Your Promotion Likelihood',
    category: 'Career Growth',
    excerpt: 'Many brilliant developers and leads stay stuck at individual contributor tiers because they communicate like compilers instead of leaders. Learn how simple structural shifts in your talking can alter your trajectory.',
    author: 'Sneha Rao',
    date: 'May 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    content: `
It’s a painful but common industry reality: the hardest worker is rarely the one who gets promoted to Manager, Director, or Principal levels. 

Promotions are decisions made in rooms you aren't in, by leaders who don't read your git commits. Their perception of you is driven by **how you communicate** during weekly check-ins, status reports, and stakeholder alignment calls.

Here are the 5 essential communication shifts you need to make to signal you are ready to lead:

### 1. Lead with the Summary (The Minto Pyramid Principle)
**Bad Habit:** Taking 10 minutes to explain historical context, server failures, database lockups, and finally presenting the conclusion.
**Executive Shift:** Lead with the result, then break down the details if asked. 
* *"Our weekly deployment was delayed by 2 hours due to a database locking error. It is fully resolved, and we have created a secondary read-replica to prevent future occurrences. Here are the three reasons why it occurred..."*

### 2. Stop using Passive/Victim Words
Eliminate phrases like:
* *"I was told to..."* (Sounds like you have zero context or agency)
* *"We will try to have it done..."* (Indicates uncertainty and low accountability)
* **Instead, use:** *"I have aligned with product to prioritize..."* and *"Our commitment is to deploy on..."*

### 3. Translate Tech Metrics to Business Values
When speaking to high-level managers, translation is key:
* Instead of: *"We decreased database query speeds by 300ms."*
* Say: *"Our database optimization reduced search loading times, which is projected to increase search-to-cart clicks by up to 4%."*

### 4. Direct Actionable Escalations
When flagging a blocker, never just throw it in Slack and walk away.
* **Always provide choices:** *"We are blocked on the payment gateway integration. I have outlined two solutions: Solution A (Wait 3 days for their API update) or Solution B (Integrate a secondary provider in 1 day). I recommend Solution B to maintain our launch timeline. Let me know if you align."*

### 5. Cultivate Vocal Composure under Pressure
When challenged by high-level leaders, breathing and pace are your armor. Speak 10% slower, use brief pauses before replying, and address assertions systematically instead of defensively.
    `
  },
  {
    id: 'b3',
    title: 'Case Study: How Ankita Transitioned from manual Testing to Technical PM in 6 Months',
    category: 'Success Stories',
    excerpt: 'Ankita felt pigeonholed in QA roles with stagnant payouts. Follow her exact transition roadmap, from cataloging tech skills, rewriting her PRD drafts, and mastering stakeholder alignments to landing her dream PM job.',
    author: 'Dyaneshwar',
    date: 'April 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    content: `
Ankita had been working as a QA tester for 4 years in a top-tier Indian services MNC in Pune. While she was excellent at finding edge cases, she felt increasingly disconnected from the "Why" behind the features she tested. Her career growth was plateauing, and she wanted deeper ownership, better compensation, and high-impact work.

She decided she wanted to transition to a Technical Product Manager (TPM) role. This is her exact blueprint for how she accomplished it within 6 months of coaching with WeConnect.

### Step 1: Mapping QA Strengths to PM Competencies
Ankita didn't discard her QA background; she repositioned it. 
* **QA Edge:** Deep understanding of user edge-cases, system bugs, and test-driven validation.
* **TPM Translation:** "Risk mitigation, rigorous feature validation, and complex API workflow mapping."

### Step 2: Practical PRD Sandbox Exercises
At WeConnect, Ankita was tasked with finding a feature gap in an application she used daily (GPay India) and writing a comprehensive, bulletproof Product Requirement Document (PRD).
* She detailed exact user journeys, user authentication failures, backend database state fields, and specific KPIs. She iterated on this draft 4 times based on feedback from Dyaneshwar.

### Step 3: Practicing Stakeholder Communication
We played mock boardroom simulations where Ankita had to represent this PRD to mock developers who raised massive technical pushbacks ("This is too complex", "We don't have database support for this"). Ankita learned to negotiate scope trade-offs and build consensus instead of backing down or escalating.

### Step 4: The Strategic Job Campaign
Instead of applying blindly, Ankita built a clean 1-page portfolio on Notion showcasing her GPay PRD, a video rundown of her system wireframes, and her QA-turned-PM resume. 

#### The Result:
Ankita received three Technical PM interview invites within 3 weeks. She nailed the final product design round at a Series B Fintech scale-up in Bangalore, secure a starting package that was **90% higher** than her previous QA remuneration, and is now happily steering their primary merchant ledger product.
    `
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'b_init_1',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@gmail.com',
    phone: '+91 98765 43210',
    topic: 'Technical Product Management Bootcamp',
    date: '2026-05-28',
    timeSlot: '11:00 AM - 11:30 AM',
    status: 'confirmed',
    createdAt: '2026-05-24 10:00 AM'
  },
  {
    id: 'b_init_2',
    name: 'Pooja Deshmukh',
    email: 'pooja.desh@outlook.com',
    phone: '+91 87654 32109',
    topic: 'Executive Presence & Soft Skills Mastery',
    date: '2026-05-29',
    timeSlot: '03:00 PM - 03:30 PM',
    status: 'confirmed',
    createdAt: '2026-05-23 02:40 PM'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ankita Sathe',
    role: 'Technical PM',
    company: 'Fintech Scaleup (Ex-QA at Infosys)',
    rating: 5,
    quote: "Dyaneshwar's coaching changed my entire perspective. I was stagnant in a manual testing role for 4 years. His PRD design frameworks and interview drills helped me transition with an instant 90% salary hike.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 't2',
    name: 'Karthik Pillai',
    role: 'Engineering Lead',
    company: 'Unicorn Logistics Tech',
    rating: 5,
    quote: 'The Executive Presence module under Sneha and Dyaneshwar taught me how to communicate at a Director level. I stopped talking in code lines and started talking in business value. I got promoted to Tech Lead last quarter.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 't3',
    name: 'Sunita Mehra',
    role: 'VP Agile Operations',
    company: 'Tier-1 IT Solutions',
    rating: 5,
    quote: 'Awesome templates! The scaling agile curriculum helped me restructure our delivery metrics across a department of 120+ engineers. Sprint leakage fell from 25% down to 6%. Staggering results.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300'
  }
];
