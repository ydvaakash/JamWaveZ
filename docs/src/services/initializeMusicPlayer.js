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

// 1. Call all the different modules to initialize the music player

import { loadSongsArrayElementsMetadata } from '../components/initializeModifySongsArray.js';
import { displaySpecificSongCoverPhotoMini } from '../components/specificSongCoverPhotoMini.js';
import { displaySpecificSongName } from '../components/songName.js';
import { displaySpecificSongDuration } from '../components/songDuration.js';
import { displaySpecificSongAlbum } from '../components/songAlbum.js';
import { displaySpecificSongSinger } from '../components/songSinger.js';

const initializeMusicPlayer = async () => {
  await loadSongsArrayElementsMetadata();

  await displaySpecificSongCoverPhotoMini();

  await displaySpecificSongName();

  await displaySpecificSongDuration();

  await displaySpecificSongAlbum();

  await displaySpecificSongSinger();
};

export { initializeMusicPlayer };