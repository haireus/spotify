import myPlaylistImg from "../assets/img/my playlist.jpeg";
import chillImg from "../assets/img/chill.jpeg";
import lofiImg from "../assets/img/lofi.jpeg";
import edmImg from "../assets/img/edm.jpeg";
import hieutvImg from "../assets/img/hieutv.jpeg";
import spierumImg from "../assets/img/spiderum.png";
import sunhuynImg from "../assets/img/sunhuyn.jpeg";
import tunphamImg from "../assets/img/tunpham.jpeg";
import giangoiImg from "../assets/img/giang ơi.jpeg";

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

export const PODCAST = {
  HIEU_TV: "HIEU.TV",
  TUN_PHAM: "Đắp Chăn Nằm Nghe Tun Kể Chuyện",
  SPIDERUM: "Spiderum Official",
  SUN_HUYN: "Sunhuyn Podcast",
  GIANG_OI: "Giang Ơi Radio",
};

export const SINGER = {
  KHALID: "KHALID",
  JUSTIN_BIEBER: "Justin bieber",
  SON_TUNG: "Sơn Tùng",
  PINK_SWEAT: "Ping Sweat",
  VU_CAT_TUONG: "Vũ Cát Tường",
  TRA_MY_IDOL: "Trà My Idol",
  Shingo_Sekiguchi: "Shingo Sekiguchi",
};

export const PODCAST_AUTHOR = {
  HIEU_TV: "Hieu Nguyen",
  SUNHUYN: "Sunhuyn",
  TUN_PHAM: "Tun Cảm Ơn",
  SPIDERUM: "Spiderum",
  GIANG_OI: "Giang ơi",
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

export const MY_PODCAST = [
  {
    id: 10,
    name: PODCAST.HIEU_TV,
    img: hieutvImg,
    authors: PODCAST_AUTHOR.HIEU_TV,
  },
  {
    id: 11,
    name: PODCAST.SUN_HUYN,
    img: sunhuynImg,
    authors: PODCAST_AUTHOR.SUNHUYN,
  },
  {
    id: 12,
    name: PODCAST.TUN_PHAM,
    img: tunphamImg,
    authors: PODCAST_AUTHOR.TUN_PHAM,
  },
  {
    id: 13,
    name: PODCAST.SPIDERUM,
    img: spierumImg,
    authors: PODCAST_AUTHOR.SPIDERUM,
  },
  {
    id: 14,
    name: PODCAST.GIANG_OI,
    img: giangoiImg,
    authors: PODCAST_AUTHOR.GIANG_OI,
  },
];
