import AudioPlayer from "@/components/AudioPlayer";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Audio Player</title>
				<meta name="description" content="" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AudioPlayer />
		</>
	);
}
