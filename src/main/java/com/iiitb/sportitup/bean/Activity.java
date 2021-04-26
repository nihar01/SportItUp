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
    private Date date;
    @Column
    private Time time;
    @Column
    private int numberOfPlayers;

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public int getNumberOfPlayers() {
        return numberOfPlayers;
    }

    public void setNumberOfPlayers(int numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
    }

    public Activity() {
    }

    public Activity(String sportName, Date date, Time time, int numberOfPlayers) {
        this.sportName = sportName;
        this.date = date;
        this.time = time;
        this.numberOfPlayers = numberOfPlayers;
    }
}
