import jsPDF from "jspdf";
import "jspdf-autotable";
import { workoutTest } from "./workoutTest";

const generatePDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(12); // Define o tamanho da fonte

  // Adiciona o título do treino
  doc.text(workoutTest.name, 14, 10);
  let currentY = 20; // Define a posição inicial no eixo Y para o título

  // Adiciona uma tabela para cada grupo de exercícios
  workoutTest.workout.forEach((group) => {
    doc.text(group.group, 14, currentY); // Título do grupo

    const headers = [
      "Músculo",
      "Exercício",
      "Observação",
      "Séries",
      "Repetições",
      "Peso",
    ];
    const rows: (string | number)[][] = [];

    group.exercisesProps.forEach((exercise) => {
      const series = exercise.seriesProps.props
        .map((s) => `${s.reps} ${s.weight ? `(${s.weight}kg)` : ""}`)
        .join(", ");

      rows.push([
        exercise.muscle,
        exercise.exercise,
        exercise.observation || "Sem Observação", // Valor padrão se undefined
        exercise.seriesProps.num,
        series,
      ]);
    });

    // Verifica se a tabela cabe na página
    const tableStartY = currentY + 10; // Inicia a tabela logo abaixo do título do grupo

    // Adiciona a tabela ao PDF e obtém a altura
    const autoTable = doc.autoTable({
      head: [headers],
      body: rows,
      startY: tableStartY,
      margin: { top: 0 },
      theme: "grid", // Adiciona um tema à tabela
    });

    // Use autoTable.previous para verificar se a tabela foi adicionada corretamente
    if (autoTable.previous && autoTable.previous.finalY) {
      const tableHeight = autoTable.previous.finalY; // Pega a altura final da tabela

      // Verifica se a tabela cabe na página
      if (tableStartY + tableHeight > doc.internal.pageSize.getHeight()) {
        doc.addPage(); // Adiciona uma nova página
        currentY = 10; // Reseta a posição Y
      } else {
        currentY += tableHeight + 20; // Atualiza a posição atual para o próximo grupo
      }
    } else {
      console.error("Erro ao adicionar tabela: finalY não encontrado.");
      // Se a tabela não pôde ser adicionada, você pode querer adicionar uma nova página
      doc.addPage(); // Adiciona uma nova página se a tabela falhar
      currentY = 10; // Reseta a posição Y
    }
  });

  // Salva o PDF
  doc.save("workout.pdf");
};

const MyComponent = () => {
  return (
    <div>
      <button onClick={generatePDF}>Gerar PDF do Treino</button>
    </div>
  );
};

export default MyComponent;
