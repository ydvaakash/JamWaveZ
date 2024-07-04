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

// 1. This module simply changes the Play button to Pause and Pause button to Play when specificSongActionButton is clicked.

import { playButtonDAttributeValue, stopButtonDAttributeValue } from '../utils/constants.js';
import { findTargetButtonPathDAttributeValue, modifyTargetButtonPathDAttributeValue } from '../utils/findModifyTargetButtonPathDAttributeValue.js';
import { changeRemainingSpecificSongActionButtonsToStop } from './changeRemainingSpecificSongActionButtonsToStop.js';
import { songsPlayerServiceObject } from '../services/songsPlayerService.js';

const changeSpecificSongActionButton = (indexOfButtonClicked) => {
  let currentTargetButtonPathDAttributeValue = findTargetButtonPathDAttributeValue(indexOfButtonClicked);

  if(currentTargetButtonPathDAttributeValue != null) {
    switch(currentTargetButtonPathDAttributeValue) {
      case playButtonDAttributeValue:
        modifyTargetButtonPathDAttributeValue(indexOfButtonClicked, stopButtonDAttributeValue);
        songsPlayerServiceObject.playSong(indexOfButtonClicked);
        break;
      
      case stopButtonDAttributeValue:
        modifyTargetButtonPathDAttributeValue(indexOfButtonClicked, playButtonDAttributeValue);
        songsPlayerServiceObject.stopSong();
        break;
    }

    changeRemainingSpecificSongActionButtonsToStop(indexOfButtonClicked);

  } else {
    console.error(`currentTargetButtonPathDAttributeValue could not be found.`);
  }
};

export { changeSpecificSongActionButton };