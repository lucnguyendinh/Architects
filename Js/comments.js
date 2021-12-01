//handleComments
var courseApi = 'https://6452-14-253-25-183.ngrok.io/courses';

function start() {
    getCourses(renderCourses);
    
    handCreateForm();
}

setInterval(function() {
    start();
}, 2000)

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
