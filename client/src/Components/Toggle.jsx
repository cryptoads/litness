import React, { Component } from 'react';
import axios from 'axios';


class Toggle extends Component{
constructor(props) {
  super(props);
  this.state = {newView: false,
    list: {data: []}
};
  this.toggle = this.toggle.bind(this);
}


 toggle() {
  this.setState({newView: true});
      axios.get('/tweet/bakkt')
      .then((res) => {
        this.setState({ list: res })
      }).then((data)=>{console.log(this.state.list)})
}



render() {
    let news = this.state.list.data.map((el, index)=>{ 

        let isItBakkt = el.text.toUpperCase();
        let bakktFound = isItBakkt.indexOf('BAKKT');
        let fulllink = "https://twitter.com/" + el.user.screen_name + "/" + "status" +  "/" + el.id_str;
        console.log(fulllink)
        console.log(el)
        return (isItBakkt.includes("BAKKT") ?     <div className="lit" key={index}> 
                <div className="name">
                <img className="profileImg" src={el.user.profile_image_url} />
                    <p>{el.user.name}</p>
                    <p>{el.user.location}</p> 
                    
                    
                </div>
                <div className="TweetsText">
                    {el.text.slice(0, bakktFound)}
                    <span className="litLoud">{el.text.slice(bakktFound, bakktFound + 5)} </span>  
                    {el.text.slice(bakktFound + 5, isItBakkt.length)} 
                    <a className="linkText" href={fulllink}>{fulllink}</a> 
                </div>

            </div> : 

            console.log('not bakkt')
            )
    })

    return(

        <div>
        <button onClick={this.toggle}>
        {this.state.newView ? 'Find Bakkt Tweets': 'Find Bakkt Tweets'}
        </button>

        {this.state.newView ? <div className='container'>{news} </div>: ''}
        </div>
        );
    


}}



export default Toggle;