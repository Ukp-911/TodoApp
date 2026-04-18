import './App.css'
import Dustbin from './assets/dudstbin.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { addtask, deltask, updatetask } from './todoslice.jsx'
import { useState } from 'react'
import Uptd from "./assets/updatetask.jsx"
import Upd from './assets/updtinp.jsx'
const App = () => {

	const work = useSelector((state) => state.todo.value)
	const dispatch = useDispatch()
	const [task, settask] = useState("")
	const [show, setshow] = useState(false)
	const [updtask,setupdtask]=useState("")
	const [updkey,setupdkey]=useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addtask(task))
		settask("")
	}

	const handleonchange = (e) => {
		settask(e.target.value)
	}

	const handledel = (key) => {
		dispatch(deltask(key))
	}

	const handleupdtaskbtn = (e) => {
		e.preventDefault()
		dispatch(updatetask({updkey,updtask}))
		setupdkey("")
		setshow(!show)
		setupdtask("")
	}

	const changeupdtask=(e)=>{
		setupdtask(e.target.value)
	}

	const upddick = {
		show,
		handleupdtaskbtn,
		changeupdtask,
		updtask,
	}

	const handleupdatetask=(key)=>{
		setupdkey(key)
		setshow(true)
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
					<Uptd handletask={()=>{handleupdatetask(items[0])}}/>
					<Dustbin delfunc={()=>{handledel(items[0])}}/></li>
				))}
			</ol>
			<Upd upddick={upddick} />
		</div>
	)
}

export default App