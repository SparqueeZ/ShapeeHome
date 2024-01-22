<template>
  <svg
    class="stroke"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 186.79"
  >
    <g>
      <path d="m1918.59,0S899.4,186.79,0,186.79h1918.59V0Z" />
    </g>
  </svg>
  <section class="whiteBg">
    <div class="serviceItems">
      <article
        class="serviceItem target"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="10"
      >
        <div class="serviceTopArea">
          <div class="titleArea">
            <Icon name="rocket" />
            <div class="title">
              <p class="titleTop">FORMULE</p>
              <p class="titleBottom">VITRINE</p>
            </div>
          </div>
          <div class="descriptionArea">
            <p class="description">
              Afin d’intégrer le monde du &shy; web simplement.
            </p>
          </div>
        </div>

        <div class="serviceMidArea">
          <div class="priceArea">
            <p class="priceTop">A partir de</p>
            <div class="priceDisplay">
              <p class="price">399€</p>
              <p class="priceExtra">TTC</p>
            </div>
          </div>

          <div class="separator"></div>
          <a href="/devis">
            <div class="btn">
              <p>Lancer mon projet</p>
              <Icon name="boxedArrow" />
            </div>
          </a>
          <div class="separator"></div>

          <div class="descriptionArea">
            <div class="descriptionItem">
              <Icon name="headset" />
              <p>Accompagnement & formation</p>
            </div>
            <div class="descriptionItem">
              <Icon name="phone" />
              <p>Adapté à tous les appareils</p>
            </div>
            <div class="descriptionItem">
              <Icon name="puzzle" />
              <p>Nom de domaine inclus</p>
            </div>
            <div class="descriptionItem">
              <Icon name="word" />
              <p>Mise aux normes RGPD</p>
            </div>
            <div class="descriptionItem">
              <Icon name="clipboard2" />
              <p>Fomulaire de contact</p>
            </div>
            <div class="descriptionItem">
              <Icon name="wrench" />
              <p>Maintenance - 1an</p>
            </div>
            <div class="descriptionItem">
              <Icon name="shield" />
              <p>Sécurisation</p>
            </div>
            <div class="descriptionItem">
              <Icon name="update" />
              <p>Backup</p>
            </div>
          </div>
        </div>
      </article>
      <article
        class="serviceItem target"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="100"
      >
        <div class="serviceTopArea">
          <div class="titleArea">
            <Icon name="market" />
            <div class="title">
              <p class="titleTop">FORMULE</p>
              <p class="titleBottom">CATALOGUE</p>
            </div>
          </div>
          <div class="descriptionArea">
            <p class="description">
              Afin de mettre en avant vos &shy; &shy; produits.
            </p>
          </div>
        </div>

        <div class="serviceMidArea">
          <div class="priceArea">
            <p class="priceTop">A partir de</p>
            <div class="priceDisplay">
              <p class="price">799€</p>
              <p class="priceExtra">TTC</p>
            </div>
          </div>

          <div class="separator"></div>
          <a href="/devis">
            <div class="btn">
              <p>Lancer mon projet</p>
              <Icon name="boxedArrow" />
            </div>
          </a>
          <div class="separator"></div>

          <div class="descriptionArea">
            <div class="descriptionItem">
              <Icon name="return" />
              <p>Tous les avantages précédents</p>
            </div>
            <div class="descriptionItem">
              <Icon name="update" />
              <p>Solution modulaire, évolutive</p>
            </div>
            <div class="descriptionItem">
              <Icon name="diagram" />
              <p>Statistiques Google Analytics</p>
            </div>
            <div class="descriptionItem">
              <Icon name="mail2" />
              <p>Adresse mail personnalisée</p>
            </div>
            <div class="descriptionItem">
              <Icon name="clipboard2" />
              <p>Formation supplémentaire</p>
            </div>
            <div class="descriptionItem">
              <Icon name="cardbox" />
              <p>Affichage de vos produits</p>
            </div>
            <div class="descriptionItem">
              <Icon name="dashboard" />
              <p>Console d'administration</p>
            </div>
            <div class="descriptionItem">
              <Icon name="star" />
              <p>Assistance premium</p>
            </div>
          </div>
        </div>
      </article>
      <article
        class="serviceItem target"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <div class="serviceTopArea">
          <div class="titleArea">
            <Icon name="shoppingBag" />
            <div class="title">
              <p class="titleTop">FORMULE</p>
              <p class="titleBottom">E-COMMERCE</p>
            </div>
          </div>
          <div class="descriptionArea">
            <p class="description">
              Afin de vendre vos produits &shy; &shy; &shy; de manière
              sécurisée.
            </p>
          </div>
        </div>

        <div class="serviceMidArea">
          <div class="priceArea">
            <p class="priceTop">A partir de</p>
            <div class="priceDisplay">
              <p class="price">1199€</p>
              <p class="priceExtra">TTC</p>
            </div>
          </div>

          <div class="separator"></div>
          <a href="/devis">
            <div class="btn">
              <p>Lancer mon projet</p>
              <Icon name="boxedArrow" />
            </div>
          </a>
          <div class="separator"></div>

          <div class="descriptionArea">
            <div class="descriptionItem">
              <Icon name="return" />
              <p>Tous les avantages précédents</p>
            </div>
            <div class="descriptionItem">
              <Icon name="truck" />
              <p>Livraisons + Click & Collect</p>
            </div>
            <div class="descriptionItem">
              <Icon name="timeddoc" />
              <p>Suivis de commandes</p>
            </div>
            <div class="descriptionItem">
              <Icon name="star" />
              <p>Assistance prioritaire</p>
            </div>
            <div class="descriptionItem">
              <Icon name="people2" />
              <p>Comptes utilisateurs</p>
            </div>
            <div class="descriptionItem">
              <Icon name="promo" />
              <p>Boutique sécurisée</p>
            </div>
            <div class="descriptionItem">
              <Icon name="clipboard2" />
              <p>Formation avancée</p>
            </div>
            <div class="descriptionItem">
              <Icon name="cards" />
              <p>Paiement sécurisé</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
  <svg
    class="stroke reverse"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 186.79"
  >
    <g>
      <path d="m0,186.79S1019.19,0,1918.59,0H0v186.79Z" />
    </g>
  </svg>
