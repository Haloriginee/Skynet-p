"use client";
import React, { FormEvent, useState } from 'react';

export const TextToSpeech = () => {

  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
	const voices = synth?.getVoices();
  const selectedVoice = voices?.find((voice) => voice.name === "Albert");

  const speak = (textToSpeak: string) => {
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.rate = 0.2;
		utterance.voice = selectedVoice!;

		synth?.speak(utterance);
		setIsPlaying(true);
		utterance.onend = () => {
			setIsPlaying(false);
		};
	};


  const handleUserText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userText);
    speak(userText);
  }

  return (
    <div>
      <form
        onSubmit={handleUserText}
        className= 'flex p-1 w-[510px] rounded-full absolute top-[800px] left-[30%] bg-gradient-to-r from-amber-300 to-red-700'
      >
        <input
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          type='text'
          className='p-3 w-full rounded-full outline-none bg-black'
          placeholder='Wingardium Patronum...'
        />
        <button
        className=" p-3 ml-3 outline-none bg-black text-slate-400 rounded-full disabled:text-blue-100
        disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:bg-[#F5C047] hover:text-black duration-300 transition-all"
        >
          Hello there
        </button>
      </form>
    </div>
  )
}
