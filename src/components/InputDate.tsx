/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

type InputDateProps = {
	children: string | undefined
}

const InputDate = (props: InputDateProps) => {
	const [date, setDate] = useState(props.children);
	return (
		<div className="form-group mb-3">
			<p>{date}</p>
			<input className="form-control" type="date" value={date} onChange={e => setDate(e.target.value)} />
			<hr />
		</div>
	);
};

export default InputDate;
