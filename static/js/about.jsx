'use strict';
const authorsData = [
    {
      name: "Christine",
      skill: "dancing",
      imgUrl: "/static/img/off-by-one.jpeg",
      cardId: 1,
    },
    {
      name: "Luba",
      skill: "cooking",
      imgUrl: "/static/img/polymorphism.jpeg",
      cardId: 2,
    }
];

function AuthorCard(props){
    return(
    <div className="card">
        <h2>Name: {props.name}</h2>
        <img src={props.imgUrl} alt="profile" />
        <h2>Skill:{props.skill}</h2>
    </div>
    );
}

function AuthorCardContainer(props){
    const authorCards = []
  
    for (let card of authorsData){
      authorCards.push(
        <AuthorCard name = {card.name} 
        skill = {card.skill} 
        imgUrl = {card.imgUrl}
        key={card.cardId}
        />
      )
    }
    return <React.Fragment>{authorCards}</React.Fragment>    
}


ReactDOM.render(<AuthorCardContainer />, document.querySelector('#about'));