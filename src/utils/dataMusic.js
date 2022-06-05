import { GENRES, PLAYLIST, SINGER } from "./Constants";
import chungtacuhientaiImg from "../assets/img/chung ta cu hien tai.jpeg";
import chungtacuhientaiMp3 from "../assets/mp3/Chung Ta Cua Hien Tai - Son Tung M-TP.mp3";

import coNguoiMp3 from "../assets/mp3/Có người.mp3";
import coNguoiImg from "../assets/img/có người.jpeg";

import atMyWorstImg from "../assets/img/at my worst.jpeg";
import atMyWorstMp3 from "../assets/mp3/Pink Sweat  At My Worst.mp3";

import canLamMp3 from "../assets/mp3/Cần lắm.mp3";
import canLamImg from "../assets/img/Cần lắm.jpeg";

import baoLauTaLaiYeuMotNguoiImg from "../assets/img/Bao lâu ta lại yêu một người.jpeg";
import baoLauTaLaiYeuMotNguoiMp3 from "../assets/mp3/Bao Lâu Ta Lại Yêu Một Người l Doãn Hiếu.mp3";

import sorryILikeYouMp3 from "../assets/mp3/burbank  sorry i like you.mp3";
import sorryILikeYouImg from "../assets/img/sorry i like you.jpeg";

import coGaiNgayHomQuaMp3 from "../assets/mp3/Cô gái ngày hôm qua.mp3";
import coGaiNgayHomQuaImg from "../assets/img/Cô gái ngày hôm qua.jpeg";

import luvLetterMp3 from "../assets/mp3/frad  luv letters out on spotify.mp3";
import luvLetterImg from "../assets/img/luv letter.jpeg";

import isItStillRain from "../assets/mp3/is it still raining.mp3";
import isItStillRainImg from "../assets/img/is it still raining.jpeg";

import theHeTanVo from "../assets/mp3/Kaidinh x Sivan  Thế hệ tan vỡ.mp3";
import theHeTanVoImg from "../assets/img/thehetanvo.jpeg";

import northWing from "../assets/mp3/North Wing.mp3";
import northWingImg from "../assets/img/north wing.jpeg";

import dayLight from "../assets/mp3/Pastel  Daylight ft Ben Kessler.mp3";
import dayLightImg from "../assets/img/daylight.jpeg";

import phoCuConAnh from "../assets/mp3/Phố Cũ Còn Anh (Freak D Lofi Ver.) - Quinn ft Chilly.mp3";
import phoCuConAnhImg from "../assets/img/pho cu con anh.jpeg";

import playlistOneHours from "../assets/mp3/Playlist 1 Hour Acoustic Music To Cheer You Up On A Tough Day.mp3";
import playListOneHoursImg from "../assets/img/chear up.jpeg";

import sunsetII from "../assets/mp3/Sunset II Point The Star.mp3";
import sunsetIIImg from "../assets/img/sun set ii.jpeg";

import vetMua from "../assets/mp3/Vết mưa.mp3";
import vetMuaImg from "../assets/img/Vết mưa.jpeg";

import yeuXa from "../assets/mp3/Yêu xa.mp3";
import yeuXaImg from "../assets/img/Yêu xa.jpeg";

import bietTimDau from "../assets/mp3/Biết tìm đâu 𝙨𝙡𝙤𝙬𝙚𝙙  𝙧𝙚𝙫𝙚𝙧𝙗.mp3";
import bietTimDauImg from "../assets/img/Biết tìm đâu.jpeg";

import crazyImg from "../assets/img/crazy beauz & JVNA.jpeg";
import craztMp3 from "../assets/mp3/BEAUZ  JVNA  Crazy NCS Release.mp3";

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
  {
    id: 5,
    img: baoLauTaLaiYeuMotNguoiImg,
    url: baoLauTaLaiYeuMotNguoiMp3,
    name: "Bao lâu ta lại yêu một người",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.DOAN_HIEU],
  },
  {
    id: 6,
    img: sorryILikeYouImg,
    url: sorryILikeYouMp3,
    name: "Sorry I Like You",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.BURBANK],
  },
  {
    id: 7,
    img: coGaiNgayHomQuaImg,
    url: coGaiNgayHomQuaMp3,
    name: "Cô gái ngày hôm qua",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.VU_CAT_TUONG],
  },
  {
    id: 8,
    img: luvLetterImg,
    url: luvLetterMp3,
    name: "Luv Letter",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [""],
  },
  {
    id: 9,
    img: isItStillRainImg,
    url: isItStillRain,
    name: "Is it still rain ?",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [""],
  },
  {
    id: 10,
    img: theHeTanVoImg,
    url: theHeTanVo,
    name: "Thế hệ tan vỡ?",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.KAI_DINH],
  },
  {
    id: 11,
    img: northWingImg,
    url: northWing,
    name: "North wing",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.Shingo_Sekiguchi],
  },
  {
    id: 12,
    img: dayLightImg,
    url: dayLight,
    name: "Daylight",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [""],
  },
  {
    id: 13,
    img: phoCuConAnhImg,
    url: phoCuConAnh,
    name: "Phố cũ còn anh",
    playlists: [PLAYLIST.LOFI, PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.QUILL],
  },
  {
    id: 14,
    img: playListOneHoursImg,
    url: playlistOneHours,
    name: "1 Hour Chill",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: ["Various artist"],
  },
  {
    id: 15,
    img: sunsetIIImg,
    url: sunsetII,
    name: "Sunsetii",
    playlists: [PLAYLIST.CHILL],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.PINK_SWEAT],
  },
  {
    id: 16,
    img: vetMuaImg,
    url: vetMua,
    name: "Vêt mưa",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.VU_CAT_TUONG],
  },
  {
    id: 17,
    img: yeuXaImg,
    url: yeuXa,
    name: "Yêu xa",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [SINGER.VU_CAT_TUONG],
  },
  {
    id: 18,
    img: bietTimDauImg,
    url: bietTimDau,
    name: "Biết tìm đâu slowed reverb",
    playlists: [PLAYLIST.MY_MUSIC],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [""],
  },
  {
    id: 19,
    img: crazyImg,
    url: craztMp3,
    name: "BEAUZ & JVNA - Crazy [NCS Release]",
    playlists: [PLAYLIST.EDM],
    genres: [GENRES.POP, GENRES.CHILL],
    singers: [""],
  },
];
