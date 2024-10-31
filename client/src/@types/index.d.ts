export type WorkoutType = typeof Workout;

export interface Workouts {
  name: string;
  workout: Workout[];
}

export interface Workout {
  id: string;
  group: string;
  exercisesProps: ExercisesProps[];
}

export interface ExercisesProps {
  id: string;
  muscle: string;
  exercise: string;
  observation?: string;
  seriesProps: { num: number; props: SeriesProps[] };
}

interface SeriesProps {
  id: string;
  reps?: number;
  weight?: number;
}
