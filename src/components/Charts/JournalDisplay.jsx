import Accordion from 'react-bootstrap/Accordion';
import moment from "moment";

const JournalDisplay = (props) => {

    const journalDropdown = () => (
        props.data.map((el, idx) => (
            <Accordion.Item key={idx} eventKey={idx}>
                <Accordion.Header>{moment(el.createdAt).format('MMM D, YY')}</Accordion.Header>

                <Accordion.Body>
                    {el.journal === "" ? "No journal for today" : el.journal}
                </Accordion.Body>
            </Accordion.Item>
        ))
    )

    return (
        <Accordion defaultActiveKey="0">
            {journalDropdown()}
        </Accordion>
    )
}

export default JournalDisplay;