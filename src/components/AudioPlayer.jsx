import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = ({ audio_sources, source_index }) => {
	const [sourceArray, setSourceArray] = useState(audio_sources); //audio source
	const [isPlaying, setIsPlaying] = useState(false); // playing status
	const [btnPlayPause, setbtnPlayPause] = useState(
		"0 0, 50% 25%, 50% 75%, 50% 75%, 50% 25%, 100% 50%, 100% 50%, 0 100%"
	);
	// const [currentAudio, setCurrentAudio] = useState(
	// 	audio_sources[source_index]
	// );

	const audioElement = useRef();

	useEffect(() => {
		if (isPlaying) {
			audioElement?.current?.play();

			// show pause button - ||
			setbtnPlayPause(
				"0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%"
			);
		} else {
			audioElement?.current?.pause();

			// show pause button - |>
			setbtnPlayPause(
				"0 0, 50% 25%, 50% 75%, 50% 75%, 50% 25%, 100% 50%, 100% 50%, 0 100%"
			);
		}
	}, [isPlaying]);

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="bg-black flex flex-col justify-center h-screen items-center m-auto max-w-screen">
			<div className=" max-w-screen-lg h-fit">
				<audio src="/ex.mp3" ref={audioElement} />
				<button
					onClick={handlePlayPause}
					className="p-10 rounded-lg  bg-zinc-900 hover:bg-gray-600 cursor-pointer transition"
				>
					<div
						// TODO: make size customizable
						className="w-32 h-32 bg-white transition-all"
						style={{
							clipPath: `polygon(${btnPlayPause})`,
						}}
					></div>
				</button>
			</div>
		</div>
	);
};
export default AudioPlayer;
