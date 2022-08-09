import define1 from "./e93997d5089d7165@2303.js";

function* _boidsdisplay(DOM,width,height,Vector,drawNeighbors,N,CanvasHelper,boids,avoidanceRadius,alignmentRadius,cohesionRadius,drawCenterOfMass,avoidanceStrength,alignmentStrength,cohesionStrength)
{
  const context = DOM.context2d(width, height);

  const bottomVector = new Vector(0, height);
  const rightVector = new Vector(width, 0);

  while (true) {
    context.clearRect(0, 0, width, height);
    context.rect(0, 0, width, height);
    context.stroke();

    if (drawNeighbors == "Yes") {
      for (let i = 0; i < N; i++) {
        CanvasHelper.drawCircles(
          context,
          boids[i].pos,
          [avoidanceRadius, alignmentRadius, cohesionRadius],
          "rgba(200, 200, 200, 0.2)"
        );

        const largerRadius = Math.max(
          Math.max(avoidanceRadius, alignmentRadius),
          cohesionRadius
        );
        if (boids[i].pos.y - largerRadius <= 0)
          CanvasHelper.drawCircles(
            context,
            boids[i].pos,
            [avoidanceRadius, alignmentRadius, cohesionRadius],
            "rgba(200, 200, 200, 0.2)"
          );
        if (boids[i].pos.x - largerRadius <= 0)
          CanvasHelper.drawCircles(
            context,
            boids[i].pos,
            [avoidanceRadius, alignmentRadius, cohesionRadius],
            "rgba(200, 200, 200, 0.2)"
          );
        if (boids[i].pos.y + largerRadius >= height)
          CanvasHelper.drawCircles(
            context,
            boids[i].pos,
            [avoidanceRadius, alignmentRadius, cohesionRadius],
            "rgba(200, 200, 200, 0.2)"
          );
        if (boids[i].pos.x + largerRadius >= width)
          CanvasHelper.drawCircles(
            context,
            boids[i].pos,
            [avoidanceRadius, alignmentRadius, cohesionRadius],
            "rgba(200, 200, 200, 0.2)"
          );
      }
    }

    for (let i = 0; i < N; i++) {
      if (drawCenterOfMass == "Yes") {
        const neighborhood = boids[i].neighborhood(boids, cohesionRadius);

        if (neighborhood.length > 0) {
          const centerOfMass = boids[i].neighborhoodCenterOfMass(neighborhood);
          CanvasHelper.drawCircle(context, centerOfMass, 3, "red");
          context.beginPath();
          context.moveTo(boids[i].pos.x, boids[i].pos.y);
          context.lineTo(centerOfMass.x, centerOfMass.y);
          context.strokeStyle = "red";
          context.stroke();
        }
      }

      context.strokeStyle = "black";
      CanvasHelper.drawTriangle(
        context,
        boids[i].bottomRightPoint(),
        boids[i].bottomLeftPoint(),
        boids[i].topPoint()
      );

      if (boids[i].intersectsBottom()) {
        CanvasHelper.drawTriangle(
          context,
          boids[i].bottomRightPoint().clone().sub(bottomVector),
          boids[i].bottomLeftPoint().clone().sub(bottomVector),
          boids[i].topPoint().clone().sub(bottomVector)
        );
      }
      if (boids[i].intersectsRight()) {
        CanvasHelper.drawTriangle(
          context,
          boids[i].bottomRightPoint().clone().sub(rightVector),
          boids[i].bottomLeftPoint().clone().sub(rightVector),
          boids[i].topPoint().clone().sub(rightVector)
        );
      }
      if (boids[i].intersectsTop()) {
        CanvasHelper.drawTriangle(
          context,
          boids[i].bottomRightPoint().clone().add(bottomVector),
          boids[i].bottomLeftPoint().clone().add(bottomVector),
          boids[i].topPoint().clone().add(bottomVector)
        );
      }
      if (boids[i].intersectsLeft()) {
        CanvasHelper.drawTriangle(
          context,
          boids[i].bottomRightPoint().clone().add(rightVector),
          boids[i].bottomLeftPoint().clone().add(rightVector),
          boids[i].topPoint().clone().add(rightVector)
        );
      }

      boids[i].applyRules(
        boids,
        avoidanceRadius,
        alignmentRadius,
        cohesionRadius,
        avoidanceStrength,
        alignmentStrength,
        cohesionStrength
      );
      boids[i].forward();
    }

    yield context.canvas;
  }
}


