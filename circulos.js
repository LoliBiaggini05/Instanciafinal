class circulos {
    
    constructor() {
        this.diam=300;
        this.diamMin = 250; 
        this.diamMax = 550;
        this.velocidadLatido = 0.2;
        this.aumentando = true; 
        this.circulo = [];
        this.limiteDiamActual;
        this.suma=3;
        this.capaFrente;
        this.capaDelMedio;
        this.xActual;
        this.yActual;
        this.im;
        this.nI=0;
        this.capaFrente = createGraphics(800, 500);
        this.capaDelMedio = createGraphics(800, 500);
        for (let i = 0; i < 16; i++) {
            this.circulo.push(loadImage("data/circulo" + i + ".png"));
        }
        
    }
    definirP(){
        let espaciadoX = (width - this.diam) / 2;
        let espaciadoY = (height - this.diam) / 2;
        this.xActual = espaciadoX * int(random(0, 3)) + this.diam / 2;
        this.yActual = espaciadoY * int(random(0, 3)) + this.diam / 2;
    }
    numero(){
        this.nI++;
        if(this.nI>=13){
            this.nI=0;
        }
      }
    seleccionar(){

        let colorTint;
        if (altura > 0.5) {
            colorTint = paletaAguda.darUnColor(150);
          } else {
            colorTint = paletaGrave.darUnColor(150);
          }
          this.capaFrente.tint(colorTint);
    }
    dibujar(){
        let img = this.circulo[this.nI];
        let imgColoreada = img.get();
        this.im= imgColoreada;
        this.capaFrente.image(this.im, this.xActual - this.diam / 2, this.yActual - this.diam / 2, this.diam, this.diam);
        
    }

     setDiam () {
        this.limiteDiamActual = 600;
        this.diam = (this.diam<this.limiteDiamActual ? this.diam+this.suma : this.diam );
        if(AMP<0.1){
            this.suma=-3;
        }else if( AMP>0.1){
            this.suma=3;
        }
        if(this.diam<=100){
            this.diam=100;
        }
        if(this.diam>=600){
            this.diam=600;
        }
      }
      borrar(){
        this.capaDelMedio.clear();
        this.capaFrente.clear();
      }
}
















/* Definición de la clase Circulo
class Circulo {
    constructor(x, y, diamInicial, diamMin, diamMax, velocidadLatido) {
        this.x = x; // Posición x del círculo
        this.y = y; // Posición y del círculo
        this.diam = diamInicial; // Diámetro inicial del círculo
        this.diamMin = diamMin; // Diámetro mínimo del círculo
        this.diamMax = diamMax; // Diámetro máximo del círculo
        this.velocidadLatido = velocidadLatido; // Velocidad de crecimiento y decrecimiento del círculo
        this.aumentando = true; // Indica si el círculo está creciendo o encogiéndose
    }

    // Método para actualizar el estado del círculo (latido)
    actualizar() {
        // Verifica si el círculo debe crecer o encogerse
        if (this.aumentando) {
            this.diam += this.velocidadLatido;
        } else {
            this.diam -= this.velocidadLatido;
        }

        // Cambia de dirección si se alcanza el tamaño máximo o mínimo
        if (this.diam >= this.diamMax || this.diam <= this.diamMin) {
            this.aumentando = !this.aumentando;
        }
    }

    // Método para dibujar el círculo
    dibujar() {
        ellipse(this.x, this.y, this.diam, this.diam);
    }
}*/
