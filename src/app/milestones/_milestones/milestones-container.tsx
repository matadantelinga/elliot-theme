import { iMilestone } from "@/lib/interfaces/iMilestones";
import { MilestoneCard } from "./milestone-card";
import { MilestoneLegendCard } from "./milestone-legend-card";
import React from "react";

export const MilestonesContainer = () => {
  const milestones: iMilestone[] = [
    {
      name: "Milestone 1",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: false,
      locked: false,
    },
    {
      name: "Milestone 2",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: false,
      locked: false,
    },
    {
      name: "Milestone 3",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: false,
      locked: false,
    },
    {
      name: "Milestone 4",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: false,
      locked: false,
    },
    {
      name: "Milestone 5",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: false,
      locked: true,
    },
    {
      name: "Elite 1",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: true,
      locked: true,
    },
    {
      name: "Elite 2",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: true,
      locked: true,
    },
    {
      name: "Elite 3",
      requiredWager: "10,000",
      reward: "15",
      isLegend: false,
      isVip: true,
      locked: true,
    },
    {
      name: "Legend 1",
      requiredWager: "10,000",
      reward: "15",
      isLegend: true,
      isVip: false,
      locked: false,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {milestones.map((ml, index) => (
          <React.Fragment key={index}>
            {ml.isLegend ? (
              <div className="col-span-12">
                <MilestoneLegendCard data={ml} />
              </div>
            ) : (
              <div className="col-span-12 md:col-span-3">
                <MilestoneCard data={ml} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
