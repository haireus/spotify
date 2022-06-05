import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

export default function CurrentTrack() {
  const [{ currentPlaying }] = useStateProvider();

  return (
    <Container>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.img} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentPlaying.singers.join(", ")}
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
