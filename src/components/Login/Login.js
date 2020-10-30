import React from 'react';
import photo from '../../images/Group 140.png';
import  firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
     
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const handleGoogleSignin = ()=>{
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
          }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
         
          const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
              .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
              }).catch(function (error) {
                // Handle error
              }); 
          
        }    
    }
    return (
        <div className="row">
            <div className="col-md-6 mt-5 pt-5 pl-5  ">
               <button onClick={handleGoogleSignin} className="btn btn-appointment google-btn">Continue with google</button>
            </div>
            <div className="col-md-6">
                <img src={photo} className="img-fluid" alt=""/>
             </div>
        </div>
    );
};

export default Login;