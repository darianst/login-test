<template>
  <div class="home">
    <header>
      <div class="icon" @click="goBack()">&laquo;</div>
      <div class="text">Enter your credentials</div>
      <div class="icon">?</div>
    </header>
    <div class="post-header">
      <img src="static/img/logo.png">
      <div class="text">
        Your security is important.<br>
        We guarantee a simple, secure, transparent way<br>
        to connect to your bank account and keep you data secured.
      </div>
    </div>
    <div class="login-form">
      <h2 class="bank-name">{{loginDetails.displayName}}</h2>
      <p>insert your bank account credentials:</p>

      <div v-for="field of loginDetails.fields" :key="field.id" class="field-wrapper">
        <input :type="field.type" :id="field.id" :placeholder="field.displayName" class="field" @change="updateData($event, field.id)">
      </div>

      <button class="btn" @click="sendData()">NEXT</button>

    </div>
    <div class="pre-footer">
      
    </div>
    <footer>
      <p>Your Data is secured by TrueLayer</p>
      <p>Terms of use | Privacy Policy</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      inputData: {
        fields: {},
      },
      loginDetails: [],
      errors: [],
    };
  },
  created() {
    axios.get(`http://localhost:3000/bank/${this.$route.params.bankId}`)
    .then((response) => {
      this.loginDetails = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updateData(event, id) {
      this.inputData.fields[id] = event.target.value;
    },
    sendData() {
      axios.post('http://localhost:3000/data/', this.inputData.fields);
    },
  },
};
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
  }
  header {
    display: flex;
    height: 5%;
    flex-direction: row;
    justify-content: space-between;
    background: #6f21ed;
    background: linear-gradient(to right,  #6f21ed 0%,#7db9e8 100%);
  }

  header .icon {
    display: flex;
    color: white;
    font-size: 3em;
    line-height: 3em;
    padding: 0 5%;
  }

  header .text {
    display: flex;
    font-size: 3em;
    color: white;
    line-height: 3em;
  }

  .post-header .text {
    line-height: 0.5em;
    font-size: 1.4em;
    font-stretch: condensed;
  }

  .bank-name {
    color: red;
    font-size: 5em;
    font-weight: bold;
  }

  .login-form p {
    font-size: 1.6em;
  }

  .field-wrapper {
    padding: 2% 0;
  }

  .login-form .field {
    font-size: 3em;
    border: lightblue 3px solid;
  }

  .btn {
    width: 62%;
    font-size: 3em;
    border-radius: 12px;
    color: white;
    background-color: red;
  }

  footer {
    display: flex;
    height: 5%;
    flex-direction: row;
    justify-content: space-between;
    border-top: gray 1px solid;
    padding: 2% 1%;
  }

  footer p {
    display: flex;
    font-size: 1.8em;
  }

</style>
