import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceWindow } from '../windows/ExperienceWindow';

describe('ExperienceWindow', () => {
  const mockExperience = [
    {
      company: 'Tech Corp',
      position: 'Senior Developer',
      period: '2020 - Present',
      description: 'Developing amazing web applications.',
    },
    {
      company: 'Startup Inc',
      position: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Building user interfaces with React.',
    },
  ];

  const mockEducation = [
    {
      institution: 'University of Tech',
      degree: 'MSc Computer Science',
      period: '2016 - 2018',
    },
    {
      institution: 'State College',
      degree: 'BSc Software Engineering',
      period: '2012 - 2016',
    },
  ];

  it('renders the main heading and description correctly', () => {
    render(
      React.createElement(ExperienceWindow, {
        experience: mockExperience,
        education: mockEducation,
      })
    );

    expect(screen.getByText('Experience & Education')).toBeInTheDocument();
    expect(screen.getByText('My professional and Academic journey')).toBeInTheDocument();
  });

  it('renders work experience sections correctly', () => {
    render(<ExperienceWindow experience={mockExperience} education={mockEducation} />);

    expect(screen.getByText('Work Experience')).toBeInTheDocument();

    // Check for first experience
    expect(screen.getByText(mockExperience[0].position)).toBeInTheDocument();
    expect(screen.getByText(mockExperience[0].company)).toBeInTheDocument();
    expect(screen.getByText(mockExperience[0].period)).toBeInTheDocument();
    expect(screen.getByText(mockExperience[0].description!)).toBeInTheDocument();

    // Check for second experience
    expect(screen.getByText(mockExperience[1].position)).toBeInTheDocument();
    expect(screen.getByText(mockExperience[1].company)).toBeInTheDocument();
    expect(screen.getByText(mockExperience[1].period)).toBeInTheDocument();
    expect(screen.getByText(mockExperience[1].description!)).toBeInTheDocument();
  });

  it('renders education sections correctly', () => {
    render(<ExperienceWindow experience={mockExperience} education={mockEducation} />);

    expect(screen.getByText('Education')).toBeInTheDocument();

    // Check for first education
    expect(screen.getByText(mockEducation[0].degree)).toBeInTheDocument();
    expect(screen.getByText(mockEducation[0].institution)).toBeInTheDocument();
    expect(screen.getByText(mockEducation[0].period)).toBeInTheDocument();

    // Check for second education
    expect(screen.getByText(mockEducation[1].degree)).toBeInTheDocument();
    expect(screen.getByText(mockEducation[1].institution)).toBeInTheDocument();
    expect(screen.getByText(mockEducation[1].period)).toBeInTheDocument();
  });

  it('renders multiple experience items', () => {
    render(<ExperienceWindow experience={mockExperience} education={mockEducation} />);

    // Find elements associated with each experience item
    expect(screen.getByText('Senior Developer')).toBeInTheDocument(); // From first exp
    expect(screen.getByText('Tech Corp')).toBeInTheDocument(); // From first exp
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument(); // From second exp
    expect(screen.getByText('Startup Inc')).toBeInTheDocument(); // From second exp
  });

  it('renders multiple education items', () => {
    render(<ExperienceWindow experience={mockExperience} education={mockEducation} />);

    // Find elements associated with each education item
    expect(screen.getByText('MSc Computer Science')).toBeInTheDocument(); // From first edu
    expect(screen.getByText('University of Tech')).toBeInTheDocument(); // From first edu
    expect(screen.getByText('BSc Software Engineering')).toBeInTheDocument(); // From second edu
    expect(screen.getByText('State College')).toBeInTheDocument(); // From second edu
  });

  it('hides empty work history and renders localized certifications and programs', () => {
    const certifications = [
      { name: 'Google AI', detail: 'Certificazione' },
      { name: 'Cisco Cybersecurity Scholarship', detail: 'Partecipante al programma' },
      { name: 'English for IT', detail: 'Livello B2' },
      { name: 'GESE Grade 7', detail: 'Livello B2.1' },
    ];

    render(
      <ExperienceWindow
        experience={[]}
        education={mockEducation}
        certifications={certifications}
        language="it"
      />
    );

    expect(screen.queryByText('Esperienza lavorativa')).not.toBeInTheDocument();
    expect(screen.getByText('Formazione')).toBeInTheDocument();
    expect(screen.getByText('Certificazioni e programmi')).toBeInTheDocument();
    expect(screen.getByText('Cisco Cybersecurity Scholarship')).toBeInTheDocument();
    expect(screen.getByText('Partecipante al programma')).toBeInTheDocument();
    expect(document.querySelector('img[src="images/help.ico"]')).toBeInTheDocument();
  });
});
