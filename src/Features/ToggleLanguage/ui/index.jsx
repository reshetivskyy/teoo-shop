import Styled from "./styled";

import ua from "@shared/assets/images/ua.svg";
import uk from "@shared/assets/images/uk.svg";

const ToggleLanguage = () => {
    return (
        <Styled.Box>
            <Styled.Flag>
                <Styled.Icon src={ua} alt="flag" />
            </Styled.Flag>
            <Styled.Flag>
                <Styled.Icon src={uk} alt="flag" />
            </Styled.Flag>
        </Styled.Box>
    );
};

export default ToggleLanguage;
