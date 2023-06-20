<script>
  import bad from "../../lib/imgs/TBBVizionsProducts/Women/bad.png"
  import fashion from "../../lib/imgs/TBBVizionsProducts/women/fashion.png"
  import smile from "../../lib/imgs/TBBVizionsProducts/women/smile.png"
  import terry from "../../lib/imgs/TBBVizionsProducts/Commissions/terry_visualizer.png"
	import PricingNav from "../../lib/components/Pricing_Nav.svelte";
</script>
<div class="galery">
  <div class="smile">
    <div class="content">
      <img src={smile} alt="Smile Portrait">
      <h1>Just SMiLE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique eius odio!</p>
    </div>    
  </div>

  <div class="fashion">
    <img src={fashion} alt="Fashion Portrait">
    <div class="content">
      <h1>Just SMiLE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique eius odio!</p>
    </div>  
  </div>

  <div class="bad">
    <img src={bad} alt="Bad Portrait">
    <div class="content">
      <h1>Just SMiLE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique eius odio!</p>
    </div>  
  </div>

  <div class="terry">
    <img src={terry} alt="Terry Visualizer">
    <div class="content">
      <h1>Just SMiLE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique eius odio!</p>
    </div>  
  </div>
</div>

<style>
  .galery{
    display: grid;
    grid-template-rows: repeat(auto, 1fr);
    padding: 0rem 2rem;
    background-color: white;
    max-width: 60px;
  }
  
  .galery img{
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .smile{
    display: flex;
    flex-direction: row;
    background-color: orange;
  }

  .smile p{
   position: absolute;
   top: 0;
   text-align: center;
  }

  .smile h1{
    position: absolute;
    height: auto;
    width: auto;
    text-align: center;
    margin: auto;
  }
</style>