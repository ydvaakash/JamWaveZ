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

// 1. Display playing song start time in the DOM

const playingSongCurrentTime = document.getElementById('playing-song-current-time');

const displayPlayingSongCurrentTime = (playingSongCurrentTimeString) => {
  playingSongCurrentTime.innerText = playingSongCurrentTimeString;
};

const removePlayingSongCurrentTime = () => {
  playingSongCurrentTime.innerText = '';
};

export { displayPlayingSongCurrentTime, removePlayingSongCurrentTime };