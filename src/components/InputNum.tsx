/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

type InputNumProps = {
	children: number | undefined | string
}

const InputNum = (props: InputNumProps) => {
	const [num, setNum] = useState(props.children);
	return (
		<div className="form-group mb-3">
			<p>{num}</p>
			<input className="form-control" type="number" value={num} onChange={e => setNum(e.target.value)} />
			<hr />
		</div>
	);
};

export default InputNum;
