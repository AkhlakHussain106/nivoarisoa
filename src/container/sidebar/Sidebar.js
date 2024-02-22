import React from "react";
import "./Sidebar.css";
import Resumizeme from "../../assests/Resumizeme.png";
import myTemplate from "../../assests/icon template.png";
import SearchIcon from "../../assests/Search (2).png";
import Star from "../../assests/Star.png";
import Clock from "../../assests/Clock.png";
import myBoard from "../../assests/myBoard.png";
import AddIcon from "../../assests/addIcon.png";
import Boards from "../../assests/Boards.png";
import BoardAgents from "../../assests/BoardAgent.png";
import Carla from "../../assests/Carla.png";
import CarlaSettings from "../../assests/Carlasettings.png";
import { SearchItem, Timer, Board, BoardAgent } from '../../utils/constant'

export const Sidebar = () => {
 
  return (
    <div className="sidebarHead">
      <span className="resumizemeHeading">
        <img src={Resumizeme} alt="Resumizeme"></img>
      </span>
      <div className="ResumizemeBorder"></div>
      <div className="sidebarMainDiv">
        <span className="myTemplate">
          <img src={myTemplate} alt="myTemplate"></img>
          <span className="templateTag">My templates</span>
        </span>
        <span className="search">
          <img src={SearchIcon} alt="search"></img>
          <span className="searchTag">Search</span>
        </span>
        {SearchItem.map((item, index) => {
          return (
            <span key={index} className="searchItems">
              <img src={Star} alt="searchItems"></img>
              <span className="searchItemsTags">{item.Name}</span>
            </span>
          );
        })}
        {Timer.map((item, index) => {
          return (
            <span key={index} className="timer">
              <img src={Clock} alt="Timer"></img>
              <span className="timerTags">{item.Name}</span>
            </span>
          );
        })}
        <span className="myboardsTagline">
          <span className="myboardhead">
            <img src={myBoard} alt="myboard"></img>
            <span className="myboardTag">My Board</span>
          </span>
          <img src={AddIcon} alt="Add"></img>
        </span>
        {Board.map((item, index) => {
          return (
            <span key={index} className="board">
              <img src={Boards} alt="Board"></img>
              <span className="boardTags">{item.Name}</span>
            </span>
          );
        })}
        {BoardAgent.map((item, index) => {
          return (
            <span key={index} className="boardAgent">
              <img src={BoardAgents} alt="BoardAgent"></img>
              <span className="boardAgentTags">{item.Name}</span>
            </span>
          );
        })}
        <div className="carlaheadBorder">
          <div className="carlaBorder"></div>
          <span className="carlaTagline">
            <span className="carlaHead">
              <img src={Carla} alt="Carla"></img>
              <span className="carlaTag">Carla</span>
            </span>
            <img src={CarlaSettings} alt="CarlaSettings"></img>
          </span>
        </div>
      </div>
    </div>
  );
};
