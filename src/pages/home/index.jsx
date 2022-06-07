import React, { useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import avatar from "../../assets/img/nhung.jpeg";
import { MY_PLAYLISTS, MY_PODCAST } from "../../utils/Constants";
import { getHour } from "../../utils/helper";
import "./home.css";

const renderHourText = () => {
  const hours = getHour();

  if (hours < 12) return <span>Good Morning</span>;
  if (12 <= hours && hours < 18) return <span>Good Afternoon</span>;
  if (hours >= 18) return <span>Good Evening</span>;
};
export default function Home() {
  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClick = (id) => {
    history.push(`/playlist?id=${id}`);
  };
  return (
    <div className="page-container">
      <div className="header">
        <div></div>
        <div className="avatar">
          <img src={avatar} alt="" />
          <span>Phương Nhung</span>
        </div>
      </div>

      <div className="text-primary">{renderHourText()}</div>

      <div className="my-list">
        {MY_PLAYLISTS.map((el) => (
          <div
            className="my-list-item"
            key={el.id}
            onClick={() => handleClick(el.id)}
          >
            <img className="my-list-item-img" src={el.img} alt="" />
            <div className="my-list-item-name">{el.name}</div>
            <div className="my-list-item-play">
              {isPlaying ? (
                <BsFillPauseCircleFill onClick={togglePlayPause} />
              ) : (
                <BsFillPlayCircleFill onClick={togglePlayPause} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-primary">Yours Podcasts</div>

      <div className="podcast">
        {MY_PODCAST.map((el) => (
          <div className="podcast-item">
            <img className="podcast-item-img" src={el.img} alt="" />
            <div className="podcast-item-name">{el.name} </div>
            <div className="podcast-item-authors">{el.authors} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
