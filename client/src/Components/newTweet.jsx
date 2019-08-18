import React, { Component } from 'react';
import axios from 'axios';

class newTweet extends Component {
 constructor() {
    super()
    this.state = { list: {data: []} };
 }


  componentDidMount() {
    console.log('test')
    axios.get('/tweet/bakkt')
      .then((res) => {
        this.setState({ list: res })
      }).then((data)=>{console.log(this.state.list)})

  }



render() {
    let news = this.state.list.data.map((el, index)=>{ 
        let isItBakkt = el.text.toUpperCase();
        let bakktFound = isItBakkt.indexOf('BAKKT');
        return (isItBakkt.includes("BAKKT") ?     <div className="tweet" key={index}> 
                <div className="name">
                <img className="profileImg" src={el.user.profile_image_url} />
                    <p>{el.user.name}</p>
                    <p>{el.user.location}</p>
                    
                </div>
                <div className="newTweetsText">
                    {el.text.slice(0, bakktFound)}
                    <span className="litLoud">{el.text.slice(bakktFound, bakktFound + 4)} </span>  
                    {el.text.slice(bakktFound + 4, isItBakkt.length)} 
                    
                </div>

            </div> : 

            console.log('not bakkt')
            )
    })

    return(

    <div className="container">{news}</div>
    
)

};

}

export default newTweet;