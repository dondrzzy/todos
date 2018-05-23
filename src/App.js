import $ from 'jquery'
import axios from 'axios'
import React, { Component } from 'react'
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import AddProject from './Components/AddProject'
import uuid from 'uuid'

class App extends Component{

	constructor() {
	super();
		this.state = {
			projects: [],
			todos: []
		}
	}
	getBusinesses(){
		axios.get('http://127.0.0.1:5000/api/v1/businesses'+'?page=2')
			.then(res => console.log(res))
	}

	getTodos(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res=>{
				// console.log(res);
				this.setState({todos:res.data})
			})
			.catch(error => console.log(error));
		// $.ajax({
		// 	url: 'https://jsonplaceholder.typicode.com/posts',
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: function(data){
		// 		this.setState({todos: data});
		// 	}.bind(this),
		// 	error(xhr, status, err){
		// 		console.log(err);
		// 	}
		// })
	}

	getProjects(){
		this.setState({
			projects: [
				{
					id: uuid.v4(),
					title: 'Business Website',
					category: 'Web Design'
				},
				{
					id: uuid.v4(),
					title: 'Social App',
					category: 'Mobile Development'
				},
				{
					id: uuid.v4(),
					title: 'Ecommerce Shopping Cart',
					category: 'Web Development'
				}
			]
		});
	}

	componentWillMount(){
		this.getProjects();
		this.getTodos();
		this.getBusinesses();
	}
	componentDidMount(){
		// this.getTodos();
		// this.getBusinesses();
	}
	handleAddProject(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects: projects});
	}

	handleDeleteProject(id){
		let projects = this.state.projects
		let i = projects.findIndex(x => x.id === id)
		projects.splice(i, 1)
		this.setState({projects: projects});
	}

	render() {
		return (
		<div className="App">
			<AddProject addProject={this.handleAddProject.bind(this)} />
			<Projects projects={this.state.projects} deleteProject={this.handleDeleteProject.bind(this)} />
			<Todos todos={this.state.todos} />
		</div>
		)
	}
}

export default App
