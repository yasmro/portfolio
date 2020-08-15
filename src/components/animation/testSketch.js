const testSketch = (p) => {
    let rotation = 0
    let xspacing = 7; // Distance between each horizontal location
    let w; // Width of entire wave
    let theta = 0.0; // Start angle at 0
    let amplitude = 25; // Height of wave
    let period = 400.0; // How many pixels before the wave repeats
    let dx; // Value for incrementing x
    let yvalues; // Using an array to store height values for the wave
    let TWO_PI = 2*3.14159;

    //初期設定
    p.setup = () => {
        // p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        p.createCanvas(p.windowWidth*2,100)
        w = Math.max(p.windowWidth*2, 2000);
        dx = (TWO_PI / period) * xspacing;
        yvalues = new Array(Math.floor(w / xspacing));
    }

  
    //毎フレームごとの描画内容
    p.draw = () => {
        p.background(52,58,64)
        p.calcWave();
        p.renderWave();
        p.renderWave2();
        p.renderWave3();
        // p.renderWave4();
    }

    p.calcWave = () => {
        // Increment theta (try different values for
        // 'angular velocity' here)
        theta += 0.02;
      
        // For every x value, calculate a y value with sine function
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
          yvalues[i] = Math.sin(x) * amplitude;
          x += dx;
        }
    }

    p.renderWave = () => {
        p.noStroke();
        p.fill(255);
        // A simple way to draw the wave with an ellipse at each location
        for (let x = 0; x < yvalues.length; x++) {
          p.ellipse(x * xspacing, 200 / 4 + yvalues[x] * 0.8, 1,1);
        }
    }

    p.renderWave4 = () => {
      p.noStroke();
      p.fill(186);
      // A simple way to draw the wave with an ellipse at each location
      for (let x = 0; x < yvalues.length; x++) {
        p.ellipse(x * xspacing - 30, 200 / 4 + yvalues[x]*0.7, 1,1);
      }
  }


    p.renderWave2 = () => {
        p.noStroke();
        p.fill(186);
        // A simple way to draw the wave with an ellipse at each location
        for (let x = 0; x < yvalues.length; x++) {
          p.ellipse(x * xspacing - 50, 200 / 4 + yvalues[x]*0.6, 1,1);
        }
    }

    p.renderWave3 = () => {
      p.noStroke();
      p.fill(164);
      // A simple way to draw the wave with an ellipse at each location
      for (let x = 0; x < yvalues.length; x++) {
        p.ellipse(x * xspacing - 80, 200 / 4 + yvalues[x]*0.4, 1,1);
      }
  }

}

export default testSketch