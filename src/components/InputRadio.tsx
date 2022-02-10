/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

type InputRadioProps = {
	children: boolean | undefined
};

const InputRadio = (props: InputRadioProps) => {
	const radio = props.children;
	return (
		<div className="form-group">
			<div className="form-check mb-3">
				<p>Boolean</p>
				<input className="form-check-input" type="radio" id="radio1" value="True" checked={radio === true} />
				<label className="form-check-label" htmlFor="radio1">True</label>
			</div>
			<div className="form-check mb-3">
				<input className="form-check-input" type="radio" id=" radio2" value="False" checked={radio === false} />
				<label className="form-check-label" htmlFor="radio2">False</label>
			</div>
		</div>
	);
};

export default InputRadio;
