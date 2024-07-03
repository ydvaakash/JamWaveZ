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

// 1. Update the seekBar when a song is played, paused, or stopped.

import { accessSongsArray } from './initializeModifySongsArray.js';
import { songsPlayerServiceObject } from '../services/songsPlayerService.js';
import { accessCurrentSongIndex, accessNextSongIndex, modifyCurrentSongIndex, modifyCurrentSongCurrentTime, playButtonDAttributeValue, stopButtonDAttributeValue, accessCurrentSongCurrentTime } from '../utils/constants.js';
import { modifyTargetButtonPathDAttributeValue } from '../utils/findModifyTargetButtonPathDAttributeValue.js';

const seekbar = document.getElementById('seek-bar');

let localSongsArray = accessSongsArray();

let localSeekbarMaxValue = null;

const modifySeekbarMaxAttributeValue = (localCurrentSongIndex) => {
  localSeekbarMaxValue = localSongsArray[localCurrentSongIndex].durationInSeconds;

  seekbar.setAttribute('max', localSeekbarMaxValue);
};

const modifySeekbarValueAttribute = (value) => {
  seekbar.value = value;
};

const handleInputEventOnSeekbar = (seekbarValue) => {
  let localCurrentSongCurrentTime = accessCurrentSongCurrentTime();

  if(localCurrentSongCurrentTime > 0) {
    modifyCurrentSongCurrentTime(seekbarValue);    
  } else {
    modifyCurrentSongCurrentTime(0);
  }

  songsPlayerServiceObject.updateAudioElementToMatchSeekbarInputEvent(seekbarValue);
};

const checkIfSongEnded = () => {
  if(seekbar.value === seekbar.max) {
    let localCurrentSongIndex = accessCurrentSongIndex();
    
    modifyTargetButtonPathDAttributeValue(localCurrentSongIndex, playButtonDAttributeValue);
    songsPlayerServiceObject.stopSong();

    let localNextSongIndex = accessNextSongIndex();

    modifyCurrentSongIndex(localNextSongIndex);

    localCurrentSongIndex = accessCurrentSongIndex();

    setTimeout(() => {
      songsPlayerServiceObject.playSong(localCurrentSongIndex);
      modifyTargetButtonPathDAttributeValue(localCurrentSongIndex, stopButtonDAttributeValue);
    }, 1000);

  }
};

export {seekbar, modifySeekbarMaxAttributeValue, modifySeekbarValueAttribute, handleInputEventOnSeekbar, checkIfSongEnded};