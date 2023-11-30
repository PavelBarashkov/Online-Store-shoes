import { Banner } from "../../UI/Banner/Banner";
import { CatalogContainer } from "../../component/CatalogContainer/CatalogContainer";
import { Catalog } from "../../modules/Catalog";

export const CatalogPage = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner title={"К весне готовы!"} />
          <CatalogContainer>
            <Catalog/>
          </CatalogContainer>
        </div>
      </div>
    </main>
  );
};
