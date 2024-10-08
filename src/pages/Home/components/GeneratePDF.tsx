// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { useContext } from "react";
// import { RegisterWorkoutContext } from "../../../contexts/workoutContext";

// export const GeneratePDF = () => {
//   const { workouts, workoutsIndex } = useContext(RegisterWorkoutContext);

//   const doc = new jsPDF();
//   doc.setFontSize(12);

//   doc.text(workouts[workoutsIndex].name, 14, 10);
//   let currentY = 20;

//   workouts[workoutsIndex].workout.forEach((group) => {
//     doc.text(group.group, 14, currentY);
//     currentY += 10;

//     const headers = [
//       ["Músculo", "Exercício", "Observação", "Séries", "Repetições"],
//     ];

//     const rows: (string | number)[][] = group.exercisesProps.map((exercise) => {
//       const series = exercise.seriesProps.props
//         .map((s) => `${s.reps} ${s.weight ? `(${s.weight}kg)` : ""}`)
//         .join(", ");

//       return [
//         exercise.muscle,
//         exercise.exercise,
//         exercise.observation || "Sem Observação",
//         exercise.seriesProps.num,
//         series,
//       ];
//     });

//     const tableHeight = 10 + rows.length * 10;
//     if (currentY + tableHeight > doc.internal.pageSize.getHeight()) {
//       doc.addPage();
//       currentY = 10;
//     }

//     doc.autoTable({
//       head: headers,
//       body: rows,
//       startY: currentY,
//       margin: { top: 0 },
//       theme: "grid",
//       didDrawCell: (data) => {
//         currentY = data.cursor.y + 10;
//       },
//     });
//   });

//   doc.save("workout.pdf");
// };
