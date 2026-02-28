export const commands = {
  help: (
      <span>
      <strong>whoami</strong> - Who am I <br/>
      <strong>about</strong> - Short intro <br/>
      <strong>experience</strong> - My professional experience <br/>
      <strong>projects</strong> - Showcasing what I&#39;ve built <br/>
      {/* <strong>education</strong> - My academic background <br/> */}
      <strong>skills</strong> - Technical expertise <br/>
      <strong>achievements</strong> - My notable accomplishments <br/>
      <strong>socials</strong> - Connect with me  <br/>
      {/* <strong>activities</strong> - Community involvement <br/>
      <strong>contributions</strong> - Open source work <br/>
      <strong>dsa</strong> - Data Structures & Algorithms profile <br/> */}
    </span>
  ),

      whoami: (
      <span className="light-mode-whoami dark-mode-whoami">
        <pre>
    {`
      ██╗ ██╗  ██╗ ██╗████████╗
      ██║ ██║  ██║ ██║╚══██╔══╝
      ██║ ███████║ ██║   ██║   
      ██║ ██╔══██║ ██║   ██║   
      ██║ ██║  ██║ ██║   ██║   
      ╚═╝ ╚═╝  ╚═╝ ╚═╝   ╚═╝   
    `}
        </pre>

        <pre>
    {`
        ██╗ ██████╗ ███████╗██╗ ██╗██╗
        ██║██╔═══██╗██╔════╝██║ ██║██║
        ██║██║   ██║███████╗██████║██║
    ██  ██║██║   ██║     ██╝██╔═██║██║
    █████╔╝╚██████╔╝███████╗██║ ██║██║
    ╚════╝  ╚═════╝ ╚══════╝╚═╝ ╚═╝╚═╝

    `}
        </pre>

        <br/>
      </span>
    ),

      about: (
      <span>
        <p>• I'm a <strong style={{color: 'var(--highlight-color)'}}>Frontend Developer & UI/UX Designer</strong>.</p>
        <p>• Creative coder who loves storytelling, animations, and smooth user experiences.</p>
        <p>• Exploring DevOps, modern design systems, and interactive interfaces.</p>
        <p>• {`'27`} grad of <strong>B.Tech Computer Science</strong>.</p>
        <p>
          • When I'm not coding, you can find me on -  
          <a 
            href={'https://www.chess.com/member/ihitjoshi'} 
            target={'_blank'} 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Chess.com
          </a>.
        </p>
        <br/>
        <p>
          Type <strong style={{color: 'var(--highlight-color)'}}>skills</strong> to see my technical toolkit or 
          <strong style={{color: 'var(--highlight-color)'}}> projects</strong> to view my work!
        </p>
      </span>
    ),

      experience: (
      <span>
        <p>
          <strong style={{color: 'var(--highlight-color)'}}>
            <a href="https://www.ediglobe.com/" target="_blank">Ediglobe</a>
          </strong> 
          | <em>Web Intern</em> | May ’25 – July ’25
        </p>
        <p>• Spent 2 months learning and strengthening core web development skills including HTML, CSS, JavaScript, and React.</p>
        <p>• Contributed to real-world development tasks and UI improvements as part of the Ediglobe development team.</p>
        <p>• Worked on CMIS, a student management portal designed to streamline academic data handling and workflows.</p>
        <br/>

        <p>
          <strong style={{color: 'var(--highlight-color)'}}>
            <a href="https://internselite.net/" target="_blank">InternsElite</a>
          </strong> 
          | <em>Campus Ambassador</em> | Nov ’24 – Present
        </p>
        <p>• Represented InternsElite on campus and promoted the organization’s opportunities to students.</p>
        <p>• Engaged peers, managed outreach activities, and encouraged student participation in various initiatives.</p>
        <p>• Bridged communication between the company and campus, improving awareness and involvement.</p>
        <br/>
      </span>
    ),


      projects: (
      <span>
        <p><strong style={{color: 'var(--highlight-color)'}}>AYURSUTRA</strong> | AI-Powered Hackathon Project | <em>2025</em></p>
        <p>• Developed an AR-based visualization and AI-integrated solution during CodeArena 1.0 Hackathon.</p>
        <p>• Utilized Unity, AR Foundation, and MERN stack to create an immersive real-world interaction experience.</p>
        <p>• Focused on innovation, teamwork, and rapid problem-solving during the 24-hour build sprint.</p>
        <p>• <a href="https://lnkd.in/dHypxp3x"
                target="_blank"
                rel="noopener noreferrer">Project Link</a></p>
        <br/>

        <p><strong style={{color: 'var(--highlight-color)'}}>MY STORY</strong> | Personal Storytelling Website | <em>Nov 2025</em></p>
        <p>• Built a personalized storytelling platform to share meaningful life lessons, reflections, and experiences.</p>
        <p>• Designed a clean, emotional, and narrative-focused UI to deliver stories in an expressive way.</p>
        <p>• Created structured chapters and scenes to allow smooth reading flow and emotional impact.</p>
        <p>• <a href="https://github.com/IhitJoshi/MyStory"
                target="_blank"
                rel="noopener noreferrer">GitHub</a> | <a href="https://my-story-smoky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">Live Demo</a></p>
        <br/>

        <p>Type <strong style={{color: 'var(--highlight-color)'}}>projects_all</strong> to see all projects</p>
        <br/>
        <p>Type <strong style={{color: 'var(--highlight-color)'}}>skills</strong> to see my technical expertise!</p>
      </span>
    ),


      projects_all: (
      <span>

        {/* AYURSUTRA */}
        <p><strong style={{color: 'var(--highlight-color)'}}>AYURSUTRA</strong> | AR + AI Hackathon Project | <em>2025</em></p>
        <p>• Built during CodeArena 1.0 Hackathon using Unity, AR Foundation, and MERN stack.</p>
        <p>• Created immersive AR-based visualization with real-world interaction.</p>
        <p>• Focused on rapid prototyping, teamwork, and innovation under a 24-hour challenge.</p>
        <p>• <a href="https://lnkd.in/dHypxp3x" target="_blank" rel="noopener noreferrer">Project Link</a></p>
        <br/>

        {/* MY STORY */}
        <p><strong style={{color: 'var(--highlight-color)'}}>MY STORY</strong> | Personal Storytelling Platform | <em>Nov 2025</em></p>
        <p>• A narrative-driven website sharing personal experiences and life lessons.</p>
        <p>• Minimal, expressive UI crafted for emotional storytelling and smooth reading flow.</p>
        <p>• <a href="https://github.com/IhitJoshi/MyStory" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://my-story-smoky.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
        <br/>

        {/* STOCK SEARCH ENGINE */}
        <p><strong style={{color: 'var(--highlight-color)'}}>STOCK SEARCH ENGINE</strong> | Stock Visualization Tool | <em>Sep 2025</em></p>
        <p>• Dynamic search engine for stock prices with 1D, 5D, 1M, 6M, 1Y charts.</p>
        <p>• Displays real-time stock info, historical charts, and intelligent UI updates.</p>
        <p>• <a href="https://github.com/IhitJoshi/Search_Engine" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <br/>

        {/* FACE ANONYMIZER */}
        <p><strong style={{color: 'var(--highlight-color)'}}>FACE ANONYMIZER</strong> | Real-Time Face Blurring | <em>May 2025</em></p>
        <p>• Webcam-based face anonymization using OpenCV and MediaPipe.</p>
        <p>• Outputs blurred faces in real time for privacy and security applications.</p>
        <p>• Tech Stack: Python, OpenCV, MediaPipe, Git</p>
        <p>• <a href="https://github.com/JaiminPatel345/face-anonymizer" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <br/>

        {/* COLLEGE MANAGEMENT SYSTEM */}
        <p><strong style={{color: 'var(--highlight-color)'}}>COLLEGE MANAGEMENT SYSTEM</strong> | Full Academic Portal | <em>2025</em></p>
        <p>• Built a complete CMS with attendance tracking, analytics, student summaries, and CSV export.</p>
        <p>• Color-coded status indicators, performance badges, and multi-filter search.</p>
        <p>• Real-time updates, responsive UI, and full admin workflow integration.</p>
        <p>• <a href="https://github.com/IhitJoshi/College-Management-System" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <br/>

        {/* EXCALIDRAW CLONE */}
        <p><strong style={{color: 'var(--highlight-color)'}}>EXCALIDRAW CLONE</strong> | Drawing App | <em>Jun 2025</em></p>
        <p>• A lightweight clone of Excalidraw supporting shapes, freehand drawing, and JSON import/export.</p>
        <p>• Built using HTML, JavaScript, TypeScript, Tailwind CSS, and Canvas API.</p>
        <p>• <a href="https://github.com/IhitJoshi/ExcaliDraw_Clone" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="https://graceful-concha-240748.netlify.app/" target="_blank" rel="noopener noreferrer"> Live</a></p>
        <br/>

        {/* SAFAINOVA */}
        <p><strong style={{color: 'var(--highlight-color)'}}>SAFAINOVA</strong> | AI Waste Management System | <em>Hackathon</em></p>
        <p>• AI-powered solution with scanning, classification, analytics, and Google Maps workflow.</p>
        <p>• Categorizes recyclable vs non-recyclable waste using TensorFlow and computer vision.</p>
        <p>• Tech Stack: React, Next.js, MERN, Firebase, Tailwind, TensorFlow</p>
        <p>• <a href="https://lnkd.in/dHypxp3x" target="_blank" rel="noopener noreferrer">Project Link</a></p>
        <br/>

        {/* PORTFOLIO */}
        <p><strong style={{color: 'var(--highlight-color)'}}>PORTFOLIO WEBSITE</strong> | Animated Developer Portfolio | <em>Dec 2025</em></p>
        <p>• Fully animated portfolio with GSAP, Framer Motion, smooth scrolling, and dark/light mode.</p>
        <p>• Interactive projects, terminal intro, contact form, and responsive modern UI.</p>
        <p>• Tech Stack: React, Tailwind, JavaScript, Git, JSX</p>
        <br/>

        <p>Type <strong style={{color: 'var(--highlight-color)'}}>skills</strong> to view my technical expertise!</p>
      </span>
    ),


  // education: (
  //     <span>
  //     <div>
  //       <p><strong style={{color: 'var(--highlight-color)'}}>Birla Vishvakarma Mahavidyalaya</strong>, Anand, Gujarat</p>
  //       <p>B.Tech, Computer Science | 2022 – 2026</p>
  //       <p>SPI: 7.20</p>
  //       <br/>
  //     </div>
  //     <div>
  //       <p><strong style={{color: 'var(--highlight-color)'}}>Baroda High School Danteshwar</strong>, Vadodara, Gujarat</p>
  //       <p>Science, Gujarat Board | 2020 – 2022</p>
  //       <p>• HSC: 88%</p>
  //       <p>• GUJCATE: 88/120</p>
  //       <p>• JEE Advanced 2022: AIR 28k</p>
  //       <br/>
  //     </div>
  //     <div>
  //       <p><strong
  //           style={{color: 'var(--highlight-color)'}}>Nutan Vidyalaya</strong>, Vadodara, Gujarat</p>
  //       <p>Gujarat Board | till 2020 </p>
  //       <p>• SSC: 86.83%</p>
  //       <br/>
  //     </div>
  //     <br/>
  //     <p>Type <strong
  //         style={{color: 'var(--highlight-color)'}}>activities</strong> to see my campus involvement!</p>
  //   </span>
  // ),

      achievements: (
      <span>
        
        <p>🎓 Completed <strong style={{color: 'var(--highlight-color)'}}>IIT Kharagpur</strong> Web Development Program</p><br></br>

        <p>🌍 Participated in <strong style={{color: 'var(--highlight-color)'}}>HackHazards ’25</strong>, the world’s largest community-run hackathon</p><br></br>

        <p>🚀 Team Leader at <strong style={{color: 'var(--highlight-color)'}}>CodeArena 1.0</strong> 24-hour hackathon</p><br></br>

        <p>⚡ Participated in <strong style={{color: 'var(--highlight-color)'}}>Hackron</strong> 24-hour hackathon at NST ADYPU</p><br></br>

        <p>🎯 Selected for Round 1 of <strong style={{color: 'var(--highlight-color)'}}>Jain University National Hackathon</strong></p><br></br>

        <br/>
        <p>write <strong style={{color: 'var(--highlight-color)'}}>clear </strong>for clean terminal</p>
      </span>
    ),


      socials: (
      <span>
        <p><strong>Email:</strong> 
          <a href="mailto:joshiihitc@gmail.com">joshiihitc@gmail.com</a>
        </p>

        <p><strong>LinkedIn:</strong> 
          <a
            href="https://www.linkedin.com/in/ihit-joshi-a82859300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ihit-joshi-a82859300/
          </a>
        </p>

        <p><strong>GitHub:</strong> 
          <a
            href="https://github.com/IhitJoshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/IhitJoshi
          </a>
        </p>

        <p><strong>Portfolio:</strong> 
          <a
            href="https://ihitjoshi.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            ihitjoshi.me
          </a> {`// what you're viewing :)`} 
        </p>
      </span>
    ),


  // activities: (
  //     <span>
  //     <p><a target={'_blank'}
  //           href={`https://gdg.community.dev/gdg-on-campus-birla-vishvakarma-mahavidyalaya-engineering-college-anand-india`
  //           }><strong style={{color: 'var(--highlight-color)'}}>Google Developer Groups On Campus BVM</strong></a></p>
  //     <p><em>Tech Expert</em> | Sep 2024 – Present</p>
  //     <br/>
  //     <p>• Developed and deployed the official <a target={'_blank'}
  //                                                 href={`https://gdgc-bvm.vercel.app`}>GDG BVM website</a> using React.js</p>
  //     <p>• Hosted 5+ tech sessions and workshops on tools including:</p>
  //     <p>  - Git & GitHub</p>
  //     <p>  - Figma</p>
  //     <p>  - Azure</p>
  //     <p>  - AI in 30 Days Code Jam</p>
  //   </span>
  // ),

  // contributions: (
  //     <span>
  //     <p><a target={'_blank'}
  //             href={`https://github.com/freeCodeCamp/freeCodeCamp`}><strong
  //         style={{color: 'var(--highlight-color)'}}>Free Code Camp</strong></a> - Contributed documentation improvements</p>
  //     <p><a target={'_blank'}
  //             href={`https://github.com/cboard-org/cboard`}><strong
  //         style={{color: 'var(--highlight-color)'}}>Cboard</strong></a> - Assisted with open source AAC communication tool</p>
  //     <br/>
  //     <p>I believe in giving back to the community that has taught me so much!</p>
  //   </span>
  // ),

  // dsa: (
  //     <span>
  //     <p>Knight in <a target={'_blank'}
  //             href={`https://leetcode.com/u/soldier_of_god`}><strong
  //         style={{color: 'var(--highlight-color)'}}>LeetCode</strong></a></p>
        
  //     <p>3-star rated coder in <a href={`https://www.codechef.com/users/jaimin_patel_3`}
  //             target={'_blank'}><strong
  //         style={{color: 'var(--highlight-color)'}}>CodeChef</strong></a></p>
  //     <br/>
  //     <p>I regularly practice algorithmic problem-solving to strengthen my analytical thinking.</p>
  //   </span>
  // ),

      skills: (
      <span>
        <pre style={{color: 'var(--highlight-color)'}}>
    {`
    ──────────────── MY SKILLS & TECH STACK ───────────
              
      ⚡ BACKEND         ⚡ FRONTEND        ⚡ DATABASE
      ---------------   ---------------   -------------
      ✅ Node.js        ✅ React.js        ❌ (Not focused)
      ✅ Express.js     ✅ Tailwind CSS     
                        ✅ HTML / CSS       
                        ✅ JavaScript        
                        ✅ TypeScript        
                        ✅ Canvas API        
                        ✅ JSON              

      ⚡ DEVOPS          ⚡ LANGUAGES       ⚡ OTHER
      ---------------   ---------------   -------------
      ✅ Git            ✅ JavaScript     ✅ GSAP
                        ✅ TypeScript     ✅ Framer Motion
                        ✅ Python         ✅ UI/UX Design
                        ✅ Java           ✅ Storytelling UI
                        ✅ SQL           
          
    ───────────────────────────────────────────────────
    `}
        </pre>
      </span>
    ),


  skill: null,
};

commands.skill = commands.skills;
commands.contact = commands.socials;

export const welcomeMessage = (
    <span>
        {`Type 'help' for all available commands.`} <br/>
      </span>
);

export const themes = {
  'light': {
    themeBGColor: '#ffffff',
    themeToolbarColor: '#f5f5f5',
    themeColor: '#333333',
    themePromptColor: '#3b82f6', // blue-500
  },
  'my-custom-theme': {
    themeBGColor: '#1f2937', // dark:neutral-800
    themeToolbarColor: '#111827', // dark:neutral-900
    themeColor: '#f9fafb', // dark:neutral-50
    themePromptColor: '#60a5fa', // dark:blue-400
  },
};