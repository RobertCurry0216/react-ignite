import React from "react";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";

import { smallImage } from "../util";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();
  function loadDetailHandler(id) {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame
      layoutId={id.toString()}
      onClick={() => loadDetailHandler(id)}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={smallImage(image, 640)}
          alt={name}
        />
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
