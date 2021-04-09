package com.iiitb.sportitup.bean;

import javax.persistence.*;

@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column(length=50,nullable = false,unique = true)
    private String email;

    @Column(length=10)
    private Integer contactNumber;

    @Column(length=50,nullable = false)
    private String password;


    @Column( columnDefinition = "boolean default false")
    private Boolean isAdminFlag; //0-> user   1->Admin


    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(Integer contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAdminFlag() {
        return isAdminFlag;
    }

    public void setAdminFlag(Boolean adminFlag) {
        isAdminFlag = adminFlag;
    }

    public User(String firstName, String lastName, String email, Integer contactNumber, String password, Boolean isAdminFlag) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.password = password;
        this.isAdminFlag = isAdminFlag;
    }

    public User() {
    }

}