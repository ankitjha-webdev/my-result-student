package com.project.result.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "external")
@Data
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "registration_no")
    private long registrationno;

    @Column(name = "name")
    private String name;
    
    @Column(name = "sem")
    private String sem;

    @Column(name = "subject_code")
    private String subjectcode;

    @Column(name = "subject_name")
    private String subjectname;

    @Column(name = "subject_type")
    private String subjecttype;

    @Column(name = "subject_credit")
    private String subjectcredit;

    @Column(name = "grade")
    private String grade;
}

/*Table: external
Columns:
id int 
registration_no bigint 
name text 
sem text 
subject_code text 
subject_name text 
subject_type text 
subject_credit text 
grade text*/ 