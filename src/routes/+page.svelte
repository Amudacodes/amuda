<head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <nav>
        <div class="navAll border-b-2 all flex justify-between items-center h-[4rem]">
            <div class="logo font-extrabold" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">
                <h2>AmudaCodes</h2>
            </div>
            <ul class="navMenu flex gap-2 hidden" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;" >
                <li><a href=""><h3>About Me</h3></a></li>
                <li><a href=""><h3>Services</h3></a></li>
                <li><a href=""><h3>Contact Me</h3></a></li>
            </ul>
            <div class="navBtn cursor-pointer" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">
                <button><h2><i class='bx bx-menu'></i></h2></button>
            </div>
        </div>
    </nav>

    <header>
        <div class="headerAll all">
            <div class="headerMe pt-[3rem]">
                <img src="/mme.png">
            </div>
            <div class="hleft">
                <div class="headerText pt-11" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">
                    <h2 class="text-[2rem] font-medium">Hi, my name is </h2>
                    <h1 class="text-[2.5rem] font-semibold pt-1">Yusuf Adeagbo.</h1>
                    <p class="headerText-p font-bold text-[1.2rem] pt-1 pb-3">Frontend Developer.</p>
                </div>
                <div class="headerBtn flex gap-2 pt-3" >
                    <button class="headerBtn-1 font-bold border-x-emerald-50 cursor-pointer"><h2>My Resume</h2></button>
                    <button style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;" class="headerBtn-2 font-bold cursor-pointer"><h2>Learn More</h2></button>
                </div>
            </div>
        </div>
    </header>

    <div class="about">
        <div class="aboutAll all pt-20 text-center">
            <h1 class="pb-3 text-3xl font-bold" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">About Me</h1>
            <p class="p-2 pb-11 font-semibold" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">As a frontend developer, I'm constantly learning new technologies to improve user experiences. While I aspire to become a full-stack developer, I'm currently focused on mastering HTML, CSS, and JavaScript, along with popular frameworks like Sveltekit. I value collaboration and problem-solving and am always looking to expand my knowledge and skills. Thanks for getting to know me!</p>
        </div>
    </div>
