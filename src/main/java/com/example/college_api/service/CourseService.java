package com.example.college_api.service;

import com.example.college_api.model.Course;
import com.example.college_api.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getCoursesByCollegeId(Long collegeId) {
        return courseRepository.findByCollegeId(collegeId);
    }
}
