export type WorkoutType = typeof group;

export interface User {
  id: number;
  name: string;
  email: string;
}
export interface Workout {
  id: number;
  name: string;
  group: Group[];
}

export interface Group {
  id?: number;
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

export interface WorkoutBack {
  id: number;
  name: string;
  groups: GroupBack[];
  userId: number;
}
export interface GroupBack {
  id: number;
  name: string;
  exercises: ExerciseBack[];
  workoutId: number;
}

export interface ExerciseBack {
  id: number;
  muscle: string;
  exercise: string;
  observation?: string;
  series: SeriesBack[];
  groupId: number;
}

export interface SeriesBack {
  id: number;
  reps?: number;
  weight?: number;
  exerciseId: number;
}

export interface UserBack {
  id: number;
  name: string;
  email: string;
  createdIn: Date;
  workouts: WorkoutBack[];
}

export interface Notification {
  id: number;
  userName: string;
  message: string;
  read: boolean;
  workoutId: number;
  email: string;
  timestamp?: Date;
}
