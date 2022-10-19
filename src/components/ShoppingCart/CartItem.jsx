import styled from "styled-components";
import { colors } from "../../themes";
function CartItem(params) {
    const formattedPrice = new Intl.NumberFormat("tr", {
        maximumFractionDigits: 2,
    }).format(params.price);
    return (
        <Wrapper>
            <Name>{params.name}</Name>
            <Price>₺{formattedPrice}</Price>

            <AmountWrapper>
                <Button onClick={params.decrement}>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 10 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect y={0.726} width={10} height={2.044} rx={1} fill="currentColor" />
                    </svg>
                </Button>

                <Amount>{params.amount}</Amount>

                <Button onClick={params.increment}>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.44 10.407v-4.21h4.12c.243 0 .44-.2.44-.45a.445.445 0 00-.44-.45H6.44V1.088A.445.445 0 006 .638a.445.445 0 00-.44.45v4.21H1.44a.445.445 0 00-.44.45c0 .248.197.45.44.45h4.12v4.209c0 .248.197.45.44.45s.44-.201.44-.45"
                            stroke="currentColor"
                        />
                    </svg>
                </Button>
            </AmountWrapper>
        </Wrapper>

    );
}

export default CartItem

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 4px;
  user-select: none;
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.gray700};
`;

const Price = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.primary};

  grid-row: 2;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  grid-column: 2;
  grid-row: span 2;
  align-self: center;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  transition: opacity 200ms;
  display: grid;
  place-items: center;

  padding: 4px;
  cursor: pointer;

  .icon {
    font-size: 12px;
    color: ${colors.primary};
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Amount = styled.div`
  display: grid;
  place-items: center;
  background-color: ${colors.primary};
  color: white;
  width: 32px;
  height: 32px;

  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;