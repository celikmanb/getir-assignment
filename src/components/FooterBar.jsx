import { colors } from "../themes";
import styled from "styled-components";

function FooterBar(params) {
    return (
        <FooterWrapper>
            <span>©2019 Market</span>
            <span>•</span>
            <span>Privacy Policy</span>
        </FooterWrapper>
    );
}
export default FooterBar

const FooterWrapper = styled.footer`
  display: flex;
  gap: 1rem;
  color: ${colors.primary};
  font-size: 13px;
  width: 100%;
  user-select: none;
  justify-content: center;

  margin-top: 136px;
  padding-bottom: 40px;
`;