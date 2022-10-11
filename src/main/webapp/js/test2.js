// var time = 0;
// var loop = function () {
//     var n = -Math.cos(time);
//     pulse((1 + n) * .5, (1 + n) * .5);
//     time += ((Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelta;
//     ctx.fillStyle = "rgba(0,0,0,.1)";
//     ctx.fillRect(0, 0, width, height);
//     for (i = e.length; i--;) {
//         var u = e[i];
//         var q = targetPoints[u.q];
//         var dx = u.trace[0].x - q[0];
//         var dy = u.trace[0].y - q[1];
//         var length = Math.sqrt(dx * dx + dy * dy);
//         if (10 > length) {
//             if (0.95 < rand()) {
//                 u.q = ~~(rand() * heartPointsCount);
//             }
//             else {
//                 if (0.99 < rand()) {
//                     u.D *= -1;
//                 }
//                 u.q += u.D;
//                 u.q %= heartPointsCount;
//                 if (0 > u.q) {
//                     u.q += heartPointsCount;
//                 }
//             }
//         }
//         u.vx += -dx / length * u.speed;
//         u.vy += -dy / length * u.speed;
//         u.trace[0].x += u.vx;
//         u.trace[0].y += u.vy;
//         u.vx *= u.force;
//         u.vy *= u.force;
//         for (k = 0; k < u.trace.length - 1;) {
//             var T = u.trace[k];
//             var N = u.trace[++k];
//             N.x -= config.traceK * (N.x - T.x);
//             N.y -= config.traceK * (N.y - T.y);
//         }
//         ctx.fillStyle = u.f;
//         for (k = 0; k < u.trace.length; k++) {
//             ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1);
//         }
//     }
//     //ctx.fillStyle = "rgba(255,255,255,1)";
//     //for (i = u.trace.length; i--;) ctx.fillRect(targetPoints[i][0], targetPoints[i][1], 2, 2);
//
//     window.requestAnimationFrame(loop, canvas);
// };
// loop();
// };