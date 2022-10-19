import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductTable from './components/ProductTable';
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/FooterBar';

import SortingCard from './components/FilterCards/SortingCard';
import FilterCard from './components/FilterCards/FilterCard';

import { useDispatch } from 'react-redux'
import { getProductRequest, setSortedProducts, getCompanyRequest, getTagsRequest, getShoppingCart } from './store/products/productAction'
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch()

  const [newPage, setPage] = useState(1)
  const [filterOptions, setFilterOptions] = useState({ sort: "", order: "" })
  const [brandOptions, setBrandOptions] = useState("")
  const [tagOptions, setTagOptions] = useState("")
  const [shoppingCart, setCart] = useState([])

  const setNewPage = (page) => {
    setPage(page)
  };

  useEffect(() => {
    dispatch(getProductRequest({ page: newPage, limit: 16 }))
    dispatch(getTagsRequest())
    dispatch(getCompanyRequest())
  }, []);

  const setSortedValue = (option) => {
    let filter = {}
    switch (option) {
      case "price_desc":
        filter = { sort: "price", order: "desc" }
        break;
      case "price_asc":
        filter = { sort: "price", order: "asc" }
        break;
      case "date_desc":
        filter = { sort: "added", order: "desc" }
        break;
      case "date_asc":
        filter = { sort: "added", order: "asc" }
        break;
      default:
        break;
    }
    setFilterOptions(filter)
  };
  const onFilterBrands = (option) => {
    setBrandOptions(option)
  };

  const onFilterTags = (option) => {
    if (option.includes("All") && option.length == 1) {
      setTagOptions(["*"])
    } else {
      let tagsWithoutAll = option.filter(item => item != "All")
      setTagOptions(tagsWithoutAll)
    }
  };

  const addOrRemoveBasket = (item) => {
    let flagControl = false
    item.amount = 1
    shoppingCart.forEach(element => {
      if (element.slug == item.slug) {
        flagControl = true
        element.amount++
      }
    })
    if (!flagControl || shoppingCart.length == 0) {
      setCart([...shoppingCart, item])
    }
    dispatch(getShoppingCart(shoppingCart));
  }

  useEffect(() => {
    dispatch(getShoppingCart(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    dispatch(setSortedProducts({ page: newPage, limit: 16, sort: filterOptions.sort, order: filterOptions.order, manufacturer: brandOptions, tags: tagOptions }));
  }, [filterOptions, newPage, brandOptions, tagOptions]);

  return (
    <div className="App" style={{ backgroundColor: "#fafafa" }}>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs={12} md={3} style={{ marginTop: '38px', gap: '16px' }}>
            <SortingCard
              title="Sorting"
              defaultOption="price_asc"
              onChange={setSortedValue}
            />
            <FilterCard
              title="Brands"
              placeholder="Search brands"
              default={["All"]}
              onChange={onFilterBrands}
            />
            <FilterCard
              title="Tags"
              placeholder="Search tags"
              default={["All"]}
              onChange={onFilterTags}
            />
          </Col>
          <Col xs={12} md={7}>
            <ProductTable onPageChange={setNewPage} intoCart={addOrRemoveBasket}></ProductTable>
          </Col>
        </Row>
      </Container>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
