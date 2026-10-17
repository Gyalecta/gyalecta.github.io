import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface AboutWindowProps {
  data: {
    personal: {
      fullname: string;
      title: string;
      bio: string;
      avatar: string;
      location: string;
      email: string;
    };
    social: {
      github: string;
      linkedin: string;
    };
  };
  language?: 'it' | 'en';
}

const labels = {
  en: {
    contact: 'Contact Information',
    location: 'Location:',
    connect: 'Connect',
  },
  it: {
    contact: 'Informazioni di contatto',
    location: 'Posizione:',
    connect: 'Collegamenti',
  },
};

export const AboutWindow: React.FC<AboutWindowProps> = ({ data, language = 'en' }) => {
  const text = labels[language];

  return (
    <div className="space-y-4 font-tahoma text-[11px] sm:text-[12px]">
      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="p-1 bg-white border border-[#D4D0C8] shadow-sm">
            <div className="relative w-32 h-32 overflow-hidden border border-[#808080]">
              <img
                src={'images/' + data.personal.avatar}
                alt={data.personal.fullname}
                className="absolute w-[650%] max-w-none h-auto left-[-260%] top-[-177%]"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-black mb-1">{data.personal.fullname}</h2>
            <p className="text-[#555] mb-3 italic">{data.personal.title}</p>
            <p className="text-black leading-relaxed">{data.personal.bio}</p>
          </div>
        </div>
      </div>

      <fieldset className="border border-[#D4D0C8] p-4 rounded-[3px]">
        <legend className="text-[#003399] px-1 font-bold ml-2">{text.contact}</legend>
        <div className="space-y-2 text-black pl-2">
          <p className="flex items-center gap-2">
            <span className="font-bold w-20">{text.location}</span>
            <span>{data.personal.location}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold w-20">Email:</span>
            <a href={`mailto:${data.personal.email}`} className="text-blue-600 hover:underline">
              {data.personal.email}
            </a>
          </p>
        </div>
      </fieldset>

      <fieldset className="border border-[#D4D0C8] p-4 rounded-[3px]">
        <legend className="text-[#003399] px-1 font-bold ml-2">{text.connect}</legend>
        <div className="flex gap-4 pl-2">
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="xp-button flex items-center gap-2 active:translate-y-[1px]"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="xp-button flex items-center gap-2 active:translate-y-[1px]"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </fieldset>
    </div>
  );
};
