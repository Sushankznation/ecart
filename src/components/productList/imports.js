import { useState } from 'react'
import Product from '../poroduct';
import LoadingImg from '../../img/loading_cart.gif'
import { Dropdown, Icon, Pagination } from 'react-bulma-components';
import { useGetByCategoryQuery, useGetByPaginationQuery,useSearchProductsQuery } from '../../services/shop';
import "./ProductLIst.scss"

export {
    useGetByCategoryQuery,
    useGetByPaginationQuery,
    useSearchProductsQuery,
    useState,
    Product,
    LoadingImg,
    Dropdown,
    Icon,
    Pagination
}