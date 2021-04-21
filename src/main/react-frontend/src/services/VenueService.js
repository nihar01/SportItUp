import axios from 'axios';

const Venue_API_BASE_URL="http://localhost:8089/api/venue"
class VenueService{

    getVenue()
    {
        return axios.get(Venue_API_BASE_URL);   //get the data from the API mentioned
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
export default new VenueService()   //exporting the object of this class