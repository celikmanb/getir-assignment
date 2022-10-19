import React from 'react';
import * as Popover from '@radix-ui/react-popover'
import { useDispatch, useSelector } from 'react-redux';
import { Content, Divider, EmptyCart, PriceText, ViewCartButton, CheckoutButton } from './styles';
import CartItem from './CartItem';
import { getShoppingCart } from '../../store/products/productAction';

function ShoppingCart() {
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart)

    const totalCost = shoppingCart && !shoppingCart?.loading && shoppingCart?.data?.reduce(
        (prev, curr) =>  prev + curr.price * curr.amount,
        0
    );

    const totalCostText = new Intl.NumberFormat("tr", {
        maximumFractionDigits: 2,
    }).format(totalCost);

    const increment = (item) => {
        const basketItemIndex = shoppingCart.data.findIndex(x => x.slug === item.slug);
        if (basketItemIndex != -1) {
            shoppingCart.data[basketItemIndex].amount++
            dispatch(getShoppingCart(shoppingCart.data));
        }
    };

    const decrement = (item) => {
        const basketItemIndex = shoppingCart.data.findIndex(x => x.slug === item.slug);
        if (basketItemIndex != -1) {
            if (shoppingCart.data[basketItemIndex].amount == 1) {
                let withoutItem = shoppingCart.data.filter(element => element.slug != item.slug)
                dispatch(getShoppingCart(withoutItem));
            }else {
                shoppingCart.data[basketItemIndex].amount--
                dispatch(getShoppingCart(shoppingCart.data));
            }
        }
    };
    return (
        <Popover.Root>
            <ViewCartButton>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.412 9.467h13.176v11.541H5.412V9.467zM9.672 4.657h4.67l.934.97v3.84l-1.011-.003v-3.84h-4.51v3.84l-1.031.003V5.624l.948-.967z"
                        fill="currentColor"
                    />
                </svg>
                <PriceText>₺ {totalCostText}</PriceText>
            </ViewCartButton>

            <Content side="bottom" sideOffset={40} align="end">
                {shoppingCart && shoppingCart?.data?.length == 0 && (
                    <EmptyCart>Your basket is empty!</EmptyCart>
                )}

                {shoppingCart && shoppingCart?.data?.map(basketItem => (
                    <React.Fragment key={basketItem.slug}>
                        <CartItem
                            name={basketItem.name}
                            price={basketItem.price * basketItem.amount}
                            amount={basketItem.amount}
                            increment={() => increment(basketItem)}
                            decrement={() => decrement(basketItem)}
                        />

                        <Divider />
                    </React.Fragment>
                ))}

                {shoppingCart && shoppingCart?.data?.length > 0 && (
                    <CheckoutButton>₺{totalCostText}</CheckoutButton>
                )}
            </Content>

        </Popover.Root>
    );
}

export default ShoppingCart