<script>
  export let text, p, img, alt_txt;
  import city from "../imgs/TBBVizionsProducts/Commissions/erikcity.png"
  import beast from "../imgs/TBBVizionsProducts/Commissions/erikvsthebeast.png"
  import end from "../imgs/TBBVizionsProducts/Commissions/erk end is near.png"
  import flife from "../imgs/TBBVizionsProducts/Commissions/flife.png"
  import gio from "../imgs/TBBVizionsProducts/Commissions/gio.png"
  import joy from "../imgs/TBBVizionsProducts/Commissions/joylb.png"
  import kbcom from "../imgs/TBBVizionsProducts/Commissions/kb com cover.png"
  import mob from "../imgs/TBBVizionsProducts/Commissions/kbmob.png"
  import jedi from "../imgs/TBBVizionsProducts/Commissions/kb cover jedi.png"
  import amends from "../imgs/TBBVizionsProducts/Commissions/kb no amends.png"
  import ken from "../imgs/TBBVizionsProducts/Commissions/kenny2.png"
  import pitty from "../imgs/TBBVizionsProducts/Commissions/pitbull logo.png"
  import ryan from "../imgs/TBBVizionsProducts/Commissions/ryan bp.png"
  import terry from "../imgs/TBBVizionsProducts/Commissions/terry visualizer.png"
  import wrwf from "../imgs/TBBVizionsProducts/Commissions/wrwf erik holgs.png"
  import car from "../imgs/TBBVizionsProducts/other/car.png"
  import cash from "../imgs/TBBVizionsProducts/other/cash in bed 1.png"
  import cool from "../imgs/TBBVizionsProducts/other/cool.png"
  import fight from "../imgs/TBBVizionsProducts/other/fight scene 1.png"
  import good from "../imgs/TBBVizionsProducts/other/good and evil.png"
  import griz from "../imgs/TBBVizionsProducts/other/griz.png"
  import heartless from "../imgs/TBBVizionsProducts/other/heartless.png"
  import lucid from "../imgs/TBBVizionsProducts/other/lucid.png"
  import thundershock from "../imgs/TBBVizionsProducts/other/thundershock.png"
  import walk from "../imgs/TBBVizionsProducts/other/walk with purpose.png"
  import you from "../imgs/TBBVizionsProducts/other/You!.png"
  import bad from "../imgs/TBBVizionsProducts/women/bad.png"
  import phone from "../imgs/TBBVizionsProducts/women/cash phone.png"
  import mace from "../imgs/TBBVizionsProducts/women/chain mace.png"
  import cutie from "../imgs/TBBVizionsProducts/women/cutie 1.png"
  import fashion from "../imgs/TBBVizionsProducts/women/fashion.png"
  import beam from "../imgs/TBBVizionsProducts/women/high beam viz.png"
  import lolli from "../imgs/TBBVizionsProducts/women/lollipop.png"
  import jane from "../imgs/TBBVizionsProducts/women/mary jane blue.png"
  import pink from "../imgs/TBBVizionsProducts/women/pink.png"
  import practice from "../imgs/TBBVizionsProducts/women/practice 4.png"
  import skate from "../imgs/TBBVizionsProducts/women/skate.png"
  import smile from "../imgs/TBBVizionsProducts/women/smile.png"
  import step from "../imgs/TBBVizionsProducts/women/step.png"
  import terror from "../imgs/TBBVizionsProducts/women/terror.png"
  import beach from "../imgs/TBBVizionsProducts/women/workout beach.png"
  import vizions from "../imgs/TBBVizionsProducts/Self/Vizionsdrawing.png"
  import create from "../imgs/TBBVizionsProducts/Other/Creative Vizion.png"
</script>

<div class="hero">
  <div class="info">
    <div>
      <h1 class="textgradient">{text}</h1>
      <p>{p}</p>
    </div>

    <ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt officia in quibusdam id nam?</p>
    </ul>
  </div>

  <img src={img} alt={alt_txt}>  
</div>

<style>
  .hero{
    height: 100vh;
    padding: 0px 0px 0px 1rem;
    display: flex;
    background-color:#AD4250;
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

.hero p{
  font-size: 2.5vh;
  color: #842006;
}

.hero img{
  max-width: 1300px;
  max-height: 1500px;
  width: auto;
  height: auto;
  object-fit: cover;
}

@font-face {
  font-family: "drippy";
  src: url(bacon.woff);
}
</style>