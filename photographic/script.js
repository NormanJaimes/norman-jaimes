(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtubeVideo;
/**
*   @fileoverview
*     Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video
*     Dependencias: font-awesome
*
*   @param {String} id, id del video de YouTube, se define en el archivo pug
*   @param {String} $video-width, anchura del contenedor del video, se define en el archivo scss
*
*   @returns {void} no retorna nada
*
*   @author Jonathan MirCha <jonmircha@gmail.com>
*   @version 1.0.0
*/
function youtubeVideo() {
  var d = document,
      w = window,
      mq = w.matchMedia('(min-width: 64em)'),
      youtube = d.querySelectorAll('.Youtube'),
      youtubeWrapper = d.querySelectorAll('.Youtube-wrapper'),
      youtubeIds = [],
      youtubeIframe = [];

  youtube.forEach(function (video, index) {
    return youtubeIds[index] = video.id;
  });

  console.log(youtubeIds);

  function showVideo(mq) {
    if (mq.matches) {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeIds[index] + '" frameborder="0"></iframe>';
      });
    } else {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<a href="https://www.youtube.com/watch?v=' + youtubeIds[index] + '" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';
      });
    }
  }

  mq.addListener(showVideo);
  showVideo(mq);
}

},{}],2:[function(require,module,exports){
'use strict';

var _youtube_video = require('./components/youtube_video');

var _youtube_video2 = _interopRequireDefault(_youtube_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _youtube_video2.default)();

},{"./components/youtube_video":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFx5b3V0dWJlX3ZpZGVvLmpzIiwic3JjXFxqc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNhd0IsWTtBQWJ4Qjs7Ozs7Ozs7Ozs7OztBQWFlLFNBQVMsWUFBVCxHQUF5QjtBQUN0QyxNQUFNLElBQUksUUFBVjtBQUFBLE1BQ0UsSUFBSSxNQUROO0FBQUEsTUFFRSxLQUFLLEVBQUUsVUFBRixDQUFhLG1CQUFiLENBRlA7QUFBQSxNQUdFLFVBQVUsRUFBRSxnQkFBRixDQUFtQixVQUFuQixDQUhaO0FBQUEsTUFJRSxpQkFBZ0IsRUFBRSxnQkFBRixDQUFtQixrQkFBbkIsQ0FKbEI7QUFBQSxNQUtFLGFBQWEsRUFMZjtBQUFBLE1BTUUsZ0JBQWdCLEVBTmxCOztBQVFBLFVBQVEsT0FBUixDQUFnQixVQUFDLEtBQUQsRUFBUSxLQUFSO0FBQUEsV0FBa0IsV0FBVyxLQUFYLElBQW9CLE1BQU0sRUFBNUM7QUFBQSxHQUFoQjs7QUFFQSxVQUFRLEdBQVIsQ0FBYSxVQUFiOztBQUVBLFdBQVMsU0FBVCxDQUFvQixFQUFwQixFQUF3QjtBQUN0QixRQUFJLEdBQUcsT0FBUCxFQUFnQjtBQUNkLHFCQUFlLE9BQWYsQ0FBdUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN2QyxjQUFNLFNBQU4sbURBQWdFLFdBQVcsS0FBWCxDQUFoRTtBQUNELE9BRkQ7QUFHRCxLQUpELE1BSU87QUFDTCxxQkFBZSxPQUFmLENBQXVCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsY0FBTSxTQUFOLGlEQUE4RCxXQUFXLEtBQVgsQ0FBOUQ7QUFDRCxPQUZEO0FBR0Q7QUFDRjs7QUFFRCxLQUFHLFdBQUgsQ0FBZSxTQUFmO0FBQ0EsWUFBVSxFQUFWO0FBQ0Q7Ozs7O0FDeENEOzs7Ozs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiogICBAZmlsZW92ZXJ2aWV3XG4qICAgICBDb21wb25lbnRlIHBhcmEgaW5jcnVzdGFyIHVuIHZpZGVvIGRlIFlvdVR1YmUgZW4gbnVlc3RybyBzaXRpbyB3ZWIgY3VhbmRvIGxhIHJlc29sdWNpw7NuIGVzIG1heW9yIGEgNjRlbSAoMTAyNHB4KSwgY3VhbmRvIGVzIG1lbm9yIHNlIGFncmVnYSB1biBlbmxhY2UgYWwgdmlkZW9cbiogICAgIERlcGVuZGVuY2lhczogZm9udC1hd2Vzb21lXG4qXG4qICAgQHBhcmFtIHtTdHJpbmd9IGlkLCBpZCBkZWwgdmlkZW8gZGUgWW91VHViZSwgc2UgZGVmaW5lIGVuIGVsIGFyY2hpdm8gcHVnXG4qICAgQHBhcmFtIHtTdHJpbmd9ICR2aWRlby13aWR0aCwgYW5jaHVyYSBkZWwgY29udGVuZWRvciBkZWwgdmlkZW8sIHNlIGRlZmluZSBlbiBlbCBhcmNoaXZvIHNjc3NcbipcbiogICBAcmV0dXJucyB7dm9pZH0gbm8gcmV0b3JuYSBuYWRhXG4qXG4qICAgQGF1dGhvciBKb25hdGhhbiBNaXJDaGEgPGpvbm1pcmNoYUBnbWFpbC5jb20+XG4qICAgQHZlcnNpb24gMS4wLjBcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB5b3V0dWJlVmlkZW8gKCkge1xuICBjb25zdCBkID0gZG9jdW1lbnQsXG4gICAgdyA9IHdpbmRvdyxcbiAgICBtcSA9IHcubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNjRlbSknKSxcbiAgICB5b3V0dWJlID0gZC5xdWVyeVNlbGVjdG9yQWxsKCcuWW91dHViZScpLFxuICAgIHlvdXR1YmVXcmFwcGVyID1kLnF1ZXJ5U2VsZWN0b3JBbGwoJy5Zb3V0dWJlLXdyYXBwZXInKSxcbiAgICB5b3V0dWJlSWRzID0gW10sXG4gICAgeW91dHViZUlmcmFtZSA9IFtdXG5cbiAgeW91dHViZS5mb3JFYWNoKCh2aWRlbywgaW5kZXgpID0+IHlvdXR1YmVJZHNbaW5kZXhdID0gdmlkZW8uaWQpXG5cbiAgY29uc29sZS5sb2coIHlvdXR1YmVJZHMgKVxuXG4gIGZ1bmN0aW9uIHNob3dWaWRlbyAobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlkc1tpbmRleF19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+YFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3lvdXR1YmVJZHNbaW5kZXhdfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEgZmEteW91dHViZS1wbGF5XCI+PC9pPiBWZXIgVmlkZW88L2E+YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtcS5hZGRMaXN0ZW5lcihzaG93VmlkZW8pO1xuICBzaG93VmlkZW8obXEpO1xufVxuIiwiaW1wb3J0IHlvdXR1YmVWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMveW91dHViZV92aWRlbydcblxueW91dHViZVZpZGVvKCkiXX0=
