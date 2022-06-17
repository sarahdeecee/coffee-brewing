import { Alert } from 'react-bootstrap';

const AlertBox = props => {
  const {setShowAlert} = props;

  return (<div id="alert-box" className="justify-content-center">
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Timer complete!</Alert.Heading>
      </Alert>
    </div>
  );
};

export default AlertBox;