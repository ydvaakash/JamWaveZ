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

// 1. Change the specificSongActionButton for all the songs to Stop except the Clicked Button

import { specificSongActionButtonArray } from '../utils/constants.js';
import { modifyTargetButtonPathDAttributeValue } from '../utils/findModifyTargetButtonPathDAttributeValue.js';
import { playButtonDAttributeValue } from '../utils/constants.js';

const changeRemainingSpecificSongActionButtonsToStop = (indexOfButtonToSkip) => {
  specificSongActionButtonArray.forEach((specificSongActionButton, specificSongActionButtonIndex) => {
    if(specificSongActionButtonArray.indexOf(specificSongActionButton) != indexOfButtonToSkip) {
      modifyTargetButtonPathDAttributeValue(specificSongActionButtonIndex, playButtonDAttributeValue);
    }
  });
};

export { changeRemainingSpecificSongActionButtonsToStop };