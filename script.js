document.addEventListener("DOMContentLoaded",()=>{
    /* highlight current tab */
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(a=>{
      if(a.getAttribute("href")===here) a.classList.add("active");
    });
    /* footer year */
    const y=document.getElementById("year");
    if(y) y.textContent=new Date().getFullYear();
  });
  