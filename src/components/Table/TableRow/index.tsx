import { generateTableRowsForRepsAndWeight } from "./TableRowRepsWeight";
import { Workout } from "../../../@types";

interface GenerateTableRowsProps {
  workout: Workout[];
  pageIndex: number;
  highestNumberOfSeriesInTheGroup: number;
}

export const generateTableRows = ({
  workout,
  pageIndex,
  highestNumberOfSeriesInTheGroup,
}: GenerateTableRowsProps) => {
  return Array.from(
    { length: workout[pageIndex]?.exercisesProps.length },
    (_, exerciseNumber) => (
      <tr key={exerciseNumber}>
        <td>
          <span>
            {workout[pageIndex].exercisesProps[exerciseNumber]?.muscle || "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageIndex].exercisesProps[exerciseNumber]?.exercise || "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageIndex].exercisesProps[exerciseNumber]?.observation ||
              "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageIndex].exercisesProps[exerciseNumber]?.seriesProps
              .props.length || "-"}
          </span>
        </td>
        {generateTableRowsForRepsAndWeight(
          highestNumberOfSeriesInTheGroup,
          exerciseNumber,
          workout,
          pageIndex
        )}
      </tr>
    )
  );
};
