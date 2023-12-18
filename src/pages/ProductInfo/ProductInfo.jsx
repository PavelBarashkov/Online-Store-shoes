import { CardInfo } from "../../modules/CardInfo";
import { Banner } from "../../UI/Banner/Banner";

export const ProductInfo = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner title={"К весне готовы!"} />
          <CardInfo/>
        </div>
      </div>
    </main>
  );
};
