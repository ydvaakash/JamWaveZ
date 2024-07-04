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

// 1. Change the Play button to Pause or Pause button to Play when a song is played or paused.
// 2. Play or Pause the song when playPausePlayerControlButton is clicked.
// 3. Change the specificSongActionButton depending the song is played or paused or stopped.

import { songsPlayerServiceObject } from '../services/songsPlayerService.js';
import { playButtonDAttributeValue, pauseButtonDAttributeValue, stopButtonDAttributeValue } from '../utils/constants.js';
import { accessCurrentSongIndex } from '../utils/constants.js';
import { modifyTargetButtonPathDAttributeValue } from '../utils/findModifyTargetButtonPathDAttributeValue.js';

const playPausePlayerControlButton = document.getElementById('play-pause-player-control-button');

const updatePlayPausePlayerControlButton = () => {
  if(songsPlayerServiceObject.someSongIsPlaying()) {
    playPausePlayerControlButton.querySelector('path').setAttribute('d', pauseButtonDAttributeValue);
  } else {
    playPausePlayerControlButton.querySelector('path').setAttribute('d', playButtonDAttributeValue);
  }
};

const playPauseSongUsingPlayPausePlayerControlButton = () => {
  let localCurrentSongIndex = accessCurrentSongIndex();

  let playPausePlayerControlButtonPathDAttributeValue = playPausePlayerControlButton.querySelector('path').getAttribute('d');

  switch(playPausePlayerControlButtonPathDAttributeValue) {
    case playButtonDAttributeValue:
      songsPlayerServiceObject.playSong(localCurrentSongIndex);
      modifyTargetButtonPathDAttributeValue(localCurrentSongIndex, stopButtonDAttributeValue);
      break;

    case pauseButtonDAttributeValue:
      songsPlayerServiceObject.pauseSong();
      modifyTargetButtonPathDAttributeValue(localCurrentSongIndex, playButtonDAttributeValue);
      break;
  }
};

export { playPausePlayerControlButton, updatePlayPausePlayerControlButton, playPauseSongUsingPlayPausePlayerControlButton };