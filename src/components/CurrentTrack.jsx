import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
export default function CurrentTrack() {
  // const [{ token, currentPlaying }, dispatch] = useStateProvider();
  // useEffect(() => {
  //   const getCurrentTrack = async () => {
  //     const response = await axios.get(
  //       "https://api.spotify.com/v1/me/player/currently-playing",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     if (response.data !== "") {
  //       const currentPlaying = {
  //         id: response.data.item.id,
  //         name: response.data.item.name,
  //         artists: response.data.item.artists.map((artist) => artist.name),
  //         image: response.data.item.album.images[2].url,
  //       };
  //       dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
  //     } else {
  //       dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
  //     }
  //   };
  //   getCurrentTrack();
  // }, [token, dispatch]);

  const currentPlaying = {
    image: "https://i.ytimg.com/vi/y_-1uiB2T9Y/maxresdefault.jpg",
    name: "Bao lau ta lai yeu mot nguoi",
    artists: ["Hieu"],
  };
  return (
    <Container>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        -webkit-animation: spin 4s linear infinite;
        -moz-animation: spin 4s linear infinite;
        animation: spin 4s linear infinite;
      }
      @-moz-keyframes spin {
        100% {
          -moz-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes spin {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
        @media (max-width: 414px) {
          display: none;
        }
      }
      &__track__artists {
        color: #b3b3b3;
        @media (max-width: 414px) {
          display: none;
        }
      }
    }
  }
`;
