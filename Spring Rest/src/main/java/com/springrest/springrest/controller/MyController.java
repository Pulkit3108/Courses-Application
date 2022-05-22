package com.springrest.springrest.controller;
import org.springframework.web.bind.annotation.RestController;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	@CrossOrigin(origins = "http://127.0.0.1:9090")
	@GetMapping("/home")
	public String home() {
		return "Hello World";
	}
	
	// Get All Courses
	@CrossOrigin
	@GetMapping("/courses")
	public List<Course> getCourses() {
		return this.courseService.getCourses();
		
	}
	
	// Get One Course
	@CrossOrigin
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	// Add One Course
	@CrossOrigin
	@PostMapping(path="/courses",consumes="application/json")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	
	// Update Course
	@CrossOrigin
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	
	// Delete Course
	@CrossOrigin
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<> (HttpStatus.OK); 
		}
		catch (Exception e) {
			return new ResponseEntity<> (HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
