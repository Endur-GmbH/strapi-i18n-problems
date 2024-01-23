import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkoutExercise extends Schema.Component {
  collectionName: 'components_workout_exercises';
  info: {
    displayName: 'Exercise';
  };
  attributes: {
    amount: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    exercise: Attribute.Relation<
      'workout.exercise',
      'oneToOne',
      'api::exercise.exercise'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'workout.exercise': WorkoutExercise;
    }
  }
}
