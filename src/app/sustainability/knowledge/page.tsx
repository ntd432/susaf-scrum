"use client";

import { useState } from "react";

const knowledgeDatabase = [
  {
    question: "What is Sustainability?",
    answer: "Sustainability means meeting the needs of the present without compromising the ability of future generations to meet their own needs. It encompasses environmental, economic, and social dimensions."
  },
  {
    question: "Why is Sustainability Important?",
    answer: "Sustainability is crucial for preserving natural resources, reducing environmental damage, and ensuring a stable and healthy future for all living beings."
  },
  {
    question: "What are the Three Pillars of Sustainability?",
    answer: "The three main pillars are Environmental Sustainability (protecting nature), Social Sustainability (supporting communities), and Economic Sustainability (ensuring long-term financial stability)."
  },
  {
    question: "How Does Climate Change Affect Sustainability?",
    answer: "Climate change leads to extreme weather, loss of biodiversity, and depletion of natural resources, all of which threaten sustainability."
  },
  {
    question: "What Are Some Sustainable Practices?",
    answer: "Sustainable practices include using renewable energy, reducing waste, recycling, conserving water, and promoting eco-friendly transportation."
  },
  {
    question: "What is the Role of Renewable Energy in Sustainability?",
    answer: "Renewable energy (solar, wind, hydro) reduces reliance on fossil fuels, decreases pollution, and helps combat climate change."
  },
  {
    question: "How Can Businesses Become More Sustainable?",
    answer: "Businesses can adopt eco-friendly production methods, reduce carbon emissions, use sustainable materials, and promote ethical labor practices."
  },
  {
    question: "What is the Impact of Plastic Pollution?",
    answer: "Plastic pollution harms marine life, disrupts ecosystems, and contributes to environmental degradation. Reducing plastic use is essential for sustainability."
  },
  {
    question: "How Can Individuals Live More Sustainably?",
    answer: "Individuals can adopt habits like reducing energy use, avoiding single-use plastics, eating sustainably, and supporting eco-friendly brands."
  },
  {
    question: "What is the Circular Economy?",
    answer: "The circular economy is a model that focuses on reducing waste by reusing, recycling, and regenerating materials instead of discarding them."
  },
  {
    question: "What is the Role of Governments in Sustainability?",
    answer: "Governments play a key role in setting policies, enforcing environmental regulations, and funding sustainable initiatives."
  },
  {
    question: "How Does Sustainable Agriculture Help the Environment?",
    answer: "Sustainable agriculture reduces deforestation, minimizes water usage, decreases pollution, and promotes biodiversity."
  }
];

const quickFacts = [
  "Recycling one aluminum can saves enough energy to run a TV for three hours.",
  "The world loses 18.7 million acres of forests every year.",
  "Turning off the tap while brushing your teeth can save up to 8 gallons of water a day.",
  "LED bulbs use at least 75% less energy than traditional bulbs.",
  "Plastic takes over 400 years to decompose in the environment.",
];

const sustainabilityStats = [
  { stat: "8 million", description: "tons of plastic enter our oceans annually." },
  { stat: "71%", description: "of Earth's surface is covered in water, but only 3% is freshwater." },
  { stat: "50%", description: "of forests worldwide have been lost due to human activities." },
  { stat: "100%", description: "of energy in Iceland comes from renewable sources." },
];

const resources = [
  { name: "UN Sustainable Development Goals", url: "https://sdgs.un.org/goals" },
  { name: "NASA Climate Change", url: "https://climate.nasa.gov/" },
  { name: "WWF Sustainability", url: "https://www.worldwildlife.org/initiatives/sustainability" },
  { name: "EPA Sustainability", url: "https://www.epa.gov/sustainability" },
];

export default function KnowledgeHub() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6 flex">

      {/* Left Sidebar - Quick Facts & Did You Know Section */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md mr-6 hidden lg:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-green-700">🌍 Quick Sustainability Facts</h2>
          <ul className="mt-4 text-gray-700 space-y-2">
            {quickFacts.map((fact, index) => (
              <li key={index} className="border-l-4 border-green-500 pl-2">{fact}</li>
            ))}
          </ul>
        </div>

        {/* Did You Know Section */}
        <div className="mt-6 bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-700">💡 Did You Know?</h3>
          <p className="text-gray-700 mt-2">Trees can cool a city by up to 10°F by providing shade and releasing water vapor.</p>
        </div>
      </div>

      {/* Main Content - Knowledge Hub */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          🌱 Sustainability Knowledge Hub 🌍
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Discover key insights on sustainability and its impact on the future.
        </p>

        <div className="max-w-3xl mx-auto mt-6 space-y-4">
          {knowledgeDatabase.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition hover:bg-green-100"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold text-green-700">
                {item.question}
              </h2>
              {openIndex === index && (
                <p className="text-gray-700 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Resources & Sustainability Stats */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md ml-6 hidden lg:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-green-700">📚 Useful Resources</h2>
          <ul className="mt-4 space-y-2">
            {resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sustainability Stats Section */}
        <div className="mt-6 bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-700">📊 Sustainability Stats</h3>
          {sustainabilityStats.map((stat, index) => (
            <p key={index} className="text-gray-700 mt-2">
              <strong className="text-green-700">{stat.stat}</strong> {stat.description}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}
