import styled from "styled-components";
import * as TogglePrimitive from "@radix-ui/react-toggle-group";
import { colors } from '../../themes'

function SortingCard(params) {
  const sortingType = {
    price_desc: "Price low to high",
    price_asc: "Price high to low",
    date_desc: "New to old",
    date_asc: "Old to new"
  }
  return (
    <SortWrapper>
      <SortTitle>{params.title}</SortTitle>

      <ToggleRoot
        type="single"
        defaultValue={params.default}
        onValueChange={params.onChange}
      >
        {Object.keys(sortingType).map(option => (
          <ToggleItem key={option} value={option}>
            <IconCircle>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L3.5 6 1 3.727"
                  stroke="currentColor"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconCircle>

            <span>{sortingType[option]}</span>
          </ToggleItem>
        ))}
      </ToggleRoot>
    </SortWrapper>
  );
}

export default SortingCard

const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 608px;
  margin-bottom: 4%
`;

const SortTitle = styled.h4`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.gray500};
  text-align: left;
`;

const ToggleRoot = styled(TogglePrimitive.Root)`
  padding: 24px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  height: 184px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IconCircle = styled.div`
  border-radius: 9999px;
  border: 2px solid #dfdee2;
  font-size: 22px;
  width: 1em;
  height: 1em;
  display: grid;
  place-items: center;

  svg {
    font-size: 10px;
    color: ${colors.primary};
    display: none;
  }
`;

const ToggleItem = styled(TogglePrimitive.Item)`
  appearance: none;
  border: none;
  background: none;
  width: max-content;

  display: flex;
  gap: 8px;
  align-items: center;

  &[data-state="on"] {
    ${IconCircle} {
      border: 2px solid ${colors.primary};

      svg {
        display: block;
      }
    }
  }

  span {
    font-size: 14px;
    line-height: 18px;
    color: ${colors.gray600};
  }
`;