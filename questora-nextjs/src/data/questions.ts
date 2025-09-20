import { Question } from '@/types/quiz';
import futebolQuestions from './futebol_100.json';
import historiaQuestions from './historia-do-brasil-100.json';

export const questionsData: { [key: string]: Question[] } = {
  futebol: futebolQuestions as Question[],
  historia: historiaQuestions as Question[]
};
