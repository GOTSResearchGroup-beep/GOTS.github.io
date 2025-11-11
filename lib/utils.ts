import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // No necesitamos basePath para Vercel
  return path
}

export function getPagePath(path: string): string {
  // No necesitamos basePath para Vercel
  return path
}
