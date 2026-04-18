import { BookOpen, FileText, CheckCircle2 } from "lucide-react";

export default function Academics() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Rigorous Zimbabwe curriculum designed to prepare students for global success.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* O Level */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <BookOpen className="text-secondary w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">O-Level</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our ordinary level curriculum spans Forms 1 to 4, providing a broad foundational education across sciences, arts, and practical subjects.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary border-b pb-2">Core Subjects</h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Mathematics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> English Language</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Combined Science</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> History</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Geography</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Shona</li>
                </ul>
                <h3 className="font-semibold text-lg text-primary border-b pb-2 mt-6">Electives</h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Agriculture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Commerce</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Accounts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Woodwork</li>
                </ul>
              </div>
            </div>

            {/* A Level */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <FileText className="text-primary w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">A-Level</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our advanced level curriculum (Forms 5 & 6) focuses on specialized disciplines, preparing students directly for university education.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary border-b pb-2">Sciences</h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Mathematics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Physics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Chemistry</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Biology</li>
                </ul>
                <h3 className="font-semibold text-lg text-primary border-b pb-2 mt-6">Arts & Commercials</h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> History</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Literature</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Economics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Business Studies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
