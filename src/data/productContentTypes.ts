import type { TranslatedString } from './products/types';

export type ProductEditorialContent = {
    description: string;
    introduction: string;
    selection: string[];
    questions: { question: string; answer: string }[];
};
export type ProductContentMap = Partial<Record<number, Record<keyof TranslatedString, ProductEditorialContent>>>;

export function productCopy(description: string, introduction: string, selection: string[], questions: [string, string][]): ProductEditorialContent {
    return { description, introduction, selection, questions: questions.map(([question, answer]) => ({ question, answer })) };
}
