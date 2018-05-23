import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component{

    constructor(){
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobiile Development']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            console.log('Title is required');
        }else{
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title:this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject)
            })
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category =>{
            return <option key={category} value={category}>{category}</option>
        })
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)} action="">
                    <div>
                        <label htmlFor="">Title</label><br/>
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <br/>
                        <select name="" id="" ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                        <br/>
                    </div>
                </form>
            </div>
        );
    }
}

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject