import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  open: boolean;
  close: () => void;
  title: string;
  description: string;
  image: string;
  url?: string;
}

const StoreModal = (props: ModalProps) => {
  const { open, close, title, description, image, url } = props;
  return (
    <>
      <Modal show={open} onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ImageDiv src={image}/>
          {description}
        </Modal.Body>
        <a target="_blank" href={url} rel="noreferrer">
          <Modal.Footer>{url}</Modal.Footer>
        </a>
      </Modal>
    </>
  );
};

const ImageDiv = styled.img`
  width: 100%;
`;

export default StoreModal;
