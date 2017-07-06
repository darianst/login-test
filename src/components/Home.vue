<template>
  <div class="home">
    <header>
      <p>Choose your Bank</p>
    </header>
    <div class="post-header">
      <img src="static/img/logo.png">
      <p><b>App</b> wants to access your bank data for:</p>
      <p>&bull; Identification   &bull; Personal finance manager</p>
    </div>
    <div class="logo-list">
      <div v-for="bank of bankList" :key="bank.connectorId" class="logo-wrapper" @click="loginPage(bank.connectorId)">
        <img :src="'static/img/' + bank.logoURL" class="logo-image">
      </div>
    </div>
    <div class="pre-footer">
      <a>Can't find your bank? Click Here</a>
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
      bankList: [],
      errors: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/banklist')
    .then((response) => {
      this.bankList = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
  methods: {
    loginPage(bankId) {
      this.$router.push(`login/${bankId}`);
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
    justify-content: center;
    background: #6f21ed;
    background: linear-gradient(to right,  #6f21ed 0%,#7db9e8 100%);
  }

  header p {
    display: flex;
    font-size: 3em;
    color: white;
  }

  .post-header p {
    line-height: 0.2em;
    font-size: 1.8em;
  }

  .pre-footer a {
    font-size: 1.8em;
    text-decoration: underline;
    color: lightskyblue;
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

  .logo-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .logo-wrapper {
    display: flex;
    width: 40%;
    justify-content: center;
    padding: 7% 3%;
    margin: 2% 0;
    border: gray 1px solid;
    cursor: pointer;
  }

  .logo-image {
    max-width: 100%;
  }

</style>
