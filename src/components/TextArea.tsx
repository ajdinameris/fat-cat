/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

type TextAreaProps = {
	children: string | undefined
}

const TextArea = (props: TextAreaProps) => {
	const [text, setText] = useState(props.children);
	return (
		<div className="form-group mb-3">
			<p>{text}</p>
			<textarea className="form-control" value={text} onChange={e => setText(e.target.value)} />
			<hr />
		</div>
	);
};

export default TextArea;
