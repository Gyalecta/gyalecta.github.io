import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface ContactWindowProps {
  data: {
    email: string;
    location: string;
  };
  social?: {
    github: string;
    linkedin: string;
  };
  language?: 'it' | 'en';
}

const labels = {
  en: {
    heading: 'Get In Touch',
    description: 'Feel free to reach out for collaborations or inquiries',
    contact: 'Contact Information',
  },
  it: {
    heading: 'Contatti',
    description: 'Scrivimi per conoscermi o per condividere opportunità e idee',
    contact: 'Informazioni di contatto',
  },
};

export const ContactWindow: React.FC<ContactWindowProps> = ({ data, social, language = 'en' }) => {
  const text = labels[language];

  return (
    <div className="space-y-4 font-tahoma text-[11px] sm:text-[12px]">
      <div className="bg-[#FFFFE1] border border-[#ACA899] p-2 flex items-center gap-2 mb-4">
        <img src="images/help.ico" alt="" aria-hidden="true" className="w-5 h-5 shrink-0" />
        <div className="text-black">
          <p className="font-bold">{text.heading}</p>
          <p className="text-[10px]">{text.description}</p>
        </div>
      </div>

      <fieldset className="border border-[#D4D0C8] p-4 rounded-[3px]">
        <legend className="text-[#003399] px-1 font-bold ml-2">{text.contact}</legend>
        <div className="space-y-3 pl-2">
          <div className="flex items-center gap-3 text-black">
            <Mail className="text-[#003399]" size={16} />
            <a href={`mailto:${data.email}`} className="hover:underline text-blue-600">
              {data.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-black">
            <MapPin className="text-[#003399]" size={16} />
            <span>{data.location}</span>
          </div>
          {social ? (
            <>
              <div className="flex items-center gap-3 text-black">
                <Github className="text-[#003399]" size={16} />
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-3 text-black">
                <Linkedin className="text-[#003399]" size={16} />
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  LinkedIn
                </a>
              </div>
            </>
          ) : null}
        </div>
      </fieldset>
    </div>
  );
};
