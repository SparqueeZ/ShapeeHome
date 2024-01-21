<template>
  <section class="examplesContent">
    <h3 class="sectionTitle">Quelques exemples</h3>
    <div class="examples">
      <article class="example">
        <div class="imgContainer">
          <img
            class="proflam"
            src="../../assets/img/proflam.webp"
            alt=""
            srcset=""
          />
        </div>
        <div class="nameContainer">
          <p>Proflam</p>
        </div>
        <div class="typeContainer">
          <Icon name="market" />
          <p>Catalogue</p>
        </div>
      </article>

      <article class="example">
        <div class="imgContainer">
          <img
            class="amethyste"
            src="../../assets/img/lamethyste.webp"
            alt=""
            srcset=""
          />
        </div>
        <div class="nameContainer">
          <p>L'amethyste</p>
        </div>
        <div class="typeContainer">
          <Icon name="market" />
          <p>E-Commerce (Shop only)</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import Icon from "../lib/Icon.vue";
</script>

<style lang="scss" scoped>
.examplesContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .examples {
    display: flex;
    gap: 20px;
    .example {
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      width: 445px;
      height: 250px;

      .imgContainer {
        width: 100%;
        overflow: hidden;
        transition: 0.2s filter ease-in-out;
        filter: brightness(0.2);
        img {
          width: 100%;
          &.proflam {
            transition: 4s transform ease-in-out;
          }
          &.amethyste {
            transition: 2s transform ease-in-out;
          }
        }
      }

      .nameContainer {
        position: absolute;
        top: 0;
        transition: 0.5s transform ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        p {
          color: #fff;
          font-size: 40px;
          font-weight: 600;
        }
      }

      .typeContainer {
        background-color: #fff;
        position: absolute;
        padding: 10px;
        top: 10px;
        left: 10px;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: fit-content;
        transition: 0.5s all ease-in-out;

        .icon {
          display: block;
          width: 13px;
          height: 13px;
          fill: #323635;
        }
        p {
          font-size: 12px;
          font-weight: 600;
          width: fit-content;
          margin: 0;
          color: #323635;
        }
      }

      &:hover {
        cursor: pointer;
        .imgContainer {
          filter: brightness(1);
          img {
            &.proflam {
              transform: translateY(-1000px);
            }
            &.amethyste {
              transform: translateY(-190px);
            }
          }
        }

        .nameContainer {
          transform: translateY(250px);
        }

        .typeContainer {
          background-color: #323635;
          opacity: 0.7;

          .icon {
            fill: #fff;
          }
          p {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