function _N(slider){return(
slider({ min: 1, max: 400, value: 50, step: 1, title: "Number of Boids" })
)}

function _4(md){return(
md`
These radii control the distance at which each rule applies:
`
)}

function _avoidanceRadius(slider){return(
slider({
  min: 0,
  max: 100,
  value: 20, 
  title: "Avoidance Radius"
})
)}

function _alignmentRadius(slider){return(
slider({
  min: 0,
  max: 100,
  value: 40,
  title: "Alignment Radius"
})
)}

function _cohesionRadius(slider){return(
slider({
  min: 0,
  max: 100,
  value: 40,
  title: "Cohesion Radius"
})
)}

function _8(md){return(
md`
These strengths control how much each rule contributes to steering the boids:
`
)}

function _avoidanceStrength(slider){return(
slider({ min: 0, max: 0.2, value: 0.1, title: "Avoidance Strength" })
)}

function _alignmentStrength(slider){return(
slider({ min: 0, max: 0.2, value: 0.08, title: "Alignment Strength" })
)}

function _cohesionStrength(slider){return(
slider({ min: 0, max: 0.2, value: 0.02, title: "Cohesion Strength" })
)}

function _12(md){return(
md`
Drawing options:
`
)}

function _drawNeighbors(radio){return(
radio({ options: ['Yes', 'No'], value: "No", title: "Draw Neighborhoods" })
)}

function _drawCenterOfMass(radio){return(
radio({
  options: ["Yes", "No"],
  title: "Draw cohesion center of mass",
  value: "No"
})
)}

function _height(){return(
300
)}

function _boids(N,Boid){return(
[...Array(N).keys()].map((i) => new Boid(i, 2))
)}

