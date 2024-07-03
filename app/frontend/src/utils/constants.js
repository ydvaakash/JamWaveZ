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

// 1. These are all the constants required across the app.

import { accessSongsArray } from '../components/initializeModifySongsArray.js';

const specificSongActionButtonArray = Array.from(document.getElementsByClassName('specific-song-action-button'));

const playButtonDAttributeValue = "m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22";
const pauseButtonDAttributeValue = "M10 16q.425 0 .713-.288T11 15V9q0-.425-.288-.712T10 8t-.712.288T9 9v6q0 .425.288.713T10 16m4 0q.425 0 .713-.288T15 15V9q0-.425-.288-.712T14 8t-.712.288T13 9v6q0 .425.288.713T14 16m-2 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22";
const stopButtonDAttributeValue = "M9 16h6q.425 0 .713-.288T16 15V9q0-.425-.288-.712T15 8H9q-.425 0-.712.288T8 9v6q0 .425.288.713T9 16m3 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22";
const playingSongGifPath = './assets/gif/audioWave2_transparentBG_cropped.gif';

let localSongsArray = accessSongsArray();

let currentSongIndex = 0;
let previousSongIndex = localSongsArray.length - 1;
let nextSongIndex = ((currentSongIndex + 1) <= (localSongsArray.length - 1)) ? (currentSongIndex + 1) : (currentSongIndex);
let currentSongCurrentTime = 0;

let tempCurrentSongIndex = null;
let tempPreviousSongIndex = null;
let tempNextSongIndex = null;

const accessCurrentSongIndex = () => {
  return currentSongIndex;
};

const modifyCurrentSongIndex = (newCurrentSongIndex) => {
  currentSongIndex = newCurrentSongIndex;
};

const accessPreviousSongIndex = () => {
  return previousSongIndex;
};

const modifyPreviousSongIndex = (newPreviousSongIndex) => {
  previousSongIndex = newPreviousSongIndex;
};

const accessNextSongIndex = () => {
  return nextSongIndex;
};

const modifyNextSongIndex = (newNextSongIndex) => {
  nextSongIndex = newNextSongIndex;
};

const accessCurrentSongCurrentTime = () => {
  return currentSongCurrentTime;
};

const modifyCurrentSongCurrentTime = (newCurrentSongCurrentTime) => {
  currentSongCurrentTime = newCurrentSongCurrentTime;
};

const calculatePreviousSongIndex = () => {
  tempCurrentSongIndex = accessCurrentSongIndex();

  tempPreviousSongIndex = (tempCurrentSongIndex === 0) ? (localSongsArray.length-1) : (tempCurrentSongIndex-1);

  modifyPreviousSongIndex(tempPreviousSongIndex);
};

const calculateNextSongIndex = () => {
  tempCurrentSongIndex = accessCurrentSongIndex();

  tempNextSongIndex = (tempCurrentSongIndex === (localSongsArray.length-1)) ? (0) : (tempCurrentSongIndex+1);

  modifyNextSongIndex(tempNextSongIndex);
};

export { specificSongActionButtonArray, playButtonDAttributeValue, pauseButtonDAttributeValue, stopButtonDAttributeValue, playingSongGifPath, accessCurrentSongIndex, modifyCurrentSongIndex, accessPreviousSongIndex, modifyPreviousSongIndex, accessNextSongIndex, modifyNextSongIndex, accessCurrentSongCurrentTime, modifyCurrentSongCurrentTime, calculatePreviousSongIndex, calculateNextSongIndex };