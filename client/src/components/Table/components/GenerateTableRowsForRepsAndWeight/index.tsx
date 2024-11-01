import React from "react";
import { Workout } from "../../../../@types";

interface GenerateTableRowsForRepsAndWeightProps {
  highestNumberOfSeriesInTheGroup: number;
  exerciseNum: number;
  workout: Workout[];
  pageIndex: number;
}

export function GenerateTableRowsForRepsAndWeight({
  highestNumberOfSeriesInTheGroup,
  exerciseNum,
  workout,
  pageIndex,
}: GenerateTableRowsForRepsAndWeightProps) {
  return Array.from({ length: highestNumberOfSeriesInTheGroup }, (_, index) => (
    <React.Fragment key={index}>
      <td>
        <span>
          {workout[pageIndex].exercisesProps[exerciseNum]?.seriesProps.props[
            index
          ]?.reps || "-"}
        </span>
      </td>
      <td>
        <span>
          {workout[pageIndex].exercisesProps[exerciseNum]?.seriesProps.props[
            index
          ]?.weight
            ? `${workout[pageIndex].exercisesProps[exerciseNum].seriesProps.props[index].weight} Kg`
            : "-"}
        </span>
      </td>
    </React.Fragment>
  ));
}
