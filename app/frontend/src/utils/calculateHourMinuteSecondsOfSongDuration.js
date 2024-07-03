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

// 1. Convert individualSongDuration to the format 'xx:xx:xx' representing 'hh:mm:ss'

// function that converts time in seconds to Hours, Minutes, and Seconds in the format "xx:xx:xx"
const calculateHourMinuteSecondsOfSongDuration = (individualSongItemDurationInSeconds) => {
  const hour = Math.floor(individualSongItemDurationInSeconds/3600);
  const minute = Math.floor((individualSongItemDurationInSeconds % 3600) / 60);
  const seconds = Math.floor((individualSongItemDurationInSeconds % 60));
  let finalTime;

  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinutes = minute.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  if((hour > 0)) {
    finalTime = `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    finalTime = `${formattedMinutes}:${formattedSeconds}`;
  }

  return finalTime;
}

export { calculateHourMinuteSecondsOfSongDuration };