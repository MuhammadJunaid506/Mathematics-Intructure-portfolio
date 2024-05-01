import React from 'react';

interface TeachingExperienceProps {
  experiences?: TeachingExperience[];
}

interface TeachingExperience {
  title: string;
  grade: string;
  school: string;
  location: string;
  points: string[];
}

const TeachingExperience: React.FC<TeachingExperienceProps> = ({ experiences = [] }) => {
  const teachingExperiences: TeachingExperience[] = [
    {
      title: "Teacher",
      grade: "2nd and 4th Grade",
      school: "Saint Bernadette Elementary",
      location: "Burien, WA",
      points: [
        "Implement Grade 4 Common Core and state curricula in planning, teaching, assessment, and standards-based grading",
        "Facilitate social and emotional learning through daily classroom meetings to promote student problem solving of self-identified issues, such as feeling disrespected, listening and attention distractions, working cooperatively and misusing class work time",
        // Add more points as needed
      ]
    },
    {
      title: "Teacher",
      grade: "4th Grade",
      school: "Saint Joseph Elementary",
      location: "Redding, CA",
      points: [
        "Implemented Grade 4 Common Core and state curricula in planning, teaching, assessment, grading and behavior modification",
        "Integrated “Project Lead the Way Launch” to promote collaborative problem-solving STEM challenges",
        // Add more points as needed
      ]
    },
    {
      title: "Teacher",
      grade: "3rd Grade",
      school: "Sacred Heart Elementary",
      location: "Red Bluff, CA",
      points: [
        "Structured classroom routines and management strategies to student needs to foster individual student and classroom successes",
        "Taught reading strategies through in-depth author and novel studies to develop literacy skills",
        // Add more points as needed
      ]
    },
    {
      title: "English Teaching Assistant",
      grade: "9th-12th Grade",
      school: "Liceo Leonardo da Vinci",
      location: "Milan, Italy",
      points: [
        "Assisted principal teachers in 12 various-level classes by developing original curriculum, presentations and assignments to enhance students’ English-as-a-Foreign-Language speaking and writing skills",
        // Add more points as needed
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Teaching Experience</h2>
      <div className="space-y-8">
        {teachingExperiences.map((experience, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-gray-600">{experience.grade}</p>
            <p>{experience.school}</p>
            <p>{experience.location}</p>
            <ul className="list-disc list-inside ml-4">
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingExperience;
