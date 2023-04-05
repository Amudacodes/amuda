<head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <!-- <nav>
        <div class="navAll border-b-2 all flex justify-between items-center h-[4rem]">
            <div class="logo font-extrabold" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">
                <h2>AmudaCodes</h2>
            </div>
            <ul bind:this={navMenu} class="navMenu" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;" >
                <li><a href=""><h3>About Me</h3></a></li>
                <li><a href=""><h3>Services</h3></a></li>
                <li><a href=""><h3>Contact Me</h3></a></li>
            </ul>
            <div class="navBtn cursor-pointer" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">
                <button on:click={open} bind:this={openBtn} class="lg:hidden"><i class='bx bx-menu'></i></button>
                <button on:click={close} bind:this={closeBtn} class="lg:hidden"><i class='bx bx-x'></i></button>
            </div>
        </div>
    </nav> -->


    <nav class={navClass}>
      <div class="nav_el all">
        <div class="log font-extrabold" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;">
            <h2>AmudaCodes</h2>
        </div>
      <ul bind:this={navMenu} class="nav_menu">
          
          <li class="nav__menu1">
              <p>01.</p>
              <a href="#about" on:click={close} bind:this={closeBtn}>About Me</a>
          </li>
          
          <li class="nav__menu1">
              <p>02.</p>
              <a href="#services" on:click={close} bind:this={closeBtn}>Services</a>
          </li>
          <li class="nav__menu1">
              <p>03.</p>
              <a href="#works" on:click={close} bind:this={closeBtn}>Works</a>
          </li>
          <li class="nav__menu1">
              <p>04.</p>
              <a href="#contact" on:click={close} bind:this={closeBtn}>Contact</a>
          </li>
          <div class="resume"><a href="/resume">Resume</a></div>
      </ul>
      <button on:click={open} bind:this={openBtn} class="nav_btn lg:hidden" id="open_btn"><i class='bx bx-menu'></i></button>
      <button on:click={close} bind:this={closeBtn} class="nav_btn lg:hidden" id="close_btn"><i class='bx bx-x'></i></button>
  </div>
  </nav>
  <div class="unknown"></div>
  

    <header>
        <div class="headerAll all ">
            <div class="headerMe pt-[3rem]">
                <img src="/mme.png">
            </div>
            <div class="hleft">
                <!-- <div class="headerText pt-11" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">
                    <h2 class="text-[2rem] font-medium">Hi, my name is </h2>
                    <h1 class="text-[2.5rem]  pt-1">Yusuf Adeagbo.</h1>
                    <p class="headerText-p font-bold text-[1.2rem] pt-1 pb-3">Frontend Developer.</p>
                </div> -->


                <div class="header_text">
                  <div>
                    <p class="header_me" in:fade={{duration: 500}}>{typing[0]}</p>
                  </div>
                  <div>
                    <p class="header_name" in:fade={{duration: 500}}>{typing[1]}</p>
                  </div>
                  <div>
                    <p class="header_about" in:fade={{duration: 500}}>{typing[2]}</p>
                  </div>
                  <div>
                    <p class="header_aboutp" in:fade={{duration: 500}}>{typing[3]}</p>
                  </div>
                </div>

                <div class="headerBtn flex gap-2 pt-3" >
                    <button class="text-white headerBtn-1 font-bold border-x-emerald-50 cursor-pointer"> <a href="/resume"><h2>My Resume</h2></a></button>
                    <button style="background: linear-gradient(to right, #ffffff, #f9f9f9);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;" class="headerBtn-2 font-bold cursor-pointer"><h2>Learn More</h2></button>
                </div>
            </div>
        </div>
    </header>
    <section class="about" id="about" >
    <div class="about">
        <div class="aboutAll all pt-20 text-center">
            <h1 class="pb-3 text-2xl font-bold" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">About Me</h1>
            <p class="p-2 pb-11" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">As a frontend developer, I'm constantly learning new technologies to improve user experiences. While I aspire to become a full-stack developer, I'm currently focused on mastering HTML, CSS, and JavaScript, along with popular frameworks like Sveltekit. I value collaboration and problem-solving and am always looking to expand my knowledge and skills. Thanks for getting to know me!</p>
        </div>
    </div>
  </section>
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
    <section id="services" >
    <div class="whatido">
        <h2 class="all text-center text-2xl font-semibold pt-[2rem]" style="background: linear-gradient(to right, #ffffff, #f9f9f9);
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
    </section>

 
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
       
      
      
      

<section id="works">
      <div class="all py-16">
        <div class="container mx-auto">
          <h2 class="text-2xl font-semibold text-white text-center mb-8" data-aos="fade-right">Some of My Work</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
              <img src="/tss/t0.png" alt="Project 1" class="w-full">
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
  </div>
</section>




                      


