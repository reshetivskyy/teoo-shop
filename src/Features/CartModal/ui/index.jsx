import CartItem from "@entities/CartItem/ui";
import { SubTitle } from "@shared/styles";
import Modal from "@shared/ui/Modal";

const CartModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <SubTitle>Cart</SubTitle>
            <CartItem
                image={"https://via.placeholder.com/150"}
                name="Sample Item"
                color="Red"
                size="M"
                price={29.99}
                count={1}
                setCount={(count) => console.log("Set count:", count)}
            />
        </Modal>
    );
};

export default CartModal;
