'use client';
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { useState } from "react";
import { fetchBacklogData } from "@/utils/api";
import { saveBacklogData } from "@/utils/api";

export function TokenInputForm() {
  const [token, setToken] = useState<string>('');
  const [apiData, setApiData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!token) {
      alert("Please enter a token");
      return;
    }

    setIsLoading(true);

    try {
      const result = await fetchBacklogData(token);
      await saveBacklogData(result);
      setApiData(result);
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please check the token and try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <ShowcaseSection title="Enter Token" className="!p-7">
      <form onSubmit={handleSubmit}>
        <div className="relative mb-5.5 block w-full rounded-xl border border-dashed border-gray-4 bg-gray-2 hover:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary">
          <input
            type="text"
            name="token"
            id="token"
            value={token}
            onChange={handleTokenChange}
            className="w-full p-4 border-none bg-transparent focus:outline-none"
            placeholder="Enter your token here"
          />
        </div>

        {isLoading && (
          <div className="flex justify-center mb-5.5">
            <div className="loader">Loading...</div>
          </div>
        )}

        {apiData && (
          <textarea
            className="w-full p-2 border rounded"
            rows={5}
            readOnly
            value={JSON.stringify(apiData, null, 2)}
          />
        )}

        <div className="flex justify-end gap-3">
          <button
            className="flex justify-center rounded-lg border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
            type="button"
            onClick={() => setToken('')}
          >
            Cancel
          </button>
          <button
            className="flex items-center justify-center rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
            type="submit"
          >
            Fetch Data
          </button>
        </div>
      </form>
    </ShowcaseSection>
  );
}




