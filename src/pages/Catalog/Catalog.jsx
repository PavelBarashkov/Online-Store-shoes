import { Banner } from "../../UI/Banner/Banner";
import { CatalogContainer } from "../../component/CatalogContainer/CatalogContainer";
import { CatalogModule } from "../../modules/CatalogModule";
import { Categories } from "../../modules/Categories";
import { Search } from "../../modules/Search";

export const Catalog = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner title={"К весне готовы!"} />
          <CatalogContainer>
          <Search/>
            <Categories/>
            <CatalogModule/>
          </CatalogContainer>
        </div>
      </div>
    </main>
  );
};
