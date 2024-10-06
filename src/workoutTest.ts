import { Workouts } from "./@types";

export const workoutTest: Workouts = {
  name: "Exemplo de Treino",
  workout: [
    {
      group: "Peito e Tríceps",
      exercisesProps: [
        {
          id: "ex1",
          muscle: "Peito",
          exercise: "Supino Reto",
          observation: "Manter os pés no chão",
          seriesProps: {
            num: 4,
            props: [
              { reps: 10, weight: 60 },
              { reps: 8, weight: 70 },
              { reps: 6, weight: 80 },
              { reps: 12 }, // Sem peso definido
            ],
          },
        },
        {
          id: "ex2",
          muscle: "Peito",
          exercise: "Supino Inclinado",
          seriesProps: {
            num: 3,
            props: [
              { reps: 10, weight: 55 },
              { reps: 8, weight: 65 },
              { reps: 6, weight: 75 },
            ],
          },
        },
        {
          id: "ex3",
          muscle: "Tríceps",
          exercise: "Tríceps na Polia Alta",
          seriesProps: {
            num: 3,
            props: [
              { reps: 12, weight: 40 },
              { reps: 10, weight: 45 },
              { reps: 8, weight: 50 },
            ],
          },
        },
        {
          id: "ex4",
          muscle: "Tríceps",
          exercise: "Mergulho",
          seriesProps: {
            num: 4,
            props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }, { reps: 8 }],
          },
        },
      ],
    },
    {
      group: "Costas e Bíceps",
      exercisesProps: [
        {
          id: "ex5",
          muscle: "Costas",
          exercise: "Puxada na Barra Fixa",
          seriesProps: {
            num: 4,
            props: [{ reps: 8 }, { reps: 7 }, { reps: 6 }, { reps: 10 }],
          },
        },
        {
          id: "ex6",
          muscle: "Costas",
          exercise: "Remada Curvada",
          seriesProps: {
            num: 3,
            props: [
              { reps: 10, weight: 60 },
              { reps: 8, weight: 70 },
              { reps: 6, weight: 80 },
            ],
          },
        },
        {
          id: "ex7",
          muscle: "Bíceps",
          exercise: "Rosca Direta",
          seriesProps: {
            num: 3,
            props: [
              { reps: 12, weight: 30 },
              { reps: 10, weight: 35 },
              { reps: 8, weight: 40 },
            ],
          },
        },
        {
          id: "ex8",
          muscle: "Bíceps",
          exercise: "Rosca Martelo",
          seriesProps: {
            num: 3,
            props: [{ reps: 12 }, { reps: 10 }, { reps: 8 }],
          },
        },
        {
          id: "ex9",
          muscle: "Bíceps",
          exercise: "Rosca Scott",
          seriesProps: {
            num: 2,
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
          id: "ex10",
          muscle: "Quadríceps",
          exercise: "Agachamento Livre",
          seriesProps: {
            num: 6,
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
          id: "ex11",
          muscle: "Quadríceps",
          exercise: "Leg Press",
          seriesProps: {
            num: 4,
            props: [
              { reps: 12, weight: 150 },
              { reps: 10, weight: 170 },
              { reps: 8, weight: 190 },
              { reps: 6 },
            ],
          },
        },
        {
          id: "ex12",
          muscle: "Posterior de Coxa",
          exercise: "Cadeira Flexora",
          seriesProps: {
            num: 3,
            props: [
              { reps: 12, weight: 40 },
              { reps: 10, weight: 50 },
              { reps: 8, weight: 60 },
            ],
          },
        },
        {
          id: "ex13",
          muscle: "Posterior de Coxa",
          exercise: "Stiff",
          seriesProps: {
            num: 4,
            props: [
              { reps: 10, weight: 70 },
              { reps: 8, weight: 80 },
              { reps: 6, weight: 90 },
              { reps: 12 }, // Sem peso definido
            ],
          },
        },
        {
          id: "ex14",
          muscle: "Glúteos",
          exercise: "Elevação de Quadril",
          seriesProps: {
            num: 3,
            props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }],
          },
        },
      ],
    },
    {
      group: "Ombros e Abdômen",
      exercisesProps: [
        {
          id: "ex15",
          muscle: "Ombros",
          exercise: "Desenvolvimento com Halteres",
          seriesProps: {
            num: 3,
            props: [
              { reps: 10, weight: 30 },
              { reps: 8, weight: 35 },
              { reps: 6, weight: 40 },
            ],
          },
        },
        {
          id: "ex16",
          muscle: "Ombros",
          exercise: "Elevação Lateral",
          seriesProps: {
            num: 3,
            props: [
              { reps: 12, weight: 15 },
              { reps: 10, weight: 20 },
              { reps: 8, weight: 25 },
            ],
          },
        },
        {
          id: "ex17",
          muscle: "Ombros",
          exercise: "Elevação Frontal",
          seriesProps: {
            num: 2,
            props: [
              { reps: 12, weight: 10 },
              { reps: 10, weight: 15 },
            ],
          },
        },
        {
          id: "ex18",
          muscle: "Abdômen",
          exercise: "Crunch",
          seriesProps: {
            num: 3,
            props: [{ reps: 20 }, { reps: 18 }, { reps: 15 }],
          },
        },
        {
          id: "ex19",
          muscle: "Abdômen",
          exercise: "Elevação de Pernas",
          seriesProps: {
            num: 3,
            props: [{ reps: 15 }, { reps: 12 }, { reps: 10 }],
          },
        },
      ],
    },
    {
      group: "Braços e Abdômen Inferior",
      exercisesProps: [
        {
          id: "ex20",
          muscle: "Tríceps",
          exercise: "Tríceps Testa",
          seriesProps: {
            num: 3,
            props: [
              { reps: 12, weight: 25 },
              { reps: 10, weight: 30 },
              { reps: 8, weight: 35 },
            ],
          },
        },
        {
          id: "ex21",
          muscle: "Bíceps",
          exercise: "Rosca Alternada",
          seriesProps: {
            num: 3,
            props: [
              { reps: 12, weight: 20 },
              { reps: 10, weight: 25 },
              { reps: 8, weight: 30 },
            ],
          },
        },
        {
          id: "ex22",
          muscle: "Tríceps",
          exercise: "Tríceps na Barra",
          seriesProps: {
            num: 3,
            props: [{ reps: 12 }, { reps: 10 }, { reps: 8 }],
          },
        },
        {
          id: "ex23",
          muscle: "Bíceps",
          exercise: "Rosca Concentrada",
          seriesProps: {
            num: 2,
            props: [
              { reps: 10, weight: 15 },
              { reps: 8, weight: 20 },
            ],
          },
        },
        {
          id: "ex24",
          muscle: "Abdômen Inferior",
          exercise: "Prancha",
          seriesProps: {
            num: 3,
            props: [
              { reps: 60 }, // Tempo em segundos
              { reps: 45 },
              { reps: 30 },
            ],
          },
        },
      ],
    },
  ],
};
