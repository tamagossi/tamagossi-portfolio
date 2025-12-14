'use client';

import { useEffect, useMemo, useState } from 'react';

export default function Page() {
	const helloText = useMemo(() => 'Hello, World', []);
	const tamaText = useMemo(() => 'I am Tama', []);

	const [showHello, setShowHello] = useState(true);
	const [showSecond, setShowSecond] = useState(false);
	const [showThird, setShowThird] = useState(false);
	const [typedHello, setTypedHello] = useState('');
	const [typedSecond, setTypedSecond] = useState('');
	const [showWave, setShowWave] = useState(false);

	useEffect(() => {
		let i = 0;
		const intervalId = setInterval(() => {
			i += 1;
			setTypedHello(helloText.slice(0, i));
			if (i >= helloText.length) {
				clearInterval(intervalId);
				setShowWave(true);
				const pauseTimer = setTimeout(() => {
					setShowHello(false);
					setShowSecond(true);
				}, 2000);
				return () => clearTimeout(pauseTimer);
			}
		}, 80);
		return () => clearInterval(intervalId);
	}, [helloText]);

	useEffect(() => {
		if (!showSecond) return;
		let i = 0;
		const intervalId = setInterval(() => {
			i += 1;
			setTypedSecond(tamaText.slice(0, i));
			if (i >= tamaText.length) {
				clearInterval(intervalId);
				const t = setTimeout(() => setShowThird(true), 1500);
				return () => clearTimeout(t);
			}
		}, 80);
		return () => clearInterval(intervalId);
	}, [showSecond, tamaText]);

	return (
		<section className="min-h-[100svh] grid place-items-center bg-gradient-to-b from-black via-zinc-950 to-black p-6 text-white">
			<div className="text-center">
				{showHello && (
					<h1
						aria-live="polite"
						className="mx-auto max-w-[40ch] text-balance text-4xl font-bold tracking-tight md:text-6xl"
						data-testid="hero-hello-heading"
					>
						<span>{typedHello}</span>
						{showWave && (
							<span className="wave-hand fade-in" role="img" aria-label="waving hand">
								👋
							</span>
						)}
					</h1>
				)}

				{showSecond && (
					<p
						aria-live="polite"
						className="fade-in mx-auto mt-4 max-w-[50ch] text-balance text-4xl font-bold tracking-tight md:text-6xl"
						data-testid="hero-subtitle"
					>
						{typedSecond}
					</p>
				)}

				{showThird && (
					<p
						className="fade-up mx-auto mt-2 max-w-[50ch] text-balance text-lg text-zinc-400 md:text-xl"
						data-testid="hero-role"
					>
						a Software Engineer
					</p>
				)}
			</div>
		</section>
	);
}
