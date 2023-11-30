import React, { useState, useEffect } from 'react';
import {
  useGetByCategoryQuery,
  useGetByPaginationQuery,
  useSearchProductsQuery,
  Product,
  LoadingImg,
  Dropdown,
  Icon,
  Pagination,
} from './imports';

function ProductList() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isSuccess: searchSuccess,
    isFetching: searchFetching,
    isLoading: searchLoading,
    data: searchData,
  } = useSearchProductsQuery(searchQuery);

  const {
    isSuccess: pageSuccess,
    data: pageData,
    isFetching: pageFetch,
    isLoading: pageLoad,
  } = useGetByPaginationQuery(page);

    const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className='input'
        />
      </div>
           <div className="product_list">
        {searchQuery !== '' && searchSuccess && (
          searchData.products.map((e) => (
            <Product
              key={e.id}
              img={e.images[0]}
              title={e.title}
              price={e.price}
              descr={e.description}
              id={e.id}
              isInCart={false}
            />
          ))
        )}
        {searchQuery === '' && pageSuccess && (
          pageData.products.map((e) => (
            <Product
              key={e.id}
              img={e.images[0]}
              title={e.title}
              price={e.price}
              descr={e.description}
              id={e.id}
              isInCart={false}
            />
          ))
        )}
        {(searchLoading || pageLoad) && (
          <img src={LoadingImg} alt="loading" />
        )}
      </div>
      {searchQuery === '' && (
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
