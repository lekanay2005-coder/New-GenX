'use client';

import { useTheme } from 'next-themes';
import { Moon, SunMedium } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? <Moon size={18} /> : <SunMedium size={18} />}
    </button>
  );
}
