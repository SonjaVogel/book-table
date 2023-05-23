import Card from 'react-bootstrap/Card';
import Rating from 'react-rating';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReviewsCard(props) {
    return(
        <Card>
            <Card.Body style={{ display: "flex", flexDirection: "column"}}>
                <Rating
                    initialRating={props.rating}
                    readonly
                    fullSymbol={<FontAwesomeIcon icon={faStar} color="#F4CE14" size="lg" />}
                    emptySymbol={<FontAwesomeIcon icon={faStar} color="#EDEFEE" size="lg" />}
                    padding={20}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Card.Img
                        variant="top"
                        src={props.img}
                        style={{
                        borderRadius: "50%",
                        height: "33px",
                        width: "33px",
                        marginRight: "10px",
                        objectFit: "cover",
                        }}
                    />
                    <Card.Title
                        style={{
                            fontFamily: "Karla",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "#495E57",
                            }}>
                        {props.name}
                    </Card.Title>
                </div>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ReviewsCard;
