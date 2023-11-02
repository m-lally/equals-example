import React from "react";
import Container from "./components/container/container";
import "./App.css";
import "./components/labs.css";
import "./components/masonry.css";

function App() {
  return (
    <>
      <Container>
        <h3>Contacts</h3>
        <div className="container">
          <div className="wrapper">
            <div className="wrapper">

              </div>
              <div className="masonry">
                <div className="brick">
                  <img
                    src="./files/images/cherry-plant.jpg"
                    alt="Cherry plant"
                    title="Cherry plant"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="./files/images/oranges-pomegranates.jpg"
                    alt="Oranges and Pomegranates"
                    title="Oranges and Pomegranates"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/strawberry.jpg"
                    alt="Strawberry"
                    title="Strawberry"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/blueberries.jpg"
                    alt="Blueberries"
                    title="Blueberries"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/pears.jpg"
                    alt="Pears"
                    title="Pears"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/easter-eggs.jpg"
                    alt="Easter-eggs"
                    title="Easter-eggs"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/lemons.jpg"
                    alt="Lemons"
                    title="Lemons"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/cherries.jpg"
                    alt="Cherries"
                    title="Cherries"
                  ></img>
                </div>
                <div className="brick">
                  <img
                    src="files/images/grapes.jpg"
                    alt="Grapes"
                    title="Grapes"
                  ></img>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default App;
