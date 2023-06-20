<script>
    export let name;
</script>

<nav class="nav">
  <h1 class="textgradient">{name}</h1>
	<div>
		<a href="/">Home</a>
		<a href="/pricing">Pricing</a>
	</div>
</nav>

<style>
 .nav{
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  background:#D3B99F;
  justify-content: space-between;
}

  .nav div{
    display: flex;
  }

 .nav a{
  background-color:#D3B99F;
  font-size: 2.5vh;
  font-family: "atalon";
  text-decoration: none;
  color: black;
  padding: .5rem 2.5rem .5rem 2.5rem;
 }
 
 .nav a:hover{
  text-decoration: underline;
  color: black;
 }
 
h1{
  font-size: 2vh;
  font-family: "atalon";
}
</style>