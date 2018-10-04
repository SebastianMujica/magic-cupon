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
    <a :disabled="isDisabled" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="consumirCodigo()">
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
      codigo :"",
      isDisabled : false
    }
  },
  methods : {
    consumirCodigo (){
      this.isDisabled = true
      const Cryptr = require('cryptr');
      const cryptr = new Cryptr("-Semilla")
      
      if (this.codigo.length < 16){
        alert('Cupon Invalido')
      }
      
      const decryptedString = cryptr.decrypt(this.codigo)
      
      //console.log(decryptedString)
      if (isNaN(Date.parse(decryptedString))){
        alert('Cupon Invalido')
      }else{
      axios({
              method: 'post',
              headers:{'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
              url: 'https://sebastianrest.herokuapp.com/api/cupons/',
              data: {
                codigo: this.codigo,
                consumido: decryptedString
            }
          })
      .then(response => {
        alert('El cupon es Correcto , cupon consumido no se podra usar nuevamente')
        console.log(response)
        this.isDisabled=false
        this.codigo=''
        })
      .catch(error => {
        alert('Ocurrio un Error en el Server')
        console.log(error)
        this.isDisabled=false
        })
      }    
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