function _Boid(Vector,width,height){return(
class {
  constructor(index, velocity) {
    this.index = index;
    this.size = 15;
    this.velocity = velocity;
    this.pos = new Vector(Math.random() * width, Math.random() * height);
    this.dir = new Vector(2 * Math.random() - 1, 2 * Math.random() - 1).normalize();
    
    this.normal = this.dir.clone().normal();
  }
  
  rotate(angle) {
    this.dir.rotate(angle).normalize(); 
    this.normal = this.dir.getNormal();
  }
  
  forward() {
    this.pos.x = this.pos.x + this.dir.x * this.velocity;
    this.pos.y = this.pos.y + this.dir.y * this.velocity;
    
    if(this.pos.x < 0) this.pos.x = width + this.pos.x;
    if(this.pos.x > width) this.pos.x = this.pos.x - width;
    if(this.pos.y < 0) this.pos.y = height + this.pos.y;
    if(this.pos.y > height) this.pos.y = this.pos.y - height;
  }
  
  alignment(boids, distance) {
    const neighborhood = this.neighborhood(boids, distance);
    
    if(neighborhood.length > 0) {
      return Vector.average(neighborhood.map((d) => d.dir));
    }
    else {
     return new Vector(0, 0);
    }
  }
  
  cohesion(boids, distance) {
    const neighborhood = this.neighborhood(boids, distance);

    if(neighborhood.length > 0) {
      const averagePosition = this.neighborhoodCenterOfMass(neighborhood);
      return averagePosition.clone().sub(this.pos);
    }
    else {
      return new Vector(0, 0);
    }
  }
  
  avoidance(boids, separationSize) {
    const closeNeighbors = this.neighborhood(boids, separationSize);
    // Avoidance
    if(closeNeighbors.length > 0) {
      const separationAveragePosition = Vector.average(
        closeNeighbors.map((d) => d.pos.clone())
      );
      
      return separationAveragePosition.clone()
        .sub(this.pos)
        .mult(-1);
    }
    else {
      return new Vector(0, 0); 
    }
  }
  
  applyRules(boids, avoidanceRadius, alignmentRadius, cohesionRadius, avoidanceStrength, alignmentStrength, cohesionStrength) {
    const alignment = this.alignment(boids, alignmentRadius);
    const cohesion = this.cohesion(boids, cohesionRadius);
    const avoidance = this.avoidance(boids, avoidanceRadius);
    
    if(avoidance.magnitude() > 0) this.dir.rotateTowards(avoidance.normalize(), avoidanceStrength);
    if(alignment.magnitude() > 0) this.dir.rotateTowards(alignment.normalize(), alignmentStrength);
    if(cohesion.magnitude() > 0) this.dir.rotateTowards(cohesion.normalize(), cohesionStrength);
        
    this.dir.normalize();
    
    this.normal = this.dir.clone().normal();
  }
  
  neighborhood(boids, distance) {
    return boids.filter((boid) => boid.pos.clone().sub(this.pos).magnitude() < distance && boid.index != this.index);
  }
  
  neighborhoodCenterOfMass(neighborhood) {
    return Vector.average(neighborhood.map((d) => d.pos));
  }
  
  bottomLeftPoint() {
    return new Vector(this.pos.x - this.normal.x / 3 * this.size - this.dir.x * this.size / 2,
                      this.pos.y - this.normal.y / 3 * this.size - this.dir.y * this.size / 2);
  }
  
  bottomRightPoint() {
    return new Vector(this.pos.x + this.normal.x / 3 * this.size - this.dir.x * this.size / 2,
                      this.pos.y + this.normal.y / 3 * this.size - this.dir.y * this.size / 2);
  }
  
  topPoint() {
    return new Vector(this.pos.x + this.dir.x * this.size / 2,
                      this.pos.y + this.dir.y * this.size / 2);
  }
  
  intersectsLeft() {
    return this.pos.x + this.dir.x * this.size <= 0; 
  }
  
  intersectsBottom() {
    return this.pos.y + this.dir.y * this.size >= height; 
  }
  
  intersectsRight() {
    return this.pos.x + this.dir.x * this.size >= width;
  }
  
  intersectsTop() {
    return this.pos.y + this.dir.y * this.size <= 0; 
  }
}
)}

function _CanvasHelper(){return(
{
  drawTriangle: function(context, bottomLeft, bottomRight, top) {
    context.beginPath();
    context.moveTo(bottomLeft.x, bottomLeft.y);
    context.lineTo(bottomRight.x, bottomRight.y);
    context.lineTo(top.x, top.y);
    context.lineTo(bottomLeft.x, bottomLeft.y);
    context.stroke();
    context.fillStyle = "white";
    context.fill();
  },
  
  drawCircle: function(context, pos, r, color) {
    context.beginPath();
    context.arc(pos.x, pos.y, r, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  },
  
  drawCircles: function(context, pos, radii, color) {
    radii.forEach((d) => this.drawCircle(context, pos, d, color));
  },
  
  drawVector: function(context, pos, vec) {
    context.beginPath();
    context.moveTo(pos.x, pos.y);
    context.lineTo(pos.x + vec.x, pos.y + vec.y);
    context.strokeStyle = "green";
    context.stroke(); 
  }
}
)}

function _Vector(){return(
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  clone() {
    return new Vector(this.x, this.y);
  }
  
  magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); 
  }
  
  normalize() {
    const m = this.magnitude();
    if(m > 0) {
      this.x = this.x / m;
      this.y = this.y / m;
    }
    return this;
  }
  
  normal() {
    const new_x = this.y;
    const new_y = -this.x;
    
    this.x = new_x;
    this.y = new_y;
    
    return this;
  }
  
  rotate(angle) {
    const new_x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const new_y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    
    this.x = new_x;
    this.y = new_y;
    
    return this;
  }
  
  angle() {
    if(this.x == 0) {
      return this.y > 0 ? Math.PI / 2 : Math.PI * 3/2;
    }
    else if(this.y == 0) {
      return this.x > 0 ? 0 : Math.PI; 
    }
    else if(this.x > 0 && this.y > 0) {
      return Math.atan(this.y / this.x); 
    }
    else if(this.x < 0 && this.y > 0) {
      return Math.PI + Math.atan(this.y / this.x);
    }
    else if(this.x < 0 && this.y < 0) {
      return Math.PI + Math.atan(this.y / this.x); 
    }
    else if(this.x > 0 && this.y < 0) {
      return Math.PI * 2 + Math.atan(this.y / this.x);
    }
  }
  
  rotateTowards(v, a) {
    return this.rotate((v.angle() - this.angle()) * a);
  }
  
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  
  divide(scalar) {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }
  
  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  
  static average(vs) {
    const average = new Vector(0, 0);
    vs.forEach((v) => average.add(v));
    average.divide(vs.length);
    return average;
  }
}
)}

