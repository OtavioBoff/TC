import jsPDF from "jspdf";
import "jspdf-autotable";
import { Workout } from "../../../@types";

export const GeneratePDF = (workout: Workout[], workoutsIndex: number) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(workout[workoutsIndex].name, 14, 10);
  let currentY = 20;

  doc.setFontSize(12);
  workout[workoutsIndex].group.forEach((group) => {
    doc.text(group.group, 14, currentY);
    currentY += 5;

    const headers = [
      ["Músculo", "Exercício", "Observação", "Séries", "Repetições"],
    ];

    const rows: (string | number)[][] = group.exercisesProps.map((exercise) => {
      const series = exercise.seriesProps.props
        .map((s) => `${s.reps} ${s.weight ? `(${s.weight}kg)` : ""}`)
        .join(", ");

      return [
        exercise.muscle,
        exercise.exercise,
        exercise.observation || "Sem Observação",
        exercise.seriesProps.num,
        series,
      ];
    });

    const tableHeight = 10 + rows.length * 10;
    if (currentY + tableHeight > doc.internal.pageSize.getHeight()) {
      doc.addPage();
      currentY = 10;
    }

    doc.autoTable({
      head: headers,
      body: rows,
      startY: currentY,
      margin: { top: 0 },
      theme: "striped",
      didDrawCell: (data) => {
        currentY = data.cursor.y + 20;
      },
    });
  });

  doc.save(`${workout[workoutsIndex].name}.pdf`);
};
