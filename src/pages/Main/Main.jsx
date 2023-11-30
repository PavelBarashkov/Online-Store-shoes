import { Banner } from "../../UI/Banner/Banner";
import { CatalogContainer } from "../../component/CatalogContainer/CatalogContainer";
import { Catalog } from "../../modules/Catalog";
import { Categories } from "../../modules/Categories";
import { TopSales } from "../../modules/TopSales";
export const Main = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner title={"К весне готовы!"} />
          <TopSales />
          <CatalogContainer>
            <Categories />
            <Catalog />
          </CatalogContainer>
        </div>
      </div>
    </main>
  );
};
