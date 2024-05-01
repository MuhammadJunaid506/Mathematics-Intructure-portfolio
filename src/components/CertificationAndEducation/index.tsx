import React from 'react';

interface CertificationAndEducationProps {}

const CertificationAndEducation: React.FC<CertificationAndEducationProps> = () => {
  const certifications = [
    {
      title: "Washington Residency Teacher Education Certificate",
      period: "2017-present",
      endorsements: [
        "Elementary Education Endorsement, Grades K-8",
        "English Language Learner Endorsement"
      ]
    },
  ];

  const education = [
    {
      degree: "Master of Education",
      institution: "University of Portland",
      location: "Portland, OR",
      details: [
        "English to Speakers of Other Languages (ESOL) Endorsement",
        "Pacific Alliance for Catholic Education (PACE) Two-Year Teaching Service Program"
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Certification and Education</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Licensure and Certification</h3>
        <ul className="list-disc list-inside">
          {certifications.map((certification, index) => (
            <li key={index} className="mb-2">
              <p>{certification.title}</p>
              <p>{certification.period}</p>
              {certification.endorsements && (
                <ul className="list-disc list-inside ml-4">
                  {certification.endorsements.map((endorsement, idx) => (
                    <li key={idx}>{endorsement}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside">
          {education.map((edu, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{edu.degree}</p>
              <p>{edu.institution}, {edu.location}</p>
              {edu.details && (
                <ul className="list-disc list-inside ml-4">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CertificationAndEducation;
