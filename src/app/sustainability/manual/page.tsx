"use client";

import { useState } from "react";

const manualSections = [
  {
    title: "📘 Introduction",
    content:
      "The Sustainability Knowledge Database Web Tool is an interactive platform designed to educate users on key sustainability concepts. It integrates agile workflows and helps users track sustainability learning progress.",
  },
  {
    title: "🚀 Key Features",
    content: `
    - 🌍 **Interactive Knowledge Hub** with sustainability topics.
    - ⚡ **User-Friendly Navigation** for seamless experience.
    - 🔄 **Dynamic Content** that updates with new questions.
    - 📊 **Sustainability Tracking** for learning progress.
    - 🔗 **Agile Integration** for embedding sustainability in workflows.`,
  },
  {
    title: "🖥️ System Requirements",
    content: `
    - **Frontend:** Next.js (React framework)
    - **Backend:** Node.js (optional)
    - **Hosting:** Vercel / Netlify
    - **Database:** Firebase / Supabase / MongoDB`,
  },
  {
    title: "🛠️ Installation Guide",
    content: `
    1️⃣ **Clone the Repository**: \`git clone https://github.com/your-repo.git\`
    2️⃣ **Install Dependencies**: \`npm install\`
    3️⃣ **Run Development Server**: \`npm run dev\`
    4️⃣ **Open** \`http://localhost:3000\` in your browser.`,
  },
  {
    title: "📖 Usage Instructions",
    content: `
    - 🏠 **Homepage:** Introduction and links to topics.
    - 📖 **Knowledge Hub:** Browse sustainability questions.
    - 📊 **Sustainability Tracker:** Track your learning progress.`,
  },
  {
    title: "📦 Expected Deliverables",
    content: `
    - ✅ **Fully functional web tool** integrated with SusAF.
    - ✅ **Hosted online via Vercel or Netlify.**
    - ✅ **Open-source documentation** and GitHub repository.`,
  },
  {
    title: "⚠️ Troubleshooting",
    content: `
    - ❌ **Build Error:** Run \`npm run build\` to debug.
    - ❌ **React Icons not loading:** Install with \`npm install react-icons\`.
    - ❌ **Deployment failure:** Verify API keys and hosting configuration.`,
  },
];

export default function ProductManual() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Gradient Header */}
      <div className="text-center bg-gradient-to-r from-green-600 to-green-400 text-white py-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold">🌱 Sustainability Knowledge Database</h1>
        <p className="text-lg font-light mt-2">A comprehensive guide to sustainability integration</p>
      </div>

      {/* Manual Content */}
      <div className="max-w-3xl mx-auto bg-white p-6 mt-8 rounded-lg shadow-xl">
        {manualSections.map((section, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left font-semibold text-xl text-green-800 flex justify-between py-4 px-3 hover:bg-green-100 rounded-md transition-all duration-200"
            >
              {section.title}
              <span className={`transform ${openSection === index ? "rotate-180" : "rotate-0"} transition-transform`}>
                ▼
              </span>
            </button>

            {openSection === index && (
              <div className="mt-3 text-gray-700 whitespace-pre-line bg-gray-100 p-4 rounded-md shadow-sm">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
