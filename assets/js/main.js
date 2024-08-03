
let test, team 

test = [
    {
        'main': 'HAEMATOLOGY',
        'sub_tests': []
    },
    {
        'main': 'HAEMATOLOGY',
        'sub_tests': []
    }
]

team = [
    {
        'name': 'Adamu Yussam',
        'position': 'Lab Manager',
        'profile': `/assets/images/team/male.png`
    }
    ,
    {
        'name': 'Nafisa Sidiki',
        'position': 'Quality Assurance Quality',
        'profile': `/assets/images/team/female.png`
    }
    ,
    {
        'name': 'Adamu Yussam',
        'position': 'Lab Manager',
        'profile': `/assets/images/team/male.png`
    }
    ,
    {
        'name': 'Afunya Kofi Daniel',
        'position': 'Group Marketing Manager',
        'profile': `/assets/images/team/male.png`
    }
    ,
    {
        'name': 'Felix',
        'position': 'Logistics Manager',
        'profile': `/assets/images/team/male.png`
    }
    ,
    {
        'name': 'Ivy',
        'position': '',
        'profile': `/assets/images/team/female.png`
    }
    ,
    {
        'name': 'Ida',
        'position': 'IT Manager',
        'profile': `/assets/images/team/female.png`
    }
    ,
    {
        'name': 'Salim Ahmed Adam',
        'position': 'IT Consultant',
        'profile': `/assets/images/team/female.png`
    }
]


team.map(doc => {
    let team_container = document.querySelector('#team');
    let div = document.createElement('div');
    div.className = "col sm-6 md-4 lg-4 padding margin-top-30";
    div.innerHTML = `
        <div>
            <img src="${doc.profile}" alt="team member image" class='width-80'>
        </div>
        <div class="team-member-info">
            <div class='h6 text-bold uppercase'>${doc.name}</div>
            <div class='text-dark400'>${doc.position}</div>
        </div>
    `;
    team_container.appendChild(div);
})