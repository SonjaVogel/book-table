import Card from 'react-bootstrap/Card';
import Rating from 'react-rating';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReviewsCard(props) {
    return(
        <Card>
            <Card.Body style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "170px",
                            width: "156px",
                            padding: "18px",
                            gap: "18px",
                            background: "white",
                            borderRadius: "16px",
                            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.15)"
                            }}
            >
                <Rating
                    initialRating={props.rating}
                    readonly
                    fullSymbol={<FontAwesomeIcon icon={faStar} color="var(--primary-yellow)" size="lg" />}
                    emptySymbol={<FontAwesomeIcon icon={faStar} color="var(--highlight-lgrey)" size="lg" />}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Card.Img
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
                            fontSize: "14px",
                            color: "#495E57",
                            }}
                    >
                        {props.name}
                    </Card.Title>
                </div>
                <Card.Text
                    style={{
                        margin: "0",
                        color: "var(--highlight-dgrey)"
                    }}
                >
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ReviewsCard;
