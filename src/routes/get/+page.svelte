<style>
    html, body {
      height: 100vh;
      width: 100vw;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Open Sans', sans-serif;
    }
  
    /* Button */
    .btn {
      background: transparent;
      width: 200px;
      position: relative;
      padding: 15px;
      color: #1ECD97;
      cursor: pointer;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 3px;
      transition: all 500ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
      border-radius: 4px;
      font-weight: 600;
      overflow: hidden;
      border: 2px solid #1ECD97;
      text-decoration: none;
    }
  
    /* In Progress Button */
    .btn-progress {
      width: 500px;
      color: transparent;
    }
  
    .btn-fill:after {
      content: '';
      background: #1ECD97;
      position: absolute;
      top: 0; left: 0;
      height: 100%;
      width: 100%;
      transform: scaleX(0);
      transform-origin: 0;
      display: block;
      animation: fill 3.2s linear forwards;
    }
  
    /* Button Complete */
    .btn-complete {
      padding: 10px;
      width: 50px;
      color: #fff;
      pointer-events: none;
    }
  
    .btn-complete:after {
      font-family: FontAwesome;
      content: "\f00c";
      color: #fff;
      height: 100%;
      padding-left: 3px;
      position: absolute;
      top: 0; left: 0; right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #1ECD97;
    }
  
    /* Animation */
    @keyframes fill {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
  </style>



<script>
    import { onMount } from "svelte";
    
    onMount(() => {
      const btn = document.querySelector('.btn');
      
      btn.addEventListener('click', () => {
        btn.classList.add('btn-progress');
        
        setTimeout(() => {
          btn.classList.add('btn-fill');
        }, 500);
        
        setTimeout(() => {
          btn.classList.remove('btn-fill');
        }, 4100);
        
        setTimeout(() => {
          btn.classList.add('btn-complete');
        }, 4100);
      });
    });
  </script>


<button class="btn">Submit</button>
