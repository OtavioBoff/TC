export type WorkoutType = typeof Workout;

export interface Workouts {
  name: string;
  workout: Workout[];
}

export interface Workout {
  group: string;
  exercisesProps: ExercisesProps[];
}

export interface ExercisesProps {
  muscle: string;
  exercise: string;
  observation?: string;
  seriesProps: { num: number; props: SeriesProps[] };
}

interface SeriesProps {
  reps?: number;
  weight?: number;
}
