<script>
  export let text, img, alt_txt;
</script>

<div class="hero">
  <div class="layout">
    <h1 class="textgradient">{text}</h1>
      <div class="grid">
        <div class="container">
          <div class="title">
            <h2>Terms of Service</h2>
          </div>
          <div class="bar">
            <div class="content">
              <ul>
                <li><p>Initial payment: Pay starting fee is 50% of the commission price.</p></li>
                <li><p>Commercial use: Commercial use fee is twice the price of the commission.</p></li>
                <li><p>Payment methods: Payment is accepted through Zelle or Apple Pay.</p></li>
                <li><p>Refunds: No refunds are available.</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="title">
            <h2>Pricing</h2>
          </div>
          <div class="bar">
            <div class="content">
              <ul>
                <li><p>Initial payment: Pay starting fee is 50% of the commission price.</p></li>
                <li><p>Commercial use: Commercial use fee is twice the price of the commission.</p></li>
                <li><p>Payment methods: Payment is accepted through Zelle or Apple Pay.</p></li>
                <li><p>Refunds: No refunds are available.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="socials">
        <i class="fi fi-brands-instagram"></i>
      </div>
  </div>

  <img src={img} alt={alt_txt}>
</div>

<style>

  .hero{
    background-color: #210203;
    height: 100vh;
    padding: 0px 0px 0px 1rem;
    display: flex;
    justify-content: space-between;
}

.hero div{
  height: auto;
  width: auto;
  text-align: center;
  margin: auto;
}

.hero h1{
  font-family: "drippy";
  font-weight: bold;
  font-size: 10vh;
}

.hero ul{
 margin-left: .75em;
}

.hero li{
  list-style-position: inside;
  text-align: left;
  color: black;
  text-decoration: underline;
}

.grid{
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container{
  box-shadow: -15px 15px 15px black;
  background-color: #D3B99F;
}

.content{
  background-color: #D3B99F;
  padding-bottom: 10px;
}

.hero img{
  z-index: 0;
  filter: drop-shadow(-30px 15px 10px black);
  max-width: 1300px;
  max-height: 1500px;
  object-fit: cover;
}

.bar{
  background-color: #A87A4D;
  padding-top: 5px;
}
@font-face {
  font-family: "drippy";
  src: url(bacon.woff);
}
</style>