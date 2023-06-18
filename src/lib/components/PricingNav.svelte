<script>
    import vizions from "../imgs/TBBVizionsProducts/Self/Vizionsdrawing.png"
    export let name;
</script>

<nav class="nav">
  <h1 class="textgradient">{name}</h1>
	<div>
		<a href="/">Home</a>
		<a href="/art">Art</a>
		<a href="/pricing">Pricing</a>
	</div>
</nav>

<style>
 .nav{
  padding-left: 1rem;
  display: flex;
  align-items: center;
  background: #AD4250;
  justify-content: space-between;
}

  .nav div{
    display: flex;
  }

 .nav a{
  font-size: 1.75vh;
  background-color:#AD4250;
  text-decoration: none;
  color: black;
  padding: .5rem 2.5rem .5rem 2.5rem;
 }
 
 .nav a:hover{
  background: rgb(255,56,2);
  background: linear-gradient(0deg, rgba(255,56,2,1) 0%, rgba(131,31,5,1) 63%);
  text-decoration: none;
  color: black;
 }
 
h1{
  font-size: 2vh;
}
</style>