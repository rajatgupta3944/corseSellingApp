import Flex from 'antd/es/flex'
import React from 'react'
import rawCourseList from '../../../data/courses.json'
import CourseCard from '../../../components/common/CourseCard'
import { useAppDispatch } from '../../../app/hooks';
import { addToCart } from '../../../features/cart/CartSlice';
import type {Course} from '../types/course'

const CourseList = rawCourseList as {courses: Course[]};

const Courses: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (course: Course) => {
  dispatch(
  addToCart({
    id: course.id,
    title: course.title,
    price: course.price,
    quantity: 1,
  })
)
}
  return (
    <Flex wrap="wrap" gap={20} className='mt-20 ml-20'>
      {CourseList?.courses.map((course) => (
        <CourseCard key={course.id} course={course} onClick={() =>  handleAddToCart(course)} />
      ))}
    </Flex>
  )
}

export default Courses