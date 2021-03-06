import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const PlayList = lazy(() => import("./pages/playlist"));

export default function App() {
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div style={{ overflow: "auto" }}>
          <Suspense fallback={null}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" exact component={Search} />
              <Route path="/playlist" exact component={PlayList} />
            </Switch>
          </Suspense>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
