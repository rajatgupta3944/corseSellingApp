import React from 'react';
import { useAppSelector } from '../../../app/hooks'
import CourseCard from '../../../components/common/CourseCard';
import { Flex } from 'antd';
import { emptyCart } from '../../../assets';


const Cart = () => {
  const { items, totalAmount } = useAppSelector(state => state.cart)
  console.log(items, totalAmount)
  return (
    <div>
    {!items.length ? 
    <Flex justify='space-around'>
    <img src={emptyCart} alt="Empty Cart" />
    </Flex> :
      <Flex gap={20}>{items?.map((item: any) => {
      return <CourseCard title={item.title} price={item.price} quantity={item.quantity}></CourseCard>
    })}</Flex>}
    </div>
  )
}

export default Cart