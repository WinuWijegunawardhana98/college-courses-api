package com.example.college_api.model;

import jakarta.persistence.*;



@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double fee;

    private String duration;

    @ManyToOne
    @JoinColumn(name = "college_id")
    private College college;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getFee() {
        return fee;
    }

    public void setFee(Double fee) {
        this.fee = fee;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public com.example.college_api.model.College getCollege() {
        return college;
    }

    public void setCollege(com.example.college_api.model.College college) {
        this.college = college;
    }
}

