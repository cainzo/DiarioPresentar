import React from "react";
import { Card } from "react-bootstrap";

import "./cardprincipal.css";

const CardPrincipal = (props) => {
  return (
    <>
      <Card className="bg-dark text-white card-noticia-top mt-2" >
      <a href="#" className="stretched-link"></a>
      <span className="categoria-card m-1 bg-danger">{props.noticiaProps.categoria}</span>
        <Card.Img
          src={props.noticiaProps.imgNoticia}
          alt="Card image"
          className="img-bg-card"
        />
            
        <Card.ImgOverlay className="overlay">
        
          <Card.Title>{props.noticiaProps.titulo}</Card.Title>

          <Card.Text className="card-descripcion">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque
            iusto dolorem, officia commodi ex assumenda eum labore. Ut doloribus
            corporis esse accusamus ipsam! Porro molestiae aperiam nemo maiores
            labore, dolore architecto quas veniam repudiandae ullam distinctio
            numquam voluptates quod, ex fugit laudantium, repellendus soluta
            nihil. Ad iste quaerat officiis dolorem expedita sapiente dolor
            possimus commodi culpa! Ea earum reiciendis aliquam mollitia sit
            consequuntur perspiciatis tenetur, magni temporibus at nam dicta
            laboriosam non vitae modi eveniet amet, labore hic, id ipsa quidem
            quo quisquam magnam quasi. Labore, quasi? Nesciunt excepturi
            reprehenderit nulla debitis molestiae nisi aut sequi ipsum, at
            minima cumque provident esse architecto tenetur! Reiciendis harum,
            repudiandae magni odio fugit hic maxime ipsa earum est adipisci rem
            laborum sed modi et veniam reprehenderit quia perferendis dolorum
            nisi culpa iure, rerum autem ducimus possimus? Hic ducimus eos
            excepturi voluptatum praesentium quia est sequi, possimus vitae,
            maxime corporis nemo consequatur atque! Eligendi atque repudiandae
            id quibusdam aspernatur quam, quod ad, consectetur inventore odit
            explicabo? Maxime aspernatur impedit, dignissimos, deleniti eaque
            accusantium explicabo deserunt eius cum rem saepe exercitationem
            error voluptatum consectetur? Iste pariatur architecto, facere eaque
            natus voluptatem numquam tempore eligendi voluptas dignissimos
            nesciunt cumque quasi et iusto, repellendus excepturi aliquam.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        
      </Card>
    </>
  );
};

export default CardPrincipal;
