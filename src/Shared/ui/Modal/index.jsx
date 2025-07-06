import Styled from "./styled";

const Modal = ({ children, isOpen, onClose }) => {
    return (
        isOpen && (
            <Styled.Overlay onClick={onClose}>
                <Styled.Container onClick={(e) => e.stopPropagation()}>
                    <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>
                    {children}
                </Styled.Container>
            </Styled.Overlay>
        )
    );
};

export default Modal;
