/*
 * ZINARA DIGITAL — 404 Not Found Page
 */

import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FAFAF7]">
      <div className="text-center max-w-md px-4">
        <p className="font-['Syne'] font-extrabold text-8xl text-[#E85D04] mb-4">404</p>
        <h1 className="font-['Syne'] font-bold text-2xl text-[#1C1C1E] mb-3">Page Not Found</h1>
        <p className="text-[#52525B] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-zinara">
            <Home size={18} /> Go to Homepage
          </Link>
          <Link href="/contact" className="btn-zinara-outline">
            <ArrowLeft size={18} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
