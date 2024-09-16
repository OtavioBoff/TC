import { Workout } from "../../../../@types";

export function generateTableRowsForRepsAndWeight(
  highestNumberOfSeriesInTheGroup: number,
  exerciseNum: number,
  workout: Workout[],
  pageNumber: number
) {
  return Array.from({ length: highestNumberOfSeriesInTheGroup }, (_, index) => (
    <>
      <td>
        <span>
          {workout[pageNumber].exercisesProps[exerciseNum]?.seriesProps.props[
            index
          ]?.reps || "-"}
        </span>
      </td>
      <td>
        <span>
          {workout[pageNumber].exercisesProps[exerciseNum]?.seriesProps.props[
            index
          ]?.weight
            ? `${workout[pageNumber].exercisesProps[exerciseNum].seriesProps.props[index].weight} Kg`
            : "-"}
        </span>
      </td>
    </>
  ));
}
