import Button from "@shared/ui/Button";
import Styled from "./styled";

const Picker = ({ items, selected, onSelect }) => {
    return (
        <Styled.Box>
            {items.map((item) => (
                <Button
                    key={item.id}
                    color={item.color}
                    text={item.size}
                    clicked={selected === item.id}
                    onClick={() => onSelect(item.id)}
                    width="52px"
                    height="52px"
                />
            ))}
        </Styled.Box>
    );
};

export default Picker;

// <Picker items={colors} selected={color} onSelect={setColor} />

// const colors = [
//     {
//         id: 1,
//         color: "#FFC285",
//     },
//     {
//         id: 2,
//         color: "#FFF",
//     },
// ];

// const sizes = [
//     {
//         id: 1,
//         size: "XS",
//     },
//     {
//         id: 2,
//         size: "S",
//     },
// ];
