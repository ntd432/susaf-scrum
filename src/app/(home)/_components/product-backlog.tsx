import { KebabMenuIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { getBacklogData } from "../fetch";
import { Checkbox } from "@/components/FormElements/checkbox";

type PropsType = {
    className: string;
}

const selectItem = (key: number, title: string) => {
    console.log(`Clicked Work Item ${key}: ${title}`);
};

export async function ProductBacklogCard() {
  const data = await getBacklogData();

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
        <div className="flex items-center justify-between pr-7.5">
            <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
                Product Backlog
            </h2>
            <KebabMenuIcon />
        </div>

        <ul>
            {data.map((workItem, key) => (
            <li key={key}>
                <div className="flex items-center gap-4.5 px-7.5 py-3 outline-none hover:bg-gray-2 focus-visible:bg-gray-2 dark:hover:bg-dark-2 dark:focus-visible:bg-dark-2">
                    <div className="relative flex-grow">
                        <h3 className="font-medium text-dark dark:text-white">
                        {workItem.backlog_title}
                        </h3>
                        

                        <div className="flex flex-wrap items-center gap-2">
                        <span>
                            {workItem.backlog_description}
                        </span>
                        </div>
                    </div>
                    <Checkbox label="" withIcon="check"/>
                </div>
            </li>
            ))}
        </ul>
    </div>
  );
}
