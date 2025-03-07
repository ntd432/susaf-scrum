import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

  export async function OverviewCardsGroup() {
    const { workItems, tasksCompleted, sustainabilityPoints, storyPoints } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Total Work Items"
        data={{
          ...workItems,
          value: compactFormat(workItems.value),
        }}
        Icon={icons.TotalWorkItems}
      />

      <OverviewCard
        label="Tasks Completed"
        data={{
          ...tasksCompleted,
          value: compactFormat(tasksCompleted.value),
        }}
        Icon={icons.TasksCompleted}
      />

      <OverviewCard
        label="Story Points Completed"
        data={{
          ...storyPoints,
          value: compactFormat(storyPoints.value),
        }}
        Icon={icons.StoryPoints}
      />

      <OverviewCard
        label="Sustainability Points Completed"
        data={{
          ...sustainabilityPoints,
          value: compactFormat(sustainabilityPoints.value),
        }}
        Icon={icons.SustainabilityPoints}
      />
    </div>
  );
}
