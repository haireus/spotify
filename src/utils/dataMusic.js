import { GENRES, PLAYLIST, SINGER } from "./Constants";
import chungtacuhientaiImg from "../assets/img/chung ta cu hien tai.jpeg";
import chungtacuhientaiMp3 from "../assets/mp3/Chung Ta Cua Hien Tai - Son Tung M-TP.mp3";

import coNguoiMp3 from "../assets/mp3/Có người.mp3";
import coNguoiImg from "../assets/img/có người.jpeg";

import atMyWorstImg from "../assets/img/at my worst.jpeg";
import atMyWorstMp3 from "../assets/mp3/Pink Sweat  At My Worst.mp3";

import canLamMp3 from "../assets/mp3/Cần lắm.mp3";
import canLamImg from "../assets/img/Cần lắm.jpeg";

export const DATA_MUSIC = [
  {
    id: 1,
    img: chungtacuhientaiImg,
    url: chungtacuhientaiMp3,
    name: "Chúng ta của hiện tại",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP],
    singers: [SINGER.SON_TUNG],
  },
  {
    id: 2,
    img: atMyWorstImg,
    url: atMyWorstMp3,
    name: "At my worst",
    playlists: [PLAYLIST.CHILL, PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.PINK_SWEAT],
  },

  {
    id: 3,
    img: coNguoiImg,
    url: coNguoiMp3,
    name: "Có Người",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.VU_CAT_TUONG],
  },

  {
    id: 4,
    img: canLamImg,
    url: canLamMp3,
    name: "Cần lắm",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.VU_CAT_TUONG, SINGER.TRA_MY_IDOL],
  },
];
