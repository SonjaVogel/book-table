import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SpecialsCard(props) {
    const navigate = useNavigate();

    function handleLinkClick() {
        navigate(props.link);
    }

    return(
        <Card
            style={{
                width: "264px",
                }} >
            <div
                style={{
                    borderRadius: "16px 16px 0px 0px",
                    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.15)",
                }}>
                <Card.Img
                    variant="top"
                    src={props.img}
                    style={{
                        borderRadius: "16px 16px 0px 0px",
                        height: "185px",
                        width: "264px",
                        filter: "none",
                    }}/>
                <Card.Body
                    className="card-body"
                    style={{
                        height: "200px",
                        marginTop:"-6px",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        }}>
                <div>
                    <div className="card-header">
                        <Card.Title><h3>{props.title}</h3></Card.Title>
                        <span className="price">{props.price}</span>
                    </div>
                        <Card.Text
                            style={{
                                color: "#6E6F6E",
                            }}
                        >
                            {props.text}
                        </Card.Text>
                </div>
                <div>
                    <Card.Link
                        onClick={handleLinkClick}
                        className="CTA-lead-text"
                        style={{
                            color: "black",
                            alignSelf: "flex-end"
                            }}
                        >
                        Order for delivery <FontAwesomeIcon icon={faBicycle} style={{ marginLeft: '10px'}}/>
                    </Card.Link>
                </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default SpecialsCard;
