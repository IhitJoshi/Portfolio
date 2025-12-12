// import React from "react"
import { Timeline } from "../../components/index.js"

function Experience() {
    const experiences = [
        {
            role: "Web Intern",
            name: "Ediglobe",
            logo: "/assets/Ediglobe.webp",
            link: "https://www.ediglobe.com/",
            description: [
                "Spent 2 months learning and strengthening core web development skills including HTML, CSS, JavaScript, and React.",
                "Joined Ediglobe as a Web Intern and contributed to real-world development tasks and UI improvements.",
                "Currently working on building CMIS, a student management portal aimed at streamlining data handling and academic workflows."
            ],
            startDate: "May '25",
            endDate: "July '25",
            duration: "2 Months",
        },
        {
            role: "Campus Ambassador",
            name: "InternsElite",
            logo: "/assets/internselite.jpeg",
            link: "https://internselite.net/",
            description: [
                "Represented InternsElite as a Campus Ambassador and promoted the organization’s programs and opportunities to students.",
                "Actively engaged with peers, managed outreach activities, and encouraged student participation in InternsElite initiatives.",
                "Helped bridge communication between the company and campus, increasing awareness and involvement through consistent updates and interactions."
            ],
            startDate: "Nov '24",
            endDate: "Present",
            duration: null,
        },
    ]

    return (
        <div className="w-full" id="experience">
            <Timeline experiences={experiences} />
        </div>
    )
}

export default Experience
