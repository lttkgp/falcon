import React, { useState } from "react";
import {
  Info as InfoIcon,
  GitHub as GitHubIcon,
  Slack as SlackIcon,
  Facebook as FBIcon,
  CheckCircle as FreshIcon,
  X as CloseIcon,
  Menu as MenuIcon,
} from "react-feather";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { useTheme, invertTheme } from "../utils";

const Modal = styled.div``;

export default function ConfigModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggle = (e: any) => {
    setModalOpen(() => !modalOpen);
  };

  const hoverClose = (e: any) => {
    if (modalOpen) setModalOpen(() => !modalOpen);
  };

  return (
    <Modal className="configModal-wrapper">
      <div className="sidebar-button" onClick={toggle}>
        <MenuIcon className="sidebar-icon" />
      </div>

      <CSSTransition key={"ok"} in={modalOpen} className="configModal" classNames="configModal" timeout={300}>
        <div onMouseLeave={hoverClose}>
          <a href="/#about" target="_blank" rel="noopener noreferrer" className="icon-link">
            <InfoIcon />
            <div className="link_text">About LTTKGP</div>
          </a>
          <a href="https://github.com/lttkgp/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <GitHubIcon />
            <div className="link_text">Code @ Github</div>
          </a>
          <a
            href="https://join.slack.com/t/listentothiskgp/shared_invite/zt-qskw7wok-7~fHJxOls4VMk3~1H98rmw"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <SlackIcon />
            <div className="link_text">Join us on Slack</div>
          </a>
          <a
            href="https://www.facebook.com/groups/lttkgp"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FBIcon />
            <div className="link_text">Facebook Group</div>
          </a>
          <hr />
          <a href="https://api.lttkgp.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FreshIcon />
            <div className="link_text">Posts are up to date.</div>
          </a>

          <div className="bottom-tools">
            <div className="sidebar-button close-icon">
              <CloseIcon className="sidebar-icon" onClick={toggle} />
            </div>
            <div className="theme-switcher" onClick={toggleTheme}>
              <p>{invertTheme(theme)} Theme</p>
              <div className="sidebar-button">
                <div className="sidebar-icon change-theme-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Modal>
  );
}
