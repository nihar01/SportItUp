package com.iiitb.sportitup.controller;

import com.iiitb.sportitup.bean.Activity;
import com.iiitb.sportitup.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("/api/")
public class ActivityController {

    private ActivityService activityService;

    @Autowired
    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping("/activity")
    public List<Activity> getAllActivity() {
        return activityService.getAllActivity();
    }


    @PostMapping("/activity")
    public Activity createActivity(@RequestBody Activity activity)  //mapping the JSON Body tot he object directly
    {
        return activityService.createActivity(activity);
    }

    @GetMapping("/activity/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Integer id) {
        Activity activity = activityService.getActivityById(id);
        if(activity!=null) {
            return ResponseEntity.ok(activity);
        }
        return null;
    }

}
