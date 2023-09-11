import { Row, Col } from "react-bootstrap";
import storyItems from "../data/data.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  console.log(storyItems);
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3}>
        {storyItems.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
