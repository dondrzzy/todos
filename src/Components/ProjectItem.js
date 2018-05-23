import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component{
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        return (
            <li className="project-item">
                {this.props.project.title} - {this.props.project.category}
                <button onClick={this.deleteProject.bind(this, this.props.project.id)} >Delete</button>
            </li>
        )
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
};

export default ProjectItem