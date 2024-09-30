import { generateTableRowsForRepsAndWeight } from "./TableRowRepsWeight";
import { Workout } from "../../../@types";
import { PiTrash } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { EditButton, RemoveButton } from "../styles";

interface GenerateTableRowsProps {
  workout: Workout[];
  pageIndex: number;
  highestNumberOfSeriesInTheGroup: number;
  isEditable: boolean;
  onEditExercise: (exerciseNumber: number) => void;
  removeExercise: (exerciseNumber: number) => void;
}

export const generateTableRows = ({
  workout,
  pageIndex,
  highestNumberOfSeriesInTheGroup,
  isEditable,
  onEditExercise,
  removeExercise,
}: GenerateTableRowsProps) => {
  return Array.from(
    { length: workout[pageIndex]?.exercisesProps.length },
    (_, exerciseNumber) => (
      <tr key={exerciseNumber}>
        {isEditable && (
          <td
            style={{
              width: "100px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                height: "100%",
              }}
            >
              <EditButton
                title="Editar"
                onClick={() => {
                  onEditExercise(exerciseNumber);
                }}
              >
                <BiEdit size={24} />
              </EditButton>
              <RemoveButton
                title="Excluir"
                onClick={() => {
                  removeExercise(exerciseNumber);
                }}
              >
                <PiTrash size={24} />
              </RemoveButton>
            </div>
          </td>
        )}
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
