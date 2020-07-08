import { Level } from './level.enum';
export interface Course {
  uid?: string;
  key?: string;
  title: string;
  area?: string;
  levelId: number;
  description: string;
  teacherId?: string;
}
