import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageTemplate from '../../components/pageTemplates/pageTemplate'
import Products from '../../components/Products'

const Home = () => (
  <PageTemplate>
    <Products />
  </PageTemplate>
)

export default Home
