import React, { useState } from "react";
import * as Icon from "react-feather";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { changeTheme } from "../utils";

const Modal = styled.div``;

export default function ConfigModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = (e: any) => {
    setModalOpen(() => !modalOpen);
  };

  const hoverClose = (e: any) => {
    if (modalOpen) setModalOpen(() => !modalOpen);
  };

  return (
    <Modal className="configModal-wrapper">
      <div className="sidebar-button" onClick={toggle}>
        <Icon.Menu className="sidebar-icon"></Icon.Menu>
      </div>

      <CSSTransition key={"ok"} in={modalOpen} className="configModal" classNames="configModal" timeout={300}>
        <div onMouseLeave={hoverClose}>
          <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Icon.Info></Icon.Info>
            <div className="link_text">About LTTKGP</div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Icon.GitHub></Icon.GitHub>
            <div className="link_text">Code @ Github</div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Icon.Slack></Icon.Slack>
            <div className="link_text">Join us on Slack</div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Icon.Facebook></Icon.Facebook>
            <div className="link_text">Facebook Group</div>
          </a>
          <hr />
          <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Icon.CheckCircle />
            <div className="link_text">Posts are up to date.</div>
          </a>
          <div className="theme-switcher" onClick={changeTheme}>
            <div className="sidebar-button">
              <div className="sidebar-icon change-theme-icon"></div>
            </div>
            <div>SWITCH THEME</div>
          </div>
          <div className="sidebar-button close-icon">
            <Icon.X className="sidebar-icon" onClick={toggle}></Icon.X>
          </div>
        </div>
      </CSSTransition>
    </Modal>
  );
}