function _d3(require){return(
require('d3')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof boidsdisplay")).define("viewof boidsdisplay", ["DOM","width","height","Vector","drawNeighbors","N","CanvasHelper","boids","avoidanceRadius","alignmentRadius","cohesionRadius","drawCenterOfMass","avoidanceStrength","alignmentStrength","cohesionStrength"], _boidsdisplay);
  main.variable(observer("boidsdisplay")).define("boidsdisplay", ["Generators", "viewof boidsdisplay"], (G, _) => G.input(_));
  main.variable(observer("viewof N")).define("viewof N", ["slider"], _N);
  main.variable(observer("N")).define("N", ["Generators", "viewof N"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("viewof avoidanceRadius")).define("viewof avoidanceRadius", ["slider"], _avoidanceRadius);
  main.variable(observer("avoidanceRadius")).define("avoidanceRadius", ["Generators", "viewof avoidanceRadius"], (G, _) => G.input(_));
  main.variable(observer("viewof alignmentRadius")).define("viewof alignmentRadius", ["slider"], _alignmentRadius);
  main.variable(observer("alignmentRadius")).define("alignmentRadius", ["Generators", "viewof alignmentRadius"], (G, _) => G.input(_));
  main.variable(observer("viewof cohesionRadius")).define("viewof cohesionRadius", ["slider"], _cohesionRadius);
  main.variable(observer("cohesionRadius")).define("cohesionRadius", ["Generators", "viewof cohesionRadius"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("viewof avoidanceStrength")).define("viewof avoidanceStrength", ["slider"], _avoidanceStrength);
  main.variable(observer("avoidanceStrength")).define("avoidanceStrength", ["Generators", "viewof avoidanceStrength"], (G, _) => G.input(_));
  main.variable(observer("viewof alignmentStrength")).define("viewof alignmentStrength", ["slider"], _alignmentStrength);
  main.variable(observer("alignmentStrength")).define("alignmentStrength", ["Generators", "viewof alignmentStrength"], (G, _) => G.input(_));
  main.variable(observer("viewof cohesionStrength")).define("viewof cohesionStrength", ["slider"], _cohesionStrength);
  main.variable(observer("cohesionStrength")).define("cohesionStrength", ["Generators", "viewof cohesionStrength"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _12);
  main.variable(observer("viewof drawNeighbors")).define("viewof drawNeighbors", ["radio"], _drawNeighbors);
  main.variable(observer("drawNeighbors")).define("drawNeighbors", ["Generators", "viewof drawNeighbors"], (G, _) => G.input(_));
  main.variable(observer("viewof drawCenterOfMass")).define("viewof drawCenterOfMass", ["radio"], _drawCenterOfMass);
  main.variable(observer("drawCenterOfMass")).define("drawCenterOfMass", ["Generators", "viewof drawCenterOfMass"], (G, _) => G.input(_));
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("boids")).define("boids", ["N","Boid"], _boids);
  main.variable(observer("Boid")).define("Boid", ["Vector","width","height"], _Boid);
  main.variable(observer("CanvasHelper")).define("CanvasHelper", _CanvasHelper);
  main.variable(observer("Vector")).define("Vector", _Vector);
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("checkbox", child1);
  main.import("radio", child1);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
