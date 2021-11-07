//handleComments
var courseApi = 'https://f40a-14-235-64-194.ngrok.io/courses';

function start() {
    getCourses(renderCourses);
    
    handCreateForm();
}

start();


//functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
        <li class="course-item-${course.id}">
            <h2><img src="./Img/avt/${course.id}.jpg"/>&ensp;${course.name}</h2>
            <h3>${course.description}</h3>
            <button onclick="handleCourse(${course.id})">Delete</button>
        </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}


function handCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name ="name"]').value;
        var description = document.querySelector('input[name ="description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}

//picture1
const picture = document.querySelector('.js-tickets-picture')
const img = document.querySelector('.js-modal-cv')
const modalimg = document.querySelector('.modal-img')
const modalCloseimg = document.querySelector('.js-modal-close-img')
function showTicketsimg() {
    modalimg.classList.add('open')
}
function hideTicketsimg() {
    modalimg.classList.remove('open')
}
picture.addEventListener('click', showTicketsimg)
modalCloseimg.addEventListener('click', hideTicketsimg)
modalimg.addEventListener('click', hideTicketsimg)
img.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture2
const picture2 = document.querySelector('.js-tickets-picture2')
const img2 = document.querySelector('.js-modal-cv2')
const modalimg2 = document.querySelector('.modal-img2')
const modalCloseimg2 = document.querySelector('.js-modal-close-img2')
function showTicketsimg2() {
    modalimg2.classList.add('open')
}
function hideTicketsimg2() {
    modalimg2.classList.remove('open')
}
picture2.addEventListener('click', showTicketsimg2)
modalCloseimg2.addEventListener('click', hideTicketsimg2)
modalimg2.addEventListener('click', hideTicketsimg2)
img2.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture3
const picture3 = document.querySelector('.js-tickets-picture3')
const img3 = document.querySelector('.js-modal-cv3')
const modalimg3 = document.querySelector('.modal-img3')
const modalCloseimg3 = document.querySelector('.js-modal-close-img3')
function showTicketsimg3() {
    modalimg3.classList.add('open')
}
function hideTicketsimg3() {
    modalimg3.classList.remove('open')
}
picture3.addEventListener('click', showTicketsimg3)
modalCloseimg3.addEventListener('click', hideTicketsimg3)
modalimg3.addEventListener('click', hideTicketsimg3)
img3.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture4
const picture4 = document.querySelector('.js-tickets-picture4')
const img4 = document.querySelector('.js-modal-cv4')
const modalimg4 = document.querySelector('.modal-img4')
const modalCloseimg4 = document.querySelector('.js-modal-close-img4')
function showTicketsimg4() {
    modalimg4.classList.add('open')
}
function hideTicketsimg4() {
    modalimg4.classList.remove('open')
}
picture4.addEventListener('click', showTicketsimg4)
modalCloseimg4.addEventListener('click', hideTicketsimg4)
modalimg4.addEventListener('click', hideTicketsimg4)
img4.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture5
const picture5 = document.querySelector('.js-tickets-picture5')
const img5 = document.querySelector('.js-modal-cv5')
const modalimg5 = document.querySelector('.modal-img5')
const modalCloseimg5 = document.querySelector('.js-modal-close-img5')
function showTicketsimg5() {
    modalimg5.classList.add('open')
}
function hideTicketsimg5() {
    modalimg5.classList.remove('open')
}
picture5.addEventListener('click', showTicketsimg5)
modalCloseimg5.addEventListener('click', hideTicketsimg5)
modalimg5.addEventListener('click', hideTicketsimg5)
img5.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture6
const picture6 = document.querySelector('.js-tickets-picture6')
const img6 = document.querySelector('.js-modal-cv6')
const modalimg6 = document.querySelector('.modal-img6')
const modalCloseimg6 = document.querySelector('.js-modal-close-img6')
function showTicketsimg6() {
    modalimg6.classList.add('open')
}
function hideTicketsimg6() {
    modalimg6.classList.remove('open')
}
picture6.addEventListener('click', showTicketsimg6)
modalCloseimg6.addEventListener('click', hideTicketsimg6)
modalimg6.addEventListener('click', hideTicketsimg6)
img6.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture7
const picture7 = document.querySelector('.js-tickets-picture7')
const img7 = document.querySelector('.js-modal-cv7')
const modalimg7 = document.querySelector('.modal-img7')
const modalCloseimg7 = document.querySelector('.js-modal-close-img7')
function showTicketsimg7() {
    modalimg7.classList.add('open')
}
function hideTicketsimg7() {
    modalimg7.classList.remove('open')
}
picture7.addEventListener('click', showTicketsimg7)
modalCloseimg7.addEventListener('click', hideTicketsimg7)
modalimg7.addEventListener('click', hideTicketsimg7)
img7.addEventListener('click', function (event) {
    event.stopPropagation()
})

//picture
const picture8 = document.querySelector('.js-tickets-picture8')
const img8 = document.querySelector('.js-modal-cv8')
const modalimg8 = document.querySelector('.modal-img8')
const modalCloseimg8 = document.querySelector('.js-modal-close-img8')
function showTicketsimg8() {
    modalimg8.classList.add('open')
}
function hideTicketsimg8() {
    modalimg8.classList.remove('open')
}
picture8.addEventListener('click', showTicketsimg8)
modalCloseimg8.addEventListener('click', hideTicketsimg8)
modalimg8.addEventListener('click', hideTicketsimg8)
img8.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 1
const buyBtns = document.querySelector('.js-tickets')
const cvitem = document.querySelector('.js-modal-cv-')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
function showTickets() {
    modal.classList.add('open')
}
function hideTickets() {
    modal.classList.remove('open')
}
buyBtns.addEventListener('click', showTickets)
modalClose.addEventListener('click', hideTickets)
modal.addEventListener('click', hideTickets)
cvitem.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 2
const buyBtns2 = document.querySelector('.js-tickets-2')
const cvitem2 = document.querySelector('.js-modal--cv2')
const modal2 = document.querySelector('.modal2')
const modalClose2 = document.querySelector('.js-modal-close2')
function showTickets2() {
    modal2.classList.add('open')
}
function hideTickets2() {
    modal2.classList.remove('open')
}
buyBtns2.addEventListener('click', showTickets2)
modalClose2.addEventListener('click', hideTickets2)
modal2.addEventListener('click', hideTickets2)
cvitem2.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 3
const buyBtns3 = document.querySelector('.js-tickets-3')
const cvitem3 = document.querySelector('.js-modal--cv3')
const modal3 = document.querySelector('.modal3')
const modalClose3 = document.querySelector('.js-modal-close3')
function showTickets3() {
    modal3.classList.add('open')
}
function hideTickets3() {
    modal3.classList.remove('open')
}
buyBtns3.addEventListener('click', showTickets3)
modalClose3.addEventListener('click', hideTickets3)
modal3.addEventListener('click', hideTickets3)
cvitem3.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 4
const buyBtns4 = document.querySelector('.js-tickets-4')
const cvitem4 = document.querySelector('.js-modal--cv4')
const modal4 = document.querySelector('.modal4')
const modalClose4 = document.querySelector('.js-modal-close4')
function showTickets4() {
    modal4.classList.add('open')
}
function hideTickets4() {
    modal4.classList.remove('open')
}
buyBtns4.addEventListener('click', showTickets4)
modalClose4.addEventListener('click', hideTickets4)
modal4.addEventListener('click', hideTickets4)
cvitem4.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 5
const buyBtns5 = document.querySelector('.js-tickets-5')
const cvitem5 = document.querySelector('.js-modal--cv5')
const modal5 = document.querySelector('.modal5')
const modalClose5 = document.querySelector('.js-modal-close5')
function showTickets5() {
    modal5.classList.add('open')
}
function hideTickets5() {
    modal5.classList.remove('open')
}
buyBtns5.addEventListener('click', showTickets5)
modalClose5.addEventListener('click', hideTickets5)
modal5.addEventListener('click', hideTickets5)
cvitem5.addEventListener('click', function (event) {
    event.stopPropagation()
})