</template>

<script setup>
import Icon from "../lib/Icon.vue";
</script>

<style lang="scss" scoped>
.whiteBg {
  min-height: 100vh;
  background-color: #fff;
  color: var(--main-bg-color);

  .serviceItems {
    display: flex;
    padding: 3rem 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 3%;
    .serviceItem {
      width: 30%;
      max-width: 270px;
      height: fit-content;
      background-color: var(--main-bg-color);
      border-radius: 0.5rem;
      padding: 3.5rem;

      .serviceTopArea {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .titleArea {
          display: flex;
          gap: 1.5rem;
          .icon {
            width: 3rem;
            height: 3rem;
            fill: #fff;
          }

          .title {
            .titleTop {
              font-size: 16px;
              font-weight: 500;
              color: var(--third-color);
              font-family: "Montserrat";
            }
            .titleBottom {
              font-size: 28px;
              font-weight: 800;
              line-height: 2rem;
              color: #fff;
              text-wrap: nowrap;
              font-family: "Montserrat";
            }
          }
        }

        .descriptionArea {
          min-height: 44px;
          .description {
            color: #fff;
            font-size: 18px;
            word-break: break-all;
            hyphens: auto;
            font-family: "Montserrat";
          }
        }
      }
      .serviceMidArea {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat";

        .priceArea {
          margin-top: 2rem;
          .priceTop {
            color: var(--third-color);
            font-weight: 600;
            font-size: 24px;
            font-family: "Montserrat";
          }
          .priceDisplay {
            display: flex;
            justify-content: end;
            align-items: end;
            .price {
              font-size: 72px;
              font-weight: 700;
              color: #fff;
            }
            .priceExtra {
              font-size: 24px;
              font-weight: 600;
              color: var(--third-color);
              padding-bottom: 0.8rem;
              font-family: "Montserrat";
            }
          }
        }

        .separator {
          width: 100%;
          height: 2px;
          background-color: #fff;
        }
        .CTABtnAlt {
          border: none;
          width: fit-content;
          padding: 0.5rem 2rem;
          border-radius: 0.5rem;
          background-color: #fff;
          font-weight: 500;
          font-size: 20px;
          color: var(--main-bg-color);
          cursor: pointer;

          &:hover {
            transition: 0.2s ease-out all;
            background-color: var(--third-color);
            color: #fff;
          }
        }

        .descriptionArea {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .descriptionItem {
            display: flex;
            align-content: center;
            height: fit-content;
            gap: 1rem;
            .icon {
              display: block;
              width: 1.5rem;
              height: 1.5rem;
              fill: #fff;
            }

            p {
              color: #fff;
              height: fit-content;
              margin: auto 0;
              font-size: 14px;
              font-family: "Montserrat";
            }
          }
        }
      }
    }
  }
}
.stroke {
  margin-bottom: -5px;
  width: 101%;
  fill: #fff;
}
</style>
