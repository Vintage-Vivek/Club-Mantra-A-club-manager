const createClubAPI = 'http://localhost:4000/api/v1/createClub';
const showClubAPI = 'http://localhost:4000/api/v1/showClub';
const deleteClubAPI = 'http://localhost:4000/api/v1/deleteClub';
const updateClubAPI = 'http://localhost:4000/api/v1/updateClub';

const wrapper = document.querySelector('#wrapper');
const editForm = document.querySelector('#edit_form');
const editClubId = document.querySelector('#edit-club-id');
const editClubTitle = document.querySelector('#edit-club-title');
const editClubVenue = document.querySelector('#edit-club-venue');
const editClubImage = document.querySelector('#edit-club-image');

const createClubHandler = async (event) => {
    try {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const response = await fetch(createClubAPI, {
            method: 'POST',
            body: formdata
        });
        const data = await response.json();
        console.log(data);
        window.location.href = 'index.html';
    } catch (err) {
        console.log(err);
    }
};

const showClub = async () => {
    try {
        const response = await fetch(showClubAPI);
        const data = await response.json();
        console.log(data);
        console.log(data.response);
        createClubCard(data.response);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

showClub();

function createClubCard(data) {
    try {
        data.forEach(element => {
            console.log(element);
            const club = document.createElement('div');
            club.setAttribute('data-id', element._id);
            const img = document.createElement('img');
            const title = document.createElement('h2');
            const venue = document.createElement('h4');
            const EditButton = document.createElement('button');
            const deleteButton = document.createElement('button');
            const parentBtn = document.createElement('div');
            club.classList.add('club');
            title.classList.add('title');
            venue.classList.add('venue');
            parentBtn.classList.add('btn');
            img.src = element.image;
            title.textContent = element.title;
            venue.textContent = element.venue;
            EditButton.textContent = 'Edit';
            deleteButton.textContent = 'Delete';
            img.setAttribute('width', '300px');
            img.setAttribute('height', '300px');
            club.appendChild(img);
            parentBtn.appendChild(EditButton);
            parentBtn.appendChild(deleteButton);
            club.appendChild(title);
            club.appendChild(venue);
            club.appendChild(parentBtn);
            wrapper.appendChild(club);
            deleteButton.addEventListener('click', () => {
                console.log('Deleting club with ID:', element._id);
                deleteClub(element._id);
            });
            EditButton.addEventListener('click', () => {
                console.log('Editing club with ID:', element._id);
                editClubId.value = element._id;
                editClubTitle.value = element.title;
                editClubVenue.value = element.venue;
                editForm.style.display = 'block';
            });
        });
    } catch (err) {
        console.error(err);
    }
}

async function deleteClub(id) {
    try {
        const response = await fetch(`${deleteClubAPI}/${id}`, { method: 'DELETE' });
        const data = await response.json();
        console.log(data);
        const clubElement = document.querySelector(`#wrapper div[data-id='${id}']`);
        if (clubElement) {
            clubElement.remove();
        }
    } catch (err) {
        console.log(err);
    }
}

editForm.addEventListener('submit', async (event) => {
    try {
        event.preventDefault();
        const formdata = new FormData(editForm);
        const clubId = editClubId.value;
        const response = await fetch(`${updateClubAPI}/${clubId}`, {
            method: 'PUT',
            body: formdata,
        });
        const data = await response.json();
        console.log(data);
        const clubElement = document.querySelector(`#wrapper div[data-id='${clubId}']`);
        if (clubElement) {
            clubElement.querySelector('h2').textContent = data.title;
            clubElement.querySelector('h4').textContent = data.venue;
            if (data.image) {
                clubElement.querySelector('img').src = data.image;
            }
        }
        editForm.style.display = 'none';
        window.location.href = 'index.html';
    } catch (err) {
        console.log(err);
    }
});

function openSignUpForm() {
    document.getElementById('signUpForm').style.display = 'flex';
}

function closeSignUpForm() {
    document.getElementById('signUpForm').style.display = 'none';
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}