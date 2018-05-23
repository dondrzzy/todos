import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectItem from './ProjectItem'

class Projects extends Component{

    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem onDelete={this.props.deleteProject.bind(this)} key={project.title} project={project} />
                )
            })
            
        }
        return (
            <div className="projects">
                <h3>Latest Projects</h3>
                {projectItems}
            </div>
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func,
    deleteProject: PropTypes.func
}

export default Projects