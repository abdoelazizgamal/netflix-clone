import Card from "../components/Card";
import Loader from "../components/Loader";
const CardsContainer = ({ data, style }) => {
  if (!(data?.length > 0)) <Loader />;
  return (
    <>
      <div className="cards-container container" style={{ ...style }}>
        {data?.map((item) => (
          <Card
            key={item?.id}
            item={item}
            tv={!!item?.name || !!item?.original_name}
          />
        ))}
      </div>
    </>
  );
};

export default CardsContainer;
