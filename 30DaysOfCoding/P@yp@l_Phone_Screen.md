/*
Request:
GET :userid

Response:
{
	"name": "Jane Doe",
	"title": "Engineering Manager",
	"email": "jane.doe@example.com",
	"location": "16-34-3a",
	"picture": "cdn.com/3959288-profile.jpeg"
	"direct_reports": "[396001, 2058800, 2059800]"
}

*/

/**
 * step 1: make the call to get details about yourself
 */

/*
- Kevin Bacon (Engineering Manager, Team A)
  details about you
  
  Managing:
    - Team member 1 [title]
    - Team member 2 [title]
    - Team member 3 [title]
*/

import fetch from 'fetch';

/**
 * @param {number} id 
 **/
const getSubordinateInfo = (id) => {
    return fetch(`workday.com/users/${id}`).then((response) => {
      const formattedObj = response.json()
 			return {
        name: formattedObj.name,
        title: formattedObj.title
      };
  });
}

app.get('/', (req, res) => {
  const userid = req.session.userid
  fetch(`workday.com/users/${userId}`).then((response) => {
    // render response
    const personObj = response.json();
  
    // make secondary call for direct_reports
    const subordinates = [...personObj.direct_reports];
    // make copy response.direct_reports
   	Promise.all(subordinates.map((id) => getSubordinateInfo(id)))
      .then((allSubordinates, personObj) => {
      	res.json({allSubordinates, personObj});
    	})
    	.catch((err) => console.error(err));
    // map over to transform to transform into individual promises
    // Promise.all([array of promises])
  });
  
})



/// here 

1.)  call get method ('/')
2.) Wait for response, resolve and we can set it to state
3.) Turn off loading if state.personInfo !== null
3b.) Error message
4.) feed person info to functional components as props
		5.) Pass personInfo into mainPerson component
    5b) Pass allSubordinates into org d3/ charts



import React, {Component} from 'react';
import fetch from 'fetch';
import MainPerson from 'MainPerson';

class Main extends Component {
  state = {
    personInfo = null,
  }
	componentDidMount(){
    fetch('/').then((resp) => {
      this.setState({personInfo: resp})
    }).catch((err) => {
      console.error(err);
    })
  }

      	// {<Charts info={this.state.personInfo.allSubordinates}/>}

	render(){
    return (
      <div>
        <MainPerson mainPersonInfo={this.state.personInfo.personObj}/>
        <div>
        	{this.state.personInfo.allSubordinates.map((sub) => (<SubInfo info={sub}/>))}
        </div>
      </div>
    );
  }
}

export default Main;


////////

import React from 'react';
import GoogleMaps from 'GoogleMaps';

const MainPerson = (props) => {
  return (
  <div>
    <div>{props.mainPersonInfo.name}</div>
    <div>{props.mainPersonInfo.title}</div>
    <div>{props.mainPersonInfo.email}</div>
    <img src={props.mainPersonInfo.picture}></img>
    <GoogleMaps coords={props.mainPersonInfo.location}></GoogleMaps>
  <div>
  );
}
      
export defaults MainPerson;
    
imp

<!--       propTypes = {
        	"name": "Jane Doe",
	"title": "Engineering Manager",
	"email": "jane.doe@example.com",
	"location": "16-34-3a",
	"picture": "cdn.com/3959288-profile.jpeg"
	"direct_reports": "[396001, 2058800, 2059800]"
      }
       -->











