import {markdownStyles} from '../../components/ui/Markdown.jsx';
import {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import ProjectModal from '../../components/ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            title: 'My Story',
            image: 'assets/MyStory.png',
            description: `A personal space where I express my stories through dramatic pacing, cliffhangers, and immersive transitions, turning each narrative into a memorable experience.`,
            points: [
                `Created a personal storytelling website to narrate meaningful experiences with immersive pacing and atmospheric transitions.`,
                `Designed a narrative flow using cliffhangers, dramatic pauses, and smooth UI animations to enhance emotional engagement.`,
                `Implemented a dynamic content structure that reveals story segments progressively, increasing tension and reader curiosity.`,
                `Focused on cinematic storytelling—combining visuals, silence, and mood shifts to deliver impactful, thought-provoking narratives.`,
            ]
,
            technology: [
                'React',
                'TailwindCSS',
                'Framer Motion',
                'JavaScript',
                'GSAP',
                'HTML',
                'CSS',
            ],

            time: 'Nov 2025',

            github: 'https://github.com/IhitJoshi/MyStory',
            live: 'https://my-story-smoky.vercel.app/',
        },
        {
            title: 'Stock Engine',
            image: 'assets/StockEngine.png',
            description: `Stock-specific dynamic search engine`,
            points: [
                'Developed a stock-specific search engine enabling users to quickly find companies using dynamic, real-time search.',
                'Integrated interactive stock charts with multiple timeframes including 1D, 5D, 1M, 6M, and 1Y for detailed market analysis.',
                'Displayed live stock insights such as price movement, volume, highs/lows, and percentage changes using real-time data fetching.',
                'Designed a clean and responsive UI to offer a seamless and fast stock exploration experience.',
            ],
            technology: [
                'React',
                'Python',
                'Flask',
                'TailwindCSS',
                'Chart.js',
                'JavaScript',
                'API Integration',
                'Git',
            ],
            time: 'Sept 2025',
            github: 'https://github.com/IhitJoshi/Search_Engine',
            live: 'https://stock-engine.vercel.app/',
        },

        {
            title: 'COLLEGE MANAGEMENT SYSTEM',
            image: 'assets/CMIS.png',
            description: `A full-fledged College Management System with smart attendance, analytics, student records, and course management.`,
            
            points: [
                'Developed a **complete college management system** supporting student records, courses, attendance, and performance tracking.',
                'Implemented a **smart attendance module** with daily/summary views, bulk marking, multi-filters, CSV export, and real-time updates.',
                'Built **course & student management features** including dynamic forms, detail pages, and relational data structures.',
                'Integrated **advanced analytics** such as attendance trends, performance charts, and auto-calculated percentages.',
                'Created **visual indicators** with color-coded statuses, progress bars, badges, and responsive UI for clarity and usability.',
                'Designed a **fully responsive, intuitive interface** optimized for administrators, faculty, and system operators.',
                'Ensured **scalable architecture** with clean data flow, modular components, and reusable UI blocks.'
            ],

            technology: [
                'React',
                'TailwindCSS',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Chart.js',
                'JavaScript',
                'Git'
            ],

            time: 'Sept 2025',
            github: 'https://github.com/IhitJoshi/College-Management-System'
        },
        {
            title: 'EXCALIDRAW CLONE',
            image: 'assets/excalidraw.png',
            description: `A fully functional Excalidraw-style whiteboard for drawing, sketching, and exporting visuals.`,
            
            points: [
                'Implemented complete whiteboard functionality including shapes, freehand drawing, eraser, colors, and stroke customization.',
                'Enabled drag-and-drop movement, object resizing, undo/redo actions, and smooth canvas interactions.',
                'Integrated export options such as saving drawings as PNG/JPG and downloading JSON for data persistence.',
                'Built on the Canvas API to support precise rendering, layering, and optimized drawing performance.',
                'Designed a clean, responsive interface using TailwindCSS for an intuitive sketching experience.',
                'Added real-time updates for tools, settings, and canvas state using lightweight, modular logic.',
            ],

            technology: [
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'TailwindCSS',
                'Canvas API',
                'JSON',
                'Git'
            ],

            time: 'Jun 2025',
            github: 'https://github.com/IhitJoshi/ExcaliDraw_Clone',
            live: 'https://graceful-concha-240748.netlify.app/'
        },
        {
            title: 'AR TILE VISUALIZATION',
            image: 'assets/AR.jpeg',
            description: `A 24-hour hackathon project built for CodeArena 1.0, integrating AR technology with MERN Stack for immersive tile visualization.`,
            
            points: [
                'Participated in the 24-hour CodeArena 1.0 Hackathon at Darshan University as part of team **Bug Busters**.',
                'Worked on the **AR Tile Visualization** problem statement — the only team to tackle this innovative category.',
                'Developed a functional prototype using **Unity**, **AR Foundation**, and the **MERN Stack** (MongoDB, Express, React, Node.js).',
                'Built an immersive AR-based visualization app that connects real-world tile placement with interactive digital rendering.',
                'Strengthened teamwork, rapid problem-solving, and technical decision-making under time constraints.',
                'Gained hands-on experience integrating AR pipelines with full-stack systems for real-world usability.',
            ],

            technology: [
                'Unity',
                'AR Foundation',
                'React',
                'Node.js',
                'Express.js',
                'MongoDB',
                'JavaScript',
                'Git'
            ],

            time: 'July 2025',
            github: 'https://github.com/DharmikGohil013/SnapSpace',
            apk : 'https://drive.google.com/file/d/1zsj1cun8kFNHZcXjZ1zDxK2KNrNQGOaG/view' 
        },
                
        {
            title: 'SAFAINOVA',
            image: 'assets/safainova.png',
            description: `An AI-driven waste management system designed to automate classification, disposal, and analytics for dark store operations.`,

            points: [
                'Led a team to build **SafaiNova**, an AI-powered waste management system for dark store operations.',
                'Integrated **AI-based scanning & classification** using barcode/QR detection and computer vision to automate waste identification.',
                'Implemented **intelligent waste categorization**, distinguishing recyclable materials from expired or damaged products.',
                'Developed an **automated disposal workflow** with optimized pickup routing using **Google Maps integration**.',
                'Built a **real-time analytics dashboard** for waste trends, recycling efficiency, and cost-saving insights.',
                'Enhanced sustainability by reducing landfill waste, improving compliance, and lowering operational expenditures.',
                'Collaborated with a multidisciplinary team to merge **technology, automation, and environmental impact**.',
            ],

            technology: [
                'React',
                'Next.js',
                'Tailwind CSS',
                'Bootstrap',
                
                'Node.js',
                'Express.js',
                'MongoDB',
                'Firebase',
                'REST API',

                'TensorFlow',

                'Git'
            ],

            time: 'Mar 2025',
            github: 'https://github.com/DharmikGohil013/Sfainova_Hackron',
        },
        {
            title: 'AYURSUTRA',
            image: 'assets/ayursutra.png',
            description: `A Panchakarma patient management & therapy scheduling system built for SIH 2025, featuring automated planning, AI analytics, and multi-role access.`,

            points: [
                'Developed **AyurSutra** for Smart India Hackathon 2025 – a complete Panchakarma therapy management and scheduling platform.',
                'Implemented a **Therapy-Aware Scheduler** that maps Panchakarma sequences (Snehana → Swedana → Vamana) without conflicts.',
                'Integrated **AI-powered feedback analytics** to convert free-text notes into actionable therapy adjustments.',
                'Designed a **hybrid Chikitsa model** combining in-clinic sessions with secure teleconsultations.',
                'Added **progress dashboards** to visualize therapy improvements, patient adherence, and recovery trends.',
                'Implemented **multilingual UX**, low-bandwidth optimization, and accessible design for rural adoption.',
                'Included **clinic & practitioner authenticity verification** using OCR and automated document checks.',
                'Developed **role-based panels** for Patients, Practitioners, and Admins with real-time monitoring.',
            ],

            technology: [
                'React',
                'Next.js',
                'Tailwind CSS',
                'Bootstrap',

                'Node.js',
                'Express.js',
                'MongoDB',
                'Firebase',
                'REST APIs',

                'TensorFlow',
                'BERT',
                'YOLOv5',
                'Mask R-CNN',
                'OCR',

                'WebSockets',
                'JWT',
                'OAuth 2.0',
                'Git'
            ],

            time: 'oct 2025',
            github: 'https://github.com/IhitJoshi/AyurSutra',     
            live: 'https://hackathonprototype.vercel.app/'
        },
    ];

    const containerRef = useRef(null);

    return (
        <div
            className="min-h-screen bg-white dark:bg-neutral-900 py-8 md:py-16 relative p-3 md:p-10 transition-colors duration-300"
            id="projects"
            ref={containerRef}
        >
            <style>{markdownStyles}</style>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white max-w-4xl">
                    My Personal Projects
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl">
                    A showcase of my technical expertise through various
                    personal
                    projects.
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 relative">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true, margin: '-100px'}}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div
                                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </div>

                                {/* Project Info */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div
                                        className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span
                                            className="text-sm text-neutral-500 dark:text-neutral-400">
                      {project.time.split(' - ')[0]}
                    </span>
                                    </div>

                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-2 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies Preview */}
                                    <div
                                        className="flex flex-wrap gap-1.5 mb-4">
                                        {project.technology.slice(0, 3).
                                            map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                                                >
                        {tech}
                      </span>
                                            ))}
                                        {project.technology.length > 3 && (
                                            <span
                                                className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                        +{project.technology.length - 3}
                      </span>
                                        )}
                                    </div>

                                    {/* Read More Indicator */}
                                    <div
                                        className="mt-auto text-blue-500 dark:text-blue-400 text-sm font-medium flex items-center gap-1 transition-all">
                                        <span>Read more</span>
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M9 5l6 7-6 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;