import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FooterInfo from '../FooterInfo/FooterInfo';
import AppHeader from '../AppHeader/AppHeader';
import PostsHeader from '../PostsHeader/PostsHeader';
import BlogPost from '../BlogPost/BlogPost';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
// import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './App.css';

import KoreanFood from '../../images/korean.jpg';
import HealthyFood from '../../images/healthy_v2.jpg';
import Fruits from '../../images/fruits_veggies.jpg';


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className="Body">
          <div className="BodyContainer">
            <Switch>
              <Route exact path="/" component={CarouselContainer}/>
              <Route path="/bio" component={AboutMe} />
              <Route path="/posts" component={Posts}/>
            </Switch>
          </div>       
        </main>
        <footer className="App-footer">
          <FooterInfo />
        </footer>
      </div>
    </Router>
  );
}

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMe">
        <h2>Hi, I'm Test User</h2>
        {/* Using text from Bacon Lorum Ipsum */}
        <div>Spicy jalapeno bacon ipsum dolor amet tri-tip hamburger beef tongue prosciutto pig shank. Salami cupidatat shoulder pork loin. Meatball shankle short ribs culpa alcatra tail flank ribeye. Consectetur eu jerky, ut pastrami fugiat buffalo duis nulla shoulder esse aliquip incididunt deserunt.</div>
        <div>Short loin enim sint non, pork belly elit quis kielbasa sunt pancetta dolor ea est. Cupidatat ribeye tri-tip swine leberkas consectetur cow fatback ipsum. Turducken culpa boudin, brisket incididunt buffalo tongue alcatra frankfurter magna capicola exercitation pariatur. Nostrud laboris venison non cow sunt tenderloin picanha est flank tri-tip in. Eiusmod cillum venison commodo et fatback ipsum.</div>
      </div>
      
    );
  }
}

class CarouselContainer extends React.Component {
  render() {
    const imgURLsArray = [KoreanFood, HealthyFood, Fruits];

    return (
      <div className="CarouselContainer">
        <h2>Portfolio</h2>
        <PhotoCarousel imgURLs={imgURLsArray}/>
      </div>
    );
  }
}

// Placeholder class for Homepage
// class LandingPage extends React.Component {
//   render() {
//     return (
//       <h2>Homepage!</h2>
//     );
//   }
// }

class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        <PostsHeader />
          <BlogPost title="Canlis" author="Jane Doe" date="March 1, 2018"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse. Sem et tortor consequat id porta nibh. Sagittis id consectetur purus ut faucibus pulvinar elementum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Sed euismod nisi porta lorem mollis aliquam ut. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Maecenas ultricies mi eget mauris pharetra et. Semper quis lectus nulla at volutpat diam ut. Hendrerit dolor magna eget est. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Integer quis auctor elit sed vulputate mi. Morbi tincidunt ornare massa eget egestas. Velit euismod in pellentesque massa placerat duis. Pharetra massa massa ultricies mi quis hendrerit dolor. Semper viverra nam libero justo laoreet sit amet. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.
  
            Risus commodo viverra maecenas accumsan lacus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Vitae justo eget magna fermentum iaculis. Elementum facilisis leo vel fringilla est ullamcorper eget. Facilisis gravida neque convallis a cras semper auctor. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Libero justo laoreet sit amet cursus. Nam libero justo laoreet sit amet cursus sit. A condimentum vitae sapien pellentesque habitant. Nec feugiat nisl pretium fusce id velit. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. At tellus at urna condimentum. Tellus elementum sagittis vitae et leo duis ut diam. Pellentesque habitant morbi tristique senectus et netus. Enim diam vulputate ut pharetra sit amet aliquam id diam."
          />
          <BlogPost title="John Howie Steak" author="John Doe" date="January 13, 2018"
            content="Faucibus in ornare quam viverra orci sagittis. Purus sit amet volutpat consequat mauris. Ac tincidunt vitae semper quis lectus nulla at. Pharetra et ultrices neque ornare aenean. Ultrices in iaculis nunc sed augue lacus. Orci a scelerisque purus semper eget. Vulputate odio ut enim blandit volutpat. Ut placerat orci nulla pellentesque dignissim. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Duis at tellus at urna condimentum. Ipsum consequat nisl vel pretium lectus quam id leo in. Orci porta non pulvinar neque laoreet.
            
            Consectetur libero id faucibus nisl tincidunt eget nullam non. Lectus mauris ultrices eros in. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Massa tempor nec feugiat nisl pretium fusce id velit. Aliquet eget sit amet tellus. Magna fermentum iaculis eu non. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Ut porttitor leo a diam sollicitudin tempor id eu nisl. A iaculis at erat pellentesque adipiscing commodo elit at. Vulputate ut pharetra sit amet. Dapibus ultrices in iaculis nunc sed augue. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Dui ut ornare lectus sit amet est placerat. Amet luctus venenatis lectus magna. Egestas congue quisque egestas diam in arcu cursus euismod quis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra.
            
            Dolor sit amet consectetur adipiscing elit pellentesque. Diam maecenas ultricies mi eget mauris. Ut aliquam purus sit amet luctus venenatis lectus. Tempus urna et pharetra pharetra massa massa ultricies. Amet volutpat consequat mauris nunc congue nisi vitae. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Ante metus dictum at tempor commodo ullamcorper. Commodo elit at imperdiet dui accumsan. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Aliquet risus feugiat in ante. Velit scelerisque in dictum non consectetur a. Tellus in metus vulputate eu scelerisque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Leo a diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor sed. Egestas erat imperdiet sed euismod. Dolor sit amet consectetur adipiscing. Aenean et tortor at risus viverra adipiscing at in. Egestas integer eget aliquet nibh praesent tristique."
          />
      </div>
    );
  }
}

export default App;
