// components/Footer.js
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si"; // New Twitter "X" logo

export default function Footer() {
  return (
    <footer className="w-full bg-[#35e2ff] py-6 flex flex-col items-center">
      {/* Social icons */}
      <div className="flex space-x-8 mb-4">
        <a
          href="https://www.facebook.com/profile.php?id=100076057720450"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF size={32} className="text-white hover:text-[#117bca] transition" />
        </a>
        <a
          href="https://www.instagram.com/v20cricket/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={32} className="text-white hover:text-[#e1306c] transition" />
        </a>
        <a
          href="https://twitter.com/LensVirti"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <SiX size={32} className="text-white hover:text-black transition" />
        </a>
        <a
          href="https://youtu.be/CSFR4ebgets"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube size={32} className="text-white hover:text-[#ff0000] transition" />
        </a>
      </div>

      {/* Copyright */}
     
      <div className="text-center text-white font-bold tracking-wide text-lg md:text-base mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
        COPYRIGHT © 2025. ALL RIGHTS RESERVED BY VIRTLENS
      </div>
      
      {/* Privacy */}
      <div>
        <a
          href="https://gamepolicy.s3.ap-south-1.amazonaws.com/privacypolicy.html"
          className="underline text-white font-semibold hover:text-[#181c2f]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
}
