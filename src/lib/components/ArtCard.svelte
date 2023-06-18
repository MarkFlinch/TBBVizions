<script>
  export let text, img, alt;
</script>
<div class="art">
  <div class="desc">
    <p>{text}</p>
  </div>
  <img src={img} alt={alt}>
</div>

<style>
  .art{
    width: 100%;
    height: 100%;
  }

  .desc{
    position: absolute; 
    justify-content: space-between; 
  }

  img{
    width: 16rem;
    height: 16rem;
    object-fit: cover;
  }
</style>