function skillsMember() {
    var skills = [
        { name: 'HTML', level: '100' },
        { name: 'JavaScript', level: '90' },
        { name: 'CSS', level: '80' },
        { name: 'Node.js', level: '70' },
        { name: 'React', level: '60' },
    ];

    return {
        getSkills: function () {
            return skills;
        },
        addSkill: function (skill) {
            skills.push(skill);
        }
    }
}