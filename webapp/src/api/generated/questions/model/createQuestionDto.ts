/*
 * Generated by orval v5.5.10 🍺
 * Do not edit manually.
 * Questions example
 * The questions API description
 * OpenAPI spec version: 1.0
 */
import type { Answer } from './answer';

export interface CreateQuestionDto {
  text: string;
  answers: Answer[];
}