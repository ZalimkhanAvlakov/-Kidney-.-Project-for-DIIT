 (function() {
            let positionX = 0;
            const slider = document.querySelector('.reviews');
            const leftButton = document.querySelector('#slider-left');
            const rightButton = document.querySelector('#slider-right');
            const slides = document.querySelectorAll('.slider-block');

            const slideWidth = slides[0].offsetWidth;

            slider.style.width = `${slideWidth * slides.length}px`;

            leftButton.addEventListener('click', () => shiftSlider(slideWidth));
            rightButton.addEventListener('click', () => shiftSlider(-slideWidth));


            function shiftSlider(shift) {
              positionX += shift;

              if (positionX > slideWidth)
                 positionX = -(slides.length * slideWidth - slideWidth);
              else if(positionX < -(slides.length * slideWidth - slideWidth))
                 positionX = 0;

              slider.style.left = `${positionX}px`;
            }

            toggleHiddenText();
          })();

          function toggleHiddenText() {
            document.querySelectorAll('[data-hidden="show-hidden"]').forEach(button => button.addEventListener('click', function() {
              this.parentNode.querySelector('[data-show=elipse]').classList.add('d-none');
              this.parentNode.querySelector('[data-hidden=hidden-text]').classList.remove('d-none');
              this.classList.add('d-none');
            }))
          }
