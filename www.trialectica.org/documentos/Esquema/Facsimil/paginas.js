SLIDES = new slideshow("SLIDES");

// INICIO DE LAMINAS
s      = new slide()
s.src  = "portadas.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p04-05.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p06-07.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p08-09.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p10-11.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p12-13.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p14-15.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p16-17.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p18-19.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p20-21.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

s      = new slide()
s.src  = "p22-23.png";
s.link = "";
s.text = "";
SLIDES.add_slide(s);

// FIN DE LAMINAS
// Determinar tamaño de Ventana
// for NN4/IE4
w = 800
h = 600
if (self.screen) {     
        w = screen.width
        h = screen.height
}

// for NN3 w/Java
else if (self.java) {   
       var javakit = java.awt.Toolkit.getDefaultToolkit();
       var scrsize = javakit.getScreenSize();       
       w = scrsize.width; 
       h = scrsize.height; 
}

w = w - 40
h = h - 100

for (var i=0; i < SLIDES.slides.length; i++) {
  s = SLIDES.slides[i];
  s.target = "SLIDES_popup";
  s.attr = "width=" + w +",height=" + h + ",resizable=yes,scrollbars=yes";
}
