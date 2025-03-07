import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { JSX, SVGProps } from "react";

type PropsType = {
  label: string;
  data: {
    value: number | string;
    percent?: number;
  };
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function OverviewCard({ label, data, Icon }: PropsType) {
  // const isDecreasing = data.growthRate < 0;
  const percentage = data.percent ? data.percent * 100 : 0;

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon />

      <div className="mt-6 flex items-end justify-between">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {data.value}
          </dt>

          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </dl>

        <dl
          className={cn(
            "text-sm font-medium", "text-blue",
          )}
        >
          {data.percent && (          
            <dt className="flex items-center gap-1.5">
              {percentage}%
            </dt>
          )}


          {/* <dd className="sr-only">
            {label} {isDecreasing ? "Decreased" : "Increased"} by{" "}
            {data.growthRate}%
          </dd> */}
        </dl>
      </div>
    </div>
  );
}
