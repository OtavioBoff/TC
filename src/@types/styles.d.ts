import "styled-components";
import { defaultTheme } from "../styles/themes/default.ts";

type ThemeType = typeof defaultTheme;

declare module "style-components" {
  export interface DefaultTheme extends ThemeType {}
}

export type WorkoutType = typeof Workout;

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
