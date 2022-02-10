/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

type InputEmailProps = {
	children: string | undefined
}

const InputEmail = (props: InputEmailProps) => {
	const [email, setEmail] = useState(props.children);
	return (
		<div className="form-group mb-3">
			<p>{email}</p>
			<input className="form-control" type="email" placeholder="kata@fat-cat-example.com" value={email} onChange={e => setEmail(e.target.value)} required />
			<hr />
		</div>
	);
};

export default InputEmail;
