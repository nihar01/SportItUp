package com.iiitb.sportitup.service;

import com.iiitb.sportitup.bean.Activity;
import com.iiitb.sportitup.exception.ResourceNotFoundException;
import com.iiitb.sportitup.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<Activity> getAllActivity() {

        List<Activity> activityList= activityRepository.findAll();
        return activityList;    //convert iterable class to List collection and return
    }

    public Activity createActivity(Activity activity)
    {
        System.out.println(activity.toString());
        return activityRepository.save(activity);
    }
    public Activity getActivityById(Integer id){

        Activity activity= activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exists with id:"+id));

        return activity;  //entity is returned along with the status
    }
}
