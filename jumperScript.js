window.onload = function() {
    let count = 0;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText('Count: ' + count, 20, 20);

    document.onkeydown = function() {
        count += 1;
        draw();
        y -= 25;
    }
    document.ontouchstart = function() {
        count += 1;
        y -= 25;
        draw();
    }
    let t = Date.now();
    let speed = 25;

    function draw() {

        let timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        context.clearRect(0, 0, 600, 400);
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();

        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText('Count: ' + count, 20, 20);

        if (y < 350) {
            speed += 50 * timePassed;
            y += speed * timePassed;
        }
        if (y > 350) {
            count = 0;
            speed = 25;
        }

        window.requestAnimationFrame(draw);
    }

}