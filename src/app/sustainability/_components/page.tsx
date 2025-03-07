"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Load the map dynamically to avoid SSR issues
// const WorldMap = dynamic(() => import("react-world-map"), { ssr: false });

export default function WorldOfSustainability() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-700">🌍 World Map of Sustainability</h1>
        <p className="text-xl text-gray-700 mt-4 max-w-2xl">
          Explore sustainability efforts worldwide. Click on a region to learn more.
        </p>
      </div>

      {/* Interactive World Map */}
      {/* <div className="mt-8 w-full max-w-2xl">
        <WorldMap />
      </div> */}

      {/* Button to Navigate to Sustainability Hub */}
      <button
        onClick={() => router.push("/sustainability/hub")}
        className="mt-8 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition"
      >
        Enter Sustainability Hub →
      </button>
    </div>
  );
}
