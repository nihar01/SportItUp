package com.iiitb.sportitup.bean;

import javax.persistence.*;

import java.sql.Time;
import java.util.Date;

@Entity
@Table
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int activity_id;

    @Column
    private String sportName;
    @Column
    private Date activityDate;

    @Column
    private Time activityTime;
    @Column
    private int numberOfPlayers;
    @Column
    private int chargesPerPerson;


    public int getActivity_id() {
        return activity_id;
    }

    public void setActivity_id(int activity_id) {
        this.activity_id = activity_id;
    }

    public String getSportName() {
        return sportName;
    }

    public void setSportName(String sportName) {
        this.sportName = sportName;
    }

    public Date getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(Date activityDate) {
        this.activityDate = activityDate;
    }

    public Time getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(Time activityTime) {
        this.activityTime = activityTime;
    }

    public int getNumberOfPlayers() {
        return numberOfPlayers;
    }

    public void setNumberOfPlayers(int numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
    }

    public int getChargesPerPerson() {
        return chargesPerPerson;
    }

    public void setChargesPerPerson(int chargesPerPerson) {
        this.chargesPerPerson = chargesPerPerson;
    }

    public Activity() {
    }

    public Activity(String sportName, Date activityDate, Time activityTime, int numberOfPlayers, int chargesPerPerson) {
        this.sportName = sportName;
        this.activityDate = activityDate;
        this.activityTime = activityTime;
        this.numberOfPlayers = numberOfPlayers;
        this.chargesPerPerson = chargesPerPerson;
    }
}
