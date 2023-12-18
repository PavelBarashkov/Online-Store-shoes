import { BasketModule } from "../../modules/BasketModule/BasketModule"
import { Banner } from "../../UI/Banner/Banner";

export const Basket = () => {
  return (
    <main className="container">
    <div className="row">
      <div className="col">
      <Banner title={"К весне готовы!"} />

      <BasketModule/>
    </div>
    </div>
  </main>
  );
};
