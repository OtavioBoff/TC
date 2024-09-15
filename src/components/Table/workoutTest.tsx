import { Workout } from "../../@types/styles";

export const workoutTest: Workout[] = [
  {
    group: "Peito e Tríceps",
    exercisesProps: [
      {
        muscle: "Peito",
        exercise: "Supino Reto",
        observation: "Manter os pés no chão",
        seriesProps: {
          num: 4, // Adicione o número de séries para refletir o número de props
          props: [
            { reps: 10, weight: 60 },
            { reps: 8, weight: 70 },
            { reps: 6, weight: 80 },
            { reps: 12 }, // Sem peso definido
          ],
        },
      },
      {
        muscle: "Peito",
        exercise: "Supino Inclinado",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 10, weight: 55 },
            { reps: 8, weight: 65 },
            { reps: 6, weight: 75 },
          ],
        },
      },
      {
        muscle: "Tríceps",
        exercise: "Tríceps na Polia Alta",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 12, weight: 40 },
            { reps: 10, weight: 45 },
            { reps: 8, weight: 50 },
          ],
        },
      },
      {
        muscle: "Tríceps",
        exercise: "Mergulho",
        seriesProps: {
          num: 4, // Adicione o número de séries
          props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
        },
      },
    ],
  },
  {
    group: "Costas e Bíceps",
    exercisesProps: [
      {
        muscle: "Costas",
        exercise: "Puxada na Barra Fixa",
        seriesProps: {
          num: 4, // Adicione o número de séries
          props: [{ reps: 8 }, { reps: 7 }, { reps: 6 }, { reps: 10 }],
        },
      },
      {
        muscle: "Costas",
        exercise: "Remada Curvada",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 10, weight: 60 },
            { reps: 8, weight: 70 },
            { reps: 6, weight: 80 },
          ],
        },
      },
      {
        muscle: "Bíceps",
        exercise: "Rosca Direta",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 12, weight: 30 },
            { reps: 10, weight: 35 },
            { reps: 8, weight: 40 },
          ],
        },
      },
      {
        muscle: "Bíceps",
        exercise: "Rosca Martelo",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [{ reps: 12 }, { reps: 10 }, { reps: 8 }],
        },
      },
      {
        muscle: "Bíceps",
        exercise: "Rosca Scott",
        seriesProps: {
          num: 2, // Adicione o número de séries
          props: [
            { reps: 10, weight: 25 },
            { reps: 8, weight: 30 },
          ],
        },
      },
    ],
  },
  {
    group: "Pernas",
    exercisesProps: [
      {
        muscle: "Quadríceps",
        exercise: "Agachamento Livre",
        seriesProps: {
          num: 6, // Adicione o número de séries
          props: [
            { reps: 10, weight: 80 },
            { reps: 8, weight: 90 },
            { reps: 6, weight: 100 },
            { reps: 10, weight: 80 },
            { reps: 8, weight: 90 },
            { reps: 6, weight: 100 },
          ],
        },
      },
      {
        muscle: "Quadríceps",
        exercise: "Leg Press",
        seriesProps: {
          num: 4, // Adicione o número de séries
          props: [
            { reps: 12, weight: 150 },
            { reps: 10, weight: 170 },
            { reps: 8, weight: 190 },
            { reps: 6 },
          ],
        },
      },
      {
        muscle: "Posterior de Coxa",
        exercise: "Cadeira Flexora",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 12, weight: 40 },
            { reps: 10, weight: 50 },
            { reps: 8, weight: 60 },
          ],
        },
      },
      {
        muscle: "Posterior de Coxa",
        exercise: "Stiff",
        seriesProps: {
          num: 4, // Adicione o número de séries
          props: [
            { reps: 10, weight: 70 },
            { reps: 8, weight: 80 },
            { reps: 6, weight: 90 },
            { reps: 12 }, // Sem peso definido
          ],
        },
      },
      {
        muscle: "Glúteos",
        exercise: "Elevação de Quadril",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }],
        },
      },
    ],
  },
  {
    group: "Ombros e Abdômen",
    exercisesProps: [
      {
        muscle: "Ombros",
        exercise: "Desenvolvimento com Halteres",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 10, weight: 30 },
            { reps: 8, weight: 35 },
            { reps: 6, weight: 40 },
          ],
        },
      },
      {
        muscle: "Ombros",
        exercise: "Elevação Lateral",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 12, weight: 15 },
            { reps: 10, weight: 20 },
            { reps: 8, weight: 25 },
          ],
        },
      },
      {
        muscle: "Ombros",
        exercise: "Elevação Frontal",
        seriesProps: {
          num: 2, // Adicione o número de séries
          props: [
            { reps: 12, weight: 10 },
            { reps: 10, weight: 15 },
          ],
        },
      },
      {
        muscle: "Abdômen",
        exercise: "Crunch",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [{ reps: 20 }, { reps: 18 }, { reps: 15 }],
        },
      },
      {
        muscle: "Abdômen",
        exercise: "Elevação de Pernas",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }],
        },
      },
    ],
  },
  {
    group: "Braços e Abdômen Inferior",
    exercisesProps: [
      {
        muscle: "Tríceps",
        exercise: "Tríceps Testa",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 12, weight: 25 },
            { reps: 10, weight: 30 },
            { reps: 8, weight: 35 },
          ],
        },
      },
      {
        muscle: "Bíceps",
        exercise: "Rosca Alternada",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 12, weight: 20 },
            { reps: 10, weight: 25 },
            { reps: 8, weight: 30 },
          ],
        },
      },
      {
        muscle: "Tríceps",
        exercise: "Tríceps na Barra",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [{ reps: 12 }, { reps: 10 }, { reps: 8 }],
        },
      },
      {
        muscle: "Bíceps",
        exercise: "Rosca Concentrada",
        seriesProps: {
          num: 2, // Adicione o número de séries
          props: [
            { reps: 10, weight: 15 },
            { reps: 8, weight: 20 },
          ],
        },
      },
      {
        muscle: "Abdômen Inferior",
        exercise: "Prancha",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [
            { reps: 60 }, // Tempo em segundos
            { reps: 45 },
            { reps: 30 },
          ],
        },
      },
      {
        muscle: "Abdômen Inferior",
        exercise: "Crunch Invertido",
        seriesProps: {
          num: 3, // Adicione o número de séries
          props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }],
        },
      },
    ],
  },
];
