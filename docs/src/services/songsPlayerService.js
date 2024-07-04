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

// 1. Play, Pause, and Stop the currently Playing Track

import { accessSongsArray } from '../components/initializeModifySongsArray.js';
import { accessCurrentSongIndex, modifyCurrentSongIndex, accessCurrentSongCurrentTime, modifyCurrentSongCurrentTime, calculatePreviousSongIndex, calculateNextSongIndex } from '../utils/constants.js';
import { displayCurrentSongCoverPhoto, removeCurrentSongCoverPhoto } from '../components/songCoverPhotoLarge.js';
import { displayPlayingSongName, removePlayingSongName } from '../components/playingSongName.js';
import { displayPlayingSongCurrentTime, removePlayingSongCurrentTime } from '../components/playingSongCurrentTime.js';
import { calculateHourMinuteSecondsOfSongDuration } from '../utils/calculateHourMinuteSecondsOfSongDuration.js';
import { displayPlayingSongDuration, removePlayingSongDuration } from '../components/playingSongDuration.js';
import { updatePlayPausePlayerControlButton } from '../components/playPausePlayerControlButton.js';
import { modifySeekbarMaxAttributeValue, modifySeekbarValueAttribute, checkIfSongEnded } from '../components/seekbar.js';
import { updatePlayingSongCoverPhotoMini, resetStoppedSongCoverPhotoMini } from '../components/specificSongCoverPhotoMini.js';

let localSongsArray = accessSongsArray();

let localCurrentSongIndex = null;

let trackPlayingSongTimeUpdate = false;

class songsPlayerService {
  constructor() {
    localCurrentSongIndex = accessCurrentSongIndex();
    this.audioElement = new Audio(localSongsArray[localCurrentSongIndex].mp3Path);
    this.timeupdateEventListener();
  }

  playSong(indexOfNextSongToPlay) {
    if(this.someSongIsPlaying()) {
      this.stopSong();
    }

    this.audioElement.src = localSongsArray[indexOfNextSongToPlay].mp3Path;

    localCurrentSongIndex = accessCurrentSongIndex();

    if(localCurrentSongIndex != indexOfNextSongToPlay) {
      modifyCurrentSongCurrentTime(0);
      resetStoppedSongCoverPhotoMini(localCurrentSongIndex);
    }

    modifyCurrentSongIndex(indexOfNextSongToPlay);
    calculatePreviousSongIndex();
    calculateNextSongIndex();

    localCurrentSongIndex = accessCurrentSongIndex();
    this.audioElement.currentTime = accessCurrentSongCurrentTime();

    this.audioElement.play();
    displayCurrentSongCoverPhoto(localCurrentSongIndex);
    displayPlayingSongName(localCurrentSongIndex);
    trackPlayingSongTimeUpdate = true;
    updatePlayPausePlayerControlButton();
    modifySeekbarMaxAttributeValue(localCurrentSongIndex);
    updatePlayingSongCoverPhotoMini(localCurrentSongIndex);
  }

  pauseSong() {
    this.audioElement.pause();
    modifyCurrentSongCurrentTime(this.audioElement.currentTime);
    updatePlayPausePlayerControlButton();
  }

  stopSong() {
    this.audioElement.pause();
    trackPlayingSongTimeUpdate = false;
    this.audioElement.currentTime = 0;
    removeCurrentSongCoverPhoto();
    removePlayingSongName();
    updatePlayPausePlayerControlButton();
    modifyCurrentSongCurrentTime(0);
    modifySeekbarValueAttribute(0);
    localCurrentSongIndex = accessCurrentSongIndex();
    resetStoppedSongCoverPhotoMini(localCurrentSongIndex);
  }

  someSongIsPlaying() {
    return !this.audioElement.paused;
  }

  timeupdateEventListener() {
    this.audioElement.addEventListener('timeupdate', () => {
      if(trackPlayingSongTimeUpdate) {
        let playingSongCurrentTimeStringToDisplay = calculateHourMinuteSecondsOfSongDuration(this.audioElement.currentTime);
        displayPlayingSongCurrentTime(playingSongCurrentTimeStringToDisplay);
        localCurrentSongIndex = accessCurrentSongIndex();
        displayPlayingSongDuration(localCurrentSongIndex);
        modifySeekbarValueAttribute(this.audioElement.currentTime);
        checkIfSongEnded();
      } else {
        removePlayingSongCurrentTime();
        removePlayingSongDuration();
        modifySeekbarValueAttribute(0);
      }
    });
  }

  updateAudioElementToMatchSeekbarInputEvent(newSeekbarValue) {
    this.audioElement.currentTime = newSeekbarValue;
  }

}

const songsPlayerServiceObject = new songsPlayerService();

export { songsPlayerServiceObject };