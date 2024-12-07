import { Input, Text } from "@shared/styles";
import { useState } from "react";
import Styled from "./styled";

const SearchButton = ({ icon }) => {
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState("");

    const handleMouseOnEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        if (!focus) {
            setHover(false);
        }
    };

    const handleOnFocus = () => {
        setFocus(true);
    };

    const handleOnUnFocus = () => {
        if (!search) {
            setFocus(false);
            setHover(false);
        }
    };

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Styled.Box
            onMouseEnter={handleMouseOnEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleOnFocus}
            onBlur={handleOnUnFocus}
        >
            <img src={icon} alt="icon" />
            <Styled.Input $hover={hover}>
                <Input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleOnChange}
                />
            </Styled.Input>
        </Styled.Box>
    );
};

export default SearchButton;
