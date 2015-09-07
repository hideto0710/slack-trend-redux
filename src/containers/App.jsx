
import * as React from 'react';
import { connect } from 'react-redux';

import * as mui from 'material-ui';

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

import Sidebar from './Sidebar';
import Electron from './Electron';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

let PropTypes = React.PropTypes;
let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}

	static childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	static propTypes = {
		visibleTodos: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string.isRequired,
				completed: PropTypes.bool.isRequired
			})
		),
		visibilityFilter: PropTypes.oneOf([
			'SHOW_ALL',
			'SHOW_COMPLETED',
			'SHOW_ACTIVE'
		]).isRequired
	};

	style = {
		sidebar: {
			width: '20%'
		},
		main: {
			height: '100%',
			marginLeft: '20%',
			padding: '24px'
		}
	};

	render() {
		const { dispatch, visibleTodos, visibilityFilter } = this.props;
		return (
			<div>
				<Sidebar style={this.style.sidebar} />
				<div style={this.style.main}>
					<Electron />
					<AddTodo onAddClick={text => dispatch(addTodo(text))} />
					<TodoList
						todos={visibleTodos}
						onTodoClick={index => dispatch(completeTodo(index))} />
					<Footer
						filter={visibilityFilter}
						onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
				</div>
			</div>
		);
	}
}

var selectTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
	}
};

export default connect((state) => {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	};
})(App);
