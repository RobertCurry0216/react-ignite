import React, { useState } from "react";

//redux and routes
import { fetchSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

//animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  function inputHandler(e) {
    setTextInput(e.target.value);
  }

  function submitSearch(e) {
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
  }

  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
