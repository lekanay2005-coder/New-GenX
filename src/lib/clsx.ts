import { clsx as clsxFn, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsxFn(inputs);
}
