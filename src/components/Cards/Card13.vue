<template>
  <div class="main center">
    <div class="box center">
      <img src="../../assets/images/ottoklaus.png" alt="#" />
      <div @click="arr" class="arr_container center">
        <span class="mdi mdi-arrow-bottom-right"></span>
      </div>
      <div class="left_container" :class="flip ? 'active' : 'off'">
        <p><strong>Hecho con:</strong></p>
        <div class="skills">
          <div>HTML</div>
          <div>Css</div>
          <div>JavaScript</div>
          <div>Vue</div>
          <div>Vuetify</div>
        </div>
        <div class="icons">
          <a href=""><span id="icono" class="mdi mdi-github mx-1 url--text"></span></a>
          <a href="https://otto-klaus-inventario.web.app/"><span class="mdi mdi-web-box mx-1 url--text"></span></a>
        </div>
        <div @click="clc" class="cancel center">
          <span class="mdi mdi-close"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card13',
    data() {
        return {
            flip: false
        }
    },
    methods: {
        arr() {
            this.flip = true;
        },
        clc() {
            this.flip = false;
        }
    }
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
}
body {
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  height: 50vh;
}
.box {
  width: 350px;
  height: 250px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.288);
  border-radius: 23px;
  flex-direction: column;
  color: white;
  position: relative;
  overflow: hidden;
}
.box img {
  width: 350px;
  height: 250px;
}
.user_name {
  margin-bottom: 5px;
  font-size: 2rem;
}
.skill {
  color: rgba(255, 255, 255, 0.555);
}
/*arrow*/
.arr_container,
.cancel {
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  bottom: 0;
  right: 0;
  border-radius: 23px 0 23px 0;
  color: rgb(70, 70, 70);
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.4s;
}
.arr_container i {
  transform: rotate(45deg);
}
.active_arr {
  transform: translate(80%, 80%);
}
.left_container {
  position: absolute;
  background: #BA68C8;
  width: 100%;
  height: 100%;
  border-radius: 23px;
  padding: 40px 0 0 0px;
  transition: all 0.4s;
}
.off {
  transform: translate(-80%, -80%) rotate(90deg);
}
.active {
  transform: translate(0) rotate(0);
}
.left_container p {
  margin-bottom: 15px;
  font-size: 1.2rem;
}
.left_container .skills div {
  display: inline-block;
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  font-size: 0.9rem;
  margin: 4px 4px 4px 0;
}
.left_container .icons {
  font-size: 1.6rem;
  margin-top: 10px;
}
.left_container .icons i {
  color: #cfcfcf;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.4s;
}
.left_container .icons i:hover {
  color: #2c5364;
}
</style>