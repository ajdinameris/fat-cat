/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

type InputTextProps = {
	children: string | undefined
}

const InputText = (props: InputTextProps) => {
	const [text, setText] = useState(props.children);
	return (
		<div className="form-group mb-3">
			<p>{text}</p>
			<input className="form-control" type="text" value={text} onChange={e => setText(e.target.value)} />
			<hr />
		</div>
	);
};

export default InputText;
