/*
JamWaveZ: A web-based music player application for playing and managing copyright-free sample music provided within the app.
Copyright (C) [2024] [Aakash Yadav]
This file is part of [JamWaveZ].

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// 1. Manage all the functionalities of Music Player

import { specificSongActionButtonArray } from '../utils/constants.js';
import { changeSpecificSongActionButton } from '../components/changeSpecificSongActionButton.js';
import { playPausePlayerControlButton, playPauseSongUsingPlayPausePlayerControlButton } from '../components/playPausePlayerControlButton.js';
import { stopTrackPlayerControlButton, stopSongUsingStopTrackPlayerControlButton } from '../components/stopTrackPlayerControlButton.js';
import { previousTrackPlayerControlButton, playPreviousSongUsingPreviousTrackPlayerControlButton } from '../components/previousTrackPlayerControlButton.js';
import { nextTrackPlayerControlButton, playNextSongUsingNextTrackPlayControlButton } from '../components/nextTrackPlayerControlButton.js';
import { seekbar, handleInputEventOnSeekbar } from '../components/seekbar.js';

const operateMusicPlayer = () => {
  specificSongActionButtonArray.forEach((specificSongActionButton, index) => {
    specificSongActionButton.addEventListener('click', () => {
      changeSpecificSongActionButton(index);
    });
  });

  playPausePlayerControlButton.addEventListener('click', () => {
    playPauseSongUsingPlayPausePlayerControlButton();
  });

  stopTrackPlayerControlButton.addEventListener('click', () => {
    stopSongUsingStopTrackPlayerControlButton();
  });

  previousTrackPlayerControlButton.addEventListener('click', () => {
    playPreviousSongUsingPreviousTrackPlayerControlButton();
  });

  nextTrackPlayerControlButton.addEventListener('click', () => {
    playNextSongUsingNextTrackPlayControlButton();
  });

  seekbar.addEventListener('input', () => {
    handleInputEventOnSeekbar(seekbar.value);
  });
};

export { operateMusicPlayer };