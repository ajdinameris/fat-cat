/* eslint-disable no-underscore-dangle */
import React from 'react';
import { data } from './data';
import MembersRender from './MembersRender';

const App: React.FC = () => {
	return (
		<div className="App">
			{/* Mapping through the JSON data array and rendering each object inside the array */}
			{data.map(member => (
				<MembersRender key={member.guid} {...member} />
			))}
		</div>
	);
};
// 		      _
//        .__(.)< (MEOW)
//         \___)
//  ~~~~~~~~~~~~~~~~~~-->

export default App;
