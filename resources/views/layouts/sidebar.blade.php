<nav class="navbar-default navbar-static-side" role="navigation">
     <div class="sidebar-collapse">
         <ul class="nav metismenu" id="side-menu">

             <li class="nav-header" style="padding:7px 0px; text-align:center;">
               <a class="" href="{{ url('/') }}">
                   {{ config('app.name', 'Laravel') }}
               </a>
                 <div class="logo-element">
                     SE
                 </div>
             </li>
             <li>
                 <a href="/companies"><i class="fa fa-diamond"></i> <span class="nav-label">Companies</span></a>
             </li>

             <sidebar></sidebar>


             <!-- <li class="">
                 <a href="#"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a>
                 <ul class="nav nav-second-level">
                     <li class=""><a href="#">Dashboard v.1</a></li>
                     <li><a href="#">Dashboard v.2</a></li>
                     <li><a href="#">Dashboard v.3</a></li>
                     <li><a href="#">Dashboard v.4</a></li>
                     <li><a href="#">Dashboard v.5 </a></li>
                 </ul>
             </li> -->

         </ul>

     </div>
 </nav>
