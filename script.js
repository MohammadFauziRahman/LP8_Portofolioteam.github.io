const profileData = {
    fauzi: {
        name: "Mohammad Fauzi Rahman",
        role: "Leadership Web Developer",
        img: "img/fauzi.jpg"
    },
    yandi: {
        name: "Rahmad Ryandi",
        role: "Backend Web Developer",
        img: "img/yandi.jpg"
    },
    meikal: {
        name: "Meikal Gina Setiawan",
        role: "Frontend Web Developer",
        img: "img/meikal.jpg"
    }
};

const select = document.querySelector('.team-selec');
const profileName = document.querySelector('.profile-name');
const profileRole = document.querySelector('.profile-role');
const profileImg = document.querySelector('.profile-img');

select.addEventListener('change', function() {
    const selected = this.value;
    const data = profileData[selected];

    profileName.textContent = data.name;
    profileRole.textContent = data.role;
    profileImg.src = data.img;
});