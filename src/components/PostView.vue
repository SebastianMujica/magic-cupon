<template>
<div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-cell mdl-cell--4-col">
      <div class="demo-card-square mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title mdl-card--expand">
    <h2 class="mdl-card__title-text">Chequear Codigo</h2>
  </div>
  <div class="mdl-card__supporting-text">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="sample3" v-model="codigo">
    <label class="mdl-textfield__label" for="sample3"></label>
  </div>
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="consumirCodigo()">
      Consumir cupon
    </a>
  </div>
</div>
</div>
    <div class="mdl-layout-spacer"></div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      codigo :"Comprueba tu cupon"
    }
  },
  methods : {
    consumirCodigo (){
      
      const Cryptr = require('cryptr');
      const cryptr = new Cryptr("-Semilla")
      
      const decryptedString = cryptr.decrypt(this.codigo)
      //console.log(decryptedString)

      //alert(new Date(decryptedString)) // 5590fd6409be2494de0226f5d7
      axios.post('https://sebastianrest.herokuapp.com/cupon',{codigo:this.decryptedString,consumido:'si'})
      .then(response => {console.log(response)})
      .catch(error => {console.log(error)})
  }
 }
}
</script>
<style>
.demo-card-square.mdl-card {
  width: 320px;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
  background:
    url('../assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
}
</style>