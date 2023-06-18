<script>
  import bad from "../../lib/imgs/TBBVizionsProducts/Women/Bad.png"
  import fashion from "../../lib/imgs/TBBVizionsProducts/women/fashion.png"
  import smile from "../../lib/imgs/TBBVizionsProducts/women/smile.png"
  import terry from "../../lib/imgs/TBBVizionsProducts/Commissions/terry visualizer.png"
	import PricingNav from "../../lib/components/PricingNav.svelte";
</script>

<PricingNav name="TBBV"/>
<div class="galery">
  <div class="smile">
    <img src={smile} alt="Smile Portrait">
    <div class="content">
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
    padding: 0rem 2rem;
    background-color: aquamarine;
  }
  
  .galery img{
    max-width: 600px;
    max-height: 600px;
    height: auto;
    width: auto;
    object-fit: cover;
  }

  .smile{
    display: flex;
    flex-direction: row;
    background-color: orange;
  }

  .smile p{
    height: auto;
    width: auto;
    text-align: center;
    margin: auto;
  }

  .smile h1{
    height: auto;
    width: auto;
    text-align: center;
    margin: auto;
  }
</style>