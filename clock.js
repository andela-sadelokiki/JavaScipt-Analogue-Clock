var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var h_rad = 120;
		var m_rad = 180;
		var s_rad = 190;
		
		function init() {
			drawBack();
		}
		
		function start(){
			drawHands();
			setInterval(function(){checkTime()}, 1000);
		}
		
		function checkTime(){
			d = new Date();
			h = d.getHours();
			m = d.getMinutes();
			s = d.getSeconds();
			clearAll();
			drawHands();
		}
		
		function clearAll(){
			var ctx = document.getElementById('a').getContext('2d');
			ctx.fillStyle = "#FFFFFF";
			ctx.beginPath();
			ctx.arc(250,250,s_rad,0,Math.PI*2); // Outer circle
			ctx.fill();
			ctx.fillStyle = "#000000";
		}
		
		function drawHoursHand(){
			var x_center = 250;
			var y_center = 250;
			dx = Math.sin(h*Math.PI/6)*h_rad;
			dy = Math.cos(h*Math.PI/6)*h_rad;
			x_pos = x_center + dx;
			y_pos = y_center - dy;
			var ctx = document.getElementById('a').getContext('2d');
			ctx.strokeStyle='#000000';
			ctx.lineWidth=3;
			ctx.beginPath()
			ctx.moveTo(x_center,y_center);
			ctx.lineTo(x_pos,y_pos);
			ctx.stroke();
		}
		
		function drawMinutesHand(){
			var x_center = 250;
			var y_center = 250;
			dx = Math.sin(m*Math.PI/30)*m_rad;
			dy = Math.cos(m*Math.PI/30)*m_rad;
			x_pos = x_center + dx;
			y_pos = y_center - dy;
			var ctx = document.getElementById('a').getContext('2d');
			ctx.strokeStyle='#000000';
			ctx.lineWidth=2;
			ctx.beginPath();
			ctx.moveTo(x_center,y_center);
			ctx.lineTo(x_pos,y_pos);
			ctx.stroke();
		}
		
		function drawSecondsHand(){
			var x_center = 250;
			var y_center = 250;
			dx = Math.sin(s*Math.PI/30)*s_rad;
			dy = Math.cos(s*Math.PI/30)*s_rad;
			x_pos = x_center + dx;
			y_pos = y_center - dy;
			var ctx = document.getElementById('a').getContext('2d');
			ctx.strokeStyle='#FF0000';
			ctx.lineWidth=1;
			ctx.beginPath()
			ctx.moveTo(x_center,y_center);
			ctx.lineTo(x_pos,y_pos);
			ctx.stroke();
		}
		
		function drawHands(){
			drawHoursHand();
			drawMinutesHand();
			drawSecondsHand();
		}
		
		function drawBack(){
			var ctx = document.getElementById('a').getContext("2d");
			ctx.strokeStyle='#000000';
			ctx.lineWidth=3;
			ctx.beginPath();
			ctx.arc(250,250,243,0,Math.PI*2,true); // Outer circle
			ctx.stroke();
			drawNumbers();
		}
		
		function drawNumbers(){
			var i = 1;
			var x_center = 240;
			var y_center = 260;
			var radius = 220;
			var x_pos, y_pos, dx, dy;
			
			for(i = 1; i < 13; i++){
				var ctx=document.getElementById("a").getContext("2d");
				ctx.strokeStyle='#000000';
				ctx.font="30px Arial";
				dx = Math.sin(i*Math.PI/6)*radius;
				dy = Math.cos(i*Math.PI/6)*radius;
				x_pos = x_center + dx;
				y_pos = y_center - dy;
				ctx.fillText(i,x_pos,y_pos);
			}
		}
		