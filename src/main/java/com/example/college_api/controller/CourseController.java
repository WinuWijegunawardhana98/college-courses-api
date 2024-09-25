package com.example.college_api.controller;

import com.example.college_api.model.Course;
import com.example.college_api.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses/by name?courseName=${courseName}")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/college/{collegeId}")
    public List<Course> getCoursesByCollegeId(@PathVariable Long collegeId) {
        return courseService.getCoursesByCollegeId(collegeId);
    }
}
