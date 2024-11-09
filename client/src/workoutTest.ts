import { workout } from "./@types";

export const workoutsTest: workout[] = [
  {
    name: "Treino de Força Total",
    group: [
      {
        group: "Peito e Ombros",
        exercisesProps: [
          {
            id: "ex1",
            muscle: "Peito",
            exercise: "Supino Declinado",
            observation: "Manter o controle na descida",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 70 },
                { reps: 10, weight: 80 },
                { reps: 8, weight: 90 },
                { reps: 6, weight: 95 },
              ],
            },
          },
          {
            id: "ex2",
            muscle: "Peito",
            exercise: "Crucifixo",
            observation: "Braços semi-flexionados durante o movimento",
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
            id: "ex3",
            muscle: "Ombros",
            exercise: "Desenvolvimento Arnold",
            seriesProps: {
              num: 4,
              props: [
                { reps: 10, weight: 25 },
                { reps: 8, weight: 30 },
                { reps: 6, weight: 35 },
                { reps: 12, weight: 20 },
              ],
            },
          },
          {
            id: "ex4",
            muscle: "Ombros",
            exercise: "Elevação Lateral",
            seriesProps: {
              num: 3,
              props: [
                { reps: 15, weight: 10 },
                { reps: 12, weight: 12 },
                { reps: 10, weight: 15 },
              ],
            },
          },
          {
            id: "ex5",
            muscle: "Ombros",
            exercise: "Crucifixo Invertido",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 10 },
                { reps: 10, weight: 12 },
                { reps: 8, weight: 15 },
              ],
            },
          },
        ],
      },
      {
        group: "Pernas e Abdômen",
        exercisesProps: [
          {
            id: "ex6",
            muscle: "Quadríceps",
            exercise: "Agachamento Hack",
            seriesProps: {
              num: 4,
              props: [
                { reps: 10, weight: 100 },
                { reps: 8, weight: 110 },
                { reps: 6, weight: 120 },
                { reps: 10, weight: 90 },
              ],
            },
          },
          {
            id: "ex7",
            muscle: "Quadríceps",
            exercise: "Extensão de Pernas",
            seriesProps: {
              num: 3,
              props: [
                { reps: 15, weight: 50 },
                { reps: 12, weight: 60 },
                { reps: 10, weight: 70 },
              ],
            },
          },
          {
            id: "ex8",
            muscle: "Posterior de Coxa",
            exercise: "Cadeira Flexora",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 30 },
                { reps: 10, weight: 35 },
                { reps: 8, weight: 40 },
                { reps: 6, weight: 45 },
              ],
            },
          },
          {
            id: "ex9",
            muscle: "Glúteos",
            exercise: "Levantamento Terra",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 70 },
                { reps: 10, weight: 80 },
                { reps: 8, weight: 90 },
              ],
            },
          },
          {
            id: "ex10",
            muscle: "Abdômen",
            exercise: "Abdominal Completo",
            seriesProps: {
              num: 3,
              props: [{ reps: 20 }, { reps: 18 }, { reps: 15 }],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Treino de Hipertrofia",
    group: [
      {
        group: "Costas e Bíceps",
        exercisesProps: [
          {
            id: "ex11",
            muscle: "Costas",
            exercise: "Remada Curvada",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 60 },
                { reps: 10, weight: 70 },
                { reps: 8, weight: 80 },
                { reps: 6, weight: 90 },
              ],
            },
          },
          {
            id: "ex12",
            muscle: "Costas",
            exercise: "Puxada Neutra",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 55 },
                { reps: 10, weight: 60 },
                { reps: 8, weight: 65 },
              ],
            },
          },
          {
            id: "ex13",
            muscle: "Bíceps",
            exercise: "Rosca Direta",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 30 },
                { reps: 10, weight: 35 },
                { reps: 8, weight: 40 },
                { reps: 6, weight: 45 },
              ],
            },
          },
          {
            id: "ex14",
            muscle: "Bíceps",
            exercise: "Rosca Alternada",
            seriesProps: {
              num: 3,
              props: [
                { reps: 15, weight: 20 },
                { reps: 12, weight: 25 },
                { reps: 10, weight: 30 },
              ],
            },
          },
          {
            id: "ex15",
            muscle: "Costas",
            exercise: "Pullover",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 30 },
                { reps: 10, weight: 35 },
                { reps: 8, weight: 40 },
              ],
            },
          },
        ],
      },
      {
        group: "Ombros e Trapézio",
        exercisesProps: [
          {
            id: "ex16",
            muscle: "Ombros",
            exercise: "Desenvolvimento Militar",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 30 },
                { reps: 10, weight: 35 },
                { reps: 8, weight: 40 },
                { reps: 6, weight: 45 },
              ],
            },
          },
          {
            id: "ex17",
            muscle: "Ombros",
            exercise: "Elevação Lateral com Corda",
            seriesProps: {
              num: 3,
              props: [
                { reps: 15, weight: 15 },
                { reps: 12, weight: 20 },
                { reps: 10, weight: 25 },
              ],
            },
          },
          {
            id: "ex18",
            muscle: "Trapézio",
            exercise: "Encolhimento com Barra",
            seriesProps: {
              num: 4,
              props: [
                { reps: 15, weight: 60 },
                { reps: 12, weight: 70 },
                { reps: 10, weight: 80 },
                { reps: 8, weight: 90 },
              ],
            },
          },
          {
            id: "ex19",
            muscle: "Ombros",
            exercise: "Crucifixo Invertido na Polia",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 15 },
                { reps: 10, weight: 20 },
                { reps: 8, weight: 25 },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Treino de Resistência",
    group: [
      {
        group: "Peito e Tríceps",
        exercisesProps: [
          {
            id: "ex20",
            muscle: "Peito",
            exercise: "Supino Reto com Halteres",
            seriesProps: {
              num: 4,
              props: [
                { reps: 15, weight: 25 },
                { reps: 12, weight: 30 },
                { reps: 10, weight: 35 },
                { reps: 8, weight: 40 },
              ],
            },
          },
          {
            id: "ex21",
            muscle: "Peito",
            exercise: "Flexão de Braços",
            seriesProps: {
              num: 3,
              props: [{ reps: 20 }, { reps: 18 }, { reps: 15 }],
            },
          },
          {
            id: "ex22",
            muscle: "Tríceps",
            exercise: "Tríceps Testa",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 25 },
                { reps: 10, weight: 30 },
                { reps: 8, weight: 35 },
                { reps: 6, weight: 40 },
              ],
            },
          },
          {
            id: "ex23",
            muscle: "Tríceps",
            exercise: "Tríceps Coice",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 20 },
                { reps: 10, weight: 22 },
                { reps: 8, weight: 25 },
              ],
            },
          },
          {
            id: "ex24",
            muscle: "Peito",
            exercise: "Crucifixo Inclinado",
            seriesProps: {
              num: 3,
              props: [
                { reps: 12, weight: 15 },
                { reps: 10, weight: 18 },
                { reps: 8, weight: 20 },
              ],
            },
          },
        ],
      },
      {
        group: "Pernas e Glúteos",
        exercisesProps: [
          {
            id: "ex25",
            muscle: "Pernas",
            exercise: "Agachamento Livre",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 50 },
                { reps: 10, weight: 60 },
                { reps: 8, weight: 70 },
                { reps: 6, weight: 80 },
              ],
            },
          },
          {
            id: "ex26",
            muscle: "Pernas",
            exercise: "Avanço",
            seriesProps: {
              num: 3,
              props: [
                { reps: 15, weight: 30 },
                { reps: 12, weight: 35 },
                { reps: 10, weight: 40 },
              ],
            },
          },
          {
            id: "ex27",
            muscle: "Posterior de Coxa",
            exercise: "Stiff com Halteres",
            seriesProps: {
              num: 4,
              props: [
                { reps: 12, weight: 20 },
                { reps: 10, weight: 25 },
                { reps: 8, weight: 30 },
                { reps: 6, weight: 35 },
              ],
            },
          },
          {
            id: "ex28",
            muscle: "Glúteos",
            exercise: "Elevação de Quadril",
            seriesProps: {
              num: 3,
              props: [
                { reps: 15, weight: 20 },
                { reps: 12, weight: 25 },
                { reps: 10, weight: 30 },
              ],
            },
          },
        ],
      },
    ],
  },
];

export default workoutsTest;
