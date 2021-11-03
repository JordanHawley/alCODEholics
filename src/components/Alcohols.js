import React, { useEffect } from "react";

import { getDemAlcohols, addToCart } from "../api/index";

import { useHistory } from 'react-router-dom'

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const GetAllAlocohols = (props) => {
  const { alcohols, setAlcohols, user } = props;
  const history = useHistory()

  useEffect(() => {
    getDemAlcohols()
      .then((alcohols) => {
        setAlcohols(alcohols);
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ marginTop: '30px'}}>
    <div
    className="Alcohols">
      {alcohols.map((alcohol, index) => {
        return (
          <div className="alcoholType" key={index}>
            <Card
              style={{
                margin: "20px",
                padding: "12px",
                borderRadius: "15%",
                backgroundColor: "cornsilk",
                boxShadow: "5px 5px 5px",


              }}
            >
              <CardImg
                top
                width="100%"
                src={alcohol.imageurl}
                alt="Card image cap"
                style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                    maxHeight: "220px",
                    maxWidth: "220px",

                }}
              />
              <CardBody>
                <CardTitle tag="h5">{alcohol.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Type: {alcohol.type} / Price: ${alcohol.price}
                </CardSubtitle>
                <CardText>
                  {alcohol.description}
                  {alcohol.instock}
                </CardText>
                {user
                  ? <Button onClick={async () => {
                    await addToCart(user.user.id, alcohol.id);
                    history.push('/cart');
                  }
                  }>Add To Cart</Button>
                  : <Button onClick={() => history.push('/registerUserAccount')}>Login/Register</Button>
                }

              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default GetAllAlocohols;
