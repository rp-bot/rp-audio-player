import React, { useState, useEffect, useRef } from "react";
// import AudioWaveform from "./AudioWaveform";

const AudioPlayer = ({ audio_sources, source_index }) => {
	const [audioStream, setAudioStream] = useState({}); //audio source
	const [isPlaying, setIsPlaying] = useState(false); // playing status
	const [progress, setProgress] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [btnPlayPause, setbtnPlayPause] = useState(
		"0 0, 50% 25%, 50% 75%, 50% 75%, 50% 25%, 100% 50%, 100% 50%, 0 100%"
	);

	const audioElement = useRef();
	const progressBarElem = useRef();

	const handleOnPlaying = (e) => {
		const duration = audioElement?.current?.duration;
		const curTime = audioElement?.current?.currentTime;
		setAudioStream({
			...audioStream,
			progress: (curTime / duration) * 100,
			duration: duration,
		});
		setProgress((curTime / duration) * 100);
		// setProgress((curTime / duration) * 100);
	};

	// const handleChange = (event) => {
	// 	const duration = audioElement?.current?.duration;
	// 	const curTime = audioElement?.current?.currentTime;
	// 	setProgress(event.target.value);
	// 	setAudioStream({
	// 		...audioStream,
	// 		progress: progress,
	// 		duration: duration,
	// 	});
	// 	console.log("duration: " + audioStream.duration);
	// 	console.log("currentTime: " + audioStream.progress);
	// 	console.log("progress: " + progress);
	// };

	// const checkWidth = (e) => {
	// 	let width = progressBarElem?.current?.clientWidth;
	// 	// const offset = e.nativeEvent.clientX;
	// 	// console.log(offset);

	// 	const newTime = (mousePosition.x / width) * 100;
	// 	audioStream.duration === undefined
	// 		? (audioStream.duration = 1)
	// 		: audioStream.duration;

	// 	audioElement.current.currentTime =
	// 		((newTime - 50) / 100) * audioStream.duration;

	// 	console.log(audioElement.current.currentTime);
	// };

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
	};
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
		// function handleMouseMove(event) {
		// 	setMousePosition({ x: event.clientX });
		// 	let width = progressBarElem?.current?.clientWidth;
		// 	const newTime = (mousePosition.x / width) * 100;
		// 	audioStream.duration === undefined
		// 		? (audioStream.duration = 1)
		// 		: audioStream.duration;
		// 	console.log(mousePosition.x);
		// 	audioElement.current.currentTime =
		// 		((newTime - 50) / 100) * audioStream.duration;
		// }

		// const div = progressBarElem.current;
		// div.addEventListener("mousemove", handleMouseMove);

		// return () => {
		// 	div.removeEventListener("mousemove", handleMouseMove);
		// };
	}, [isPlaying]);

	return (
		<div className="bg-zinc-600 flex flex-col justify-center h-screen items-center m-auto max-w-screen">
			<div className="text-white">Mouse position: {progress}</div>
			{/* <AudioWaveform audioUrl={"/ex.mp3"} /> */}
			<div className=" w-screen flex flex-col justify-center items-center">
				<audio
					src="/ex.mp3"
					ref={audioElement}
					onTimeUpdate={handleOnPlaying}
				/>
				{/* Progress bar */}
				<div className="relative w-96 h-5">
					<input
						type="range"
						min="0"
						max="100"
						value={progress}
						onChange={(e) => handleOnPlaying(e)}
						className="absolute w-full h-full rounded-full bg-gray-300 appearance-none outline-none focus:outline-none"
					/>
					<div
						className="h-full bg-black rounded-full absolute top-0 left-0 transition-all"
						style={{ width: `${progress}%` }}
					></div>
				</div>

				{/* <div
					className="h-4 w-1/2 bg-white flex justify-start items-center"
					// onClick={(e) => checkWidth(e)}
					ref={progressBarElem}
				>
					<div
						className={`h-full bg-opacity-50 bg-black `}
						style={{ width: `${audioStream.progress}%` }}
					></div>
				</div> */}
				<div>
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
		</div>
	);
};
export default AudioPlayer;
