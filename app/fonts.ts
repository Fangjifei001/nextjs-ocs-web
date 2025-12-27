import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ 
    subsets: ['latin'],
    fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});
export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'],
    fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});