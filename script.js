// Highlight the current tab & stamp the year
document.addEventListener("DOMContentLoaded", () => {
    // Active‑tab logic
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(a=>{
      if(a.getAttribute("href")===here) a.classList.add("active");
    });
    // Footer year
    const y=document.getElementById("year");
    if(y) y.textContent=new Date().getFullYear();
  });
  