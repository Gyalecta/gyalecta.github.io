import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../../App';

function startDesktop() {
  render(<App />);
  act(() => {
    vi.advanceTimersByTime(3000);
  });
}

beforeEach(() => {
  vi.useFakeTimers();
  window.localStorage.clear();
  window.history.replaceState(null, '', '/');
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('personal XP desktop', () => {
  it('updates an already open personal window when language changes', () => {
    startDesktop();
    const desktop = screen.getByRole('navigation', { name: 'Desktop' });
    fireEvent.click(within(desktop).getByRole('button', { name: 'Chi sono' }));
    const personalWindow = screen.getByRole('dialog', { name: 'Chi sono' });
    expect(within(personalWindow).getByText('Domenico Avino')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Passa all’inglese' }));
    const translatedWindow = screen.getByRole('dialog', { name: 'About Me' });
    expect(translatedWindow).toBe(personalWindow);
    expect(within(translatedWindow).getByText(/Computer Science student/)).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
    expect(window.localStorage.getItem('portfolio-language')).toBe('en');
  });

  it('deduplicates windows and restores the remaining window after closing the active one', () => {
    startDesktop();
    const desktop = screen.getByRole('navigation', { name: 'Desktop' });
    fireEvent.click(within(desktop).getByRole('button', { name: 'Chi sono' }));
    fireEvent.click(within(desktop).getByRole('button', { name: 'Contatti' }));
    fireEvent.click(within(desktop).getByRole('button', { name: 'Chi sono' }));
    expect(screen.getAllByRole('dialog')).toHaveLength(2);

    fireEvent.click(
      within(screen.getByRole('dialog', { name: 'Chi sono' })).getByRole('button', {
        name: 'Chiudi',
      })
    );
    expect(screen.queryByRole('dialog', { name: 'Chi sono' })).not.toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Contatti' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contatti', pressed: true })).toBeInTheDocument();
  });

  it('honors an explicit URL locale and remains usable when localStorage is blocked', () => {
    window.history.replaceState(null, '', '/?lang=en');
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    startDesktop();
    expect(document.documentElement.lang).toBe('en');
    fireEvent.click(screen.getByRole('button', { name: 'Passa all’italiano' }));
    expect(document.documentElement.lang).toBe('it');
    expect(screen.getByRole('navigation', { name: 'Desktop' })).toBeInTheDocument();
  });
});
