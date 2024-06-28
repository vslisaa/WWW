document.addEventListener('DOMContentLoaded', function () {

// рисую

const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

const draw = (e) => {
    if (!isPainting) {
        return;
    }

    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
    ctx.strokeStyle = "#B30000";
    ctx.lineWidth = 1;
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

});

// книжка стопка

// $(document).ready(function () {
//     const images = $(".bookstack img").toArray();
  
//     for (let i = images.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [images[i], images[j]] = [images[j], images[i]];
//     }
  
//     images.forEach((img, i) => {
//       $(img).css("z-index", i);
//     });
  
//     images.forEach((img) => {
//       $(img).click(function () {
//         $(this).css(
//           "z-index",
//           Math.min(
//             ...images.map((img) => parseInt($(img).css("z-index")))
//           ) - 1
//         );
//       });
//     });
  
//     images.forEach((img) => {
//       const xOffset = Math.floor(Math.random() * 50) - 25;
//       const yOffset = Math.floor(Math.random() * 50) - 25;
  
//       $(img).css({
//         top: `calc(50% + ${yOffset}px)`,
//         left: `calc(50% + ${xOffset}px)`,
//         transform: "translate(-50%, -50%)",
//       });
//       if (Math.random() > 0.5) {
//         const rotation = Math.floor(Math.random() * 20) - 10;
//         $(img).css(
//           "transform",
//           `translate(-50%, -50%) rotate(${rotation}deg)`
//         );
//       }
  
//       $(img).click(function () {
//         $(this).css("z-index", -1);
//       });
//     });
//   });