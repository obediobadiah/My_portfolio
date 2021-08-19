import React from 'react';
import './About-style.css';
import myimage from './images/IMG_9394.jpg';

function About() {
  return (
    <div className="Container">
		<div className="container-about-content">
			<div className="container-content-About">
			    <div className="about-image">
				<img src={myimage} alt="Myimage" className="myimage" height="600px" width="450px"/>
		        </div>
			    <div className="about-text">
					 <h1>About me</h1>
					 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in orci id purus blandit convallis. Duis quis enim nec arcu aliquam feugiat nec sed turpis. Maecenas suscipit magna neque. Phasellus maximus ligula eu lacinia egestas. In tincidunt, risus id tempor laoreet, odio dui commodo ex, in dignissim odio velit vel massa. Curabitur consectetur ante turpis, eget sodales odio vulputate non. Sed elementum tellus quis consectetur sagittis. Proin mollis sapien quis sagittis mollis. Nulla vel mollis dolor, vel tristique erat. Cras placerat sapien elit, at malesuada dui scelerisque nec. Praesent ultricies, nisi eget varius tempor, nibh eros imperdiet erat, in rutrum lorem tellus eget erat. Cras molestie enim sit amet justo commodo, sed auctor augue rhoncus. Proin sed tellus turpis. Nunc elementum ante id magna lobortis, ut porta nisl pharetra. Curabitur maximus imperdiet nisi ac interdum. Duis nec tellus nisi. Duis sed mauris ipsum. Donec sit amet arcu lobortis, maximus felis in, mollis tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur libero ante, aliquam id imperdiet at, imperdiet at magna.</p>
				 </div>
			</div>
		</div>
    </div>
  );
}

export default About;