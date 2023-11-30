// ProductList.jsx

import React from 'react';
import {
  useGetByCategoryQuery,
  useGetByPaginationQuery,
  useSearchProductsQuery,
  useState as useLocalState,
  Product,
  LoadingImg,
  Dropdown,
  Icon,
  Pagination,
} from './imports';

function ProductList() {
  const [category, setCategory] = useLocalState(null);
  const [page, setPage] = useLocalState(1);
  const [searchQuery, setSearchQuery] = useLocalState('');
  const {
    isSuccess,
    isFetching,
    isLoading,
    data,
  } = useSearchProductsQuery(searchQuery);

  const {
    isSuccess: pageS,
    data: pageD,
    isFetching: pageFetch,
    isLoading: pageLoad,
  } = useGetByPaginationQuery(page);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setPage(1);
  };

  return (
    <>
     
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='input'
        />
      </div>
      <div className="filter">
        <Dropdown label="Category " closeOnSelect={true} color={'dark'} icon={<Icon>🔽</Icon>} onChange={(e) => setCategory(e)}>
          <Dropdown.Item renderAs="a" value={null}>All</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="smartphones">Smartphones</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="laptops">Laptops</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="fragrances">Fragrances</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="skincare">Skincare</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="groceries">Groceries</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="home-decoration">Home-decoration</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="furniture">Furniture</Dropdown.Item>
          <Dropdown.Item renderAs="a" value="tops">Tops</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="product_list">
        {category == null ? (
          pageLoad || pageFetch ? (
            <img src={LoadingImg} alt="loading" />
          ) : (
            pageS &&
            pageD.products.map((e) => (
              <Product
                img={e.images[0]}
                title={e.title}
                price={e.price}
                descr={e.description}
                key={e.id}
                id={e.id}
                isInCart={false}
              />
            ))
          )
        ) : (
          isLoading || isFetching ? (
            <img src={LoadingImg} alt="loading" />
          ) : (
            isSuccess &&
            data.products.map((e) => (
              <Product
                img={isLoading || isFetching ? LoadingImg : e.images[0]}
                title={e.title}
                price={e.price}
                descr={e.description}
                key={e.id}
                id={e.id}
                isInCart={false}
              />
            ))
          )
        )}
      </div>
      {category == null && (
        <Pagination
          className="pagination"
          current={page}
          showFirstLast
          onChange={(e) => {
            setPage(e);
            window.scrollTo({
              top: 700,
              left: 0,
              behavior: 'smooth',
            });
          }}
          total={5}
          align="center"
        />
      )}
    </>
  );
}

export default ProductList;
