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
  position: fixed;
  top: 0;
  width: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  background: #CFE0C3;
  justify-content: space-between;
}

  .nav div{
    display: flex;
  }

 .nav a{
  font-size: 2.5vh;
  font-family: "atalon";
  background-color:#CFE0C3;
  text-decoration: none;
  color: black;
  padding: .5rem 2.5rem .5rem 2.5rem;
 }
 
 .nav a:hover{
  text-decoration: underline;
  color: black;
 }
 
h1{
  font-size: 3vh;
  font-family: "atalon";
}
</style>