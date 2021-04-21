package com.iiitb.sportitup.controller;

import com.iiitb.sportitup.bean.Venue;
import com.iiitb.sportitup.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("api")
public class VenueController {
    private VenueService venueService;

    @Autowired
    public VenueController(VenueService theVenueService){
        venueService = theVenueService;
    }
    @GetMapping("/venue")
    public List<Venue> getVenue(){
        return venueService.getVenue();
    }
}
