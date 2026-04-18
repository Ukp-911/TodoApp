const Updtinp = ({ upddick }) => {
	return (
		<div className="updinp" style={{
			display: upddick.key ? 'block' : 'none',
		}}>
			<form>
				<input className='inp' type="text" placeholder='Add Update' />
				<button className='lab' onClick={upddick.handleupdtaskbtn}>Update Task</button>
			</form>
		</div>
	)
}

export default Updtinp
