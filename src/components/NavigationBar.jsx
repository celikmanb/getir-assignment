import React from "react"
import styled from "styled-components";
import { breakpoints, colors } from "../themes";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function NavigationBar() {
  return (
    <Wrapper>
      <Layout>
        <a className="logo">
          <svg
            width={142}
            height={41}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.784 20.928c0 .768.192 1.52.576 2.256.416.704.976 1.056 1.68 1.056.736 0 1.296-.08 1.68-.24.416-.192.656-.288.72-.288.192 0 .288.128.288.384s-.192.512-.576.768c-.352.224-1.008.336-1.968.336-.928 0-1.696-.384-2.304-1.152-.608-.768-.96-1.616-1.056-2.544V36H.072V13.776h4.752v7.008c.128-2.016 1.12-3.76 2.976-5.232 1.856-1.504 3.792-2.256 5.808-2.256 2.048 0 3.504.624 4.368 1.872.896 1.216 1.456 2.976 1.68 5.28.128-1.92 1.12-3.584 2.976-4.992 1.888-1.44 3.824-2.16 5.808-2.16 2.112 0 3.664.736 4.656 2.208 1.024 1.44 1.536 4.528 1.536 9.264V36h-4.8v-9.984c0-3.776-.208-6.592-.624-8.448-.384-1.856-1.136-2.784-2.256-2.784-1.408 0-2.816.656-4.224 1.968-1.408 1.312-2.112 2.704-2.112 4.176 0 .768.192 1.52.576 2.256.416.704 1.072 1.056 1.968 1.056.544 0 1.008-.08 1.392-.24.416-.192.656-.288.72-.288.192 0 .288.128.288.384s-.192.512-.576.768c-.352.224-.976.336-1.872.336-.864 0-1.6-.304-2.208-.912-.608-.64-.992-1.456-1.152-2.448.032.608.048 1.584.048 2.928V36H15v-9.984c0-3.776-.208-6.592-.624-8.448-.384-1.856-1.136-2.784-2.256-2.784-1.408 0-2.816.656-4.224 1.968-1.408 1.312-2.112 2.704-2.112 4.176zM47.341 36.48c-2.304 0-4.352-.64-6.144-1.92-1.76-1.312-2.64-3.12-2.64-5.424 0-1.344.32-2.512.96-3.504.672-.992 1.52-1.728 2.544-2.208 1.888-.96 3.728-1.44 5.52-1.44 1.792 0 3.824.48 6.096 1.44-.032-3.712-.496-6.176-1.392-7.392-.864-1.248-2.208-1.872-4.032-1.872-1.824 0-3.408.336-4.752 1.008-1.312.672-1.968 1.568-1.968 2.688 0 .384-.176.576-.528.576-.32 0-.48-.176-.48-.528 0-1.344.736-2.448 2.208-3.312 1.504-.896 3.712-1.344 6.624-1.344 6.08 0 9.12 3.584 9.12 10.752v12h-4.8v-3.792c-.224 1.248-.944 2.272-2.16 3.072-1.216.8-2.608 1.2-4.176 1.2zm4.224-8.976c1.152.8 1.856 1.904 2.112 3.312v-6.528c-2.304-.928-4.192-1.392-5.664-1.392-1.44 0-2.576.608-3.408 1.824-.832 1.216-1.248 2.704-1.248 4.464 0 1.76.336 3.264 1.008 4.512.704 1.216 1.744 1.824 3.12 1.824 1.408 0 2.64-.352 3.696-1.056 1.056-.736 1.584-1.6 1.584-2.592 0-1.728-.576-2.912-1.728-3.552-.48-.288-.72-.56-.72-.816 0-.256.112-.384.336-.384.224 0 .528.128.912.384zM80.082 15.6a.924.924 0 01-.432.816c-.256.192-.592.288-1.008.288-.416 0-.752-.112-1.008-.336a2.1 2.1 0 01-.528-.816c-.064-.288-.256-.544-.576-.768-.32-.256-.768-.384-1.344-.384-1.408 0-2.72 1.024-3.936 3.072-1.216 2.048-1.92 4.368-2.112 6.96V36h-4.8V13.776h4.8v5.664c.768-1.856 1.76-3.392 2.976-4.608 1.248-1.248 2.496-1.872 3.744-1.872 1.248 0 2.256.224 3.024.672.8.416 1.2 1.072 1.2 1.968zM101.669 40.32c-1.728 0-3.072-.576-4.032-1.728-.928-1.12-1.536-2.512-1.824-4.176-.256-1.664-.48-3.344-.672-5.04-.416-4.192-1.664-6.48-3.744-6.864l-3.744 4.944V36h-4.8V0h4.8v25.872l6.048-8.016c1.216-1.632 2.64-2.96 4.272-3.984 1.632-1.024 3.312-1.536 5.04-1.536.608 0 .912.144.912.432 0 .384-.192.576-.576.576-.896 0-1.68.064-2.352.192-.64.096-1.6.56-2.88 1.392-1.28.832-2.528 2.048-3.744 3.648l-2.352 3.072c.704-.064 1.168-.096 1.392-.096 1.632 0 2.944.448 3.936 1.344a5.781 5.781 0 011.968 3.264c.32 1.312.56 2.752.72 4.32.192 1.536.304 2.96.336 4.272.064 1.312.304 2.4.72 3.264.416.896 1.008 1.344 1.776 1.344s1.44-.224 2.016-.672c.576-.416 1.024-.848 1.344-1.296.32-.416.544-.624.672-.624s.192.064.192.192c0 .16-.048.336-.144.528-.96 1.888-2.72 2.832-5.28 2.832z"
              fill="currentColor"
            />
            <path
              d="M112.436 34.32c.448.32 1.008.592 1.68.816.704.224 1.552.336 2.544.336s2.048-.224 3.168-.672c1.12-.48 1.904-1.184 2.352-2.112h1.392c-1.248 2.528-3.872 3.792-7.872 3.792-3.072 0-5.68-1.088-7.824-3.264-2.112-2.208-3.168-4.96-3.168-8.256 0-3.328 1.12-6.096 3.36-8.304 2.24-2.24 4.672-3.36 7.296-3.36 2.656 0 4.736.736 6.24 2.208 1.536 1.44 2.304 3.152 2.304 5.136s-.816 3.744-2.448 5.28c-1.632 1.536-3.776 2.304-6.432 2.304-2.656 0-4.512-1.136-5.568-3.408.032.224.064.704.096 1.44.064.736.112 1.312.144 1.728.032.416.112.992.24 1.728.16.736.32 1.328.48 1.776.192.448.464.96.816 1.536.352.544.752.976 1.2 1.296zm7.344-13.92c0-4.128-1.568-6.192-4.704-6.192-1.536 0-2.8.752-3.792 2.256-.96 1.472-1.504 3.264-1.632 5.376a5.004 5.004 0 011.728-2.16c.8-.544 1.616-.816 2.448-.816.864 0 1.296.16 1.296.48 0 .288-.192.432-.576.432-1.472.096-2.56.464-3.264 1.104-.672.64-1.008 1.504-1.008 2.592s.384 2.016 1.152 2.784c.8.736 1.728 1.104 2.784 1.104 1.728 0 3.088-.688 4.08-2.064.992-1.408 1.488-3.04 1.488-4.896zM125.438 14.736v-.96h4.416V7.2h4.8v6.576h5.04v.96h-5.04v14.832c0 3.968.864 5.952 2.592 5.952.672 0 1.296-.208 1.872-.624.576-.448 1.024-.88 1.344-1.296.32-.448.544-.672.672-.672s.192.08.192.24c0 .128-.048.288-.144.48-.96 1.888-2.72 2.832-5.28 2.832-2.048 0-3.568-.784-4.56-2.352-.992-1.568-1.488-3.664-1.488-6.288V14.736h-4.416z"
              fill="currentColor"
            />
          </svg>
        </a>

        <ShoppingCart />
      </Layout>
    </Wrapper>

  );
}

export default NavigationBar

const Wrapper = styled.header`
width: 100%;
  height: 76px;
  background-color: ${colors.primary};
  position: sticky;
  top: 0;

  .logo {
    color: white;
    place-self: center;
    transition: opacity 200ms;
    grid-column: 1 / span 2;

    &:hover {
      opacity: 0.8;
    }
  }

  .logo {
    grid-column: 2 / span 5;
    justify-self: start;
  }

  @media ${breakpoints.xl} {
    .logo {
      grid-column: 6 / span 2;
    }
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;

  @media ${breakpoints.md} {
    gap: 16px;
  }

  @media ${breakpoints.xl} {
    grid-template-columns: repeat(12, 88px);
  }
`;