<section id="contact">
<div id="contact" class=" bg-[#000000]">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="section-header">Get In Touch</h1>
    <p class="pb-6 text-white text-center xl:text-[1.2rem] xl:pb-5" >Ready to take the next step? Let's work together to make something great.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form id="contact-form" class="bg-[#0e0d0d] rounded-lg shadow-md p-6" role="form">
        <div class="mb-4">
          <!-- <label for="name" class="block text-gray-700 font-bold mb-2">Name</label> -->
          <input type="text" class="form-input p-[.6rem] hover:border-white bg-transparent text-white border-[.1rem] border-[#27AE60] rounded-md shadow-sm w-full" id="name" placeholder="NAME" name="name" value="" required>
        </div>
        <div class="mb-4">
          <!-- <label for="email" class="block text-gray-700 font-bold mb-2">Email</label> -->
          <input type="email" class="form-input p-[.6rem] hover:border-white bg-transparent text-white border-[.1rem] border-[#27AE60] rounded-md shadow-sm w-full" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
        <div class="mb-4">
          <!-- <label for="message" class="block text-gray-700 font-bold mb-2">Message</label> -->
          <textarea class="form-textarea rounded-md p-[.6rem] hover:border-white bg-transparent text-white border-[.1rem] border-[#27AE60] shadow-sm w-full" rows="7" cols="30" placeholder="MESSAGE" name="message" required></textarea>
        </div>
        <!-- <button class="w-full p-[.6rem] rounded-md shadow-sm bg-green-500 hover:bg-green-600" id="submit" type="submit" value="SEND">
          
            <div class="">
            
              <i class='bx bx-send text-[2rem]'></i>
              <span class="send-text">SEND</span>
            </div>
            
        </button> -->
        <button class="sendbtn ">
        <a class="sendall w-full text-center hover:text-green-600 hover:bg-white"  href="/" target="_blank">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          SEND
        </a>
        </button>
        
      </form>


      <!-- <i class='bx bx-name='send'></i> -->
      <!-- <box-icon name='send' animation='fade-right' ></box-icon> -->
      <div class="direct-contact-container ">
  
        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Abuja, Nigeria</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(234) 903-1617-656</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">amdacodes@gmail.com</a></span></i></li>
          
        </ul>

        <hr>
        <ul class="social-media-list">
          <li class="bg-green-600">
            <a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-github' aria-hidden="true"></i></a>
          </li>
          <li class="bg-green-600">
            <a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-twitter' aria-hidden="true"></i></a>
          </li>
          <li class="bg-green-600">
            <a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-linkedin-square' aria-hidden="true"></i></a>
          </li>
          <li class="bg-green-600">
            <a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-youtube' aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr>
        <i class='bx bxl-github'></i>
        <box-icon type='logo' name='linkedin-square'></box-icon>
        <box-icon type='logo' name='github'></box-icon>
        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

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


    /* .nav_menu {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    animation: slideInFromLeft 700ms ;
    background-color: var(--light-navy);
  }

  @keyframes slideInFromLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
} */
    
    /* .navBtn{
        font-size: 2rem;
    } */






.window-scroll {
  background-color: #0e0d0d;
  box-shadow: 0 1rem 2rem rgba(5, 65, 42, 0.7);
}
nav{
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 5rem;
    background-color: #0e0d0d;
}
.nav_el{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
  
  }
  .nav_menu {
    z-index: 1;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    animation: slideInFromLeft 700ms ;
    background-color:#0e0d0d;
  }

  @keyframes slideInFromLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
.nav__menu1{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5.65rem;
    animation: fadeIn 1s;
    animation-delay: 0.8s;
}
.nav__menu1 p{
    color: #27AE60;
    padding-bottom: 5px;
}
.nav__menu1 a{
    font-size: 1.3rem;
    color: rgb(175, 165, 165);
}
.nav__menu1 a:hover{
    color: white;
}

.resume{
    align-self: center;
    border-radius: 10px;
    border: 1px solid #27AE60;
    padding: 16px 3rem;
}
.resume a{
    color: white;
}
.resume:hover{
    border: 1px solid var(--slate);
  }
  .resume a:hover{
    color: var(--slate);
  }
.nav_btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 2rem;
  }
  #open_btn{
    display: flex;
  }
  #close_btn{
    display: none;
    position: fixed;
    top: 1.8%;
    right: 4.8%;
    z-index: 1;
  }

  .unknown{
  height: 5rem; 
  background-color: #0e0d0d;
}

  @media screen and (min-width: 767px){


    .nav_el{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    /* position: fixed; */
  }
  .nav_menu {
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: unset;
    top: unset;
    bottom: unset;
    right: 0;
    padding: unset;
    width: unset;
    height: 100%;
    animation: slideInFromLeft 800ms;
    /* opacity: 0;
    transition: 4ms all ease-in-out; */
    /* box-shadow: -10px 0px 30px 15px var(--navy-shadow); */
  }
  .nav__menu1{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: inherit;
    gap: 10rem;
    justify-content: center;
  }
  .nav__menu1 p{
    display: none;
  }
  .nav__menu1 a{
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
  }
  
  .nav__menu1 a:hover::after {
    content: "";
    display: inline-block;
    border-bottom: 3px solid #27AE60;
    width: 100%;
    border-top: 0;
    margin-bottom: 30px;
}

  .resume{
    padding-left: 2rem;
    border-radius: 10px;
    border: 1px solid #27AE60;
    padding: 10px 30px;
  }
  .resume:hover{
    border: 1px solid white;
  }
  .resume a:hover{
    color: #27AE60;
  }
  button nav_btn{
    display: none;
  }
  #open_btn{
    display: none;
  }
  .nav_btn{
    display: none;
  }
}








