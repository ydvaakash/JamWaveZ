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

// 1. Find targetButton, targetButtonPath, and targetButtonPathDAttributeValue
// 2. Modify targetButton, targetButtonPath, and targetButtonPathDAttributeValue

import { specificSongActionButtonArray } from './constants.js';

let targetButton = null;
let targetButtonPath = null;
let targetButtonPathDAttributeValue = null;

let persistent_targetButton = null;
let persistent_targetButtonPath = null;
let persistent_targetButtonPathDAttributeValue = null;

const resetTargetButton = () => {
  targetButton = null;
  targetButtonPath = null;
  targetButtonPathDAttributeValue = null;
};

const resetPersistentTargetButtonValues = () => {
  persistent_targetButton = null;
  persistent_targetButtonPath = null;
  persistent_targetButtonPathDAttributeValue = null;
};

const findTargetButtonPathDAttributeValue = (indexOfButtonClicked) => {
  targetButton = specificSongActionButtonArray[indexOfButtonClicked];

  if(targetButton) {
    targetButtonPath = targetButton.querySelector('path');

    if(targetButtonPath) {
      targetButtonPathDAttributeValue = targetButtonPath.getAttribute('d');
    } else {
      console.log(`Path attribute not found for targetButton at index: ${indexOfButtonClicked}`);
    }
  } else {
    console.log(`No targetButton found at index: ${indexOfButtonClicked}`);
  }

  persistent_targetButton = targetButton;
  persistent_targetButtonPath = targetButtonPath;
  persistent_targetButtonPathDAttributeValue = targetButtonPathDAttributeValue;

  resetTargetButton();  

  return persistent_targetButtonPathDAttributeValue;
};

const modifyTargetButtonPathDAttributeValue = (indexOfButtonToModify, newDAttributeValue) => {
  let currentPathDAttributeValue = findTargetButtonPathDAttributeValue(indexOfButtonToModify);

  specificSongActionButtonArray[indexOfButtonToModify].querySelector('path').setAttribute('d', newDAttributeValue);

  resetPersistentTargetButtonValues();
};

export { findTargetButtonPathDAttributeValue, modifyTargetButtonPathDAttributeValue };