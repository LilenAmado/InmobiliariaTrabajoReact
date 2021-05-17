import React from 'react';
import '../normalize.css';
import '../index.css';
import imgNos from './img/nosotros.jpg'

function Conocenos() {
  return (
    <div>
      <main className="container">
        <h1 className="titulo">Conoce sobre nosotros</h1>
        <br/>
        <section className="grid2Nos">
          <img src={imgNos} alt="" className="imgN"/>
          <p className="imgN pNos">Proin consequat viverra sapien, malesuada tempor tortor feugiat vitae. In dictum felis et nunc aliquet molestie. Proin tristique commodo felis, sed auctor elit auctor pulvinar. Nunc porta, nibh quis convallis sollicitudin, arcu nisl semper mi, vitae sagittis lorem dolor non risus. Vivamus accumsan maximus est, eu mollis mi. Proin id nisl vel odio semper hendrerit. Nunc porta in justo finibus tempor. Suspendisse lobortis dolor quis elit suscipit molestie. Sed condimentum, erat at tempor finibus, urna nisi fermentum est, a dignissim nisi libero vel est. Donec et imperdiet augue. Curabitur malesuada sodales congue. Suspendisse potenti. Ut sit amet convallis nisi. <br/> Aliquam lectus magna, luctus vel gravida nec, iaculis ut augue. Praesent ac enim lorem. Quisque ac dignissim sem, non condimentum orci. Morbi a iaculis neque, ac euismod felis. Fusce augue quam, fermentum sed turpis nec, hendrerit dapibus ante. Cras mattis laoreet nibh, quis tincidunt odio fermentum vel. Nulla facilisi.</p>
        </section>
      </main>

    </div>
  );
}
export default Conocenos;