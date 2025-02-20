import React from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';
import useOnEscape from 'react-tiny-hooks/use-on-escape';
import { breakpoints } from 'consts';
import OgSprite from 'Components/Sprite';

const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

const Dialog = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.5rem;
  width: 100%;
  /* animate.css @keyframe */
  animation: flipInX;
  animation-duration: 0.8s;

  @media ${breakpoints.up('sm')} {
    margin: 1.75rem auto;
    max-width: 500px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgb(50 50 93 / 20%), 0 5px 15px rgb(0 0 0 / 17%);
  color: ${({ theme }) => theme.FONT_PRIMARY};
  background-color: ${({ theme }) => theme.BACKGROUND_CONTENT};
`;

const Sprite = styled(OgSprite)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
`;

const Body = styled.div`
  flex: 1 1 auto;
`;

const Modal = React.memo(({ children, isOpen, onClose }) => {
  const theme = useTheme();
  useOnEscape(onClose);

  return (
    <Wrapper isOpen={isOpen}>
      <Overlay />
      <Dialog>
        <Content>
          <Sprite icon="CLOSE" color={theme.FONT_PRIMARY} size="2rem" onClick={onClose} />
          <Body>{children}</Body>
        </Content>
      </Dialog>
    </Wrapper>
  );
});

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
