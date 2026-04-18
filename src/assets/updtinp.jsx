const Updtinp = ({ upddick }) => {
	return (
		<div className="updinp" style={{
			display: upddick.show ? 'block' : 'none',
		}}>
			<form>
				<input className='inp' type="text" placeholder='Add Update' onChange={upddick.changeupdtask} value={upddick.updtask}/>
				<button className='lab' onClick={upddick.handleupdtaskbtn}>Update Task</button>
			</form>
		</div>
	)
}

export default Updtinp