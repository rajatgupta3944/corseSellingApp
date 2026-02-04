import React, { type ComponentProps } from 'react';
import { Card } from 'antd';
import CourseButton from './CourseButton';
import type { Course } from '../../features/courses/types/course';

const { Meta } = Card;

interface CourseCardDataProps {
  course: Course;
  quantity?: number;
  onClick?: () => void;
}

type CourseCardProps =
  CourseCardDataProps & Omit<ComponentProps<typeof Card>, 'title'>

const CourseCard = ({course,
  quantity,
  onClick,
  ...cardProps}: CourseCardProps) => {
    const { title, description, price, image, instructor } = course
  return <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={image}
      />
    }
  >
    <Meta title={title} description={description} />
    <div style={{ marginTop: 12 }}>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      {!quantity ? <CourseButton label="Add +" onClick={onClick} /> : quantity}
    </div>
  </Card>
}

export default CourseCard;