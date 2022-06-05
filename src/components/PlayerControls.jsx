import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../utils/StateProvider";

import { reducerCases } from "../utils/Constants";

import { getSecondToMinute } from "../utils/helper";

export default function PlayerControls() {
  const [{ currentPlaying, playerState, playlists }, dispatch] =
    useStateProvider();

  // state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = playerState;
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    if (playerState) {
      audioPlayer.current.play();
      // animationRef.current = requestAnimationFrame(whilePlaying);
    }
    if (Math.floor(currentTime) === Math.floor(duration)) {
      handleNext();
    }
  }, [playerState, currentPlaying, currentTime, duration]);

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    // audioPlayer.current.play();
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const handleNext = () => {
    dispatch({
      type: reducerCases.SET_PLAYING,
      currentPlaying: playlists.find((el) => el.id === currentPlaying.id + 1),
    });
  };

  const handlePrev = () => {
    dispatch({
      type: reducerCases.SET_PLAYING,
      currentPlaying: playlists.find((el) => el.id === currentPlaying.id - 1),
    });
  };

  return (
    <Container>
      <audio
        ref={audioPlayer}
        src={currentPlaying?.url}
        preload="metadata"
      ></audio>
      <div className="player">
        <div className="shuffle">
          <BsShuffle />
        </div>
        <div className="previous" onClick={handlePrev}>
          <CgPlayTrackPrev />
        </div>
        <div className="state">
          {playerState ? (
            <BsFillPauseCircleFill onClick={togglePlayPause} />
          ) : (
            <BsFillPlayCircleFill onClick={togglePlayPause} />
          )}
        </div>
        <div className="next" onClick={handleNext}>
          <CgPlayTrackNext />
        </div>
        <div className="repeat">
          <FiRepeat />
        </div>
      </div>

      <div className="progressWrapper">
        <span style={{ color: "white", marginRight: "10px", fontSize: "12px" }}>
          {currentTime ? getSecondToMinute(currentTime) : "00:00"}
        </span>
        <input
          type="range"
          className="progressBar"
          defaultValue={0}
          ref={progressBar}
          onChange={changeRange}
        />

        <span style={{ color: "white", marginLeft: "10px", fontSize: "12px" }}>
          {duration ? getSecondToMinute(duration) : "00:00"}
        </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
  }

  .progressWrapper {
    display: flex;
    align-items: center;
  }

  .progressBar {
    --bar-bg: #ffe3d4;
    --seek-before-width: 0;
    --seek-before-color: #ffc2a1;
    --knobby: #3452a5;
    --selectedKnobby: #26c9c3;
    --height: 5px

    appearance: none;
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 5px;
    outline: none;
  }

  /* progress bar - safari */
  .progressBar::-webkit-slider-runnable-track {
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 5px;
    outline: none;
  }

  /* progress bar - firefox */
  .progressBar::-moz-range-track {
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 5px;
    outline: none;
  }

  .progressBar::-moz-focus-outer {
    border: 0;
  }

  /* progress bar - chrome and safari */
  .progressBar::before {
    content: "";
    height: 5px;
    width: var(--seek-before-width);
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  /* progress bar - firefox */
  .progressBar::-moz-range-progress {
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 5px;
  }

  /* knobby - chrome and safari */
  .progressBar::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: none;
    background-color: var(--knobby);
    cursor: pointer;
    position: relative;
    margin: -5px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
  }

  /* knobby while dragging - chrome and safari */
  .progressBar:active::-webkit-slider-thumb {
    /* transform: scale(1.2); */
    background: var(--selectedKnobby);
  }

  /* knobby - firefox */
  .progressBar::-moz-range-thumb {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: transparent;
    background-color: var(--knobby);
    cursor: pointer;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
  }

  /* knobby while dragging - firefox */
  .progressBar:active::-moz-range-thumb {
    /* transform: scale(1.2); */
    background: var(--selectedKnobby);
  }
`;
