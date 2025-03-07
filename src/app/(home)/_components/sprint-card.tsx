import { cn } from "@/lib/utils";
import { getSprintData } from "../fetch";

type PropsType = {
    className: string;
}

export async function SprintCard() {
  const data = await getSprintData();

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
        <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
            Current Sprint Items
        </h2>

        <ul>
            {data.map((userStories, key) => (
                //  className={key % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}
                <li key={key}>
                    <div className="flex items-center gap-7 px-4.5 py-3 outline-none hover:bg-gray-2 focus-visible:bg-gray-2 dark:hover:bg-dark-2 dark:focus-visible:bg-dark-2">
                        <div className="relative flex-grow">
                            <h3 className="font-medium text-dark dark:text-white">
                                {userStories.userstory_description}
                            </h3>
                            <div className="flex items-center justify-between pr-7.5">
                                <span className="text-blue-500 font-bold">{`Story Points: ${userStories.story_points}`}</span>
                                <span className="text-green-500 font-bold">{`Sustainability Points: ${userStories.sustainability_points}`}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span>
                                    {`Acceptance Criteria: ${userStories.acceptance_criteria}`}
                                </span>
                                <span>
                                    {`Sustainability Critieria: ${userStories.sustainability_criteria}`}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <hr className="my-2 border-gray-300" /> */}
                </li>
            ))}
        </ul>
    </div>
  );
}
