import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

function SpecialsCard(props) {
    return(
        <Card style={{width: "264px"}} >
            <Card.Img
                variant="top"
                src={props.img}
                style={{
                    borderRadius: "16px 16px 0px 0px",
                    height: "185px",
                    width: "264px",
                    filter: "none",
                    marginBottom: 0,
                }}/>
            <Card.Body
                className="card-body"
                style={{height: "200px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
                <div className="card-header">
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <span className="price">{props.price}</span>
                </div>
                    <Card.Text><p>{props.text}</p></Card.Text>
            </div>
            <div>
                <Card.Link href={props.link} className="CTA-lead-text" style={{alignSelf: "flex-end"}}>
                    Order for delivery <FontAwesomeIcon icon={faBicycle} style={{ marginLeft: '10px'}}/>
                </Card.Link>
            </div>
            </Card.Body>
        </Card>
    );
}

export default SpecialsCard;
