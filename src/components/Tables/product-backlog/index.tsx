import { getBacklogData } from "@/app/(home)/fetch";
import { getBacklogItems } from "@/lib/backlog_item_firestore";
import { BacklogItem } from "@/lib/interfaces";
import { ProductBacklogTable } from "./table";


export async function ProductBacklogOverview() {
  // const data: any = await getBacklogData();
  const data: BacklogItem[] = await getBacklogItems();

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
        <div className="flex items-center justify-between pr-7.5">
            <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
                Product Backlog
            </h2>
        </div>

        <ProductBacklogTable data={data} />
    </div>
  );
}
