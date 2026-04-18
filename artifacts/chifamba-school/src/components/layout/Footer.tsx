import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Chifamba High</h3>
            <p className="text-gray-300 mb-6 italic">
              "Better build a child than repair a man."
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-accent transition-colors">Academics</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/achievements" className="text-gray-300 hover:text-accent transition-colors">Achievements</Link></li>
              <li><Link href="/portal" className="text-gray-300 hover:text-accent transition-colors">Student Portal</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Academics</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">O-Level Curriculum</li>
              <li className="text-gray-300">A-Level Curriculum</li>
              <li className="text-gray-300">Practical Subjects</li>
              <li className="text-gray-300">Sports & Arts</li>
              <li className="text-gray-300">Library Resources</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span>Hama Village, Ward 12,<br />Chief Bepura, Guruve,<br />Box 320, Guruve</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-accent shrink-0" />
                <span>+263 785 068 291</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-accent shrink-0" />
                <span>chifambahigh2023@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chifamba High School. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed by <span className="text-accent font-medium">Bluewave Technologies</span></p>
        </div>
      </div>
    </footer>
  );
}
