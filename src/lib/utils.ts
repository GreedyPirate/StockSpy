import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isWindows(){
  // except server-side rendering
  if (typeof navigator === 'undefined') return false;
  return /Win/.test(navigator.userAgent);
};
