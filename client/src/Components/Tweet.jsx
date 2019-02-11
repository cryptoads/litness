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
        let isItLit = el.text.toUpperCase();
        let litFound = isItLit.indexOf('#LIT');
        return (isItLit.includes("#LIT") ?     <div className="lit" key={index}> 
                <div className="name">
                <img className="profileImg" src={el.user.profile_image_url} />
                    <p>{el.user.name}</p>
                    <p>{el.user.location}</p>
                    
                </div>
                <div className="tweetText">
                    {el.text.slice(0, litFound)}
                    <span className="litLoud">{el.text.slice(litFound, litFound + 4)} </span>  
                    {el.text.slice(litFound + 4, isItLit.length)} 
                    
                </div>
            </div> : 

            console.log('not lit')
            )
    })

    return(

    <div className="container">{tweet}</div>
)

};

}

export default Tweet;