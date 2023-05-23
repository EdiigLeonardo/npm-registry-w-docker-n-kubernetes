import { TOGGLE_LESSON } from './types.js';

export function toggleLesson(module, lesson) {
    return {
      type: "ToggleLesson",
      module,
      lesson
    };
  }