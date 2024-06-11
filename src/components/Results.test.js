import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from './Results';

describe('Results Component', () => {
  test('displays loading state correctly', () => {
    render(<Results loading={true} courses={[]} badgeFilters={[]} />);
    
    // classname loadingBox is used to represent a loading state
    const loadingBoxes = screen.getAllByTestId(/loadingBox-\d/);
    expect(loadingBoxes).toHaveLength(10);
  });

  test('displays "Please select a badge" when no courses and no badge filters', () => {
    render(<Results loading={false} courses={[]} badgeFilters={[]} />);
    
    const pleaseSelectMessage = screen.getByText('Please select a badge');
    expect(pleaseSelectMessage).toBeInTheDocument();
  });

  test('displays "No courses found" when no courses and badge filters exist', () => {
    render(<Results loading={false} courses={[]} badgeFilters={['badge1']} />);
    
    const noCoursesMessage = screen.getByText('No courses found');
    expect(noCoursesMessage).toBeInTheDocument();
  });

  test('displays courses when courses are provided', () => {
    const courses = ['Course 1', 'Course 2', 'Course 3'];
    render(<Results loading={false} courses={courses} badgeFilters={['badge1']} />);
    
    courses.forEach(course => {
      const courseElement = screen.getByText(course);
      expect(courseElement).toBeInTheDocument();
    });
  });
});