.header_me{
    color: #27AE60;
    padding-top: 4rem;
    padding-bottom: 10px;
    word-spacing: 5px;
    
}
.header_name{
    color: white;
    padding-bottom: 7px;
    font-size: 2rem;
}
.header_about{
    color: rgb(214, 216, 215);
    padding-bottom: 7px;
    line-height: 3rem;
    font-size: 2.3rem;
}
.header_aboutp{
    color: rgb(155, 158, 156);
    padding-bottom: 3em;
    font-size: 1rem;
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

    
@media (min-width: 767px){
    .headerAll{
        display: flex;
        flex-direction: row-reverse;
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

























#contact {
  width: 100%;
  height: 95%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
  font: 300 28px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}
/* 
.form-horizontal {
 
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, 
textarea {
  max-width: 400px;
  background-color: #000000;
  color: #fff;
  letter-spacing: 1px;
} */

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;

  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 40%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 2rem;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 100%;
  } 
  
  .direct-contact-container {
    
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 100%;
  }
}



























.sendbtn{
  margin: 0;
	background: #171618;
	display: grid;
  width: 100%;
  
	place-items: center;
}

.sendall {
	position: relative;
	padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
	color: #999;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 4px;
	font: 700 30px consolas;
	overflow: hidden;
}
.sendall:hover{
  color: #0ea14c;
}
a span:nth-child(1) {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(to right, #171618, #3bff3b);
	animation: animate1 2s linear infinite;
}

@keyframes animate1 {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(100%);
	}
}

a span:nth-child(2) {
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 3px;
	background: linear-gradient(to bottom, #171618, #3bff3b);
	animation: animate2 2s linear infinite;
	animation-delay: 1s;
}
@keyframes animate2 {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(100%);
	}
}

a span:nth-child(3) {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(to left, #171618, #3bff3b);
	animation: animate3 2s linear infinite;
}

@keyframes animate3 {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(-100%);
	}
}

a span:nth-child(4) {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 3px;
	background: linear-gradient(to top, #171618, #3bff3b);
	animation: animate4 2s linear infinite;
	animation-delay: 1s;
}

@keyframes animate4 {
	0% {
		transform: translateY(100%);
	}
	100% {
		transform: translateY(-100%);
	}
}













/* .headerText h2 {
  animation: neon 1s ease-in-out infinite alternate;
}

@keyframes neon {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #1fa3ff, 0 0 30px #1fa3ff, 0 0 40px #1fa3ff, 0 0 50px #1fa3ff, 0 0 60px #1fa3ff;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #1fa3ff, 0 0 30px #1fa3ff, 0 0 40px #1fa3ff, 0 0 50px #1fa3ff, 0 0 60px #fff;
  }
} */

/* 
.headerText {
  animation-name: rainbow;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes rainbow {
  0% { background: linear-gradient(to right, #ffffff, #f9f9f9); }
  20% { background: linear-gradient(to right, #FF00FF, #FF8C00); }
  40% { background: linear-gradient(to right, #FF8C00, #FFFF00); }
  60% { background: linear-gradient(to right, #FFFF00, #00FF00); }
  80% { background: linear-gradient(to right, #00FF00, #0000FF); }
  100% { background: linear-gradient(to right, #0000FF, #FF00FF); }
} */


</style>





<script>
  import { onMount } from 'svelte';

    // import AOS from 'aos';
    // import 'aos/dist/aos.css';
    // AOS.init();

  let navClass = '';

  onMount(() => {
    window.addEventListener('scroll', () => {
      navClass = window.scrollY > 0 ? 'window-scroll' : '';
    });
  });

    let navMenu
    let closeBtn
    let openBtn

    function open(){
        navMenu.style.display = "flex";
        closeBtn.style.display = "block";
        openBtn.style.display = "none";
    }

    function close(){
        navMenu.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    }


    let text = [    "Hi, my name is",    "Yusuf Adeagbo.",    "I am a frontend developer.",    "I create engaging user interfaces that come to life with HTML, CSS, JavaScript, and frontend frameworks. Let's bring your digital vision to life together. "];

    let typing = [];
    text.forEach(() => typing.push(""));

    function typeWriter(sentenceIndex, index) {
      if (index < text[sentenceIndex].length) {
        typing[sentenceIndex] += text[sentenceIndex][index];
        setTimeout(() => typeWriter(sentenceIndex, index + 1), 100);
      } else {
        if (sentenceIndex + 1 < text.length) {
          setTimeout(() => typeWriter(sentenceIndex + 1, 0), 100);
        }
      }
    }

    typeWriter(0, 0);

</script>
