package com.iiitb.sportitup.service;

import com.iiitb.sportitup.bean.Booking;
import com.iiitb.sportitup.bean.User;
import com.iiitb.sportitup.controller.ActivityController;
import com.iiitb.sportitup.exception.ResourceNotFoundException;
import com.iiitb.sportitup.repository.BookingRepository;
import org.apache.logging.log4j.LogManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;
    private static Logger logger = LoggerFactory.getLogger(BookingService.class);
    @Autowired
    public BookingService(BookingRepository theBookingRepository){
        bookingRepository = theBookingRepository;

    }
    public List<Booking> getBooking(){
        List<Booking> bookingList = new ArrayList<>();
        bookingRepository.findAll().forEach(bookingList::add);
        return bookingList;
    }

    public ResponseEntity<Booking> getBookingById(Integer id) {
        Booking booking= bookingRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("no booking with id:"+id));

        return ResponseEntity.ok(booking);
    }
    public List<Booking> getBookingByUId(Integer user_id){
        List<Booking> bookingList = new ArrayList<>();
        bookingRepository.findBookingsByUser_userId(user_id).forEach(bookingList::add);
        return bookingList;
    }

    public Booking createBooking(Booking booking) {

        Booking book= bookingRepository.save(booking);
        logger.info("[New Booking Created with id] - " + book.getBooking_id());
        return book;
    }
}
