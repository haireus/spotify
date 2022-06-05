import React, { useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import querystring from "query-string";
import { useHistory } from "react-router-dom";
import avatar from "../../assets/img/nhung.jpeg";
import { MY_PLAYLISTS } from "../../utils/Constants";
import { getHour } from "../../utils/helper";
import "./playlist.css";
import { DATA_MUSIC } from "../../utils/dataMusic";

export default function Playlist() {
  const history = useHistory();
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const { id } = querystring.parse(location.search);

  const item = MY_PLAYLISTS.find((el) => el.id === Number(id));
  const listMusic = DATA_MUSIC.filter((el) => el.playlists.includes(item.name));
  return (
    <div className="container">
      <div className="wrapper-header">
        <div className="header">
          <div></div>
          <div className="avatar">
            <img src={avatar} alt="" />
            <span>Phương Nhung</span>
          </div>
        </div>

        <div className="header-playlist">
          <img src={item.img} alt="" />
          <div className="header-playlist-right">
            <div className="header-playlist-right-header-1">PLAYLIST</div>
            <div className="header-playlist-right-header-2">{item.name}</div>
            <div className="header-playlist-right-header-1">
              Phương Nhung · {listMusic.length} song
            </div>
          </div>
        </div>
      </div>

      <div className="playlist">
        <div className="button-play">
          {isPlaying ? (
            <BsFillPauseCircleFill onClick={togglePlayPause} />
          ) : (
            <BsFillPlayCircleFill onClick={togglePlayPause} />
          )}
        </div>

        <div className="table-playlist">
          <div className="table-playlist-header">
            <div>#</div>
            <div>TITLE</div>
            <div>ALBUM</div>
            <div>DATE</div>
            <div>DURATION</div>
          </div>

          {listMusic.map((el, index) => (
            <div className="table-playlist-body">
              <div>{index + 1}</div>
              <div className="table-playlist-item-title">
                <img src={el.img} alt="" />

                <div className="table-playlist-item-name">
                  <div className="table-playlist-item-name-1">{el.name}</div>
                  <div className="table-playlist-item-name-2">
                    {el.singers.join(", ")}
                  </div>
                </div>
              </div>

              <div></div>
              <div>05/06/2022</div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
