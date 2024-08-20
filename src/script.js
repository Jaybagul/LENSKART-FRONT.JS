document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion-header');
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
});
