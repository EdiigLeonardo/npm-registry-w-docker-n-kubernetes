import React from 'react';
import { connect } from "react-redux";

const Sidebar = ({ modules, dispatch }) => {
  function toggleLesson(module, lesson) {
    return {
      type: "ToggleLesson",
      module,
      lesson
    };
  }

  return (
    <aside>
      {modules.map((module) => (
        <div key={module.key}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => dispatch(toggleLesson(module, lesson))}>Selecionar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default connect(state => ({ modules: state.modules }))(Sidebar);
