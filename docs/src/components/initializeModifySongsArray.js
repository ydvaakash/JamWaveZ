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

// 1. Initialize the songs array.
// 2. Calculate durationInSeconds for each individualSongItem in the songs[] array.
// 3. Declate function to return size of the songs[] array.
// 4. Declare the accessSongsArray() function as getter function.
// 5. Declare the modifySongsArray() function as setter function.

import { calculateHourMinuteSecondsOfSongDuration } from '../utils/calculateHourMinuteSecondsOfSongDuration.js';

let songs = null;

songs = [
  {songName: "Miles Above You", singer: "Jesse Warren", album: "BreakingCopyright.com", mp3Path: "./assets/songs/Jesse Warren - Miles Above You (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Rise", singer: "Tubebackr", album: "BreakingCopyright.com", mp3Path: "./assets/songs/tubebackr - Rise (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Nothing", singer: "RetroBlue", album: "BreakingCopyright.com", mp3Path: "./assets/songs/RetroBlue - Nothing (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Majestic", singer: "Casi", album: "BreakingCopyright.com", mp3Path: "./assets/songs/Casi - Majestic (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Hiking", singer: "Scandinavianz", album: "BreakingCopyright.com", mp3Path: "./assets/songs/Scandinavianz - Hiking (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Bullet Train", singer: "Tubebackr", album: "BreakingCopyright.com", mp3Path: "./assets/songs/tubebackr - Bullet Train (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Play It Safe", singer: "LiQWYD", album: "BreakingCopyright.com", mp3Path: "./assets/songs/LiQWYD - Play it Safe (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Gravity", singer: "Extenz", album: "BreakingCopyright.com", mp3Path: "./assets/songs/Extenz - Gravity (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Wake up", singer: "MBB", album: "BreakingCopyright.com", mp3Path: "./assets/songs/MBB - Wake up (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Nightfall", singer: "Roa", album: "BreakingCpyright.com", mp3Path: "./assets/songs/Roa - Nightfall (BreakingCopyright.com).mp3", coverPath: "./assets/song-covers/BreakingCopyright_Logo_White_BG.png"},
  {songName: "Fearless pt.II (feat. Chris Linton)", singer: "TULE", album: "NCS Release", mp3Path: "./assets/songs/TULE - Fearless pt.II (feat. Chris Linton) [NCS Release].mp3", coverPath: "./assets/song-covers/NCS_Logo_Black_BG.png"}
];

const loadSongsArrayElementsMetadata = async () => {
  const metadataLoadedPromiseArray = songs.map((individualSongElement) => {
    return new Promise((resolve) => {
      let individualSongElementObject = new Audio(individualSongElement.mp3Path);

      individualSongElementObject.addEventListener('loadedmetadata', () => {
        resolve(individualSongElementObject);
      });
    });
  });

  const audioElementsObjects = await Promise.all(metadataLoadedPromiseArray);
  audioElementsObjects.forEach((individualAudioElementObject, index) => {
    let temp_individualSongDurationInSeconds = Math.floor(individualAudioElementObject.duration);
    let temp_individualSongFormattedDuration = calculateHourMinuteSecondsOfSongDuration(temp_individualSongDurationInSeconds);

    songs[index].durationInSeconds = temp_individualSongDurationInSeconds;
    songs[index].formattedDuration = temp_individualSongFormattedDuration;
  });
};

// Return size of the songs[] array
const sizeOfSongsArray = () => {
  return songs.length;
};

// Getter function to access elements of songs[] array
const accessSongsArray = () => {
  return songs;
};

// Setter function to modify songs[] array
const modifySongsArray = (elementIndex, key, value) => {
  songs[elementIndex][key] = value; 
};

// exporting the functions
export {loadSongsArrayElementsMetadata, sizeOfSongsArray, accessSongsArray, modifySongsArray};
