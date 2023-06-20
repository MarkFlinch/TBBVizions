<script>
  export let text, p, img, alt_txt;
</script>

<div class="hero">
  <div>
    <h1 class="textgradient">{text}</h1>
    <p>{p}</p>
    
  </div>
  
  <img src={img} alt={alt_txt}>  
</div>

<style>
  .hero{
    overflow-x: hidden;
    height: 100vh;
    padding: 0px 0px 0px 0px;
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
  font-family: "atalon";
  font-weight: bold;
  font-size: 10vh;
}

.hero p{
  font-size: 2.5vh;
  color: #CFE0C3;
}

.hero img{
  max-width: 1300px;
  max-height: 1500px;
  object-fit: cover;
}

a{
  text-decoration: none;
  font-style: italic;
  font-weight: bold;
  font-size: 2vh;
  color: #CFE0C3;
  background-color: #132520;
}

a:hover{
  text-decoration: underline;
}
</style>