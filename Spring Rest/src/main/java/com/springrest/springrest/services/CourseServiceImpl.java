package com.springrest.springrest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
	
//	List<Course> list;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(117,"Java","Free Course"));
//		list.add(new Course(118,"Spring Boot","Free Course"));
	}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
				
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
//		Course c=null;
//		for(Course i:list) {
//			if(i.getId()==courseId) {
//				c=i;
//				break;
//			}
//		}
		return courseDao.getById(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		list.forEach(e -> {
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		// TODO Auto-generated method stub
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity = courseDao.getById(parseLong);
		courseDao.delete(entity);
	}

}
