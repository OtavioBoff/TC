import React from "react";
import { Group } from "../../../../@types";

interface GenerateTableRowsForRepsAndWeightProps {
  highestNumberOfSeriesInTheGroup: number;
  exerciseNum: number;
  group: Group[];
  pageIndex: number;
}

export function GenerateTableRowsForRepsAndWeight({
  highestNumberOfSeriesInTheGroup,
  exerciseNum,
  group,
  pageIndex,
}: GenerateTableRowsForRepsAndWeightProps) {
  return Array.from({ length: highestNumberOfSeriesInTheGroup }, (_, index) => (
    <React.Fragment key={index}>
      <td>
        <span>
          {group[pageIndex].exercisesProps[exerciseNum]?.seriesProps.props[
            index
          ]?.reps || "-"}
        </span>
      </td>
      <td>
        <span>
          {group[pageIndex].exercisesProps[exerciseNum]?.seriesProps.props[
            index
          ]?.weight
            ? `${group[pageIndex].exercisesProps[exerciseNum].seriesProps.props[index].weight} Kg`
            : "-"}
        </span>
      </td>
    </React.Fragment>
  ));
}
