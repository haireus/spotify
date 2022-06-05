import myPlaylistImg from "../assets/img/my playlist.jpeg";
import chillImg from "../assets/img/chill.jpeg";
import lofiImg from "../assets/img/lofi.jpeg";
import edmImg from "../assets/img/edm.jpeg";

export const reducerCases = {
  SET_TOKEN: "SET_TOKEN",
  SET_USER: "SET_USER",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_PLAYING: "SET_PLAYING",
  SET_PLAYER_STATE: "SET_PLAYER_STATE",
  SET_PLAYLIST: "SET_PLAYLIST",
  SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
};

export const GENRES = {
  INDIE: "INDIE",
  POP: "POP",
  PODCAST: "POSTCAST",
  CHILL: "CHILL",
  CHARTS: "CHARTS",
  DISCOVER: "DISCOVER",
  CONCERTS: "CONCERTS",
  MOOD: "MOOD",
};

export const PLAYLIST = {
  MY_MUSIC: "My music",
  LOFI: "Lofi",
  CHILL: "chill",
  EDM: "edm",
  Hieu: "Hieu TV",
};

export const SINGER = {
  KHALID: "KHALID",
  JUSTIN_BIEBER: "Justin bieber",
  SON_TUNG: "Sơn Tùng",
  PINK_SWEAT: "Ping Sweat",
  VU_CAT_TUONG: "Vũ Cát Tường",
  TRA_MY_IDOL: "Trà My Idol",
};

export const MY_PLAYLISTS = [
  {
    id: 1,
    name: PLAYLIST.MY_MUSIC,
    img: myPlaylistImg,
  },
  {
    id: 2,
    name: PLAYLIST.LOFI,
    img: lofiImg,
  },
  {
    id: 3,
    name: PLAYLIST.CHILL,
    img: chillImg,
  },
  {
    id: 4,
    name: PLAYLIST.EDM,
    img: edmImg,
  },
];
