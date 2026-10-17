import React from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description?: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface Certification {
  name: string;
  detail: string;
}

interface ExperienceWindowProps {
  experience: Experience[];
  education: Education[];
  certifications?: Certification[];
  language?: 'it' | 'en';
}

const labels = {
  en: {
    heading: 'Experience & Education',
    description: 'My professional and Academic journey',
    learningHeading: 'Education & Certifications',
    learningDescription: 'My studies and learning journey',
    work: 'Work Experience',
    education: 'Education',
    certifications: 'Certifications & Programs',
  },
  it: {
    heading: 'Esperienza e formazione',
    description: 'Il mio percorso formativo e professionale',
    learningHeading: 'Formazione e certificazioni',
    learningDescription: 'Il mio percorso di studio e apprendimento',
    work: 'Esperienza lavorativa',
    education: 'Formazione',
    certifications: 'Certificazioni e programmi',
  },
};

export const ExperienceWindow: React.FC<ExperienceWindowProps> = ({
  experience,
  education,
  certifications = [],
  language = 'en',
}) => {
  const text = labels[language];

  return (
    <div className="space-y-4 font-tahoma text-[11px] sm:text-[12px]">
      <div className="bg-[#FFFFE1] border border-[#ACA899] p-2 flex items-center gap-2 mb-4">
        <img src="images/help.ico" alt="" aria-hidden="true" className="w-5 h-5 shrink-0" />
        <div className="text-black">
          <p className="font-bold">{experience.length ? text.heading : text.learningHeading}</p>
          <p className="text-[10px]">
            {experience.length ? text.description : text.learningDescription}
          </p>
        </div>
      </div>

      {experience.length > 0 ? (
        <fieldset className="border border-[#D4D0C8] p-4 rounded-[3px]">
          <legend className="text-[#003399] px-1 font-bold ml-2">{text.work}</legend>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="pl-2 relative">
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-[3px] top-[18px] bottom-[-24px] w-[1px] bg-[#D4D0C8]"></div>
                )}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <div className="w-[7px] h-[7px] bg-[#3A8CFF] rounded-full shrink-0 relative z-10 border border-white shadow-sm"></div>
                    <h4 className="font-bold text-black text-[13px]">{exp.position}</h4>
                  </div>
                  <div className="pl-4">
                    <p className="text-[#003399] font-bold text-[11px]">{exp.company}</p>
                    <p className="text-[10px] text-gray-500 mb-1">{exp.period}</p>
                    <p className="text-black leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      ) : null}

      <fieldset className="border border-[#D4D0C8] p-4 rounded-[3px]">
        <legend className="text-[#003399] px-1 font-bold ml-2">{text.education}</legend>
        <div className="space-y-4 pl-2">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h4 className="font-bold text-black text-[12px]">{edu.degree}</h4>
              <div className="flex justify-between items-center border-b border-[#eee] pb-1">
                <p className="text-[#003399]">{edu.institution}</p>
                <p className="text-[10px] text-gray-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </fieldset>

      {certifications.length > 0 ? (
        <fieldset className="border border-[#D4D0C8] p-4 rounded-[3px]">
          <legend className="text-[#003399] px-1 font-bold ml-2">{text.certifications}</legend>
          <div className="space-y-4 pl-2">
            {certifications.map((certification) => (
              <div
                key={`${certification.name}-${certification.detail}`}
                className="flex flex-col gap-1"
              >
                <h4 className="font-bold text-black text-[12px]">{certification.name}</h4>
                <p className="text-[#003399] border-b border-[#eee] pb-1">{certification.detail}</p>
              </div>
            ))}
          </div>
        </fieldset>
      ) : null}
    </div>
  );
};
