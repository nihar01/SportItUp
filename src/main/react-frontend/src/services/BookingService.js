import axios from 'axios';

const Booking_API_BASE_URL="http://127.0.0.1:8081/api/bookingbyuser"
class BookingService{

    getBookingByUser(UserId)
    {
        return axios.get(Booking_API_BASE_URL + '/' + UserId);   //get the data from the API mentioned
    }

    // createUser(user)
    // {
    //     console.log('in create user service', user.emailId);
    //     return axios.post(USER_API_BASE_URL,user);
    // }

    // getUserById(userId){
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

    // updateUser(user, userId){
    //     return axios.put(USER_API_BASE_URL + '/' + userId, user);
    // }

    // deleteUser(userId){
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }
}
export default new BookingService()   //exporting the object of this class