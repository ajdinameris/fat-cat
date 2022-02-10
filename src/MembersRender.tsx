import React from 'react';
import InputDate from './components/InputDate';
import InputEmail from './components/InputEmail';
import InputNum from './components/InputNum';
import InputRadio from './components/InputRadio';
import InputText from './components/InputText';
import TextArea from './components/TextArea';

export interface RootObject {
	_id?: string;
	index?: number;
	guid?: string;
	isActive?: boolean;
	balance?: string;
	picture?: string;
	age?: number;
	eyeColor?: string;
	name?: string;
	gender?: string;
	company?: string;
	email?: string;
	phone?: string;
	address?: string;
	about?: string;
	registered?: string;
	latitude?: number;
	longitude?: number;
	tags?: string[];
	friends?: Friend[];
	greeting?: string;
	favoriteFruit?: string;
}
export type Friend = {
	id: number;
	name: string;
}

const MembersRender: React.FC<RootObject> = ({
	isActive,
	balance,
	age,
	name,
	guid,
	about,
	address,
	company,
	email,
	eyeColor,
	favoriteFruit,
	gender,
	greeting,
	index,
	latitude,
	longitude,
	phone,
	picture,
	registered,
}) => {
	return (
		<div className="container border-bottom border-primary mt-4" key={guid}>
			<InputText>{balance}</InputText>
			<InputText>{name}</InputText>
			<InputNum>{age}</InputNum>
			<TextArea>{about}</TextArea>
			<InputText>{address}</InputText>
			<InputText>{company}</InputText>
			<InputEmail>{email}</InputEmail>
			<InputText>{eyeColor}</InputText>
			<InputText>{favoriteFruit}</InputText>
			<InputText>{gender}</InputText>
			<InputText>{greeting}</InputText>
			<InputNum>{index}</InputNum>
			<InputNum>{latitude}</InputNum>
			<InputNum>{longitude}</InputNum>
			<InputText>{phone}</InputText>
			<InputText>{picture}</InputText>
			<InputDate>{registered}</InputDate>
			<InputRadio>{isActive}</InputRadio>
		</div>

	);
};

export default MembersRender;
