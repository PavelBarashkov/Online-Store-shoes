import React from "react";
import { Banner } from "../../UI/Banner/Banner";

export const Info404 = () => {
  return (
    <main class="container">
      <div class="row">
        <div class="col">
          <Banner title={"К весне готовы!"} />
          <section class="top-sales">
            <h2 class="text-center">Страница не найдена</h2>
            <p>Извините, такая страница не найдена!</p>
          </section>
        </div>
      </div>
    </main>
  );
};
