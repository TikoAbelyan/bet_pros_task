import React, {useRef, Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Input, Header, Icon } from 'semantic-ui-react';
import './index.css';



const AppComponent = ({
  items,
  onChange,
  value,
  handleAdd,
  handleEdit,
  handleItemEdit,
}) => {

  const bottomScrollRef = useRef(null);

  const scrollToBottom = () => {
    bottomScrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <Container fluid className="d-flex-column justify-content-center app" onClick={handleAdd}>
      <Row
        className="pros-and-cons justify-content-center align-items-center p-3"
        
        style={{ overflowY: 'scroll', overflowX: 'hidden',boxShadow: '0px -3px 5px 3px #b7b3c7' }}
      >
        <Row tag="h2" className="w-100 justify-content-center">
        Task
        </Row>
        {items.map((it, i) => (
<Fragment>
<Col
            sm="12"
            key={i}
            className="d-flex justify-content-between align-items-center m-2 p-2 list-item"
            onDoubleClick={() => handleEdit(i)}
          >
            {it.editable ? (
              <Col sm="11" className="d-flex align-items-center p-0">
              <Input
                placeholder="Add"
                autoFocus
                className="d-flex justify-content-center mt-3 mb-3 w-100"
                onChange={({ target: { value } }) => handleItemEdit(value, i)}
                value={it.value}
                onKeyPress={({ key, target: { value } }) => {
                  if (key === 'Enter') {
                    handleItemEdit(value, i);
                    handleEdit(i);
                  }
                }}
                
              />
              
              <Icon
              name="check circle"
              size="large"
              color="blue"
              className="save_ico"
              onClick={()=>handleEdit(i)}
            />
            </Col>
            ) : (
              <Header as="h2" className="text-center m-0">
                {it.value}
              </Header>
            )}
            <Col sm="1" className="d-flex justify-content-end p-0">
              <Icon
                name="pencil alternate"
                size="large"
                color="blue"
                className="edit-icon"
                onClick={() => handleEdit(i)}
              />
            </Col>
            
          </Col>
          <div ref={bottomScrollRef}/>
</Fragment>
        ))}
      </Row>
      <Row className="pros-and-cons justify-content-center align-items-center p-3 fullAdd">
        <Input
          placeholder="Add to Enter"
          className="d-flex justify-content-center mt-3 mb-3 w-100"
          onChange={onChange}
          value={value}
          onKeyPress={(e)=>{handleAdd(e) 
            scrollToBottom()}}
        />
      </Row>
    </Container>
  );
};

export default AppComponent;
