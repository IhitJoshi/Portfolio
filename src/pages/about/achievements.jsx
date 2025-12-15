import AchievementCard from '../../components/achievementCard.jsx';
import {motion} from 'framer-motion';

const Achievements = () => {
  const achievements = [
  {
  title: 'IIT Kharagpur',
  date: 'May – July 2025',
  icon: 'Code',
  iconColor: '#4CAF50',
  link: 'https://drive.google.com/file/d/1XQODg6ZFut2JfUcHdhgWF9LNt_oy64m1/view?usp=sharing',
  btnText: 'View Certificate',
  description: [
    'Completed a 2-month Web Development program with IIT Kharagpur’s Kshitij Fest.',
    'Completed a 30-day internship at EdiGlobe, applying skills to real projects.',
    'Gained hands-on experience in full-stack development and team collaboration.',
  ],
},


    {
      title: 'CodeArena 1.0 – 24 Hours Hackathon',
      date: '19-20 July 2025',
      icon: 'Brain',
      iconColor: '#34bba9',
      link: 'https://drive.google.com/file/d/1USeECL-AVtHH0hvIOBVUMAqt_kK1Y_eW/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Team Leader of Bug Busters at CodeArena 1.0, Darshan University.',
        'Built an AR-based visualization solution using Unity, AR Foundation & MERN Stack.',
      ],
    },

    // {
    //   title: 'LeetCode ',
    //   date: 'Sep 15, 2024',
    //   icon: 'Code',
    //   iconColor: '#FF9800',
    //   link: 'https://drive.google.com/file/d/1x0bW_Bsl_-ztRXMkPtTkXwH-DyF67njf/view?usp=sharing',
    //   btnText: 'View Details',
    //   description: [
    //     'LeetCode Weekly Contest 415',
    //     'Ranked 1644 out of 33,921 global participants',
    //   ],
    // },

    {
      title: 'HackHazards ’25 – Global Hackathon',
      date: '11–27 April 2025',
      icon: 'Code',
      iconColor: '#FF9800',
      link: 'https://drive.google.com/file/d/1J9IY9s1nw75gmjYqp8qCRFGZTpzShL01/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Participated in the world’s largest community-run hackathon.',
        'Collaborated with Team Bug Buster on innovative builds.',
        'Gained global exposure and hands-on hackathon experience.',
      ],
    },


    // {
    //   title: 'Byte Quest',
    //   date: 'Feb 2024',
    //   icon: 'Trophy',
    //   iconColor: '#FFD700',
    //   link: 'https://drive.google.com/file/d/1jfLeezAQl4oSY_po21j33BQT_uEHclSa/view?usp=sharing',
    //   btnText: 'View Certificate',
    //   description: [
    //     'Secured 1rd position among all year students',
    //     'Solved complex algorithmic challenges',
    //     'Recognized for optimal solution approaches',
    //   ],
    // },
    {
      title: 'IIT Kharagpur × EdiGlobe – Web Development Program',
      date: 'May - June 2025',
      icon: 'Trophy',
      iconColor: '#FFD700',
      link: 'https://drive.google.com/file/d/1VDFNw11avCVKbDSXpWZzckcTqJXYlsxt/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Completed a 2-month Web Development course by IIT Kharagpur’s Kshitij faculty.',
        'Gained practical experience through a 30-day internship at EdiGlobe.',
        'Developed real-world skills in full-stack development and teamwork.',
      ],
    },

    // {
    //   title: 'GeeksForGeeks',
    //   date: '2023',
    //   icon: 'Award',
    //   iconColor: '#e64d33',
    //   link: 'https://www.geeksforgeeks.org/user/officialj9h58',
    //   btnText: 'View GFG Profile',
    //   description: [
    //     'Weekly Coding Contest 135 | 19th rank',
    //     'Weekly Coding Contest 129 | 53rd rank',
    //   ],
    // },

    {
      title: 'Hackron – 24 Hour Hackathon',
      date: '5–6 March 2025',
      icon: 'Award',
      iconColor: '#e64d33',
      link: 'https://drive.google.com/file/d/1FPXsNBGWv5Pg6FoNrO1KgxJFXzn7YR5S/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Participated in Hackron, a 24-hour hackathon at Newton School of Technology, Pune.',
        'Built a waste management system with AI integration alongside Team Bug Buster.',
        'Gained hands-on experience in teamwork, pressure handling, and rapid development.',
      ],
    },


    // {
    //   title: 'Code Ramzat',
    //   date: 'Oct 2023',
    //   icon: 'Crown',
    //   iconColor: '#a252d9',
    //   link: 'https://drive.google.com/file/d/1XjM_b_F_J35P0Y43_Lsgko8gSfZVP3SW/view?usp=sharing',
    //   btnText: 'View Certificate',
    //   description: [
    //     'Secured 3rd position among all year students',
    //     'DSA competition on CodeChef ',
    //   ],
    // },

    {
      title: 'Jain University – National Level Hackathon',
      date: '24 April 2025',
      icon: 'Crown',
      iconColor: '#a252d9',
      link: 'https://drive.google.com/file/d/1Gi3GTztny10fNJVgmi-pHR-5FkX_sfFO/view?usp=sharing',
      btnText: 'View Certificate',
      description: [
        'Selected for Round 1 of a national-level hackathon hosted by Jain University.',
        'Explored real-world problem solving with innovative approaches.',
        'Could not continue due to academic priorities.',
      ],
    },


    // {
    //   title: 'JEE Advanced',
    //   date: '2022',
    //   icon: 'Star',
    //   iconColor: '#FFC107',
    //   link: 'https://drive.google.com/file/d/118_UHHGKqQ_2aQP452ZRDp860UVqE_P1/view?usp=sharing',
    //   btnText: 'View Details',
    //   description: [
    //     'Cleared JEE Advanced 2022',
    //     'AIR 28,063',
    //   ],
    // },
  ];

  return (
      <section
          className="w-full font-sans px-3 md:px-10 bg-white dark:bg-neutral-900 transition-colors duration-300"
          id="achievements"
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <motion.div
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.2}}
              viewport={{once: true}}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Achievements
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl">
              Notable milestones that highlight my growth and dedication in the
              tech world.
            </p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto pb-20">
          <div className="flex flex-wrap gap-6">
            {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} index={index}/>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Achievements;