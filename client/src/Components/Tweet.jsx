import React, { Component } from 'react';
import axios from 'axios';

class Tweet extends Component {
 constructor() {
    super()
    this.state = { list: {data: []} };
 }


  componentDidMount() {
    axios.get('/tweets')
      .then((res) => {
        this.setState({ list: res })
      }).then((data)=>{console.log(this.state.list)})

  }



render() {
    let tweet = this.state.list.data.map((el, index)=>{ 
        return (

            <div className="lit" key={index}> 
                <div className="name">
                <img className="profileImg" src={el.user.profile_image_url} />
                    <p>{el.user.name}</p>
                    <p>{el.user.location}</p>
                    
                </div>
                <div className="tweetText">
                    {el.text}   
                    
                </div>
            </div>)
    })

    return(

    <div className="container">{tweet}</div>
)

};

}

export default Tweet;