<!-- 
    <div class="fep">
        <div class="fepAll flex all">
            <div class="circle-container ">

                <div class="circle-outer"></div>
              
                <div class="circle-middle"></div>
              
                <div class="circle-inner"></div>
              
            </div>
        </div>
    </div> -->

    <div class="whatido">
        <h2 class="all text-center text-3xl font-bold pt-[2rem]" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;">My field of specialization</h2>
        <div class="whatidoAll all flex flex-col">
            <div class="whati flex flex-col items-center m-8  p-[1rem] bg-[#0e0d0d]">
                <img src="/1.png" alt="" class=" pt-5">
                <h2 class=" text-[2rem] pt-[10px]" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Software</h2>
                <h2 class="text-[1.2rem] pt-1 pb-5" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Development</h2>
            </div>

            <div class="whati flex flex-col items-center m-8  p-[1rem] bg-[#0e0d0d]">
                <img src="/2.png" alt="" class=" pt-5">
                <h2 class=" text-[2rem] pt-[10px]" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Web</h2>
                <h2 class="text-[1.2rem] pt-1 pb-5" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Development</h2>
            </div>

            <div class="whati flex flex-col items-center m-8  p-[1rem] bg-[#0e0d0d]">
                <img src="/3.png" alt="" class=" pt-5">
                <h2 class=" text-[2rem] pt-[10px]" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Web</h2>
                <h2 class="text-[1.2rem] pt-1 pb-5" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">Design</h2>
            </div>
        </div>

    </div>

 
    <section class="py-8">
        <div class="all mx-auto">
          <h2 class="text-3xl font-bold mb-4" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;">Skills</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="p-4 bg-white shadow-lg rounded-lg">
              <div class="flex items-center justify-center h-20 w-20 rounded-full bg-[#E44D26] ">
                <img src="html.png" alt="HTML icon" class="h-full w-full">
              </div>
              <h3 class="text-xl font-medium text-gray-800 my-4">HTML</h3>
              <p class="text-gray-600">Proficient in writing semantic and accessible HTML code.</p>
            </div>
            <div class="p-4 bg-white shadow-lg rounded-lg">
              <div class="flex items-center justify-center h-20 w-20 rounded-full bg-[#379AD6]">
                <img src="css.png" alt="CSS icon" class="h-full w-full">
              </div>
              <h3 class="text-xl font-medium text-gray-800 my-4">CSS</h3>
              <p class="text-gray-600">Expertise in styling with CSS, including the use of TailwindCSS.</p>
            </div>
            <div class="p-4 bg-white shadow-lg rounded-lg">
              <div class="flex items-center justify-center h-20 w-20 rounded-full ">
                <img src="js2.jpg" alt="JavaScript icon" class="h-full w-full svel">
              </div>
              <h3 class="text-xl font-medium text-gray-800 my-4">JavaScript</h3>
              <p class="text-gray-600">Proficient in writing vanilla JS and working with modern frameworks.</p>
            </div>
            <div class="p-4 bg-white shadow-lg rounded-lg">
              <div class="flex items-center justify-center h-20 w-20 rounded-full ">
                <img src="sv.png" alt="Sveltekit icon" class="h-full w-full svel">
              </div>
              <h3 class="text-xl font-medium text-gray-800 my-4">Sveltekit</h3>
              <p class="text-gray-600">Proficient in building web applications with Sveltekit.</p>
            </div>
            <div class="p-4 bg-white shadow-lg rounded-lg">
              <div class="flex items-center justify-center h-20 w-20 p-1 rounded-full border-[.1rem]">
                <img src="tcss.svg" alt="TailwindCSS icon" class="h-full w-full">
              </div>
              <h3 class="text-xl font-medium text-gray-800 my-4">TailwindCSS</h3>
              <p class="text-gray-600">Expertise in using TailwindCSS to create responsive and modern designs.</p>
            </div>
            <div class="p-4 bg-white shadow-lg rounded-lg">
                <div class="flex items-center justify-center h-20 w-20 rounded-full ">
                  <img src="git.svg" alt="TailwindCSS icon" class="h-full w-full">
                </div>
                <h3 class="text-xl font-medium text-gray-800 my-4">GitHub</h3>
                <p class="text-gray-600">Expertise in version control with Git and GitHub.</p>
            </div>
            
          </div>
        </div>
      </section>
       
      
      
      


            <section class="all py-16">
              <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-white text-center mb-8" data-aos="fade-right">Some of My Work</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
                    <img src="https://via.placeholder.com/500x300" alt="Project 1" class="w-full">
                    <div class="p-4">
                      <h3 class="text-lg font-bold text-white mb-2">Project 1</h3>
                      <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">View project</a>
                    </div>
                  </div>
                  <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
                    <img src="https://via.placeholder.com/500x300" alt="Project 2" class="w-full">
                    <div class="p-4">
                      <h3 class="text-lg font-bold text-white mb-2">Project 2</h3>
                      <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">View project</a>
                    </div>
                  </div>
                  <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
                    <img src="https://via.placeholder.com/500x300" alt="Project 3" class="w-full">
                    <div class="p-4">
                      <h3 class="text-lg font-bold text-white mb-2">Project 3</h3>
                      <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">View project</a>
                    </div>
                  </div>
                  <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
                    <img src="https://via.placeholder.com/500x300" alt="Project 4" class="w-full">
                    <div class="p-4">
                      <h3 class="text-lg font-bold text-white mb-2">Project 4</h3>
                      <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">View project</a>
                    </div>
                  </div>
                  <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
                    <img src="https://via.placeholder.com/500x300" alt="Project 5" class="w-full">
                    <div class="p-4">
                      <h3 class="text-lg font-bold text-white mb-2">Project 5</h3>
          <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">View project</a>
        </div>
      </div>
      <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
        <img src="https://via.placeholder.com/500x300" alt="Project 6" class="w-full">
        <div class="p-4">
          <h3 class="text-lg font-bold text-white mb-2">Project 6</h3>
          <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">View project</a>
        </div>
      </div>
    </div>
  </div>
</section>

                      

</body>

<style>
    body{
        color: linear-gradient(to right, #ffffff, #f9f9f9);
        height: 100vh;
        /* background: linear-gradient(to bottom, #1e1e1e, #252525); */
        background-color: black;
    }
    .all{
        width: 90%;
        margin: 0 auto;
    }
    h1, h2, h3, p {
        
        
        
        
    }
    .navBtn{
        font-size: 2rem;
    }
    .headerMe img{
        border-radius: 50%;
        border: 15px solid #0e0d0d;
    }
    .headerBtn-1{
        background-color: #27AE60;
        padding: 5px 17px;
        border: 2px solid #27AE60;
    }
    .headerBtn-2{
        background-color: transparent;
        padding: 5px 17px;
        border: 2px solid #27AE60;
    }

    .svel{
        border-radius: 50%;
    }
    
    .circle-container {

    position: relative;

    width: 200px;

    height: 200px;

    }

    .circle-outer {

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    height: 100%;

    border-radius: 50%;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    }

    .circle-middle {

    position: absolute;

    top: 50%;

    left: 50%;

    transform: translate(-50%, -50%);

    width: 30%;

    height: 30%;

    border-radius: 50%;

    background-color: #0e0d0d;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);


    }

    .circle-inner {

    position: absolute;

    top: 50%;

    left: 50%;

    transform: translate(-50%, -50%);

    width: 8%;

    height: 8%;

    border-radius: 50%;

    background-color: #27AE60;

    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);


    }
.skills-section h3{
    color: red;
} 
    
@media (min-width: 640px){
    .headerAll{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 2rem;
        padding-left: 2rem;
    }
    .whatidoAll{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}


.card {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.card--visible {
  opacity: 1;
  transform: none;
}

</style>




<!-- 
<script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  AOS.init();

</script> -->
