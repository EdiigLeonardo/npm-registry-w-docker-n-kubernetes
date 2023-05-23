import React from 'react'
import { connect } from 'react-redux';

const Videos=({activeModule, activeLesson})=>{
  return (
    <div>
      <strong>Módulo: {activeModule?.title}</strong>
      <strong>Lesson: {activeLesson?.title}</strong>
    </div>
  )
}

export default connect(state=>({
  activeLesson: state.activeLesson,
  activeModule: state.activeModule
}))(Videos)
