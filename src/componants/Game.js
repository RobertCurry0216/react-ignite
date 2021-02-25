import React from "react";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { smallImage } from "../util";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();
  function loadDetailHandler(id) {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame onClick={() => loadDetailHandler(id)}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
