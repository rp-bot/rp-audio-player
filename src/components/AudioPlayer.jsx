import React from "react";


const AudioPlayer = () => {
	return (
		<div className="bg-black flex flex-col justify-center h-screen items-center m-auto max-w-screen">
			<audio controls>
				<source src="/ex.mp3" type="audio/mpeg" />
			</audio>
			<input type="range" value={0} id="progress"></input>
		</div>
	);
};
export default AudioPlayer;
