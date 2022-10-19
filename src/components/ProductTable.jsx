import { Row, Col} from 'react-bootstrap';
import styled from "styled-components";
import { colors } from '../themes';
// import Pagination from 'react-bootstrap-4-pagination';
import Pagination from './Pagination';
import * as TogglePrimitive from "@radix-ui/react-toggle-group";
import { useDispatch } from 'react-redux'
import { getProductRequest } from '../store/products/productAction'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { productSelector } from '../store/products/productSelector'

function ProductTable(props) {

    let paginationConfig = {}
    let imageUrl = "https://picsum.photos/50"
    const products = useSelector(productSelector)
    const filteredProducts = useSelector(state => state.filteredItems)

    const [active, setActive] = useState(1)
    const [pageSize, setPageSize] = useState(1)

    useEffect(() => {
        products.data = filteredProducts
        setPageSize(Math.ceil(parseInt(products?.data?.totalCount) / 16))
    }, [filteredProducts]);


    /* useEffect(() => {
        // pageSize = Math.ceil(parseInt(products.data.totalCount) / 16)

        paginationConfig = {
            totalPages: pageSize,
            currentPage: active,
            showMax: 5,
            size: "sm",
            threeDots: true,
            center: true,
            prevNext: true,
            prevText: "<- Prev",
            nextText: "Next ->",
            onClick: (page) => {
                props.onPageChange(page)
                setActive(page)
            }
        };
    }, [products]); */



    const productTypes = {
        data: ["mug", "shirt"],
        status: "success"
    }

    const onPageChange = (page) => {
        props.onPageChange(page)
        setActive(page)
    }

    const setShoppingCart = (item) => {
        props.intoCart(item)
    }

    
    /* const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductRequest({ page: active, limit: 16 }))
    }, [active]); */

    


    /* if (products && Object.keys(products).length > 0 && !products?.loading) {
        pageSize = Math.ceil(parseInt(products.data.totalCount) / 16)

        paginationConfig = {
            totalPages: pageSize,
            currentPage: active,
            showMax: 5,
            size: "sm",
            threeDots: true,
            center: true,
            prevNext: true,
            prevText: "<- Prev",
            nextText: "Next ->",
            onClick: (page) => {
                props.onPageChange(page)
                setActive(page)
            }
        };
    } */
    return (
        <ProductWrapper>
            <ProductTitle style={{ textAlign: "left" }}>Products</ProductTitle>

            {productTypes.status === "success" && (
                <ToggleRoot type="single" value={""}>
                    {productTypes.data.map(item => (
                        <ToggleItem key={item} value={item} aria-label={item}>
                            {item}
                        </ToggleItem>
                    ))}
                </ToggleRoot>
            )}
            {
                products && products?.loading && <div>Yukleniyor</div>
            }
            {
                products && !products?.loading && products?.data?.data?.length > 0 && <ProductList className="gy-3">
                    {products.data.data.map((prod, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex align-items-stretch">
                            <Product>
                                <ImagePlace>
                                    <img src={imageUrl} />
                                </ImagePlace>

                                <Price>
                                    <span>₺</span> {prod.price}
                                </Price>
                                <ProductName>{prod.name}</ProductName>
                                <AddOrRemove onClick={() => setShoppingCart(prod)}>
                                    {"Add"}
                                </AddOrRemove>
                            </Product>
                        </Col>
                    ))}
                </ProductList>
            }
            {
                products && products?.loading && <div></div>
            }
            {
                products && !products?.loading && <div>
                    {/* <Pagination {...paginationConfig} style={{ justifyContent: "center" }} /> */}
                        <Pagination currentPage={active} onPageChange={onPageChange} pageCount={pageSize} />
                    <br />
                </div>
            }
        </ProductWrapper>
    );
}

export default ProductTable

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 38px;
    gap: 16px;
`;

const ImagePlace = styled.figure`
  aspect-ratio: 1;
  width: 100%;
  border-radius: 12px;
  background-color: #fefefe;
  padding: 16px;
  border: 1.18px solid #f3f0fe;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ToggleRoot = styled(TogglePrimitive.Root)`
  display: flex;
  gap: 8px;
`;

const ToggleItem = styled(TogglePrimitive.Item)`
  appearance: none;
  border: none;
  border-radius: 2px;
  background: #f2f0fd;
  color: ${colors.primary};
  cursor: pointer;

  display: grid;
  place-items: center;
  padding: 6px 16px;

  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-transform: lowercase;

  &[data-state="on"] {
    background: ${colors.primary};
    color: #f2f0fd;
  }
`;

const ProductTitle = styled.h2`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: ${colors.gray500};
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto) 1fr;
  gap: 8px;
  width: 124px;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.primary};
  text-align: left;

  span {
    font-weight: 400;
  }
`;

const ProductName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;

const AddOrRemove = styled.button`
  appearance: none;
  border: none;
  background: none;
  border-radius: 2px;
  padding: 1px 0;
  color: white;
  background-color: ${colors.primary};
  cursor: pointer;

  font-weight: 600;
  font-size: 12px;
  line-height: 20px;

  height: max-content;
  align-self: end;

  &[data-is-in-basket="true"] {
    background-color: #5d3ebc;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ProductList = styled(Row)`
  background-color: white;
  box-shadow: 0px 4px 24px 0px #5d3ebc0a;
  border-radius: 2px;
  margin-top: 0.3%;
  padding: 20px;

`;