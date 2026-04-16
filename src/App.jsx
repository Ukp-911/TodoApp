import './App.css'
import Dustbin from './assets/dudstbin.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { addtask, deltask } from './todoslice.jsx'
import { useState } from 'react'
const App = () => {
	const work = useSelector((state) => state.todo.value)
	const dispatch = useDispatch()
	const [task, settask] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addtask(task))
		settask("")
	}

	const handleonchange = (e) => {
		settask(e.target.value)
	}	

	const handledel=(key)=>{
		dispatch(deltask(key))
	}
	return (
		<div className='container'>
			<h1>TodoList</h1>
			<form onSubmit={handleSubmit}>
				<input className='inp' type="text" placeholder='Add Your Task' onChange={handleonchange} value={task} />
				<button className='lab'>Add Task</button>
			</form>
			<ol>
				{Object.entries(work).map(items=>(
					<li key={items[0]}>{items[1]}
					<Dustbin delfunc={()=>{handledel(items[0])}}/></li>
				))}
			</ol>
		</div>
	)
}

export default App