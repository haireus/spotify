import React, { useState } from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const history = useHistory();

  const onClick = (key) => {
    setActive(key);
    if (key === "home") {
      history.push("/");
    } else {
      history.push(`/${key}`);
    }
  };

  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li
            onClick={() => onClick("home")}
            className={active === "home" ? "activeLink" : ""}
          >
            <MdHomeFilled />
            <span className="text">Home</span>
          </li>
          <li
            onClick={() => onClick("search")}
            className={active === "search" ? "activeLink" : ""}
          >
            <MdSearch />
            <span>Search</span>
          </li>
          <li
            onClick={() => onClick("library")}
            className={active === "library" ? "activeLink" : ""}
          >
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
          font-weight: 500;
        }

        span {
          @media (max-width: 414px) {
            display: none;
          }
        }
      }
    }
  }
  .activeLink {
    color: white;
    font-weight: 500;
  }
`;
