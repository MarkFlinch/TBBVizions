<script>
import ArtCard from "./ArtCard.svelte";
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
</script>

<div class="galery">
  <ArtCard text="lorem3" img={city} alt="lorem2"/>  
  <ArtCard text="lorem4" img={beast} alt="lorem2"/>  
  <ArtCard text="lorem3" img={end} alt="lorem2"/>  
  <ArtCard text="lorem3" img={flife} alt="lorem2"/>  
  <ArtCard text="lorem3" img={gio} alt="lorem2"/>  
  <ArtCard text="lorem3" img={joy} alt="lorem2"/>  
  <ArtCard text="lorem3" img={kbcom} alt="lorem2"/>  
  <ArtCard text="lorem3" img={mob} alt="lorem2"/>  
  <ArtCard text="lorem3" img={jedi} alt="lorem2"/>  
  <ArtCard text="lorem3" img={amends} alt="lorem2"/>  
  <ArtCard text="lorem3" img={ken} alt="lorem2"/>  
  <ArtCard text="lorem3" img={pitty} alt="lorem2"/>  
  <ArtCard text="lorem3" img={ryan} alt="lorem2"/>  
  <ArtCard text="lorem3" img={terry} alt="lorem2"/>  
  <ArtCard text="lorem3" img={wrwf} alt="lorem2"/>  
  <ArtCard text="lorem3" img={car} alt="lorem2"/>  
  <ArtCard text="lorem3" img={cash} alt="lorem2"/>  
  <ArtCard text="lorem3" img={cool} alt="lorem2"/>  
  <ArtCard text="lorem3" img={fight} alt="lorem2"/>  
  <ArtCard text="lorem3" img={good} alt="lorem2"/>  
  <ArtCard text="lorem3" img={griz} alt="lorem2"/>  
  <ArtCard text="lorem3" img={heartless} alt="lorem2"/>  
  <ArtCard text="lorem3" img={lucid} alt="lorem2"/>  
  <ArtCard text="lorem3" img={thundershock} alt="lorem2"/>  
  <ArtCard text="lorem3" img={walk} alt="lorem2"/>  
  <ArtCard text="lorem3" img={you} alt="lorem2"/>  
  <ArtCard text="lorem3" img={bad} alt="lorem2"/>  
  <ArtCard text="lorem3" img={phone} alt="lorem2"/>  
  <ArtCard text="lorem3" img={mace} alt="lorem2"/>  
  <ArtCard text="lorem3" img={cutie} alt="lorem2"/>  
  <ArtCard text="lorem3" img={fashion} alt="lorem2"/>  
  <ArtCard text="lorem3" img={beam} alt="lorem2"/>  
  <ArtCard text="lorem3" img={lolli} alt="lorem2"/>  
  <ArtCard text="lorem3" img={jane} alt="lorem2"/>  
  <ArtCard text="lorem3" img={pink} alt="lorem2"/>  
  <ArtCard text="lorem3" img={practice} alt="lorem2"/>  
  <ArtCard text="lorem3" img={skate} alt="lorem2"/>  
  <ArtCard text="lorem3" img={smile} alt="lorem2"/>  
  <ArtCard text="lorem3" img={step} alt="lorem2"/>  
  <ArtCard text="lorem3" img={terror} alt="lorem2"/>  
  <ArtCard text="lorem3" img={beach} alt="lorem2"/>  
</div>

<style>
  .galery{
    vertical-align: center;
    text-align: center;
    background-color: blueviolet;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(7, 1fr);
    margin: 1rem;
    gap: 11px;
    justify-content: center;
  }
</style>