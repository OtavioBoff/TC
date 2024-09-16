import { generateTableRowsForRepsAndWeight } from "./TableRowRepsWeight";
import { Workout } from "../../../@types";

interface GenerateTableRowsProps {
  workout: Workout[];
  pageNumber: number;
  highestNumberOfSeriesInTheGroup: number;
}

export const generateTableRows = ({
  workout,
  pageNumber,
  highestNumberOfSeriesInTheGroup,
}: GenerateTableRowsProps) => {
  return Array.from(
    { length: workout[pageNumber]?.exercisesProps.length },
    (_, exerciseNumber) => (
      <tr key={exerciseNumber}>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.muscle || "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.exercise ||
              "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.observation ||
              "-"}
          </span>
        </td>
        <td>
          <span>
            {workout[pageNumber].exercisesProps[exerciseNumber]?.seriesProps
              .props.length || "-"}
          </span>
        </td>
        {generateTableRowsForRepsAndWeight(
          highestNumberOfSeriesInTheGroup,
          exerciseNumber,
          workout,
          pageNumber
        )}
      </tr>
    )
  );
};
